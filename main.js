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







 function creation(){

    for(let i =0; i<2; i++){

    
    const newModel = document.createElement("div")
    newModel.className = "bookInfoBox"

    const pForTitle =document.createElement("p")
    pForTitle.className = "fs-3";
    pForTitle.textContent = 'Title'

    const pForAuthor = document.createElement("p")
    pForAuthor.textContent = "Author: "

    const pForPages = document.createElement("p")
    pForPages.textContent = "Num of Pages: "

    const pForStatus = document.createElement("p")
    pForStatus.textContent = "Have you read?: "


    const statusYes =document.createElement("input")
    statusYes.className = "form-check form-switch";
    statusYes.type = "checkbox"
    statusYes.role = "switch"
 

    const btnForEdit = document.createElement("button")
    btnForEdit.className = "btn btn-secondary m-1"
    btnForEdit.type = "submit";
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



    }
  
 }
 creation()

//  <div class="bookInfoBox">
//  <p class="fs-3" id="title"> </p>
//  <p>Author:  </p>
//  <p>Number of Pages:   </p>
//  <p>Status:Not read </p>
//  <button id="editInfoBtn" class="btn btn-secondary" type="submit">Edit Info</button>
//  <button id="removeBook" class="btn btn-danger">Remove</button>
// </div>