const fs = require('fs')
const date = new Date()
const hours = 15
async function generateRandomImage() {
    
    const morning = hours > 6 && hours < 12
    const daytime = hours > 12 && hours < 18
    const nigth = hours > 18 && hours < 5
    if(daytime) {
        const path = "![name-of-you-image](./uploads/bom-dia/34.jpg)"
        fs.writeFile('README.md', path,(err) => {
                if(err) {
                    console.log(err);
                }
            });
    }
}

generateRandomImage();