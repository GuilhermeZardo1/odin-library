let myLibrary = [];

let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");

function Book(title, author, pages, read) {
  this.title= title;
  this.author=author;
  this.pages= pages;
  this.read=read;
}


let book2;

function toggleRead(book){
  if (book.read!="false"){

    book.read="false";

  }
  else{
    book.read="true";
  }
  
  
  
}

function toggleReadWrap(book){
  toggleRead(book);
  displayLibrary();

}



function displayBook(book){

  let title = document.createElement("div");
  title.className = "title"
  title.textContent= book.title;
  let author = document.createElement("div");
  author.className = "author"
  author.textContent= book.author;
  let pages = document.createElement("div");
  pages.className = "pages"
  pages.textContent= book.pages;
  let read = document.createElement("div");
  read.className = "read"
  read.textContent= book.read;
  let blankLine = document.createElement("div");
  blankLine.className = "blankLine";
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove Book";
  removeButton.addEventListener("click", function(event) {

    delete myLibrary[myLibrary.indexOf(book)];
    displayLibrary();
     
  });
  let toggleButton = document.createElement("button");
  toggleButton.textContent = "Toggle Read";
  toggleButton.addEventListener("click", function(event){
    toggleReadWrap(book);
  });

  display1.appendChild(title);
  display1.appendChild(author);
  display1.appendChild(pages);
  display1.appendChild(read);
  display1.appendChild(blankLine);
  display1.appendChild(removeButton);
  display1.appendChild(toggleButton);

  

}

function displayForm(){

  let form = document.createElement("form");
  let labelTitle = document.createElement("label");
  labelTitle.htmlFor = "title";
  labelTitle.textContent= "Title:";
  let titleInput = document.createElement("input");
  titleInput.type = "text";
  titleInput.name = "title";
  titleInput.placeholder = "Title";
  let labelAuthor = document.createElement("label");
  labelAuthor.htmlFor = "author";
  labelAuthor.textContent= "Author:";
  let authorInput = document.createElement("input");
  authorInput.type = "text";
  authorInput.name = "author";
  authorInput.placeholder = "Author";
  let labelPages = document.createElement("label");
  labelPages.htmlFor = "pages";
  labelPages.textContent= "Pages:";
  let pagesInput = document.createElement("input");
  pagesInput.type = "number";
  pagesInput.name = "Pages";
  pagesInput.placeholder = "Pages";
  pagesInput.className="pages";
  let labelRead = document.createElement("label");
  labelRead.htmlFor = "read";
  labelRead.textContent= "Read:";
  let readInput = document.createElement("input");
  readInput.type = "text";
  readInput.name = "read";
  readInput.className="read";
  readInput.placeholder = "Read";
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Book";
  let divAdd = document.createElement("div");
  divAdd.className="add";
  divAdd.appendChild(submitButton);
  let divForm = document.createElement("div");
  divForm.className="divForm";
  
  form.appendChild(labelTitle);
  form.appendChild(titleInput);
  form.appendChild(labelAuthor);
  form.appendChild(authorInput);
  form.appendChild(labelPages);
  form.appendChild(pagesInput);
  form.appendChild(labelRead);
  form.appendChild(readInput);
  divForm.appendChild(form);
  display2.appendChild(divForm);
  display2.appendChild(divAdd);

  form.addEventListener("submit", function(event) {
    event.preventDefault(); 
    let title = titleInput.value;
    let author = authorInput.value;
    let pages = parseInt(pagesInput.value);
    let read = readInput.value;
    book2= new Book(title, author, pages, read);
    myLibrary.push(book2);

    titleInput.value="";
    authorInput.value="";
    pagesInput.value="";
    readInput.value="";

    
    displayLibrary();
    
  });

 

}

function displayLibrary(){
  display1.innerHTML="";
  for (let i = 0; i < myLibrary.length; i++) {
    if(myLibrary[i]!=undefined){
    displayBook(myLibrary[i]);
    }
  }
  
}

displayForm();
displayLibrary();



