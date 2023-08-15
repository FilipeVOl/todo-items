const createTask = () => {
    const content = document.querySelector('#content')
    const pagecontent = document.createElement('div')
    pagecontent.classList.add('page-content')
    const container = document.createElement('div')
    container.classList.add('container')

    const form = document.createElement('form')

    const nameInput = document.createElement('input')
    nameInput.type = 'text'
    nameInput.placeholder = 'Enter task name'
    form.appendChild(nameInput)

    const descInput = document.createElement('input')
    descInput.type = 'text'
    descInput.placeholder = 'Description'
    form.appendChild(descInput)

    container.appendChild(form)
    pagecontent.appendChild(container)
    content.appendChild(pagecontent)

}

export default createTask