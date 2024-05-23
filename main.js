import DOMCreator from "./dom.js";
import { factoryDom } from "./dom.js";
import { formCallDisplayer } from "./dom.js";
import { addbookBtnDisplay } from "./dom.js";

// DOM CALLS
const container = document.getElementById('container');
const addBookNav = document.getElementById('addBookNav');
const alertDivDom = document.getElementById('alertDiv');
const bookSpace = document.querySelector('.bookSpace');
const form = document.getElementById('form');
const addBookFormBtn = document.getElementById('addBookFormBtn');

let myLibrary = loadLibraryFromStorage();

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    readStatus() {
        return this.read ? "read" : "not read yet";
    }
}

// Add a new book to the library array and save to localStorage
function addBookToLibrary(title, author, pages, read) {
    const bookHolder = new Book(title, author, pages, read);
    myLibrary.push(bookHolder);
    saveLibraryToStorage();
}

// Save library to localStorage
function saveLibraryToStorage() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
}

// Load library from localStorage
function loadLibraryFromStorage() {
    const library = localStorage.getItem('myLibrary');
    return library ? JSON.parse(library) : [];
}

// Display all books in the library
function displayer() {
    bookSpace.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++) {
        DOMCreator(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages, i, myLibrary[i].read);
    }
    myLibraryInfo();
    addbookBtnDisplay();
}

// Display the initial set of books
displayer();

// Update the total number of books displayed
function myLibraryInfo() {
    const numTotalBooks = document.getElementById('numTotalBooks');
    numTotalBooks.innerHTML = `${myLibrary.length} ${myLibrary.length === 1 ? "Book" : "Books"}`;
}

// Create and display an alert message
function createAlert(message, duration) {
    const alertDiv = factoryDom('div', 'alertDIV', 'alert alert-success pd-1');
    alertDiv.setElementAttribute('role', 'alert');
    alertDiv.setInnerText(message);

    alertDivDom.append(alertDiv.element);

    setTimeout(function() {
        alertDiv.element.remove();
    }, duration);
}

// Delete a book from the library
export function deleteFunc(theDiv) {
    const indexAttribute = parseInt(theDiv.getAttribute("data-index"));
    var confirmToRemove = confirm('Are you sure you want to remove this Book');

    if (confirmToRemove) {
        myLibrary.splice(indexAttribute, 1);
        saveLibraryToStorage();
        refreshPage();
        createAlert('Success: Book Deleted', 1500);
        myLibraryInfo();
    } else {
        createAlert('Cancelled', 2000);
        refreshPage();
    }
}

// Refresh the book display
function refreshPage() {
    bookSpace.innerHTML = "";
    displayer();
    myLibraryInfo();
}

// Display the form to add a new book
addBookNav.addEventListener('click', () => {
    addBookNav.style.color = 'brown';
    addBookNav.style.backgroundColor = 'burlywood';
    let form = formCallDisplayer.form;

    bookSpace.append(form);
    form.scrollIntoView({ behavior: 'smooth' });
});

// Handle form submission to add a new book
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const titleForm = document.getElementById('titleForm');
    const authorForm = document.getElementById('authorForm');
    const numOfPagesForm = document.getElementById('numOfPagesForm');
    const yesRadio = document.getElementById('yesRadio');

    const title = titleForm.value;
    const author = authorForm.value;
    const pages = numOfPagesForm.value;
    const read = yesRadio.checked;

    addBookToLibrary(title, author, pages, read);
    refreshPage();
    createAlert('Book Added', 2000);

    form.reset();
});

// Load initial data if localStorage is empty
if (myLibrary.length === 0) {
    addBookToLibrary('48 Laws of Power', 'Robert Greene', 412, true);
    addBookToLibrary('Pride and Prejudice', 'Jane Austen', 620, true);
    addBookToLibrary('The Great Gatsby', 'Scott Fitzgerald', 935, true);
    saveLibraryToStorage();
    refreshPage();
}
