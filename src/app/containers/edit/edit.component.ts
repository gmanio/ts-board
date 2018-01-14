import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { FirebaseService } from '../../services/firebase.service';
import { fromPromise } from 'rxjs/observable/fromPromise';

declare const Quill;

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class EditComponent implements OnInit {
  private editor;
  public title: string;
  private editable: boolean = false;

  constructor(private router: Router,
              private api: ApiService,
              private route: ActivatedRoute,
              private dataService: DataService,
              private firebase: FirebaseService) {
    this.route.params.subscribe(params => {
      if ( params['id'] ) {
        this.editable = true;
      }
    });
  }

  ngOnInit() {
    this.editor = new Quill('#editor', {
      modules: {
        toolbar: {
          container: [['image']],
          handlers: {
            image: (...args) => {
              this.uploadImage(...args);
            }
          }
        }
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }

  onClickSave() {
    this.api.setArticle({
      title: this.title,
      content: this.editor.getContents()
    }).subscribe((result) => {
      this.router.navigate(['/result/' + result[0]]);
    });
  }

  uploadImage() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    // Listen upload local image and save to server
    input.onchange = () => {
      const file = input.files[0];

      // file type is only image.
      if ( /^image\//.test(file.type) ) {
        fromPromise(this.firebase.uploadImage(file)).subscribe(({ downloadURL }) => {
          const range = this.editor.getSelection();
          this.editor.insertEmbed(range.index, 'image', `${downloadURL}`);
        });
      } else {
        console.warn('You could only upload images.');
      }
    };
  }
}
