import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.dev';

@Injectable()
export class ApiService {
  public host: string;

  constructor(private http: HttpClient) {
    this.host = environment.apiUrl;
  }

  setArticle(article) {
    const url = this.host + '/article/save';
    return this.http.post(url, article);
  }

  getArticle(id: number) {
    const url = this.host + '/article/' + id;
    return this.http.get(url);
  }

  getArticleList() {
    const url = this.host + '/article';
    return this.http.get(url);
  }
}
