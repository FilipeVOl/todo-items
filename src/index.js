import InboxPage from './inbox.js'
import createTask from './task.js'
import createDueDate from './duedate.js'
import createProject from './project.js'
import './style.css'
import { setTaskToProject, switchTab } from './DOM.js'
import createCheckbox from './DOM.js'
import getProjectInput from './DOM.js'
import { removeTask } from './DOM.js'
import { createTheme } from './theme.js'

// Create the todos 
// const myTodo = createTask('Kill', 'Kill someone', 'Today', 'NOW')
// console.log('Show me properties of myTodo...', myTodo )
InboxPage()
let isInboxPage = true;

export const setIsInboxPage = (value) => {
    isInboxPage = value;
};

export const addThemeDivToContent = (themeName) => {
    const themeDiv = document.createElement('div');
    themeDiv.classList.add('theme-div');
    themeDiv.textContent = themeName;

    themeDiv.addEventListener('click', () => {
        if (!isInboxPage) {
            loadInboxPage();
        }
    });

    const content = document.querySelector('#content');
    content.appendChild(themeDiv);
};

const task = () => {
createProject()
switchTab()
}

task()
createTheme()


