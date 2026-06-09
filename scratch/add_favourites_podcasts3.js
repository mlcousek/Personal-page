const fs = require('fs');
let code = fs.readFileSync('scripts/podcasts.js', 'utf8');

let regex = /const PODCAST_EPISODES = (\[[\s\S]*?\]);/;
let match = code.match(regex);
if(match) {
  let items;
  eval('items = ' + match[1]);
  items.forEach((item, index) => {
    if(item.favourite === undefined) item.favourite = false;
    if (index === 0) item.favourite = true;
  });
  let newItemsStr = JSON.stringify(items, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  code = code.replace(match[1], newItemsStr);
  fs.writeFileSync('scripts/podcasts.js', code);
  console.log('Updated scripts/podcasts.js');
} else {
  console.log('Could not parse PODCAST_EPISODES with updated regex.');
}
