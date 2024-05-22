import DOMCreator from "./dom.js"

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
        DOMCreator(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages,  i)


    
    function myLibraryInfo(){
        const numTotalBooks = document.getElementById('numTotalBooks')
        numTotalBooks.innerHTML = `${myLibrary.length} Books`
        console.log(myLibrary[i].length)
    }

}
//OUT OF LOOP
}

displayer()
//OUT OF DISPLAY()

function deleeFunc(i){
    const index = parseInt(newModel.getAttribute("data-index"));
           var confirmToRemove = confirm('Are you sure you want to remove this Card')
       
           if(confirmToRemove){
            myLibrary.splice(index[i], 1);
               modelSpace.innerHTML = "";
               myLibraryInfo()
               console.log(dataArray)
           }else{
               alert('Cancelled')
           }

}


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
        refresher()
        console.log(myLibrary.length)
        console.log(myLibrary)
       
    }else{
        addBookToLibrary(titleForm.value,authorForm.value,numOfPagesForm.value, false)
        refresher()
        console.log(myLibrary)
    }
   form.reset()  
})




