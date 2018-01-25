import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from '../../services/data.service';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

declare const Quill;

interface Article {
  title: string;
  content: string;
}

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class ResultComponent implements OnInit {
  private editor;
  private id: number;
  public title: string;

  constructor(private dataService: DataService,
              private api: ApiService,
              private route: ActivatedRoute) {
    this.route.params.take(1).subscribe(params => {
      this.id = +params['id'];
    });
  }

  ngOnInit() {
    // Initialize Quill
    this.editor = new Quill('#result', {
      modules: { toolbar: false },
      readOnly: true,
      theme: 'snow'
    });

    this.api.getArticle(this.id)
      .subscribe((article: Article) => {
        debugger;
        this.title = article.title;
        this.editor.setContents(JSON.parse(article.content));
      });
  }
}
