import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  })
  constructor(
    private bookService: BookService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  create() {
    let book = this.bookForm.value;
    this.bookService.create(book).subscribe((next)=>{
      this.router.navigate(['books']);
    });
  }

  onSubmit() {
    this.create();
  }

}
