const library = [];
const newButton = document.getElementById("new-button");
const inputDialog = document.getElementById("input-dialog");
const libraryContainer = document.getElementById("library-container");

newButton.addEventListener("click", () => {
    inputDialog.showModal();
});
  

const inputForm = document.getElementById("input-form");
inputForm.addEventListener("submit", newBook);


class Book {
    constructor(author, title, pages, read) {
        this.author = author,
            this.title = title,
            this.pages = pages,
            this.read = read;
    }
}


function newBook(event){
    event.preventDefault();
    const formData = new FormData(inputForm);
    library.push(new Book(
        formData.get("author"),
        formData.get("title"),
        formData.get("pages"),
        formData.get("read")
    ));

    inputDialog.close();
    
    updateLibraryCards();
}


function updateLibraryCards(){
    if(library.length > 0){
        for(i = 0; i<library.length; i++){
            const matchingBook = document.getElementById(`${i}`);
            if(!matchingBook){
                const newBookCard = document.createElement("div");
                newBookCard.innerText = i;
                newBookCard.id = i;
                newBookCard.classList += "book-card";
                libraryContainer.appendChild(newBookCard);
                console.log(library[i].author);
            }
        }
    }
}