import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ApiService {
  public host = 'http://localhost:2500';

  constructor(private http: HttpClient) {
  }

  setArticle(article) {
    const url = this.host + '/article/save';
    return this.http.post(url, article);
  }

  getArticle(id: number) {
    const url = this.host + '/article/' + id;
    console.log(url);
    return this.http.get(url);
  }
}
