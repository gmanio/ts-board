import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Quill from 'Quill';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ResultComponent implements OnInit {
  private editor: Quill;
  public data;

  constructor(private dataService: DataService) {

  }

  ngOnInit() {
    const options = {
      modules: {
        toolbar: false
      },
      readOnly: true,
      theme: 'snow'
    }

    this.editor = new Quill('#result', options);
    this.editor.setContents(this.dataService.serviceData);
  }

}
