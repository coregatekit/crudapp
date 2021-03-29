import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from './Book';
import { BookService } from './book-service.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  bookList: Book[];

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.bookService.getBooks().subscribe((val) => {
      this.bookList = val;
      console.log(this.bookList);
    }, error => {
      console.log(error);
    });
  }

  addBook(): void {
    this.router.navigate(['add-book'])
      .then((e) => {
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
  };
}
