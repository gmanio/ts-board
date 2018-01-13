import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {

  }

  getEmployees() {
    return this.http.get('http://localhost:2500/employees');
  }

}
