const fs = require('fs')
const {resolve} = require('path')
const date = new Date()
const hours = date.getHours()
const currentTime = (timeParam) => {
    let time = ''
    
    const morning = hours >= 6 && hours <= 12
    const daytime = hours >= 12 && hours <= 18
    const nigth = hours >= 18 && hours <= 24
    const dawn = hours >= 1 && hours < 5

    
    if(morning) time = 'morning';
    if(daytime) time = 'daytime';
    if(nigth || dawn) time = 'nigth';
    
    return {
        current: time === timeParam ? true : false,
        path: time
    }
}
const generateImage = (path) => {
    console.log(path);
    return fs.readFile('ABOUTME.md', (error, buff) => {
            fs.writeFile('README.md', buff + path ,(err) => {
            if(err) {
                console.log(err);
            }
        });
    })    
    
    
}


const generateRandomNumber = (max, min) => Math.random() * (max - min) + min


const generateRandomImage = () => {
    const value = generateRandomNumber(10, 1)
    const pathDir = currentTime().path
    const current = (time) => currentTime(time).current
    console.log(pathDir)

    const path = `<img src="./uploads/${pathDir}/${value.toFixed()}.jpg" width="600" height="300">`
   

    if(current('morning')) return generateImage(path)
    if(current('daytime')) return generateImage(path)
    if(current('nigth')) return generateImage(path)
    

}

generateRandomImage();