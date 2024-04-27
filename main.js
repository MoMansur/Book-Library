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



function addBookToLibrary(title,author,pages,read){
    const bookHolder = new Book(title,author,pages,read)
    myLibrary.push(bookHolder)

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
 })



function displayer(){
    
    for(let i = 0; i<myLibrary.length; i++){

    //DOM MANIPULATION
    const newModel = document.createElement("div")
    newModel.className = "bookInfoBox"
    newModel.setAttribute(`data-index`, i)

    const pForTitle =document.createElement("p")
    pForTitle.className = "fs-3";
    pForTitle.textContent = myLibrary[i].title

    const pForAuthor = document.createElement("p")
    pForAuthor.textContent = `Author: ${myLibrary[i].author}`

    const pForPages = document.createElement("p")
    pForPages.textContent = `Num of Pages: ${myLibrary[i].pages}`


    const status =document.createElement("button")
    status.className = "btn btn-success";
    
    
    const statusAnswer = document.createElement('span')
    statusAnswer.className = "badge text-wrap"
    statusAnswer.textContent = ''

        const pForStatus = document.createElement("p")
        pForStatus.id='pStatusID'
    pForStatus.textContent = `Have you read?: `

    let countButtonClick = 0;
    function switcher(){
        countButtonClick++;
        if(countButtonClick % 2 === 1){
            statusAnswer.textContent = 'Yes'
            statusAnswer.style.backgroundColor="green"
       
        }else{
            statusAnswer.textContent = 'No'
            statusAnswer.style.backgroundColor="red"
   
        }
    }
    //
    if(myLibrary[i].read === true){
        statusAnswer.textContent = 'Yes'
        statusAnswer.style.backgroundColor="green"

        status.addEventListener('click', ()=>{
            switcher()
        })        
    }else{
        statusAnswer.textContent = 'No'
        statusAnswer.style.backgroundColor="red"

        status.addEventListener('click', ()=>{
            switcher()
        })
    }

    //HAVE YOU READ?
       
        pForStatus.appendChild(statusAnswer)
    status.textContent = "Change Read Status"
    status.style.width= "20rem"
    status.style.marginLeft= "5px"

    const btnForEdit = document.createElement("button")
    btnForEdit.className = "btn btn-primary m-1"
    btnForEdit.type = "submit";
    btnForEdit.id = "editInfoBtn"
    btnForEdit.style.width= "9.9rem"

    btnForEdit.textContent = "Edit Info"

    const btnForRemove =document.createElement("button")
    btnForRemove.className = "btn btn-danger"
    btnForRemove.type = "button";
    btnForRemove.id="removeBook"
    btnForRemove.style.width= "9.89rem"
    btnForRemove.textContent = "Remove Book"


//REMOVER
    function replacer(theModel){
        newModel.remove(theModel) 
    }

    //EDIT FORM
        const titleInputED =document.createElement("input")
        titleInputED.className = "form-control mb-2";
        titleInputED.placeholder = `Book Title`
        titleInputED.type = "Text"

        const authorInputED = document.createElement("input")
        authorInputED.className = "form-control mb-2"
        authorInputED.placeholder = "Change Author"
        authorInputED.type= 'text'
        
        const pagesInputED = document.createElement("input")
        pagesInputED.className = "form-control mb-2"
        pagesInputED.placeholder="Number Of Pages"
        pagesInputED.type = "number"

    
        const btnForEditInp = document.createElement("button")
        btnForEditInp.className = "btn btn-primary m-1"
        btnForEditInp.style.width = "9rem"
        btnForEditInp.style.float = "left"
        btnForEditInp.type = "submit";
        btnForEditInp.id = "editInfoBtn"
        btnForEditInp.textContent = "Update Book"
    
        const btnForRemoveInp =document.createElement("button")
        btnForRemoveInp.className = "btn btn-danger m-1"
        btnForRemoveInp.type = "button";
        btnForRemoveInp.id="removeBook"
        btnForRemoveInp.textContent = "Delete Book"

   
   
        const pForTitleEdit =document.createElement("p")
        pForTitleEdit.className = "fs-3";
        pForTitleEdit.textContent = 'Update your Book'



    
function editPopUpModel(){
   
newModel.appendChild(pForTitleEdit)

newModel.appendChild(titleInputED)
newModel.appendChild(authorInputED)
newModel.appendChild(pagesInputED)


newModel.appendChild(btnForEditInp)
newModel.appendChild(btnForRemoveInp)


}

function editItemRemoveNew(){
    newModel.removeChild(pForTitleEdit)

    newModel.removeChild(titleInputED)
    newModel.removeChild(authorInputED)
    newModel.removeChild(pagesInputED)
    newModel.removeChild(btnForEditInp)
    newModel.removeChild(btnForRemoveInp)
}

function editNewView(){
    newModel.removeChild(btnForEdit)
    newModel.removeChild(btnForRemove)
    newModel.removeChild(pForTitle)
    newModel.removeChild(pForAuthor)
    newModel.removeChild(pForPages)
    newModel.removeChild(pForStatus)
    newModel.removeChild(status)
}

//EDIT BUTTON EVENT 
btnForEdit.addEventListener('click', ()=>{
    editNewView()  
    editPopUpModel()
   
})


//REMOVE BUTTON HANDLER
btnForRemove.addEventListener('click', (e)=>{
    const index = parseInt(newModel.getAttribute("data-index"));
    console.log(index)
    var confirmToRemove = confirm('Are you sure you want to remove this book')
    if(confirmToRemove){
        myLibrary.splice(index, 1);
        replacer(newModel)
    }else{
        alert('Cancelled')
    }
})

//REMOVE BOTTON FROM EDIT OPTIONS
btnForRemoveInp.addEventListener('click', (e)=>{
    const index = parseInt(newModel.getAttribute("data-index"));
    var confirmToRemove = confirm('Are you sure you want to remove this book')

    if(confirmToRemove){
        myLibrary.splice(index, 1);
        console.log(index)
        replacer(newModel)
    }else{
        alert('Cancelled')
    }
})

bookSpace.appendChild(newModel)
    //ADDER 
    function appender(){
      
        newModel.appendChild(pForTitle)
        newModel.appendChild(pForAuthor)
        newModel.appendChild(pForPages)
        newModel.appendChild(pForStatus)
        newModel.appendChild(status)
        newModel.appendChild(btnForEdit)
        newModel.appendChild(btnForRemove) 
    }

appender()


function editProcess(){
    btnForEditInp.addEventListener('click', (e)=>{

        pForTitle.textContent = titleInputED.value
        pForAuthor.textContent =`Author: ${authorInputED.value}`
        pForPages.textContent = `Num Of Pages: ${pagesInputED.value}`
         
        const index = parseInt(newModel.getAttribute("data-index"));       
        myLibrary[index].title = titleInputED.value
        myLibrary[index].author = authorInputED.value
        myLibrary[index].pages = pagesInputED.value  

        appender()
        editItemRemoveNew()
    })
}
editProcess()

function myLibraryInfo(){
    const numTotalBooks = document.getElementById('numTotalBooks')
  
  
    numTotalBooks.innerHTML = `Total Books: ${i}`
  
}
myLibraryInfo()
}
//OUT OF LOOP
}
//OUT OF DISPLAY()



function refresher(){
    bookSpace.innerHTML = ""
 displayer()
}
refresher()


//FORM DATA
const yesRadio = document.getElementById('yesRadio')
const noRadio = document.getElementById('noRadio')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    if(yesRadio.checked){
        addBookToLibrary(titleForm.value,authorForm.value,numOfPagesForm.value, true)
        // forFormCall(yesRadio)
        refresher()
    }else{
        addBookToLibrary(titleForm.value,authorForm.value,numOfPagesForm.value, false)
        // forFormCall(yesRadio)
        refresher()
    }
   form.reset()  
})




