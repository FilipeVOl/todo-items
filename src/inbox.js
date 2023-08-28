import { setIsInboxPage } from "./index";

const InboxPage = () => {
    const content = document.querySelector('#content')
    const pagecontent = document.createElement('div')
    pagecontent.classList.add('page-content')

    const title = document.createElement('h1')
    title.textContent = 'Inbox'
    title.classList.add('inbox-title')
    pagecontent.appendChild(title)

    content.appendChild(pagecontent)
}

const loadInboxPage = () => {
    setIsInboxPage(true)
    const content = document.querySelector('#content');
    content.innerHTML = '';
    InboxPage();
};

export default InboxPage