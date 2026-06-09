const fs = require('fs');
let code = fs.readFileSync('scripts/podcasts.js', 'utf8');

let startIdx = code.indexOf('const PODCAST_EPISODES = [');
let endIdx = code.indexOf('];\n\nfunction groupByDate');

if(startIdx !== -1 && endIdx !== -1) {
  endIdx += 1; // include ']'
  let arrayStr = code.substring(startIdx + 'const PODCAST_EPISODES = '.length, endIdx);
  let items;
  eval('items = ' + arrayStr);
  
  items.forEach((item, index) => {
    if(item.favourite === undefined) item.favourite = false;
    if (index === 0) item.favourite = true;
  });
  
  let newItemsStr = JSON.stringify(items, null, 2).replace(/"([a-zA-Z0-9_]+)":/g, '$1:');
  code = code.substring(0, startIdx + 'const PODCAST_EPISODES = '.length) + newItemsStr + code.substring(endIdx);
  fs.writeFileSync('scripts/podcasts.js', code);
  console.log('Updated scripts/podcasts.js successfully.');
} else {
  console.log('Could not find start or end index.');
}
