//Book Library
const bookSpace = document.querySelector('.bookSpace')
//Book Info
const bookInfoBox = document.querySelector('.bookInfoBox')
//Button
const addNewBookBtn = document.getElementById('AddNewBook')
 const removeAllBooks = document.getElementById('removeAllBooks')

//  const titleSpace = document.getElementById('titleSpace')
//  const authorSpace = document.getElementById('authorSpace')
//  const numOfPagesSpace = document.getElementById('numOfPagesSpace')
 
 
 const switchStatus = document.getElementById('switchStatus')


 const titleForm = document.getElementById('titleForm')
 const authorForm = document.getElementById('authorForm')
 const numOfPagesForm = document.getElementById('numOfPagesForm')
 
 const form = document.getElementById('form')
 
 const addBookFormBtn = document.getElementById('addBookFormBtn')
 



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



function newBook(title,author,pages,read){

    const testBook = new Book(title,author,pages,read)
    myLibrary.push(testBook)

    const editInfoBtn = document.getElementById('editInfoBtn')


for(let i = 0; i<myLibrary.length; i++){
        const newModel = document.createElement("div")
        newModel.className = "bookInfoBox"
    
        const pForTitle =document.createElement("p")
        pForTitle.className = "fs-3";
        pForTitle.textContent = myLibrary[i].title
    
        const pForAuthor = document.createElement("p")
        pForAuthor.textContent = `Author: ${myLibrary[i].author}`
    
        const pForPages = document.createElement("p")
        pForPages.textContent = `Num of Pages: ${myLibrary[i].pages}`
    
        const pForStatus = document.createElement("p")
        pForStatus.textContent = `Have you read?: ${read}`
    
    
        const statusYes =document.createElement("input")
        statusYes.className = "form-check form-switch";
        statusYes.type = "checkbox"
        statusYes.role = "switch"
     
    
        const btnForEdit = document.createElement("button")
        btnForEdit.className = "btn btn-secondary m-1"
        btnForEdit.type = "submit";
        btnForEdit.id = "editInfoBtn"
        btnForEdit.textContent = "Edit Info"
    
        const btnForRemove =document.createElement("button")
        btnForRemove.className = "btn btn-danger"
        btnForRemove.type = "button";
        btnForRemove.textContent = "Remove Book"
       
    
    
    bookSpace.appendChild(newModel)
    
    newModel.appendChild(pForTitle)
    newModel.appendChild(pForAuthor)
    newModel.appendChild(pForPages)
    newModel.appendChild(pForStatus)
    
    newModel.appendChild(statusYes)
    
    newModel.appendChild(btnForEdit)
    newModel.appendChild(btnForRemove)
    

    editInfoBtn.addEventListener('click', ()=>{
        console.log('I was just clicked')
    })
    
 
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




