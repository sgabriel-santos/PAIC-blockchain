export const transformaEmMili = (date,time) => {
    const dateInMili = Date.parse(`${date} ${time}`)
    return dateInMili
}

export const getTime = () => {
    const date = new Date()
    var hour = date.getHours()
    if(hour < 10) hour = `0${hour}` 
    var minutes = date.getMinutes()
    if(minutes < 10) minutes = `0${minutes}`
    
    return `${hour}:${minutes}`
}

export const getDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    var month = date.getMonth()+1
    if(month<10) month = `0${month}`
    var day = date.getDate()
    if(day<10) day = `0${day}`
    
    return `${year}-${month}-${day}`
}