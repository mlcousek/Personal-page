/**
 * Podcast Episodes Dataset (extracted from provided screenshots – incomplete titles marked with '…').
 * You can refine: title, link, cover, totalMinutes.
 */

const PODCAST_EPISODES = [
  // 18 Sep 2025
  { id:'2025-09-18-1', date:'2025-09-18', title:"138: 5 Traits You'll Find in Excep…", show:'The Nick Bare Podcast', status:'in-progress', minutesLeft:55, totalMinutes: /* placeholder */ 90, cover:'https://i.imgur.com/nickbare-cover.png', link:'#', tags:['english'] },
  // 18 Sep (finished episodes from Kilometry)
  { id:'2025-09-18-2', date:'2025-09-18', title:'Děti musíme v začátcích nadch…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:60, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },
  { id:'2025-09-18-3', date:'2025-09-18', title:'Do Keni jezdíme běhat do krás…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:60, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 30 Aug 2025
  { id:'2025-08-30-1', date:'2025-08-30', title:'Paďour: Chci zůstat v kondici a…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },
  { id:'2025-08-30-2', date:'2025-08-30', title:'Proč Jsem Zaplatil 124 997 Kč z…', show:'HRA ŽIVOTA s Martinem H.', status:'in-progress', minutesLeft:18, totalMinutes:70, cover:'https://i.imgur.com/hrazivota-cover.png', link:'#', tags:['cz'] },

  // 21 Aug 2025
  { id:'2025-08-21-1', date:'2025-08-21', title:'6# Môj prvý maratón (3:43) km…', show:'(Unknown show - update)', status:'in-progress', minutesLeft:/* placeholder */ 40, totalMinutes:80, cover:'https://via.placeholder.com/300x300?text=Cover', link:'#', tags:['sk'] },

  // 20 Aug 2025
  { id:'2025-08-20-1', date:'2025-08-20', title:'Psychika a krize na B7 (a jiných…', show:'naHoru.tv', status:'finished', minutesLeft:0, totalMinutes:65, cover:'https://i.imgur.com/nahoru-cover.png', link:'#', tags:['cz'] },

  // 17 Aug 2025
  { id:'2025-08-17-1', date:'2025-08-17', title:'#37 Arctic Circle Trail – dvakrát…', show:'Život na treku', status:'in-progress', minutesLeft:46, totalMinutes:80, cover:'https://i.imgur.com/zivotnat-reku-cover.png', link:'#', tags:['cz'] },
  { id:'2025-08-17-2', date:'2025-08-17', title:'Chtěla jsem pokračovat, ale roz…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 14 Aug 2025
  { id:'2025-08-14-1', date:'2025-08-14', title:'Jak na Beskydskou sedmičku?…', show:'edgarpower podcast', status:'in-progress', minutesLeft:1, totalMinutes:60, cover:'https://i.imgur.com/edgarpower-cover.png', link:'#', tags:['cz','b7'] },

  // 10 Aug 2025
  { id:'2025-08-10-1', date:'2025-08-10', title:'Jak na Beskydskou sedmičku?…', show:'edgarpower podcast', status:'in-progress', minutesLeft:1, totalMinutes:60, cover:'https://i.imgur.com/edgarpower-cover.png', link:'#', tags:['duplicate','b7'] },
  { id:'2025-08-10-2', date:'2025-08-10', title:'Ježek: Z přestupu Evenepoela j…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 5 Aug 2025
  { id:'2025-08-05-1', date:'2025-08-05', title:'Pogačar se cyklistikou baví a v k…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 4 Aug 2025
  { id:'2025-08-04-1', date:'2025-08-04', title:'#42 Jak tě změní 21 000 km na…', show:'Život na treku', status:'in-progress', minutesLeft:46, totalMinutes:85, cover:'https://i.imgur.com/zivotnat-reku-cover.png', link:'#', tags:['cz'] },
  { id:'2025-08-04-2', date:'2025-08-04', title:'7 LEKCÍ, Které Mě Udělaly Milio…', show:'HRA ŽIVOTA s Martinem H.', status:'finished', minutesLeft:0, totalMinutes:70, cover:'https://i.imgur.com/hrazivota-cover.png', link:'#', tags:['cz'] },

  // 30 Jul 2025
  { id:'2025-07-30-1', date:'2025-07-30', title:'#41 Psychika na trailu: jak zvlád…', show:'Život na treku', status:'in-progress', minutesLeft:3, totalMinutes:75, cover:'https://i.imgur.com/zivotnat-reku-cover.png', link:'#', tags:['cz'] },
  { id:'2025-07-30-2', date:'2025-07-30', title:'Makej vole! Podcast #87 – Tom…', show:'Makej vole! Podcast', status:'in-progress', minutesLeft:42, totalMinutes:90, cover:'https://i.imgur.com/makejvole-cover.png', link:'#', tags:['cz'] },

  // 29 Jul 2025
  { id:'2025-07-29-1', date:'2025-07-29', title:'Pogačarovi jde o to, aby každý…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 26 Jul 2025
  { id:'2025-07-26-1', date:'2025-07-26', title:'DÍL ŠESTÝ: Cukry jako palivo: J…', show:'BETRI CAST', status:'in-progress', minutesLeft:64, totalMinutes:125, cover:'https://i.imgur.com/betricast-cover.png', link:'#', tags:['cz','nutrition'] },

  // 23 Jul 2025
  { id:'2025-07-23-1', date:'2025-07-23', title:'Kelemen: Největší radost jsem…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz'] },

  // 15 Jul 2025
  { id:'2025-07-15-1', date:'2025-07-15', title:'Petr Jan Juračka o ultracyklistic…', show:'naHoru.tv', status:'in-progress', minutesLeft:33, totalMinutes:80, cover:'https://i.imgur.com/nahoru-cover.png', link:'#', tags:['cz'] },

  // 12 Jul 2025
  { id:'2025-07-12-1', date:'2025-07-12', title:'Vingegaard dal v úvodu Tour tý…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.imgur.com/kilometry-cover.png', link:'#', tags:['cz','cycling'] },
  { id:'2025-07-12-2', date:'2025-07-12', title:'Dokázal jsem v 19-ti všechno, c…', show:'HRA ŽIVOTA s Martinem H.', status:'finished', minutesLeft:0, totalMinutes:70, cover:'https://i.imgur.com/hrazivota-cover.png', link:'#', tags:['cz'] },
  { id:'2025-07-12-3', date:'2025-07-12', title:'Konečne normálna vražda', show:'Publixing', status:'in-progress', minutesLeft:18, totalMinutes:75, cover:'https://i.imgur.com/publixing-cover.png', link:'#', tags:['sk','true-crime'] },
  { id:'2025-07-12-4', date:'2025-07-12', title:'Prečo mi to nikto nepovedal?', show:'Publixing', status:'finished', minutesLeft:0, totalMinutes:70, cover:'https://i.imgur.com/publixing-cover.png', link:'#', tags:['sk'] },
  { id:'2025-07-12-5', date:'2025-07-12', title:'128: The 5 Habits That Changed…', show:'The Nick Bare Podcast', status:'in-progress', minutesLeft:18, totalMinutes:90, cover:'https://i.imgur.com/nickbare-cover.png', link:'#', tags:['english'] },

  // 6 Jul 2025
  { id:'2025-07-06-1', date:'2025-07-06', title:'ONDŘEJ RYBÍN: Zapletená kola…', show:'Cyklisticky podcast', status:'in-progress', minutesLeft:96, totalMinutes:156, cover:'https://via.placeholder.com/300x300?text=RYBIN', link:'#', tags:['cz','cycling'] },

  // 5 Aug earlier cluster already captured above

  // 1 Jul 2025
  { id:'2025-07-01-1', date:'2025-07-01', title:'Umění čelit výzvě (Tatjana Kiel…', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:18, totalMinutes:/* placeholder */ 70, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
  { id:'2025-07-01-2', date:'2025-07-01', title:'Nejlepší rok vašeho života (Mic…', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:55, totalMinutes:85, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
  { id:'2025-07-01-3', date:'2025-07-01', title:'Odvaha volá (Ryan Holiday)', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:49, totalMinutes:/* placeholder */ 150, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
];

/** Utility: group episodes by date descending */
function groupByDateDescending(list){
  const map = new Map();
  list.forEach(ep=>{ if(!map.has(ep.date)) map.set(ep.date, []); map.get(ep.date).push(ep); });
  return Array.from(map.entries()).sort((a,b)=> b[0].localeCompare(a[0]));
}

function renderEpisodes(filter){
  const container = document.getElementById('podcast-grid');
  if(!container) return;
  let list = [...PODCAST_EPISODES];
  switch(filter){
    case 'in-progress': list = list.filter(e=>e.status==='in-progress'); break;
    case 'finished': list = list.filter(e=>e.status==='finished'); break;
    case 'favorites': list = list.filter(e=>e.tags && e.tags.includes('favorite')); break;
    case '2025': list = list.filter(e=>e.date.startsWith('2025-')); break;
    default: break;
  }
  const grouped = groupByDateDescending(list);
  container.innerHTML = grouped.map(([date, eps])=>{
    const dateDisplay = new Date(date).toLocaleDateString('cs-CZ',{day:'numeric',month:'numeric',year:'numeric'});
    return `<div class="date-group"><h3 class="date-heading">${dateDisplay}</h3>${eps.map(renderCard).join('')}</div>`;
  }).join('');
  updateCount(list.length);
}

function renderCard(ep){
  const progress = ep.status==='finished' ? 100 : Math.max(0, Math.min(100, 100 - Math.round((ep.minutesLeft/ (ep.totalMinutes||ep.minutesLeft||1))*100)));
  const progressBar = `<div class="progress"><div class="progress-bar${ep.status==='finished'?' done':''}" style="width:${progress}%;"></div></div>`;
  const statusTag = ep.status==='finished' ? '<span class="podcast__tag tag-finished">FINISHED</span>' : `<span class="podcast__tag tag-progress">${ep.minutesLeft} min left</span>`;
  return `<article class="podcast" data-platform="generic">
    <img class="podcast__img" src="${ep.cover}" alt="Cover of ${ep.title}">
    ${statusTag}
    <div class="podcast-content">
      <h2 class="podcast__title"><a href="${ep.link}" target="_blank" rel="noopener">${ep.title}</a></h2>
      <p class="podcast__host">${ep.show}</p>
      ${progressBar}
    </div>
  </article>`;
}

function updateCount(n){
  const el = document.getElementById('episode-count');
  if(el) el.textContent = n + ' episodes';
}

function setupFilters(){
  const bar = document.getElementById('podcast-filters');
  if(!bar) return;
  bar.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    bar.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderEpisodes(btn.getAttribute('data-filter'));
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupFilters();
  renderEpisodes('all');
});
