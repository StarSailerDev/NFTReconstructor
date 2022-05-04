const sharp = require("sharp");
const fs = require('fs')


//Input Your Layers Here !ORDER MATTERS!
const layers =
    [
        'Background',
        'Skin',
        'Outfit',
        'Mouth',
        'Expressions',
        'Eyeglasses',
        'Bandana',
        'Hat',
    ];
//how many nfts you wish to reconstruct
    const amountToDo = 4;

const layerFolderPath = "Layers";
const rarityExtension = "#10";
const fileExtension = ".png";




async function createImg(layersToPutTogheter, num) {
    await sharp(layersToPutTogheter[0].input)
        .composite(layersToPutTogheter)
        .toFile(`./Output/Images/${num}${fileExtension}`);
    console.log(`Image ${num} has been created`)
}

function generateArt() {

    for (let index = 0; index < amountToDo; index++) {
        let imageToAdd = [];
        fs.readFile(`./Output/Metadata/${index}.json`, 'utf-8', (err, jsonString) => {
            if (err) {
                console.log(err);
            } else {
                const data = JSON.parse(jsonString);
                for (let index = 0; index < data.attributes.length; index++) {
                    imageToAdd.push(data.attributes[index].value);
                }
                const finalLayer =
                [
                    `./${layerFolderPath}/${layers[0]}/${imageToAdd[0]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[1]}/${imageToAdd[1]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[2]}/${imageToAdd[2]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[3]}/${imageToAdd[3]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[4]}/${imageToAdd[4]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[5]}/${imageToAdd[5]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[6]}/${imageToAdd[6]}${rarityExtension}${fileExtension}`,
                    `./${layerFolderPath}/${layers[7]}/${imageToAdd[7]}${rarityExtension}${fileExtension}`,

                ]
                    .map(file => ({ input: file }));
            createImg(finalLayer, index);
            console.log(`Image ${index} has been queued`)
            }
        })
    }
};
generateArt();
