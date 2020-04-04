// Constructor for making "book" objects

function Book(title, author, pages, read=false) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        console.log(this.title + " by " + this.author + ", " + this.pages + " pages, " + (this.read ? "completed reading" : "not read yet"))
    }
}

const book1 = new Book('The Hobbit', 'J. R. R. Tolkien', 295)

const book2 = new Book('Harry Potter and the Sorceror\'s Stone', 'J.K. Rowling', 309)

console.log(book1.info())

console.log(book2.info())