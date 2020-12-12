import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HttpClientConfig} from '../../constants/url';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  constructor(
    private http: HttpClient,
  ) {}

  getAllTodos(): any {
    return this.http
      .get(HttpClientConfig.baseUrl);
  }
}
