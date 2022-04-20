const fs = require('fs')
const {resolve} = require('path')
const date = new Date()
const hours = date.getHours()

const currentTime = (timeParam) => {
    let time = ''
    
    const morning = hours >= 6 && hours <= 12
    const daytime = hours >= 12 && hours <= 18
    const nigth = hours >= 18 && hours <= 24
    const dawn = hours >= 0  && hours <= 5
    
    if(morning) time = 'morning';
    if(daytime) time = 'daytime';
    if(nigth || dawn) time = 'nigth';
    
    return {
        current: time === timeParam ? true : false,
        path: time
    }
}
const generateImage = (path) => {
        return fs.writeFile('README.md', path,(err) => {
            if(err) {
                console.log(err);
            }
        });
}


const generateRandomNumber = (max, min) => {
    return Math.random() * (max - min) + min
}


const generateNumber = () => {
    const pathDir = currentTime().path
    let qtd = 0
    fs.readdir(resolve(__dirname, 'uploads', pathDir), (err, files) => {
          
        files.forEach((_, index, array) => {
            qtd = array.length
            })
    
      })
    const value = generateRandomNumber(10, 1)
    return value
}
    
const generateRandomImage = () => {

    const pathDir = currentTime().path
    const current = (time) => currentTime(time).current
    const path = `![name-of-you-image](./uploads/${pathDir}/${generateNumber().toFixed()}.jpg)`
   
    if(current('morning')) return generateImage(path)
    if(current('daytime')) return generateImage(path)
    if(current('nigth')) return generateImage(path)
    

}

generateRandomImage();