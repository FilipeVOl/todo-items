import createTask from "./task"
import getProjectInput, { getTaskForm, setPriority, setTaskToProject } from "./DOM"
import { removeTask } from "./DOM"
import { createCheckbox } from "./DOM"
import { createAddButton } from "./DOM"

export const createTheme = () => {
    const themeAdd = document.createElement('button');
    themeAdd.textContent = 'Add theme';
    themeAdd.classList.add('theme-add');

    const content = document.querySelector('#content');
    const side = document.querySelector('#side');
    side.appendChild(themeAdd);

    themeAdd.addEventListener('click', () => {
        side.removeChild(themeAdd);

        const themeCreateTab = document.createElement('div');
        themeCreateTab.classList.add('theme-tab');

        const themeName = document.createElement('input');
        themeName.classList.add('theme-name');
        themeName.placeholder = 'Theme name';

        const addButton = createAddButton(content, side, themeName, themeCreateTab, themeAdd);

        themeCreateTab.appendChild(addButton);
        themeCreateTab.appendChild(themeName);
        side.appendChild(themeCreateTab);
    });
};
