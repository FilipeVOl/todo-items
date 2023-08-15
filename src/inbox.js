
const InboxPage = () => {
    const content = document.querySelector('#content')
    const pagecontent = document.createElement('div')

    const title = document.createElement('h1')
    title.textContent = 'Inbox'
    title.classList.add('inbox-title')
    pagecontent.appendChild(title)

    content.appendChild(pagecontent)


}

export default InboxPage