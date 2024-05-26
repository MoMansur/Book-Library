import DOMCreator from "./dom.js";
import { factoryDom } from "./dom.js";
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
    if(library){
       return JSON.parse(library)
    } else{
        return []
    } 
}

// Display all books in the library
function displayer(arr) {
    bookSpace.innerHTML = "";
    for (let i = 0; i < arr.length; i++) {
        DOMCreator(arr[i].title, arr[i].author, arr[i].pages, i, arr[i].read);
    }
    myLibraryInfo();
    addbookBtnDisplay.appendNew()
   
}

// Display the initial set of books
displayer(myLibrary);

// Update the total number of books displayed
function myLibraryInfo() {
    const numTotalBooks = document.getElementById('numTotalBooks');
    numTotalBooks.innerHTML = `${myLibrary.length} ${myLibrary.length === 1 ? "Book" : "Books"}`;
}

// Create and display an alert message
function createAlert(message, duration) {
    const alertDiv = factoryDom('div', 'alertDIV', 'alert alert-warning pd-1');
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
    var confirmToRemove = confirm('Are you sure you want to remove this Book?');

    if (confirmToRemove) {
        myLibrary.splice(indexAttribute, 1);
        saveLibraryToStorage();
        refreshPage();
        createAlert('Success: Book Deleted', 1000);
        myLibraryInfo();
    } else {
        createAlert('Cancelled', 1000);
        refreshPage();
    }
}

// Refresh the book display
export function refreshPage() {
    bookSpace.innerHTML = "";
    displayer(myLibrary); 
    myLibraryInfo();

    addBookNav.style.color = 'burlywood';
    addBookNav.style.backgroundColor = 'rgb(79, 21, 21)';
}


// Display the form to add a new book
addBookNav.addEventListener('click', () => {
        addBookNav.style.color = 'brown';
        addBookNav.style.backgroundColor = 'burlywood';

        addbookBtnDisplay.removeEmptyModel
        addbookBtnDisplay.newFormHandler()
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
    addbookBtnDisplay.appendNew()
    createAlert('Book Added', 1000);

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

const deleteAllBtn = document.getElementById('deleteAllBtn');

// Add event listener to the delete all button
deleteAllBtn.addEventListener('click', deleteAllBooks);

// Function to delete all books
function deleteAllBooks() {
   

    // Clear local storage
    var confirmToRemove = confirm('Are you sure you want to remove All Books?');

    if (confirmToRemove) {
        myLibrary.length = 0;
        localStorage.removeItem('myLibrary');
        createAlert('All books deleted', 1000);
        refreshPage();
    } else {
        createAlert('Cancelled', 1000);
        refreshPage();
    }
   
}

const searchForm = document.getElementById('formID')
function searchAlg(inputTexts){
    const searchInput = document.getElementById('searchInput')
    const searchBtn = document.getElementById('searchButton')

    const searchResultMessage = document.getElementById('searchResultMessage')

    const search = myLibrary.find((book) => book.title === inputTexts)
    const finder = [search]

    if (search ) {
      bookSpace.innerHTML = ""
      displayer(finder)
      
      searchBtn.innerText = 'Cancel Search'
      searchBtn.style.backgroundColor = 'red'
      searchBtn.style.color = 'black'
      
        searchBtn.addEventListener('click', ()=>{
            refreshPage()
            searchBtn.innerText = 'Search'
            searchBtn.style.backgroundColor = 'rgb(79, 21, 21)'
            searchBtn.style.color = 'burlywood'
            
        })
        searchForm.reset()
   


      console.log(finder);
    } else if(inputTexts === ""){ 
        searchResultMessage.innerText = 'Please type a Book Title'
        searchResultMessage.style.color ='burlywood'
    }else {
       
        searchResultMessage.innerText = 'No Book Found'
        searchResultMessage.style.color ='burlywood'
        console.log('Not Found');
    }

 
}

searchForm.addEventListener('submit', (e)=>{
    e.preventDefault(); 
    const searchFor = searchInput.value
    searchAlg(searchFor)
})