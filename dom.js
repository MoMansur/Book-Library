import { deleteFunc } from "./main.js"




//Book Library
const bookSpace = document.querySelector('.bookSpace')
//Book Info
const bookInfoBox = document.querySelector('.bookInfoBox')
//Button

export function factoryDom(type, id, className){
    const element = document.createElement(type)
    element.id = id
    element.className = className

    function appender(card){
        card.append(element)
    }
    function removeElement(card){
        card.removeChild(element)
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

    return{element,appender,setBgColor, setInnerText, eventListener,setWidth, otherCss, setElementAttribute,removeElement}
}

const DOMCreator = ((title, author, pages, index, read) =>{

  //DOM MANIPULATION
  const newModel = document.createElement("div")
  newModel.className = "bookInfoBox"
  bookSpace.append(newModel)
  newModel.setAttribute(`data-index`, index)
 


       const pForTitle =factoryDom('p','pForTitle', "f3-3", )
      
       const pForAuthor =factoryDom('p','pForAuthor', "pForAuthor", )
   
       const pForPages =factoryDom('p','pForAuthor', "pForAuthor", )
      
      
       const changestatus =factoryDom('button','statusBtn', "btn btn-success" )
       changestatus.setInnerText("Change Read Status")
       changestatus.setWidth('20rem')


       const statusAnswer =factoryDom('span','statusBtn', "badge text-wrap" )
       statusAnswer.setInnerText('')

       const pForStatus =factoryDom('p','pStatusID', "pStatusCLass" )
       pForStatus.setInnerText(`Have you read?: `)

       
       const getstatusAnswer = statusAnswer.element
        
      
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
   
   if(read === true){
       statusAnswer.setInnerText('Yes')
           statusAnswer.setBgColor("green")
           changestatus.element.addEventListener('click', ()=>{
           switcher()
       })        
   }else{
       statusAnswer.setInnerText('No')
       statusAnswer.setBgColor("red")

       changestatus.element.addEventListener('click', ()=>{
           switcher()
       })
   }


   const btnForEdit =factoryDom('button','editInfoBtn', "btn btn-primary m-1" )
   btnForEdit.setWidth("9.9rem")
   btnForEdit.setElementAttribute('type', 'submit')
   btnForEdit.setInnerText("Edit Info")


   const btnForRemove =factoryDom('button','removeBook', "btn btn-danger" )
   btnForRemove.setWidth("9.89rem")
   btnForRemove.setElementAttribute('type', 'button')
   btnForRemove.setInnerText("Remove Book")


   //EVENT LISTERNErs
   btnForRemove.element.addEventListener('click', ()=>{
    deleteFunc(newModel, index)
    })

    btnForEdit.element.addEventListener('click', (e)=>{
        mainDisplayremover()
        editFromAppenders()

    })



    
    const pForTitleEdit =factoryDom('p','pForTitle', "f3-3", )
    pForTitleEdit.setInnerText('Update your Book')
   
    const titleInputED =factoryDom('input','pForTitleInput', "form-control mb-2", )
    titleInputED.setElementAttribute('placeholder', 'Book Title')

    const authorInputED =factoryDom('input','pForAuthorInput', "form-control mb-2", )
    authorInputED.setElementAttribute('placeholder', 'Change Author')
    authorInputED.setElementAttribute('type', 'text')

    const pagesInputED =factoryDom('input','pForTitleInput', "form-control mb-2", )
    pagesInputED.setElementAttribute('placeholder', "Number Of Pages")
    pagesInputED.setElementAttribute('type', 'number')
            
    const btnForEditInp =factoryDom('button','editInfoBtn', "btn btn-primary m-1", )
    btnForEditInp.setElementAttribute('type', 'submit')
    btnForEditInp.setInnerText("Update Book")
    btnForEditInp.setWidth('19rem')

        // btnForEditInp.style.float = "left"      
        const btnForRemoveInp = factoryDom('button','removeBook', "btn btn-danger m-1", )
        btnForRemoveInp.setElementAttribute('type', 'button')
        btnForRemoveInp.setInnerText("Delete Book")
        btnForRemoveInp.setWidth('9rem')

        function editFromAppenders(){
           
         pForTitleEdit.appender(newModel)
         titleInputED.appender(newModel)
         authorInputED.appender(newModel)
         pagesInputED.appender(newModel)
         btnForEditInp.appender(newModel)
         btnForRemoveInp.appender(newModel)
        }

        function editDisplayerRemover(){
           
            pForTitleEdit.removeElement(newModel)
            titleInputED.removeElement(newModel)
            authorInputED.removeElement(newModel)
            pagesInputED.removeElement(newModel)
            btnForEditInp.removeElement(newModel)
            btnForRemoveInp.removeElement(newModel)
           }

        
        function  mainAppender(title, author, pages){
            pForTitle.appender(newModel)
            pForAuthor.appender(newModel)
            pForPages.appender(newModel)
            changestatus.appender(newModel)
            pForStatus.appender(newModel)
            statusAnswer.appender(pForStatus.element)

            //BUttons
            btnForEdit.appender(newModel)
            btnForRemove.appender(newModel)

            pForTitle.setInnerText(title)
            pForAuthor.setInnerText(`Author: ${author}`)
            pForPages.setInnerText(`Num of Pages: ${pages}`)
   

        }
        mainAppender(title, author, pages)
         
        function  mainDisplayremover(){
            pForTitle.removeElement(newModel)
            pForAuthor.removeElement(newModel)
            pForPages.removeElement(newModel)
            changestatus.removeElement(newModel)
            pForStatus.removeElement(newModel)
            statusAnswer.removeElement(pForStatus.element)

            //BUttons
            btnForEdit.removeElement(newModel)
            btnForRemove.removeElement(newModel)
        }
   


        btnForEditInp.element.addEventListener('click', (e)=>{
             e.preventDefault()

               if(titleInputED.element.value === ""){
                titleInputED.element.value = title
             } if(authorInputED.element.value === ""){
                 authorInputED.element.value = author
             }if(pagesInputED.element.value === ""){
                 pagesInputED.element.value = pages
             }
     
            editDisplayerRemover()
             
            // editFromAppenders()
             title = titleInputED.element.value
             author = authorInputED.element.value
             pages = pagesInputED.element.value  

        
            // console.dir(title )
            mainAppender(title, author, pages)
            console.dir(title)
             
            })


});


// 
export default DOMCreator




// editProcess()


