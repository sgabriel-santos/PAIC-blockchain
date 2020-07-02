export const transformToObject = (data,pressures,account) => {
    var newData = {
        name: data[0],
        isDoctor: data[1],
        id: data[2],
        pressureCount: data[3],
        pacientes: data[4],
        pressures, 
        account
    }

    return newData
}

export const podePage = (isDoctor) => {
    const url = document.URL.split('/')
    var page = url[url.length-1]
    
    if(page=='home' || page=='data'){
        if(isDoctor) return false
        return true
    }
    if(page=='pacientes' && !isDoctor) return false
    return true
}