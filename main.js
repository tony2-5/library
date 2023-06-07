const addBookButton = document.getElementById('addBookButton');
const addBookOverlay = document.querySelector('.addBookOverlay');
const closeFormButton = document.getElementById('closeFormButton');
const bookArea = document.querySelector('.books');

const form = document.getElementById('addBookForm');

let counter = 0;

addBookButton.addEventListener('click', () => {
  addBookOverlay.style.display = 'flex';
});

closeFormButton.addEventListener('click', () => {
  addBookOverlay.style.display = 'none';
});

function booksFooter() {
  const button = document.createElement('button');
  button.setAttribute('id', `remove${counter}`);
  button.appendChild(document.createTextNode('Remove'));
  return button;
}

// declare book class
class Book {
  constructor(title, author, pageNum, read, num) {
    this.title = title;
    this.author = author;
    this.pageNum = pageNum;
    this.read = read;
    this.num = num;
  }
  createDiv = () => {
    const newDiv = document.createElement('div');
    const divTitle = document.createElement('h1');
    divTitle.appendChild(document.createTextNode(this.title));
    const divAuthor = document.createElement('h1');
    divAuthor.appendChild(document.createTextNode(this.author));
    const divPage = document.createElement('h1');
    divPage.appendChild(document.createTextNode(this.pageNum));
  
    const innerDiv1 = document.createElement('div');
    const label = document.createElement('label');
    label.setAttribute('for', 'readBook');
    label.appendChild(document.createTextNode('Completed Reading:'));
    const readCheckbox = document.createElement('input');
    readCheckbox.setAttribute('name', 'readBook');
    readCheckbox.setAttribute('type', 'checkbox');
    readCheckbox.setAttribute('id', `checkbox${counter}`);
    innerDiv1.append(label, readCheckbox);
    if (this.read) {
      readCheckbox.checked = true;
      newDiv.style.backgroundColor = 'rgb(0,255,0,.5)';
    } else {
      readCheckbox.checked = false;
      newDiv.style.backgroundColor = '#EC1E24';
    }
    newDiv.append(divTitle, divAuthor, divPage, innerDiv1, booksFooter());
    return newDiv;
  };
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const currentBook = new Book(
    form.bookTitle.value,
    form.author.value,
    form.pageNum.value,
    form.read.checked,
    counter,
  );
  bookArea.append(currentBook.createDiv());
  const checkboxEle = document.getElementById(`checkbox${counter}`);
  checkboxEle.addEventListener('click', () => {
    if (!checkboxEle.checked) {
      checkboxEle.parentNode.parentNode.style.backgroundColor = '#EC1E24';
    } else {
      checkboxEle.parentNode.parentNode.style.backgroundColor = 'rgb(0,255,0,.5)';
    }
  });
  const removeEle = document.getElementById(`remove${counter}`);
  removeEle.addEventListener('click', () => {
    removeEle.parentNode.remove();
  });
  counter += 1;
  addBookOverlay.style.display = 'none';
  form.reset();
});
