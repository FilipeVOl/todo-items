import { format, formatDistance, formatRelative, subDays
} from 'date-fns'

const createDueDate = () => {
    const content = document.querySelector('#content')
    const pagecontent = document.createElement('div')
    pagecontent.classList.add('page-content')
    const container = document.createElement('div')
    container.classList.add('container')

   const date = format(new Date(), "'Today is a '")

    console.log(date)

}

export default createDueDate