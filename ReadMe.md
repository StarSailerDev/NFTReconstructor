# NFTReconstructor

This tool is pretty rough, it needs quite few improvements to be a bit more accessible

There's no config file, just tweak the values inside of update.js and reconstruct.js if neccessary (you need to manually input the amount of files)

## how do i use this?
first run 
npm install

# To Split _metadata.json file use
node Metadata.js

# To Reconstruct images from metadata files run
node Reconstruct.js

# To update the metadata with a diffrent name and ipfs link use
node Update.js