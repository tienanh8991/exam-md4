import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Book} from "./book";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Book> {
    return this.http.get<Book>(this.API_URL);
  }

  create(book): Observable<Book> {
    return this.http.post<Book>(this.API_URL, book);
  }

  update(id, book) {
    return this.http.put(this.API_URL + '/' + id , book);
  }

  delete(id) {
    return this.http.delete(this.API_URL + '/' + id);
  }

  getById(id): Observable<Book> {
    return this.http.get<Book>(this.API_URL + '/' + id);
  }
}
