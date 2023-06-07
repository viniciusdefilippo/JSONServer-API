function Book(title, pages, isbn){
    this.title = title;
    this.pages = pages;
    this.isbn = isbn;
}

var book = new Book('Livro 1', 'pag', 'isbn')

console.log(book.title)