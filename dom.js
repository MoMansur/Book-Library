import { deleteFunc } from "./main.js"
import { refreshPage } from "./main.js"
// Book Library
const bookSpace = document.querySelector('.bookSpace')

// Factory function to create DOM elements
export function factoryDom(type, id, className) {
    const element = document.createElement(type)
    element.id = id
    element.className = className

    function appender(card) {
        card.append(element)
    }
    function removeElement(card) {
        card.removeChild(element)
    }
    function setInnerText(innerText) {
        element.textContent = innerText
    }
    function setBgColor(bgColor) {
        element.style.backgroundColor = bgColor
    }
    function setElementAttribute(name, value) {
        element.setAttribute(name, value)
    }
    function eventListener(eventFunction) {
        element.addEventListener('click', () => {
            eventFunction();
        });
    }
    function setWidth(width, height) {
        element.style.width = width;
        element.style.height = height;
    }
    function otherCss(border, Rborder, padding, tAlign) {
        element.style.border = border
        element.style.borderRadius = Rborder
        element.style.padding = padding
        element.style.textAlign = tAlign
    }

    return {
        element, appender, setBgColor, setInnerText, eventListener, 
        setWidth, otherCss, setElementAttribute, removeElement
    }
}

// Create and display book information
const DOMCreator = ((title, author, pages, index, read) => {
    const newModel = document.createElement("div")
    newModel.className = "bookInfoBox"
    bookSpace.append(newModel)
    newModel.setAttribute('data-index', index)

    const pForTitle = factoryDom('p', 'pForTitle', "f3-3")
    const pForAuthor = factoryDom('p', 'pForAuthor', "pForAuthor")
    const pForPages = factoryDom('p', 'pForAuthor', "pForAuthor")
    const changestatus = factoryDom('button', 'statusBtn', "btn btn-success")
    changestatus.setInnerText("Change Read Status")
    changestatus.setWidth('98%')

    const statusAnswer = factoryDom('span', 'statusBtn', "badge text-wrap")
    statusAnswer.setInnerText('')

    const pForStatus = factoryDom('p', 'pStatusID', "pStatusCLass")
    pForStatus.setInnerText('Have you read?: ')

    const getstatusAnswer = statusAnswer.element

    let countButtonClick = 0;
    function switcher() {
        countButtonClick++;
        if (countButtonClick % 2 === 1) {
            statusAnswer.setInnerText('Yes')
            statusAnswer.setBgColor("green")
        } else {
            statusAnswer.setInnerText('No')
            statusAnswer.setBgColor("red")
        }
    }

    if (read === true) {
        statusAnswer.setInnerText('Yes')
        statusAnswer.setBgColor("green")
        changestatus.element.addEventListener('click', switcher)
    } else {
        statusAnswer.setInnerText('No')
        statusAnswer.setBgColor("red")
        changestatus.element.addEventListener('click', switcher)
    }

    const btnForEdit = factoryDom('button', 'editInfoBtn', "btn btn-primary m-1")
    btnForEdit.setWidth("48%")
    btnForEdit.setElementAttribute('type', 'submit')
    btnForEdit.setInnerText("Edit Info")

    const btnForRemove = factoryDom('button', 'removeBook', "btn btn-danger")
    btnForRemove.setWidth("48%")
    btnForRemove.setElementAttribute('type', 'button')
    btnForRemove.setInnerText("Remove Book")

    // Remove book event listener
    btnForRemove.element.addEventListener('click', () => {
        deleteFunc(newModel)
    })

    // Edit book info event listener
    btnForEdit.element.addEventListener('click', () => {
        mainDisplayremover()
        editFromAppenders()
    })

    const pForTitleEdit = factoryDom('p', 'pForTitle', "f3-3")
    pForTitleEdit.setInnerText('Update your Book')

    const titleInputED = factoryDom('input', 'pForTitleInput', "form-control mb-2")
    titleInputED.setElementAttribute('placeholder', 'Book Title')

    const authorInputED = factoryDom('input', 'pForAuthorInput', "form-control mb-2")
    authorInputED.setElementAttribute('placeholder', 'Change Author')
    authorInputED.setElementAttribute('type', 'text')

    const pagesInputED = factoryDom('input', 'pForTitleInput', "form-control mb-2")
    pagesInputED.setElementAttribute('placeholder', "Number Of Pages")
    pagesInputED.setElementAttribute('type', 'number')

    const btnForEditInp = factoryDom('button', 'editInfoBtn', "btn btn-primary m-1")
    btnForEditInp.setElementAttribute('type', 'submit')
    btnForEditInp.setInnerText("Update Book")
    btnForEditInp.setWidth('97%')

    const btnForRemoveInp = factoryDom('button', 'removeBook', "btn btn-danger m-1")
    btnForRemoveInp.setElementAttribute('type', 'button')
    btnForRemoveInp.setInnerText("Delete Book")
    btnForRemoveInp.setWidth('9rem')
    btnForRemoveInp.element.style.float = 'right'

    // Remove book info edit form event listener
    btnForRemoveInp.element.addEventListener('click', () => {
        deleteFunc(newModel, index)
    })

    // Append edit form elements to the new model
    function editFromAppenders() {
        pForTitleEdit.appender(newModel)
        titleInputED.appender(newModel)
        authorInputED.appender(newModel)
        pagesInputED.appender(newModel)
        btnForEditInp.appender(newModel)
        btnForRemoveInp.appender(newModel)
    }

    // Remove edit form elements from the new model
    function editDisplayerRemover() {
        pForTitleEdit.removeElement(newModel)
        titleInputED.removeElement(newModel)
        authorInputED.removeElement(newModel)
        pagesInputED.removeElement(newModel)
        btnForEditInp.removeElement(newModel)
        btnForRemoveInp.removeElement(newModel)
    }

    // Append main elements to the new model
    function mainAppender(title, author, pages) {
        pForTitle.appender(newModel)
        pForAuthor.appender(newModel)
        pForPages.appender(newModel)
        changestatus.appender(newModel)
        pForStatus.appender(newModel)
        statusAnswer.appender(pForStatus.element)

        btnForEdit.appender(newModel)
        btnForRemove.appender(newModel)

        pForTitle.setInnerText(title)
        pForAuthor.setInnerText(`Author: ${author}`)
        pForPages.setInnerText(`Num of Pages: ${pages}`)
    }

    mainAppender(title, author, pages)

    // Remove main elements from the new model
    function mainDisplayremover() {
        pForTitle.removeElement(newModel)
        pForAuthor.removeElement(newModel)
        pForPages.removeElement(newModel)
        changestatus.removeElement(newModel)
        pForStatus.removeElement(newModel)
        statusAnswer.removeElement(pForStatus.element)

        btnForEdit.removeElement(newModel)
        btnForRemove.removeElement(newModel)
    }

    // Edit book info event listener
    btnForEditInp.element.addEventListener('click', (e) => {
        e.preventDefault()
        if (titleInputED.element.value === "") {
            titleInputED.element.value = title
        }
        if (authorInputED.element.value === "") {
            authorInputED.element.value = author
        }
        if (pagesInputED.element.value === "") {
            pagesInputED.element.value = pages
        }

        editDisplayerRemover()
        title = titleInputED.element.value
        author = authorInputED.element.value
        pages = pagesInputED.element.value

        mainAppender(title, author, pages)
    })

})

export default DOMCreator




// Factory function for form elements
function formFactoryDom(tag, id, className) {
    const element = document.createElement(tag)
    if (id) element.id = id
    if (className) element.className = className
    return element
}

// Set inner text for the element
HTMLElement.prototype.setInnerText = function (text) {
    this.textContent = text
}

// Set attribute for the element
HTMLElement.prototype.setElementAttribute = function (attr, value) {
    if (value !== undefined) {
        this.setAttribute(attr, value)
    }
}

// Create form element and handle its functionality
export const formCallDisplayer = (() => {
    const form = formFactoryDom('form', 'form', '')
    // Create and append book title label and input
    const titleLabel = formFactoryDom('label', '', 'form-label')
    titleLabel.setInnerText('Book Title')
    form.appendChild(titleLabel)

    const titleInput = formFactoryDom('input', 'titleForm', 'form-control')
    titleInput.setElementAttribute('type', 'text')
    titleInput.setElementAttribute('name', 'title')
    titleInput.setElementAttribute('required', 'true')
    titleInput.setElementAttribute('max', 20)
    form.appendChild(titleInput)

    // Create and append author label and input
    const authorLabel = formFactoryDom('label', '', 'form-label')
    authorLabel.setInnerText('Author')
    form.appendChild(authorLabel)

    const authorInput = formFactoryDom('input', 'authorForm', 'form-control')
    authorInput.setElementAttribute('type', 'text')
    authorInput.setElementAttribute('name', 'author')
    authorInput.setElementAttribute('required', 'true')
    form.appendChild(authorInput)

    // Create and append number of pages label and input
    const numPagesLabel = formFactoryDom('label', '', 'form-label')
    numPagesLabel.setInnerText('Number Of Pages')
    form.appendChild(numPagesLabel)

    const numPagesInput = formFactoryDom('input', 'numOfPagesForm', 'form-control')
    numPagesInput.setElementAttribute('type', 'number')
    numPagesInput.setElementAttribute('name', 'numPages')
    numPagesInput.setElementAttribute('required', 'true')
    form.appendChild(numPagesInput)

    // Create and append "Have you read the book?" section
    const question = formFactoryDom('h6', '', 'text-start')
    question.setInnerText('Have you Read the Book?')
    form.appendChild(question)

    // Create and append first radio input and label
    const formCheckDiv1 = formFactoryDom('div', '', 'form-check-inline')
    const yesRadio = formFactoryDom('input', 'yesRadio', 'form-check-input')
    yesRadio.setElementAttribute('type', 'radio')
    yesRadio.setElementAttribute('name', 'flexRadioDefault')
    formCheckDiv1.appendChild(yesRadio)

    const yesLabel = formFactoryDom('label', 'yesLable', 'form-check-label')
    yesLabel.setElementAttribute('for', 'flexRadioDefault1')
    yesLabel.setInnerText('Yes')
    formCheckDiv1.appendChild(yesLabel)
    form.appendChild(formCheckDiv1)

    // Create and append second radio input and label
    const formCheckDiv2 = formFactoryDom('div', '', 'form-check-inline')
    const noRadio = formFactoryDom('input', 'noRadio', 'form-check-input')
    noRadio.setElementAttribute('type', 'radio')
    noRadio.setElementAttribute('name', 'flexRadioDefault')
    noRadio.setElementAttribute('checked', 'true')
    formCheckDiv2.appendChild(noRadio)

    const noLabel = formFactoryDom('label', 'noLabel', 'form-check-label')
    noLabel.setElementAttribute('for', 'flexRadioDefault2')
    noLabel.setInnerText('No')
    formCheckDiv2.appendChild(noLabel)
    form.appendChild(formCheckDiv2)

    // Create and append submit button
    const submitButton = formFactoryDom('button', 'addBookFormBtn', 'btn btn-success')
    submitButton.setElementAttribute('type', 'submit')
    submitButton.setInnerText('Add Book')
    submitButton.style.width = '11rem'
    form.appendChild(submitButton)

    const cancelAddBtn = formFactoryDom('button', 'cancelAdd', "btn btn-danger m-1")
    cancelAddBtn.setElementAttribute('type', 'button')
    cancelAddBtn.setInnerText("Cancel")
    cancelAddBtn.style.width = '5rem'
    form.appendChild(cancelAddBtn)

    cancelAddBtn.addEventListener('click', () => {
        bookSpace.removeChild(form)
        form.reset()
        refreshPage()
    })

    // Append the form to the container
    bookSpace.appendChild(form)

    return { form, yesRadio }
})()



// Display the Add Book button and handle its functionality
export const addbookBtnDisplay = (() => {

    const emptyModel = factoryDom('div', 'emptyModel', "emptyModel")
   
    const addBookBtn = factoryDom('button', 'addBook', "addBookBtnInBookSpace")
    addBookBtn.setInnerText('Add a new Book')
    addBookBtn.setBgColor('rgb(79, 21, 21)')

    const deleteAllBooks = factoryDom('button', 'deleteAllBtn', "btn btn-danger")
    deleteAllBooks.setInnerText('Delete All Books')
    

    
        // addBookBtn.appender(emptyModel)
     

    function newFormHandler(){
        let form = formCallDisplayer.form
        emptyModel.element.remove()
        bookSpace.append(form)
     
        form.scrollIntoView({ behavior: 'smooth' })
    }

    function removeEmptyModel(){
        emptyModel.element.remove()
    }

    function appendNew(){
        emptyModel.appender(bookSpace)
        emptyModel.element.append(addBookBtn.element)
        emptyModel.element.append(deleteAllBooks.element)
    }

    addBookBtn.element.addEventListener('click', () => {
        newFormHandler()
    })

 return{emptyModel, newFormHandler,removeEmptyModel,appendNew}
})()
