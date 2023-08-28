import { add } from "date-fns";
import createProject from "./project";
import InboxPage from "./inbox";
import { addThemeDivToContent } from ".";



// USED FOR PROJECT.JS, CANCELS THE DIV OF A TASK CREATION
export function removeTask (divCount) {
    const pagecontent = document.querySelector('.page-content')
    const taskDiv = document.querySelector(`.task-div-${divCount}`)

    const removeButton = document.createElement('button')
    removeButton.classList.add('removeButton')
    removeButton.textContent = 'Cancel'

    removeButton.addEventListener('click', () => {
         pagecontent.removeChild(taskDiv)
    })
    taskDiv.appendChild(removeButton)
}

export const createCheckbox = (divCount) => {
    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'
    checkbox.name = 'check'
    checkbox.value = 'checked'

    return checkbox
}

//CREATES A TASK FORM TO ADD NAME, DESCRIPTION AND SET PRIORITY
export const getTaskForm = (divCount, checkbox) => {
    const taskName = document.createElement('input')
    const taskDesc = document.createElement('input')
    const submitButton = document.createElement('button')
    const taskDiv = document.querySelector(`.task-div-${divCount}`)
    const pagecontent = document.querySelector('.page-content')

    taskName.type = 'text'
    taskName.name = 'task-name'
    taskName.placeholder = 'Task name'

    taskDesc.type = 'text'
    taskDesc.name = 'task-desc'
    taskDesc.placeholder = 'Description'

    submitButton.textContent = 'Create your task'

    submitButton.addEventListener('click', () => {
        const inputTaskName = taskName.value
        const inputTaskDesc = taskDesc.value
        const newProject = document.createElement('div')
        newProject.classList.add(`projdiv-${divCount}`)
        const checkbox = createCheckbox()

        const nameParagraph = document.createElement('p');
        nameParagraph.textContent = `Nome: ${inputTaskName}`;
    
        const descParagraph = document.createElement('p');
        descParagraph.textContent = `Descrição: ${inputTaskDesc}`;    

        const style = document.createElement('style');
        style.textContent = `
            .projdiv-${divCount} {
                background-color: lightblue;
            }
        `;

        newProject.appendChild(nameParagraph)
        newProject.appendChild(descParagraph)
        pagecontent.appendChild(newProject)
        document.head.appendChild(style)

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove task';
        removeButton.addEventListener('click', () => {
            project.removeChild(newProject)
            pagecontent.removeChild(checkbox)
        });
        newProject.appendChild(removeButton)
        pagecontent.appendChild(checkbox)
        const project = document.querySelector('#project')
        project.appendChild(newProject)
        pagecontent.removeChild(taskDiv)
        createCheckbox(divCount)

    })

    taskDiv.appendChild(submitButton)
    taskDiv.appendChild(taskName)
    taskDiv.appendChild(taskDesc)
}

export const setPriority = (divCount) => {
    const Priority = document.createElement('button')
    Priority.classList.add('task-prio')
    const newProject = document.querySelectorAll(`.projdiv-${divCount}`)
    let priorityLevel = 0
    Priority.addEventListener('click', () => {
        
        priorityLevel = (priorityLevel + 1) % 3

        switch (priorityLevel) {
            case 0:
                Priority.textContent = 'Low'
                Priority.style.color = 'white'
                Priority.style.backgroundColor = 'green'
                break;
            case 1:
                Priority.textContent = 'Medium'
                Priority.style.color = 'black'
                Priority.style.backgroundColor = 'yellow'
                break;
            case 2:
                Priority.textContent = 'High'
                Priority.style.color = 'black'
                Priority.style.backgroundColor = 'red'
                break;
            default:
                break;

        }
        console.log(Priority)

    })
}

export const createAddButton = (content, side, themeName, themeCreateTab, themeAdd) => {
    const addButton = document.createElement('button');
    addButton.classList.add('add-button');
    addButton.textContent = 'Add';

    addButton.addEventListener('click', () => {
        content.innerHTML = '';
        const headTitle = document.createElement('h1');
        headTitle.textContent = themeName.value;

        content.appendChild(headTitle);
        side.removeChild(themeCreateTab);
        side.appendChild(themeAdd);

        addThemeDivToContent(themeName.value)
    });

    return addButton;
};

export const switchTab = (themeName) => {
    const tabButton = document.createElement('div')
    tabButton.classList.add('tab-button')
    const content = document.querySelector('#content')

    const div1 = document.createElement('div')
    const projectTab = document.createElement('div')

    div1.textContent = 'Inbox'
    div1.setAttribute('id', 'inbox-btn')
    div1.classList.add('tab')

    projectTab.setAttribute('id', 'project-btn')
    projectTab.classList.add('tab')
    projectTab.textContent = themeName

    div1.addEventListener('click', () => {
        clearContent()
        InboxPage()
    })

    tabButton.appendChild(div1)
    tabButton.appendChild(projectTab)

    content.appendChild(tabButton)
    console.log (projectTab)

}

function clearContent () {
    const content = document.querySelector('#content')
    const pageContent = document.querySelector('.page-content')
    if(pageContent) {
        content.removeChild(pageContent)
    }
} 





export default getProjectInput
