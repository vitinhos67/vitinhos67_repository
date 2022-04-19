const fs = require('fs')
const date = new Date()
const hours = 15
async function generateRandomImage() {
    
    const morning = hours > 6 && hours < 12
    const daytime = hours > 12 && hours < 18
    const nigth = hours > 18 && hours < 5
    if(daytime) {
        fs.readFile('./uploads/bom-dia/34.jpg',  (err, data) => {
            
            console.log(data)
            
            fs.writeFile('README.md', data, (err) => {
                if(err) {
                    console.log(err);
                }
            });
             
        })
    }
   
    
    // fs.readdir('./uploads', (err, files) => {
    //     if (err)
    //       console.log(err);
    //     else {
    //       console.log("\nCurrent directory filenames:");
    //       files.forEach(file => {
    //         console.log(file);
    //       })
    //     }
    //   })
}

generateRandomImage()

