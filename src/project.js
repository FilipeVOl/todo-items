import createTask from "./task"
import getProjectInput, { getTaskForm, setPriority, setTaskToProject } from "./DOM"
import { removeTask } from "./DOM"
import { createCheckbox } from "./DOM"

const createProject = () => {
    
const content = document.querySelector('#content')
const pagecontent = document.querySelector('.page-content')

// Make a project div able to store the todos inside of it
const project = document.querySelector('#project')
project.classList.add('project-container')


let divCount = 0

const createButton = document.querySelector('#project-creator').addEventListener('click',
() => {

const taskDiv = document.createElement('div');

divCount++
taskDiv.classList.add(`task-div-${divCount}`)

const style = document.createElement('style');
        style.textContent = `
            .task-div-${divCount} {
                background-color: lightblue;
            }
        `;
        document.head.appendChild(style);



pagecontent.appendChild(taskDiv)
pagecontent.appendChild(project)
content.appendChild(pagecontent)

getTaskForm(divCount)
removeTask(divCount)
setPriority(divCount)
console.log(taskDiv)
})
}

export default createProject
