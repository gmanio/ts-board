import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

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

  constructor(private router: Router,
              private api: ApiService,
              private dataService: DataService) {
  }

  ngOnInit() {
    const toolbarOptions = [
      ['image'],
      // ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
      // ['blockquote', 'code-block'],
      // [{'header': 1}, {'header': 2}],               // custom button values
      // [{'list': 'ordered'}, {'list': 'bullet'}],
      // [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
      // [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
      // [{'direction': 'rtl'}],                         // text direction
      //
      // [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
      // [{'header': [1, 2, 3, 4, 5, 6, false]}],
      //
      // [{'color': []}, {'background': []}],          // dropdown with defaults from theme
      // [{'font': []}],
      // [{'align': []}],
      //
      // ['clean']                                         // remove formatting button
    ];

    this.editor = new Quill('#editor', {
      modules: { toolbar: toolbarOptions },
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
}
