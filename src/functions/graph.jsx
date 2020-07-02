export const getLabel = (dado) => {
    var currentDate = ''
    const label = []

    dado.map((it) => {
        const date = getDate(it)
        const time = getTime(it)

        if(date === currentDate) label.push(time)
        else{
            label.push([time,date])
            currentDate = date
        }
    })
    return label
}

const getDate = (dado) => localString(dado,0)
const getTime = (dado) => localString(dado,1).substring(0,5)

const localString = (dado, i) => {
    if(typeof dado == 'object') dado = dado.toNumber()
    const dataInString =  new Date(dado).toLocaleString()
    return dataInString.split(' ')[i]
}