let myLibrary = [];

let display1 = document.getElementById("display1");
let display2 = document.getElementById("display2");
let allcontent = document.getElementById("allcontent");

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
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

  let card=document.createElement("div");
  card.className="card";

  let title = document.createElement("div");
  title.className = "title";
  title.textContent= "Title:  " + book.title;
  let author = document.createElement("div");
  author.className = "author"
  author.textContent= "Author:  " + book.author;
  let pages = document.createElement("div");
  pages.className = "pages";
  pages.textContent= "pages:  " + book.pages;
  let read = document.createElement("div");
  read.className = "read";
  read.textContent= "Read?  " + book.read;
  let blankLine = document.createElement("div");
  blankLine.className = "blankLine";
  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.className="remove";
  removeButton.addEventListener("click", function(event) {

    delete myLibrary[myLibrary.indexOf(book)];
    displayLibrary();
     
  });
  let toggleButton = document.createElement("button");
  toggleButton.textContent = "Read?";
  toggleButton.className="toggle";
  toggleButton.addEventListener("click", function(event){
    toggleReadWrap(book);
  });

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  card.appendChild(blankLine);
  card.appendChild(removeButton);
  card.appendChild(toggleButton);
  display1.appendChild(card); 
  

  

}

function displayForm(){

  let form = document.createElement("form");
  form.setAttribute("id", "form1");
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
  pagesInput.placeholder = "Nº.";
  pagesInput.className="pages";
  let labelRead = document.createElement("label");
  labelRead.htmlFor = "read";
  labelRead.textContent= "Read:";
  let readInput = document.createElement("input");
  readInput.type = "text";
  readInput.name = "read";
  readInput.className="read";
  readInput.placeholder = "True or False";
  let submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Add Book";
  submitButton.setAttribute("form", "form1");
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



