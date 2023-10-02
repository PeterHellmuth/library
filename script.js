const library = [];
const newButton = document.getElementById("new-button");
const inputDialog = document.getElementById("input-dialog");
const libraryContainer = document.getElementById("library-container");
const author = document.getElementById("author");
const title = document.getElementById("title");
const pages = document.getElementById("pages");
const readCheckbox = document.getElementById("read");

newButton.addEventListener("click", () => {
  inputDialog.showModal();
});

const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", newBook);

class Book {
  constructor(author, title, pages, read) {
    (this.author = author),
      (this.title = title),
      (this.pages = pages),
      (this.read = read);
  }
}

function newBook(event) {
  event.preventDefault();

  let checked = false;

  if (readCheckbox.checked) {
    console.log(readCheckbox.checked);
    checked = true;
  }
  let newIndex =
    library.push(new Book(author.value, title.value, pages.value, checked)) - 1;

  inputDialog.close();

  const newBookCard = document.createElement("div");
  newBookCard.classList += "book-card";
  newBookCard.id = newIndex;

  const newSTitle = document.createElement("span");
  newSTitle.innerText = "Title: " + library[newIndex].title;
  newBookCard.appendChild(newSTitle);

  const newSAuthor = document.createElement("span");
  newSAuthor.innerText = "Author: " + library[newIndex].author;
  newBookCard.appendChild(newSAuthor);

  const newSPages = document.createElement("span");
  newSPages.innerText = "Pages: " + library[newIndex].pages;
  newBookCard.appendChild(newSPages);

  const newSRead = document.createElement("span");

  newSRead.innerText = "Have you read this: ";
  const newInput = document.createElement("input");
  newInput.type = "checkbox";
  newInput.name = "read-checkbox";
  newInput.classList += "read-checkbox";
  newInput.checked = library[newBookCard.id].read;
  newInput.addEventListener("click", bookCheckboxClicked);
  newSRead.appendChild(newInput);
  newBookCard.appendChild(newSRead);

  const deleteButton = document.createElement("button");
  deleteButton.classList += "delete-button";
  deleteButton.innerText = "Remove";
  deleteButton.addEventListener("click", deleteBook);
  newBookCard.appendChild(deleteButton);

  libraryContainer.appendChild(newBookCard);
}

function bookCheckboxClicked(event) {
  library[event.target.parentElement.parentElement.id].read =
    !library[event.target.parentElement.parentElement.id].read;
}

function deleteBook(event) {
  library.splice(event.target.parentElement.id, 1);
  event.target.parentElement.remove();
  let nodes = libraryContainer.childNodes;
  for (i = 0; i < nodes.length; i++) {
    nodes[i].id = i;
  }
}
