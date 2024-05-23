import DOMCreator from "./dom.js"
import { factoryDom } from "./dom.js"
import { formCallDisplayer } from "./dom.js"
import { addbookBtnDisplay } from "./dom.js"


const container = document.getElementById('container')
const row = document.getElementById('row')
//Book Library
const bookSpace = document.querySelector('.bookSpace')



 
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
        DOMCreator(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages,  i, myLibrary[i].read)
        myLibraryInfo(i)       
}
//from Dom,js
addbookBtnDisplay()

}

displayer()
//OUT OF DISPLAY()

function myLibraryInfo(index){
    const numTotalBooks = document.getElementById('numTotalBooks')

    if(myLibrary.length === 0 || myLibrary.length === 1){
        numTotalBooks.innerHTML = `Total: ${myLibrary.length} Book`
    }else{
        numTotalBooks.innerHTML = `Total: ${myLibrary.length} Books`

    }
}


function createAlert(message, duration) {
    const alertDiv = factoryDom('div', 'alertDIV', 'alert alert-success pd-1' )
    alertDiv.setElementAttribute('role', 'alert');
    alertDiv.setInnerText(message) 

    row.append(alertDiv.element);

    setTimeout(function() {
        alertDiv.element.remove(); // Remove the alertDiv element after the specified duration
    }, duration);
}


export function deleteFunc(theDiv){
    const indexAttribute = parseInt(theDiv.getAttribute("data-index"));
           var confirmToRemove = confirm('Are you sure you want to remove this Book')
       
           if(confirmToRemove){
            myLibrary.splice(indexAttribute, 1);
            refreshPage()
            createAlert('Success: Book Deleted', 2000);
          
           }else{           
            createAlert('Cancelled', 2000); 
            refreshPage()
        }            

}


function refreshPage(){
    bookSpace.innerHTML = ""
 displayer()
 
}
refreshPage()

//FORM DATA

const addBookNav = document.getElementById('addBookNav')


addBookNav.addEventListener('click', ()=>{
    let form = formCallDisplayer.form
    bookSpace.append(form)
    form.scrollIntoView({ behavior: 'smooth' });
})




form.addEventListener('submit', (e) => {
    e.preventDefault()

  const yesRadio = formCallDisplayer.yesRadio
    
   
    console.log()
    if(yesRadio.checked){
        addBookToLibrary(titleForm.value,authorForm.value,numOfPagesForm.value, true)
        
        refreshPage()
        createAlert('Book Added', 2000); 
       
    }else{
        addBookToLibrary(titleForm.value,authorForm.value,numOfPagesForm.value, false)
        refreshPage()
        createAlert('Book Added', 2000); 
    
    }
   form.reset()  
})




