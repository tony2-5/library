const addBookButton = document.getElementById("addBookButton");
const addBookOverlay = document.querySelector(".addBookOverlay");
const closeFormButton = document.getElementById("closeFormButton");
const bookArea = document.querySelector(".books")

const form = document.getElementById("addBookForm");
const bookTitle = form.elements["bookTitle"];
const author = form.elements["author"];
const pageNum = form.elements["pageNum"];
const read = form.elements["read"];


addBookButton.addEventListener('click',() => {
    addBookOverlay.style.display = "flex";
})

closeFormButton.addEventListener('click',() => {
    addBookOverlay.style.display = "none";
})

var bookArr = [];
var counter = 0;

function Book(title, author, pageNum, read) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
}
Book.prototype.createDiv = function() {
    console.log(this.title);
    const newDiv = document.createElement("div");
    let divTitle = document.createElement("h1");
    divTitle.appendChild(document.createTextNode(this.title));
    let divAuthor = document.createElement("h1");
    divAuthor.appendChild(document.createTextNode(this.author));
    let divPage = document.createElement("h1");
    divPage.appendChild(document.createTextNode(this.pageNum));
    newDiv.append(divTitle, divAuthor, divPage);
    if(read.checked) {
        newDiv.style.backgroundColor = "rgb(0,255,0,.5)";
    }
    else {
        newDiv.style.backgroundColor = "rgb(255,0,0,.5)";
    }
    return newDiv;
}

form.addEventListener("submit",(e) => {
    e.preventDefault();
    bookArr.push(new Book(bookTitle.value, author.value, pageNum.value, read.Checked));
    bookArea.append(bookArr[counter].createDiv());
    counter++;
    
    form.reset();
})
