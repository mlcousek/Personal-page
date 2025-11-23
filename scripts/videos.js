/**
 * Video Episodes Dataset
 */

const VIDEOS = [
  // 20 Nov 2025
  {
    id: '2025-11-20-1',
    date: '2025-11-20',
    title: '#29 LEGS:ON podcast - SPECIÁL Na co se těšíme v roce 2026?',
    show: 'LEGS:ON | Cyklistický podcast',
    totalMinutes: 32,
    cover: 'https://i.ytimg.com/vi/vAtwHh5o7z0/maxresdefault.jpg',
    platform: 'youtube',
    link: 'https://www.youtube.com/watch?v=vAtwHh5o7z0',
    tags: ['Czech', 'Cycling', 'Special'],
    status: 'finished' // Assumed finished based on "watched at least half" requirement
  },

  // 11 Nov 2025
  {
    id: '2025-11-11-1',
    date: '2025-11-11',
    title: 'Tadej Pogačar Interview › Cyclist Magazine Podcast [ft. Fahri Diner]',
    show: 'Cyclist',
    totalMinutes: 88,
    cover: 'https://i.ytimg.com/vi/ztqycLMnQgk/maxresdefault.jpg',
    platform: 'youtube',
    link: 'https://www.youtube.com/watch?v=ztqycLMnQgk',
    tags: ['English', 'Cycling', 'Interview', 'Tour de France'],
    status: 'finished'
  },
  {
    id: '2025-11-11-2',
    date: '2025-11-11',
    title: 'Je to 7 let... Co dělám teď a jaké mám plány? l Jirka Král',
    show: 'RestDay',
    totalMinutes: 83,
    cover: 'https://i.ytimg.com/vi/FxeeAjUJsZg/maxresdefault.jpg',
    platform: 'youtube',
    link: 'https://www.youtube.com/watch?v=FxeeAjUJsZg',
    tags: ['Czech', 'Lifestyle', 'Vlog', 'Interview'],
    status: 'finished'
  },

  // 10 Nov 2025
  {
    id: '2025-11-10-2',
    date: '2025-11-10',
    title: 'Horolezec Trávniček: Výstup na Everest môže vyjsť až na 100 000 eur!',
    show: 'Diskusný klub so Šimonom Žďárským',
    totalMinutes: 34,
    cover: 'https://i.ytimg.com/vi/ucwBXQeRN-g/maxresdefault.jpg',
    platform: 'youtube',
    link: 'https://www.youtube.com/watch?v=ucwBXQeRN-g',
    tags: ['Slovak', 'Mountaineering', 'Everest', 'Interview'],
    status: 'finished'
  }
];

/** Utility: group episodes by date descending */
function groupByDateDescending(list){
  const map = new Map();
  list.forEach(ep=>{ if(!map.has(ep.date)) map.set(ep.date, []); map.get(ep.date).push(ep); });
  return Array.from(map.entries()).sort((a,b)=> b[0].localeCompare(a[0]));
}

function collectAllTags(list){
  const s = new Set();
  list.forEach(e=>{ if(Array.isArray(e.tags)) e.tags.forEach(t=>s.add(t)); });
  return Array.from(s).sort((a,b)=>a.localeCompare(b));
}

function applyFiltersAndSort({filter='all', tag='all', sort='date-desc'} = {}){
  let list = [...VIDEOS];
  // apply quick filters
  switch(filter){
    case 'in-progress': list = list.filter(e=>e.status==='in-progress'); break;
    case 'finished': list = list.filter(e=>e.status==='finished'); break;
    case 'favorites': list = list.filter(e=>e.tags && e.tags.includes('favorite')); break;
    case '2025': list = list.filter(e=>e.date && e.date.startsWith('2025-')); break;
    default: break;
  }
  // tag filter
  if(tag && tag!=='all') list = list.filter(e=>Array.isArray(e.tags) && e.tags.includes(tag));

  // sort
  switch(sort){
    case 'show-asc': list.sort((a,b)=> (a.show||'').localeCompare(b.show||'', undefined, {sensitivity:'base'})); break;
    case 'tag-asc': list.sort((a,b)=> {
      const ta = (a.tags && a.tags[0]) || '';
      const tb = (b.tags && b.tags[0]) || '';
      return ta.localeCompare(tb, undefined, {sensitivity:'base'}) || (a.date||'').localeCompare(b.date||'');
    }); break;
    case 'date-desc':
    default:
      list.sort((a,b)=> (b.date||'').localeCompare(a.date||''));
  }

  return list;
}

function renderVideos(opts){
  const container = document.getElementById('video-grid');
  if(!container) return;
  const filterBar = document.getElementById('video-filters');
  const tagSelect = document.getElementById('video-tag');
  const sortSelect = document.getElementById('video-sort');
  const filter = (opts && opts.filter) || (filterBar && filterBar.querySelector('button.active') && filterBar.querySelector('button.active').getAttribute('data-filter')) || 'all';
  const tag = (opts && opts.tag) || (tagSelect && tagSelect.value) || 'all';
  const sort = (opts && opts.sort) || (sortSelect && sortSelect.value) || 'date-desc';

  const list = applyFiltersAndSort({filter, tag, sort});

  // grouped by date
  const grouped = groupByDateDescending(list);
  container.innerHTML = grouped.map(([date, eps])=>{
    const dateDisplay = new Date(date).toLocaleDateString('cs-CZ',{day:'numeric',month:'numeric',year:'numeric'});
    const videoCards = eps.map(renderCard).join('');
    const gridClass = eps.length > 1 ? 'videos-for-date' : '';
    return `<div class="date-group">
      <h3 class="date-heading">${dateDisplay}</h3>
      <div class="${gridClass}">${videoCards}</div>
    </div>`;
  }).join('');
  updateCount(list.length);
  
  // Apply uniform height after rendering and images load
  setTimeout(() => {
    applyUniformHeight();
  }, 200);
  
  // Also apply when all images are loaded
  const images = container.querySelectorAll('.video__img');
  let loadedImages = 0;
  const totalImages = images.length;
  
  if (totalImages === 0) {
    // No images, apply height immediately
    setTimeout(() => applyUniformHeight(), 100);
  } else {
    images.forEach(img => {
      if (img.complete) {
        loadedImages++;
        if (loadedImages === totalImages) {
          setTimeout(() => applyUniformHeight(), 50);
        }
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setTimeout(() => applyUniformHeight(), 50);
          }
        });
        img.addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            setTimeout(() => applyUniformHeight(), 50);
          }
        });
      }
    });
  }
}

function renderCard(ep){
  // Determine platform
  const platform = ep.platform || 'generic';
  
  // Create platform icon
  const platformIcon = platform === 'spotify' ? '<div class="platform-icon spotify" title="Spotify"></div>' :
                       platform === 'youtube' ? '<div class="platform-icon youtube" title="YouTube"></div>' :
                       '';
  
  // Handle status and progress
  const total = ep.totalMinutes || 0;
  let statusTag, progressBar;
  
  if (ep.status === 'finished') {
    statusTag = '<span class="video__tag tag-finished">FINISHED</span>';
    progressBar = '<div class="progress"><div class="progress-bar done" style="width:100%;"></div></div>';
  } else if (ep.status === 'in-progress' && ep.minutesLeft) {
    const progress = Math.max(0, Math.min(100, 100 - Math.round((ep.minutesLeft / (total || 1)) * 100)));
    statusTag = `<span class="video__tag tag-progress">${ep.minutesLeft} min left</span>`;
    progressBar = `<div class="progress"><div class="progress-bar" style="width:${progress}%;"></div></div>`;
  } else {
    // No status property or status is something else - show episode length
    statusTag = total > 0 ? `<span class="video__tag">${total} min</span>` : '';
    progressBar = '<div class="progress"><div class="progress-bar" style="width:0%;"></div></div>';
  }

  // Duration display
  const durationDisplay = total > 0 ? `<div class="video-duration">${total} minutes</div>` : '';

  // image fallback: if the image fails to load, replace with a placeholder service
  const imgSrc = ep.cover || 'https://via.placeholder.com/300x300?text=No+Cover';
  const imgFallback = 'https://via.placeholder.com/300x300?text=No+Cover';

  const descriptionHtml = ep.description ? `<p class="video__desc">${ep.description}</p>` : '';
  const tagsHtml = Array.isArray(ep.tags) && ep.tags.length
    ? `<ul class="video-tags">${ep.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join('')}</ul>`
    : '';

  return `<article class="video" data-platform="${platform}">
    <img loading="lazy" class="video__img" src="${imgSrc}" alt="Cover of ${escapeHtml(ep.title)}" onerror="this.onerror=null;this.src='${imgFallback}';">
    ${statusTag}
    ${platformIcon}
    <div class="video-content">
      <h2 class="video__title"><a href="${ep.link || '#'}" target="_blank" rel="noopener">${escapeHtml(ep.title)}</a></h2>
      <p class="video__host">${escapeHtml(ep.show)}</p>
      ${descriptionHtml}
      ${durationDisplay}
      ${tagsHtml}
      ${progressBar}
    </div>
  </article>`;
}

// Function to apply uniform height to all video cards
function applyUniformHeight() {
  const allVideos = document.querySelectorAll('.video');
  if (allVideos.length === 0) return;
  
  // Reset heights to auto to get natural heights
  allVideos.forEach(card => {
    card.style.height = 'auto';
  });
  
  // Force reflow to ensure heights are calculated
  document.body.offsetHeight;
  
  // Find the tallest card after a small delay to ensure images are loaded
  setTimeout(() => {
    let maxHeight = 0;
    allVideos.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    
    // Only apply if we have a valid height
    if (maxHeight > 0) {
      // Apply the max height to all cards directly
      allVideos.forEach(card => {
        card.style.height = maxHeight + 'px';
      });
      
      // Also set CSS custom property for future use
      const containers = document.querySelectorAll('.videos, .videos-for-date');
      containers.forEach(container => {
        container.style.setProperty('--uniform-height', maxHeight + 'px');
      });
    }
  }, 50);
}

// small utility for safe text interpolation into attributes/text nodes
function escapeHtml(str){
  if(!str && str!==0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function updateCount(n){
  const el = document.getElementById('video-count');
  if(el) el.textContent = n + ' videos';
}

function setupFilters(){
  const bar = document.getElementById('video-filters');
  const tagSelect = document.getElementById('video-tag');
  const sortSelect = document.getElementById('video-sort');
  const clearBtn = document.getElementById('video-clear');
  if(!bar) return;

  // populate tag select from data
  if(tagSelect){
    const tags = collectAllTags(VIDEOS);
    // keep existing 'all' option then append
    tags.forEach(t=>{
      const opt = document.createElement('option'); opt.value = t; opt.textContent = t; tagSelect.appendChild(opt);
    });
    tagSelect.addEventListener('change', ()=> renderVideos({}));
  }

  if(sortSelect){
    sortSelect.addEventListener('change', ()=> renderVideos({}));
  }

  // clear filters button
  if(clearBtn){
    clearBtn.addEventListener('click', ()=>{
      // reset filter buttons to 'all'
      bar.querySelectorAll('button[data-filter]').forEach(b=>b.classList.remove('active'));
      const allBtn = bar.querySelector('button[data-filter="all"]');
      if(allBtn) allBtn.classList.add('active');
      // reset selects
      if(tagSelect) tagSelect.value = 'all';
      if(sortSelect) sortSelect.value = 'date-desc';
      renderVideos({});
    });
  }

  bar.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    bar.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderVideos({});
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupFilters();
  // set last-updated text
  const last = document.getElementById('video-last-updated');
  if(last){
    // try to infer newest date
    const dates = VIDEOS.map(e=>e.date).filter(Boolean).sort().reverse();
    if(dates.length) last.textContent = 'Last updated: ' + new Date(dates[0]).toLocaleDateString('cs-CZ');
  }
  renderVideos({});
  
  // Apply uniform height when window is resized
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      applyUniformHeight();
    }, 150);
  });
});
