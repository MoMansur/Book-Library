//Book Library
const bookSpace = document.querySelector('.bookSpace')
//Book Info
const bookInfoBox = document.querySelector('.bookInfoBox')
//Button
const addNewBookBtn = document.getElementById('AddNewBook')
 const removeAllBooks = document.getElementById('removeAllBooks')


 const switchStatus = document.getElementById('switchStatus')


 const titleForm = document.getElementById('titleForm')
 const authorForm = document.getElementById('authorForm')
 const numOfPagesForm = document.getElementById('numOfPagesForm')
 
 const form = document.getElementById('form')
 
 const addBookFormBtn = document.getElementById('addBookFormBtn')
 
 const editInfoBtn = document.getElementById('editInfoBtn')



const myLibrary = [];
class Book{
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read
    }
    readStatus(){
        let readStatusStr = this.read ? "read" : "not read yet";
         
    }
}

function addBookToLibrary() {
}


const titleSpace = document.getElementById('titleSpace')
const authorSpace = document.getElementById('authorSpace')
const numOfPagesSpace = document.getElementById('numOfPagesSpace')


function test(){
    console.log('I ahve been clicked')
}


function newBook(title,author,pages,read){

    const testBook = new Book(title,author,pages,read)
    myLibrary.push(testBook)

for(let i = 0; i<myLibrary.length; i++){

    bookSpace.innerHTML += `<div class="bookInfoBox">
    <p class="fs-3" id="titleSpace">${myLibrary[i].title} </p>
    <p id="authorSpace">Author: ${myLibrary[i].author} </p>
    <p id="numOfPagesSpace">Number of Pages:  ${myLibrary[i].pages} </p>
    <p>Status:Not read </p>
    <button id="editInfoBtn" class="btn btn-secondary" type="submit">Edit Info</button>
                        <button id="removeBook" class="btn btn-danger">Remove</button>
                        </div>`;



    console.log(testBook) 
}
}

form.addEventListener('submit', (e) => {
    e.preventDefault()

    bookSpace.innerHTML = ""
    newBook(titleForm.value,authorForm.value,numOfPagesForm.value,'not yet')

 
   
})







myLibrary.push({
    title: '48 Laws of Power',
    author: 'Robert Greene',
    pages: 412,
    read:true
},{
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    pages: 620,
    read:true
},
{
    title: 'The Great Gatsby',
    author: ' Scott Fitzgerald',
    pages: 935,
    read:true
 })





 function creation(){
    const newDiv = document.createElement("div")
    document.body.appendChild(newDiv)
 }
 creation()