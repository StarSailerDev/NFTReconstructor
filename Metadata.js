const fs = require('fs')

function createMetadata()
{
    let data = [''];
    fs.readFile('./_metadata.json', 'utf-8', (err, jsonString) => {
        if (err) {
            console.log(err);
        } else {
            data = JSON.parse(jsonString);
            for (let index = 0; index < data.length; index++) {
                const result = JSON.stringify(data[index]);
                fs.writeFile(`./Output/Metadata/${index}.json`, result, err =>
                {
                  if(err)
                  {
                      console.log(err);
                  } else
                  {
                      console.log(`file ${index}.json has been successfully created`)
                  }
                }
                )
            }
        }
    })

}

createMetadata();