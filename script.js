const myLibrary = [];

let display = document.getElementById("display");

function Book(title, author, pages, readOrNot) {
  this.title= title;
  this.author=author;
  this.pages= pages;
  this.readOrNot=readOrNot;
}

const book1 = new Book("jeopard", "mark davis", 1134, true)
console.log(book1);

let book2;

function addBookToLibrary() {
  const title = prompt("Type the name of the book:");
  const author = prompt("Type the name of the author:");
  const pages = parseInt(prompt("Type the number of pages:"));
  const readOrNot = prompt("Type true or false if you have read the book or not:");
  book2= new Book(title, author, pages, readOrNot);
  myLibrary.push(book2);
}

/*for (let i = 0; i < 7; i++) {
    addBookToLibrary();
}*/

function displayBook(book){

  let title = document.createElement("div");
  title.className = "title"
  title.textContent= book.title;
  title.textContent= "iasnbdfsadnfdsianfsda";
  let author = document.createElement("div");
  author.className = "author"
  author.textContent= book.author;
  let pages = document.createElement("div");
  pages.className = "pages"
  pages.textContent= book.pages;
  let readOrNot = document.createElement("div");
  readOrNot.className = "readOrNot"
  readOrNot.textContent= book.readOrNot;
  let blankLine = document.createElement("div");
  blankLine.className = "blankLine";
  
  display.appendChild(title);
  display.appendChild(author);
  display.appendChild(pages);
  display.appendChild(readOrNot);
  display.appendChild(blankLine);

}

addBookToLibrary();
displayBook(book2);


console.log(book2);