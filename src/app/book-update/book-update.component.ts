import { Component, OnInit } from '@angular/core';
import {BookService} from "../book.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  bookById;
  bookForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor(
    private bookService: BookService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    const id = this.activatedRoute.snapshot.params['id'];
    this.bookService.getById(id).subscribe((result)=>{
      this.bookById = result;
    });
  }

  ngOnInit(): void {
  }

  update() {
    const id = this.activatedRoute.snapshot.params['id'];
    const book = this.bookForm.value;
    this.bookService.update(id, book).subscribe((next)=>{
      this.router.navigate(['books']);
    },error => {
      console.log(error);
    });
  }

  onSubmit() {
    this.update();
  }
}
