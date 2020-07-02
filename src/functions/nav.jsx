export const trocaClass = () => {
    const div = document.querySelector('div#navbarsExample07')
    const show = div.classList.contains('show')
    show? div.classList.remove('show') : div.classList.add('show')
}

export const addActive = (isDoctor) => {
    const pages = searchPages()
    const page = getPage()

    if(pages.indexOf(page) !== -1){
        const destino = document.querySelector(`a#${page}`)
        if(destino) destino.classList.add('active')
    }else{
        const destino = document.querySelector(`a#${isDoctor? 'pacientes': 'home'}`)
        destino.classList.add('active')
    }
}

export const trocaActive = (newPage,isDoctor) => {
    const pages = searchPages()
    const oldPage = getPage()

    if(pages.indexOf(newPage) !== -1){
        var origem;
        if(pages.indexOf(oldPage) !== -1) origem = document.querySelector(`a#${oldPage}`)
        else origem = document.querySelector(`a#${isDoctor? 'pacientes': 'home'}`) 
        
        const destino = document.querySelector(`a#${newPage}`)

        origem.classList.remove('active')
        destino.classList.add('active')
    }
}

const searchPages = () => {
    const allPages = document.querySelectorAll('.pages')
    const pages = []
    for(var i=0; i < allPages.length; i++) pages.push(allPages[i].id)
    return pages
}

const getPage = () => {
    const url = document.URL.split('/')
    const page = url[url.length-1]
    return page
}
