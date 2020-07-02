export const alteraData = (data) => {
    const pressureCount = data.sistole.length
    var newData = []
    for(var i=0; i< pressureCount; i++){
        var d = data.date[i]
        if(typeof d === 'object') d = d.toNumber()
        
        const date = new Date(d).toLocaleString()
        newData.push({
            sistole: data.sistole[i], 
            diastole: data.diastole[i], 
            date: getDate(date),
            time: getTime(date)
        })
    }
    return newData
}

const getDate = (date) => {
    return date.split(' ')[0]
}

const getTime = (date) => {
    const time = date.split(' ')[1]
    return time.substring(0,5)
}