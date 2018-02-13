import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  public articleList$: Observable<Object>;

  constructor(private api: ApiService,
              private router: Router) {
  }

  ngOnInit() {
    this.articleList$ = this.api.getArticleList();
  }

  onClickItem(article) {
    this.router.navigate(['/result', article.id]);
  }
}
