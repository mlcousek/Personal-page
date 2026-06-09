const fs = require('fs');

function addFavouriteField(filePath, arrayName) {
  let code = fs.readFileSync(filePath, 'utf8');
  let regex = new RegExp(`const ${arrayName} = (\\[[\\s\\S]*?\\]);\\n\\n`);
  let match = code.match(regex);
  if(match) {
    let items;
    eval('items = ' + match[1]);
    
    items.forEach((item, index) => {
      if(item.favourite === undefined) {
        item.favourite = false;
      }
      // For testing purposes, make the first one favourite: true
      if (index === 0) {
        item.favourite = true;
      }
    });

    let newItemsStr = JSON.stringify(items, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
    code = code.replace(match[1], newItemsStr);
    fs.writeFileSync(filePath, code);
    console.log(`Updated ${filePath}`);
  } else {
    console.log(`Could not find array ${arrayName} in ${filePath}`);
  }
}

addFavouriteField('scripts/videos.js', 'VIDEOS');
addFavouriteField('scripts/podcasts.js', 'PODCASTS');
