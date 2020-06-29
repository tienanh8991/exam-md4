import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookComponent} from "./book/book.component";
import {BookCreateComponent} from "./book-create/book-create.component";
import {BookUpdateComponent} from "./book-update/book-update.component";


const routes: Routes = [
  {
    path: 'books',
    component: BookComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/:id/edit',
    component: BookUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
