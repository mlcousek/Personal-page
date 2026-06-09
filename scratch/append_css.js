const fs = require('fs');
const css = `
.favourite-star {
  position: absolute;
  top: 0.7rem; right: 0.7rem;
  font-size: 1.5rem;
  color: #fde68a;
  text-shadow: 0 2px 4px rgba(0,0,0,0.4);
  z-index: 10;
  line-height: 1;
}
`;
fs.appendFileSync('assets/styles/videos.css', css);
fs.appendFileSync('assets/styles/podcasts.css', css);
