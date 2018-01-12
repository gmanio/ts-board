import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import * as Quill from 'Quill';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BoardComponent implements OnInit {
  private editor: Quill;

  constructor() {
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
    const delta = this.editor.getContents();
    console.log(delta);
  }
}
