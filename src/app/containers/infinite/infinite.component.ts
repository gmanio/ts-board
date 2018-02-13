import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'infinite',
  templateUrl: './infinite.component.html',
  styleUrls: ['./infinite.component.scss']
})
export class InfiniteComponent implements OnInit {
  public articleList$: Observable<Object>;
  private start: number;
  private size: number;
  public employees = [];

  constructor(private api: ApiService,
              private router: Router) {
    this.start = 1;
    this.size = 20;
  }

  ngOnInit() {
    this.loadEmployees();
    // this.articleList$ = this.api.getArticleList();
    fromEvent(window, 'scroll')
      .pipe(debounceTime(100),
        map(($event) => {
          const currentPos = window.scrollY + window.innerHeight;
          const currentHeight = document.body.offsetHeight;

          const ratio = currentPos / currentHeight * 100;
          return ratio > 70;
        }))
      .subscribe((status) => {
        if ( status ) {
          this.loadEmployees();
        }
      });
  }

  public loadEmployees() {
    console.log(`${this.start} 를 호출 합니다. ${this.size}`);
    this.api.getEmployeesByPage(this.start, this.size)
      .subscribe((data) => {
        this.employees = this.employees.concat(data);
        this.start = this.start + 1;
      });
  }

}
