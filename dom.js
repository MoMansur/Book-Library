
//Book Library
const bookSpace = document.querySelector('.bookSpace')
//Book Info
const bookInfoBox = document.querySelector('.bookInfoBox')
//Button

function factoryDom(type, id, className,value){
    const element = document.createElement(type)
    element.id = id
    element.className = className
    element.value = value

    function appender(card){
        card.append(element)
    }

    function setInnerText(innerText){
        element.textContent = innerText
    }
    
    function setBgColor(bgColor){
        element.style.backgroundColor = bgColor
    }

    function setElementAttribute(name, value){
        element.setAttribute(name, value)
    }

    function eventListener(eventFunction) {
        element.addEventListener('click', () => {
            eventFunction();
        });
    }
    function setWidth(width,height){
        element.style.width = width;
        element.style.height = height;
    }
    function otherCss(border,Rborder, padding,tAlign){
        element.style.border = border
        element.style.borderRadius = Rborder
        element.style.padding = padding
        element.style.textAlign = tAlign
    }

    return{element,appender,setBgColor, setInnerText, eventListener,setWidth, otherCss, setElementAttribute}
}

const DOMCreator = ((title, author, pages, index) =>{

  //DOM MANIPULATION
  const newModel = document.createElement("div")
  newModel.className = "bookInfoBox"
  bookSpace.append(newModel)
  newModel.setAttribute(`data-index`, index)
 

    function mainCardDisplay(){

       const pForTitle =factoryDom('p','pForTitle', "f3-3", )
       pForTitle.setInnerText(title)

       const pForAuthor =factoryDom('p','pForAuthor', "pForAuthor", )
       pForAuthor.setInnerText(`Author: ${author}`)
   
       const pForPages =factoryDom('p','pForAuthor', "pForAuthor", )
       pForPages.setInnerText(`Num of Pages: ${pages}`)
      
       const status =factoryDom('button','statusBtn', "btn btn-success" )
       status.setInnerText("Change Read Status")
       status.setWidth('20rem')


       const statusAnswer =factoryDom('span','statusBtn', "badge text-wrap" )
       statusAnswer.setInnerText('')

       const pForStatus =factoryDom('p','pStatusID', "pStatusCLass" )
       pForStatus.setInnerText(`Have you read?: `)
      
let countButtonClick = 0;
   function switcher(){
       countButtonClick++;
       if(countButtonClick % 2 === 1){
           statusAnswer.setInnerText('Yes')
           statusAnswer.setBgColor("green")
      
       }else{
           statusAnswer.setInnerText('No')
           statusAnswer.setBgColor("red")
  
       }
   }
   //
   // if(myLibrary[i].read === true){
   //     statusAnswer.setInnerText('No')
   //         statusAnswer.setBgColor("red")
   //     status.addEventListener('click', ()=>{
   //         switcher()
   //     })        
   // }else{
   //     statusAnswer.setInnerText('No')
   //     statusAnswer.setBgColor("red")

   //     status.addEventListener('click', ()=>{
   //         switcher()
   //     })
   // }


   
       const btnForEdit =factoryDom('button','editInfoBtn', "btn btn-primary m-1" )
       btnForEdit.setWidth("9.9rem")
       btnForEdit.setElementAttribute('type', 'submit')
       btnForEdit.setInnerText("Edit Info")

       const btnForRemove =factoryDom('button','removeBook', "btn btn-danger" )
       btnForRemove.setWidth("9.89rem")
       btnForRemove.setElementAttribute('type', 'button')
       btnForRemove.setInnerText("Remove Book")

    
       pForTitle.appender(newModel)
       pForAuthor.appender(newModel)
       pForPages.appender(newModel)
       status.appender(newModel)
       statusAnswer.appender(newModel)

       const getstatusAnswer = statusAnswer.element
       pForStatus.appender(getstatusAnswer)
//BUttons
       btnForEdit.appender(newModel)
       btnForRemove.appender(newModel)


       // btnForRemove.addEventListener('click', ()=>{
       //     deleeFunc(i)
       // })
    }


   function editForm(){

       const pForTitleEdit =factoryDom('p','pForTitle', "f3-3", )
       pForTitleEdit.setInnerText('Update your Book')
      
       const titleInputED =factoryDom('input','pForTitleInput', "form-control mb-2", )
       titleInputED.setElementAttribute('placeholder', 'Book Title')
       titleInputED.setElementAttribute('required', 'true')
   
       const authorInputED =factoryDom('input','pForAuthorInput', "form-control mb-2", )
       authorInputED.setElementAttribute('placeholder', 'Change Author')
       authorInputED.setElementAttribute('type', 'text')
   
       const pagesInputED =factoryDom('input','pForTitleInput', "form-control mb-2", )
       pagesInputED.setElementAttribute('placeholder', "Number Of Pages")
       pagesInputED.setElementAttribute('type', 'number')
               
       const btnForEditInp =factoryDom('button','editInfoBtn', "btn btn-primary m-1", )
       btnForEditInp.setElementAttribute('required', 'true')
       btnForEditInp.setInnerText("Update Book")
       btnForEditInp.setWidth('9rem')
   
           // btnForEditInp.style.float = "left"      
           const btnForRemoveInp = factoryDom('button','removeBook', "btn btn-danger m-1", )
           btnForRemoveInp.setElementAttribute('type', 'button')
           btnForRemoveInp.setInnerText("Delete Book")
           btnForRemoveInp.setWidth('9rem')

           
           pForTitleEdit.appender(newModel)
           titleInputED.appender(newModel)
           pagesInputED.appender(newModel)
           btnForEditInp.appender(newModel)
           btnForRemoveInp.appender(newModel)
   }
   mainCardDisplay()
   return{mainCardDisplay,editForm}
});


export default DOMCreator



// function editProcess(){
//     btnForEditInp.addEventListener('click', (e)=>{

//         if(titleInputED.value === ""){
//             titleInputED.value = pForTitle.textContent
//         } if(authorInputED.value === ""){
//             authorInputED.value = myLibrary[i].author
//         }if(pagesInputED.value === ""){
//             pagesInputED.value = myLibrary[i].pages
//         }

//         pForTitle.textContent = titleInputED.value
//         pForAuthor.textContent =`Author: ${authorInputED.value}`
//         pForPages.textContent = `Num Of Pages: ${pagesInputED.value}`
         
//         const index = parseInt(newModel.getAttribute("data-index"));       
//         myLibrary[index].title = titleInputED.value
//         myLibrary[index].author = authorInputED.value
//         myLibrary[index].pages = pagesInputED.value  

//         appender()
//         editItemRemoveNew()
//     })
// }
// editProcess()



