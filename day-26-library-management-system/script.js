// Day 26 Project: Library Management System

class Book {
  #isCheckedOut = false;

  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  // TODO: Add checkOut() and returnBook() methods using #isCheckedOut
}

class Library {
  constructor() {
    this.books = [];
  }

  // TODO: Add addBook(book), findBookByTitle(title), listAvailableBooks()
}

// TODO: Create a Library, add at least four books, check some out,
//       and print the available books before and after

console.log("Replace this line with your library system output.");
