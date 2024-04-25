
//Book Library
const bookSpace = document.querySelector('.bookSpace')

//Book Info
const bookInfoBox = document.querySelector('.bookInfoBox')

//Button
const addNewBookBtn = document.querySelector('#AddNewBook')






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

function addBookToLibrary(title, author, pages, read) {
 const newBook = new Book(title, author, pages, read)

 newBook.push(myLibrary)
  }

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
},{
    title:'The Hobbit', 
    author:'J.R.R.', 
    pages: 295, 
    read: true})




function loopThroughArray(){

    // let removeBook = document.getElementById('removeBook')
    // function removeBookFn(){
    //     bookSpace.innerHTML += `<div class="bookInfoBox">hell</div>`;
    // }
    
    // removeBook.addEventListener('click', removeBookFn)
    

  
    let readStatusStr = this.read ? "read" : "not read yet";
    
    for(let i = 0; i<myLibrary.length; i++){

        bookSpace.innerHTML += `<div class="bookInfoBox">
        <p class="fs-3" id="title">${myLibrary[i].title} </p>
        <p>Author: ${myLibrary[i].author} </p>
        <p>Number of Pages:  ${myLibrary[i].pages} </p>
        <p>Status: ${readStatusStr} </p>
    
        <button id="editInfoBtn" class="btn btn-secondary" type="submit">Edit Info</button>
        <button id="removeBook" class="btn btn-danger">Remove</button>
        </div>
    
    `
   
    

}
}

loopThroughArray()





function addNewBook(){
        forNewModels.innerHTML +=   `<dialog class="theModel">
        <p class="fs-3">Title: 
            <input class="form-control" type="text" name="title" placeholder="Book title">
        </p>
        <p>Author:  
            <input class="form-control" type="text" name="Author">           
        </p>
        <p>Number of Pages:
            <input class="form-control" type="number" name="Pages">
        </p>
        <p>Status: 
            <label class="form-label">Have you read?</label><br>
            Yes <input type="checkbox" class="form-check-input">
            No <input type="checkbox" class="form-check-input">
        </p>
                 
        <button id="addToLibrary" class="btn btn-primary" type="submit">Add to Library</button>
    </dialog>
             `

    }

    

    function displayModel(){
    forNewModels.innerHTML +=  
    `<div class="theModel">
    <p class="fs-3">Title: ${this.title}</p>
    <p>Author: ${this.author}</p>
    <p>Number of Pages: ${this.pages}</p>
    <p>Status: ${this.read}</p>

    <button id="editInfoBtn" class="btn btn-secondary" type="submit">Edit Info</button>
    <button class="btn btn-danger">Remove</button>
    </div>

`
}


function editButton(){
    theModel.innerHTML =  
    `
    <p class="fs-3">Title: 
    <input class="form-control" type="text" name="title" placeholder="Book title" >
    </p>
         <p>Author:  
         <input class="form-control" type="text" name="Author" >           
         </p>
         <p>Number of Pages:
         <input  class="form-control"type="number" name="Pages"></p>
         <p>Status: 
         <label class="form-label">Have you read?</label><br>
         Yes <input type="checkbox" class="form-check-input">
         No <input type="checkbox" class="form-check-input">
         </p>
         
         <button id="editInfoBtn" class="btn btn-primary" type="submit">Edit Book</button>
         `
}






