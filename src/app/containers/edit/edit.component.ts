import * as Quill from 'Quill';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})

export class EditComponent implements OnInit {
  private editor: Quill;

  constructor(private router: Router,
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

    const options = {
      // debug: 'info',
      modules: {
        toolbar: toolbarOptions
      },
      placeholder: 'Compose an epic...',
      // readOnly: true,
      theme: 'snow'
    };
    this.editor = new Quill('#editor', options);
  }

  onClickSave() {
    this.dataService.serviceData = this.editor.getContents();
    this.router.navigate(['/result']);
  }
}
