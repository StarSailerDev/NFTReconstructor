const fs = require('fs');
var replace = require("replace");
const dir = 'Output/Metadata';

//put your new ipfs link here
const newURI = "https://ikzttp.mypinata.cloud/ipfs/QmYDvPAXtiJg7s8JdRBSLWdgSphQdac8j1YuQNNxcGE1hg/";
//put the old ipfs link here
const oldURI = "";
//put your new name here
const newName = "test";
//put your old name here
const oldName = "ill Face Mask";
//put the number of json files
let fileCount = 9;



for (let index = 0; index <= fileCount; index++) {

    const fileName = index + '.json';

    replace({
        regex: oldName,
        replacement: newName,
        paths: ["Output/Metadata/" + fileName],
        recursive: false,
        silent: false,
    });

    replace({
        regex: '"image":"' + oldURI,
        replacement: `"image": "${newURI}${index}.png`,
        paths: ["Output/Metadata/" + fileName],
        recursive: false,
        silent: false,
    });
}
