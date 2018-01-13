import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import * as Quill from 'Quill';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ResultComponent implements OnInit {
  private editor: Quill;
  public data;

  constructor(private dataService: DataService,
              private api: ApiService) {
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

    this.api.getEmployees().subscribe((data) => {
      debugger;
    });
  }
}
