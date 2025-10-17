/**
 * Podcast Episodes Dataset (extracted from provided screenshots – incomplete titles marked with '…').
 * You can refine: title, link, cover, totalMinutes.
 */

const PODCAST_EPISODES = [

  // 16 Oct 2025
  { id:'2025-10-16-1', date:'2025-10-16', title:'Tomáš Mikolov: AI, GPT, DeepSeek, Člověk, Vědomí, Vesmír, Evoluce #80', show:'Pavel Mirovský', totalMinutes:81, cover:'https://i.ytimg.com/vi/qpSMBXmNHfM/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=qpSMBXmNHfM&t=4122s', tags:['Czech', 'AI', 'Technology', 'Science', 'Philosophy'] },
  
  // 15 Oct 2025
  { id:'2025-10-15-1', date:'2025-10-15', title:'Tomáš Berdych - ANATOMIE MIMOŘÁDNÉHO ÚSPĚCHU... | BROCAST #122', show:'Brocast', totalMinutes:195, cover:'https://i.ytimg.com/vi/pA7dlR1ROxg/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=pA7dlR1ROxg', tags:['Czech', 'Tennis', 'Success', 'Self improvement', 'Motivation'] },
  
  // 14 Oct 2025
  { id:'2025-10-14-1', date:'2025-10-14', title:'Vítěz Spartathlonu Brunner: Nejedu podle tabulek. Když vyběhnu, tak se rozhodnu, co půjdu za trénink', show:'Kilometry Jiřího Ježka', totalMinutes:49, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/76JrkNpH2miTeopLxJZf9Q?si=d5891f73cc474544', tags:['Czech', 'Running', 'Ultra', 'Spartathlon'] },
  { id:'2025-10-14-2', date:'2025-10-14', title:'Jak se při běhání přiblížit elitám? Pomáhají kopce i intervaly, závaží naopak může uškodit', show:'YouTube', totalMinutes:60, cover:'https://i1.sndcdn.com/artworks-xeRkG5K8UE9TZjA3-0ijwhw-t500x500.png', platform:'youtube', link:'https://www.youtube.com/watch?v=EX0jg1opVh0', tags:['Czech', 'Running', 'Training'] },
  
  // 13 Oct 2025
  { id:'2025-10-13-1', date:'2025-10-13', title:'Martin Fuksa: "Vojnou by si měl projít každý" 🥇 zlato na olympiádě bylo o hlavě', show:'YouTube', totalMinutes:60, cover:'https://i.ytimg.com/vi/_RIgi6UUatw/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCvw8TE73wbXQn8UNrmeIao0PD7mg', platform:'youtube', link:'https://www.youtube.com/watch?v=_RIgi6UUatw', tags:['Czech', 'Olympics', 'Canoe', 'Mental strength'] },
  { id:'2025-10-13-2', date:'2025-10-13', title:'Makej vole! Podcast #96 - Radek Brunner o vítězství na Spartathlonu', show:'Makej vole! Podcast', totalMinutes:30, cover:'https://i.ytimg.com/vi/M_9ZNa-oBv4/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDaYIc7TVMtibFulycFvfItDIwzfg', platform:'youtube', link:'https://www.youtube.com/watch?v=M_9ZNa-oBv4', tags:['Czech', 'Running', 'Ultra', 'Spartathlon'] },
  { id:'2025-10-13-3', date:'2025-10-13', title:'S příchodem AI bychom se měli o to víc naučit programovat: Umělá inteligence | Pavel Beránek', show:'YouTube', totalMinutes:61, cover:'https://i.ytimg.com/vi/KC_1RIsN-4o/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=KC_1RIsN-4o', tags:['Czech', 'Technology', 'AI', 'Programming'] },

  // 10 Oct 2025
  { id:'2025-10-10-1', date:'2025-10-10', title:'RR29 - Triatlon ho stál (skoro) všetko', show:'Romulus & Remus', totalMinutes:96, cover:'https://i.scdn.co/image/ab67656300005f1f3e41cd9912e8fa7cc7b9e2b4', platform:'youtube', link:'https://www.youtube.com/watch?v=Qafo6zbp90U&t=5067s', tags:['Czech', 'Triathlon', 'Sports', 'Motivation'] },

  // 8 Oct 2025
  { id:'2025-10-08-1', date:'2025-10-08', title:'YOU NEED TO FOCUS', show:'Weekly Motivation by Ben Lionel Scott', totalMinutes:5, cover:'https://i.scdn.co/image/ab67656300005f1fb5dd6365373d57386b1f3706', platform:'spotify', link:'https://open.spotify.com/episode/2fQIrpDiPGamn7DqKP38uH?si=64f0473edc1744b6', tags:['English', 'Motivation', 'Focus'] },
  { id:'2025-10-08-2', date:'2025-10-08', title:'TAKE CONTROL OF YOURSELF', show:'Weekly Motivation by Ben Lionel Scott', totalMinutes:6, cover:'https://i.scdn.co/image/ab67656300005f1f99587b3a91682a372a512466', platform:'spotify', link:'https://open.spotify.com/episode/781NSkuv5xrYed52sjDgA0?si=3d3c0a14c3e549bb', tags:['English', 'Motivation', 'Self improvement'] },

  // 7 Oct 2025
  { id:'2025-10-07-1', date:'2025-10-07', title:'"nemusíš být pořád šťastný" - HRA ŽIVOTA #29', show:'HRA ŽIVOTA s Martinem Hrabinou', totalMinutes:22, cover:'https://i.scdn.co/image/ab67656300005f1f95b1cd0c17218ccbef751d6e', platform:'spotify', link:'https://open.spotify.com/episode/3vRegZEYymuNYFCqPIecEp?si=242c666857f54207', tags:['Czech', 'Self improvement'] },
  { id:'2025-10-07-2', date:'2025-10-07', title:'FORCE YOURSELF TO DO IT', show:'Weekly Motivation by Ben Lionel Scott', totalMinutes:5, cover:'https://i.scdn.co/image/ab67656300005f1f44423e8be80b4894fd2dcf2c', platform:'spotify', link:'https://open.spotify.com/episode/3W4jlEU4OUH79LDXikfOAj?si=be0ffb6ad6964b9d', tags:['English', 'Motivation'] },

  // 5 Oct 2025
  { id:'2025-10-05-1', date:'2025-10-05', title:'#137: Jiří Petr - "Chci uspět, chci vyhrát, chci ty kluky porazit."', show:'TŘIŠESTPĚT', totalMinutes:90, cover:'https://i.scdn.co/image/ab6765630000ba8afb04ff49157a09c31bab76fc', platform:'spotify', link:'https://open.spotify.com/episode/3OaHSuuNco3CotWzUftEx1?si=1c27c06301aa41bf', tags:['Czech','Running', 'Ultra'] },
  { id:'2025-10-05-2', date:'2025-10-05', title:'"Někdy zlepšit život znamená zpomalit." | Jakub Vágner | SPIRIT SHOW #36', show:'Majk Spirit', totalMinutes:30, cover:'https://www.csmusic.cz/image_novinky/8541.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=LuM7w8MwA34&t=1569s', tags:['Czech','Life', 'Self improvement', 'Philosophy'] },

  // 28 Sep 2025
  { id:'2025-09-28-1', date:'2025-09-28', title:"koupil jsem si kurz za 125 000 KČ a tohle je moje upřímná zkušenost... HRA ŽIVOTA #28", show:'HRA ŽIVOTA s Martinem Hrabinou', totalMinutes: 10, cover:'https://yt3.googleusercontent.com/tyMHvqC5Qh7lBayZhnYMW5SwTFkmDtRT3qpYfLTsju5Jp2oa0bg96jQLKcRClpIPKyHZJymtGw=s900-c-k-c0x00ffffff-no-rj', platform:'spotify', link:'https://open.spotify.com/episode/2As8PrKmTMUkz339vRiKzf?si=78cf9b016c784d9b', tags:['Czech', 'Self improvement'] },
  { id:'2025-09-28-2', date:'2025-09-28', title:'EMBRACE THE SUCK', show:'Weekly Motivation by Ben Lionel Scott', totalMinutes:5, cover:'https://i.scdn.co/image/ab67656300005f1ff366d13999e833769d2a1f1c', link:'https://open.spotify.com/episode/5eofnTkrQtmQfaeiLwxD0Q?si=3ixYp76zRAemc1-ufe1gDw', platform:'spotify', tags:['English', 'Motivation'] },
  // 18 Sep 2025
  { id:'2025-09-18-1', date:'2025-09-18', title:'Děti musíme v začátcích nadchnout pro cyklistiku formou hry. Výsledky přijdou časem, říká Spěšný', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:  'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/2TnKRDEYjpZKDej240iDRl?si=dc87bfa947664046', tags:['Czech', 'Cycling', 'Chill'] },
  { id:'2025-09-18-2', date:'2025-09-18', title:'Do Keni jezdíme běhat do krásné přírody a zvolníme od zrychleného světa, shodují se Vebr a Sasynová', show:'Kilometry Jiřího Ježka',  totalMinutes:49, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link: 'https://open.spotify.com/episode/2XQTRE3qPvZ6uBS2PFQd2i?si=51ca6cf37b0a4bbe', tags:['Czech', 'Running', 'Chill', 'Cycling'] },

// 30 Aug 2025
  { id:'2025-08-30-1', date:'2025-08-30', title:'Paďour: Chci zůstat v kondici a koučem, který dost času tráví na kole. Stravu so držím jak profík', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/6lAoKExABjDn8TDZdraJfp?si=b3b93dc4b0bb4524', tags:['Czech', 'Cycling', 'Chill'] },

  // 20 Aug 2025
  { id:'2025-08-20-1', date:'2025-08-20', title:'Psychika a krize na B7 (a jiných závodech)', show:'naHoru.tv|Rozhovory & motivace', totalMinutes:24, cover:'https://static.wixstatic.com/media/3b6e39_c28ea616ea3042bf953d65e196ba37cc~mv2.png/v1/fit/w_2500,h_1330,al_c/3b6e39_c28ea616ea3042bf953d65e196ba37cc~mv2.png', platform:'spotify', link:'https://open.spotify.com/episode/6WqF4wX8lmxtafuuunG1JG?si=8899e07aab604e0c', tags:['Czech', 'Ultra', 'Running', 'Self improvement', 'B7'] },

  // 17 Aug 2025
  { id:'2025-08-17-1', date:'2025-08-17', title:'Chtěla jsem pokračovat, ale rozum rozhodl, že bude lepší to utnout, říká o odstoupení z Tour Burlová', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/77A8C8OuXoTaSQothMXpgt?si=ef96b9625ff1474c', tags:['Czech', 'Cycling', 'Chill', 'Tour de France'] },

  // 14 Aug 2025
  { id:'2025-08-14-1', date:'2025-08-14', title:'Jak na Beskydskou sedmičku? S Matějem a Barčou Urbaczkovými o tréninku, výbavě i hlavě', show:'edgarpower podcast', totalMinutes:37, cover:'https://edgarpower.s17.cdn-upgates.com/e/e68891d99ba7e7-matej-s-bara-b7-podcast.jpg', platform:'spotify', link:'https://open.spotify.com/episode/7uPCEjZvgANZa8JiBH78qt?si=764240e2f11c4550', tags:['Czech','B7', 'Running', 'Ultra'] },

  // 9 Aug 2025
  { id:'2025-08-09-1', date:'2025-08-09', title:'Ježek: Z přestupu Evenepoela jsem rozpačitý. Je to divné rozhodnutí i v podání týmových manažerů', show:'Kilometry Jiřího Ježka', totalMinutes:49, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/3QqFaJRMCdT43HqecBO5xB?si=c4bbe87aa9d3499b', tags:['Czech', 'Cycling', 'Chill'] },

  // 5 Aug 2025
  { id:'2025-08-05-1', date:'2025-08-05', title:'Pogačar se cyklistikou baví a v každé etapě chtěl diváky něčím překvapit, vrací se Ježek k Tour', show:'Kilometry Jiřího Ježka', totalMinutes:38, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/7AiwwrwfKbODqxCtTc8JYg?si=275f13e239724959', tags:['Czech', 'Cycling', 'Chill', 'Tour de France'] },

  // 4 Aug 2025
  { id:'2025-08-04-1', date:'2025-08-04', title:'7 LEKCÍ, Které Mě Udělaly Milionářem v 19 Hra / Života #26', show:'HRA ŽIVOTA s Martinem Hrabinou', totalMinutes:30, cover:'https://yt3.googleusercontent.com/tyMHvqC5Qh7lBayZhnYMW5SwTFkmDtRT3qpYfLTsju5Jp2oa0bg96jQLKcRClpIPKyHZJymtGw=s900-c-k-c0x00ffffff-no-rj', platform:'spotify', link:'https://open.spotify.com/episode/0DRYeBxmcJO8qWe8M3a3Aw?si=8f39ad1abc814ae8', tags:['Czech', 'Self improvement'] },
/*
  // 30 Jul 2025
  { id:'2025-07-30-1', date:'2025-07-30', title:'#41 Psychika na trailu: jak zvlád…', show:'Život na treku', status:'in-progress', minutesLeft:3, totalMinutes:75, cover:'https://i.imgur.com/zivotnat-reku-cover.png', link:'#', tags:['cz'] },
  { id:'2025-07-30-2', date:'2025-07-30', title:'Makej vole! Podcast #87 – Tom…', show:'Makej vole! Podcast', status:'in-progress', minutesLeft:42, totalMinutes:90, cover:'https://i.imgur.com/makejvole-cover.png', link:'#', tags:['cz'] },

  // 29 Jul 2025
  { id:'2025-07-29-1', date:'2025-07-29', title:'Pogačarovi jde o to, aby každý…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', link:'#', tags:['cz'] },

  // 26 Jul 2025
  { id:'2025-07-26-1', date:'2025-07-26', title:'DÍL ŠESTÝ: Cukry jako palivo: J…', show:'BETRI CAST', status:'in-progress', minutesLeft:64, totalMinutes:125, cover:'https://i.imgur.com/betricast-cover.png', link:'#', tags:['cz','nutrition'] },

  // 23 Jul 2025
  { id:'2025-07-23-1', date:'2025-07-23', title:'Kelemen: Největší radost jsem…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', link:'#', tags:['cz'] },

  // 15 Jul 2025
  { id:'2025-07-15-1', date:'2025-07-15', title:'Petr Jan Juračka o ultracyklistic…', show:'naHoru.tv', status:'in-progress', minutesLeft:33, totalMinutes:80, cover:'https://i.imgur.com/nahoru-cover.png', link:'#', tags:['cz'] },

  // 12 Jul 2025
  { id:'2025-07-12-1', date:'2025-07-12', title:'Vingegaard dal v úvodu Tour tý…', show:'Kilometry Jiřího Ježka', status:'finished', minutesLeft:0, totalMinutes:55, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', link:'#', tags:['cz','cycling'] },
  { id:'2025-07-12-2', date:'2025-07-12', title:'Dokázal jsem v 19-ti všechno, c…', show:'HRA ŽIVOTA s Martinem H.', status:'finished', minutesLeft:0, totalMinutes:70, cover:'https://i.imgur.com/hrazivota-cover.png', link:'#', tags:['cz'] },
  { id:'2025-07-12-3', date:'2025-07-12', title:'Konečne normálna vražda', show:'Publixing', status:'in-progress', minutesLeft:18, totalMinutes:75, cover:'https://i.imgur.com/publixing-cover.png', link:'#', tags:['sk','true-crime'] },
  { id:'2025-07-12-4', date:'2025-07-12', title:'Prečo mi to nikto nepovedal?', show:'Publixing', status:'finished', minutesLeft:0, totalMinutes:70, cover:'https://i.imgur.com/publixing-cover.png', link:'#', tags:['sk'] },
  { id:'2025-07-12-5', date:'2025-07-12', title:'128: The 5 Habits That Changed…', show:'The Nick Bare Podcast', status:'in-progress', minutesLeft:18, totalMinutes:90, cover:'https://i.imgur.com/nickbare-cover.png', link:'#', tags:['english'] },

  // 6 Jul 2025
  { id:'2025-07-06-1', date:'2025-07-06', title:'ONDŘEJ RYBÍN: Zapletená kola…', show:'Cyklisticky podcast', status:'in-progress', minutesLeft:96, totalMinutes:156, cover:'https://via.placeholder.com/300x300?text=RYBIN', link:'#', tags:['cz','cycling'] },

  // 5 Aug earlier cluster already captured above

  // 1 Jul 2025
  { id:'2025-07-01-1', date:'2025-07-01', title:'Umění čelit výzvě (Tatjana Kiel…', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:18, totalMinutes: placeholder  70, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
  { id:'2025-07-01-2', date:'2025-07-01', title:'Nejlepší rok vašeho života (Mic…', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:55, totalMinutes:85, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
  { id:'2025-07-01-3', date:'2025-07-01', title:'Odvaha volá (Ryan Holiday)', show:'Audiolibrix – Audioknihy pro…', status:'in-progress', minutesLeft:49, totalMinutes:/* placeholder  150, cover:'https://via.placeholder.com/300x300?text=AUDIO', link:'#', tags:['cz','audiobook'] },
*/];

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
  let list = [...PODCAST_EPISODES];
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

function renderEpisodes(opts){
  const container = document.getElementById('podcast-grid');
  if(!container) return;
  const filterBar = document.getElementById('podcast-filters');
  const tagSelect = document.getElementById('podcast-tag');
  const sortSelect = document.getElementById('podcast-sort');
  const filter = (opts && opts.filter) || (filterBar && filterBar.querySelector('button.active') && filterBar.querySelector('button.active').getAttribute('data-filter')) || 'all';
  const tag = (opts && opts.tag) || (tagSelect && tagSelect.value) || 'all';
  const sort = (opts && opts.sort) || (sortSelect && sortSelect.value) || 'date-desc';

  const list = applyFiltersAndSort({filter, tag, sort});

  // grouped by date
  const grouped = groupByDateDescending(list);
  container.innerHTML = grouped.map(([date, eps])=>{
    const dateDisplay = new Date(date).toLocaleDateString('cs-CZ',{day:'numeric',month:'numeric',year:'numeric'});
    const podcastCards = eps.map(renderCard).join('');
    const gridClass = eps.length > 1 ? 'podcasts-for-date' : '';
    return `<div class="date-group">
      <h3 class="date-heading">${dateDisplay}</h3>
      <div class="${gridClass}">${podcastCards}</div>
    </div>`;
  }).join('');
  updateCount(list.length);
  
  // Apply uniform height after rendering and images load
  setTimeout(() => {
    applyUniformHeight();
  }, 200);
  
  // Also apply when all images are loaded
  const images = container.querySelectorAll('.podcast__img');
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
    statusTag = '<span class="podcast__tag tag-finished">FINISHED</span>';
    progressBar = '<div class="progress"><div class="progress-bar done" style="width:100%;"></div></div>';
  } else if (ep.status === 'in-progress' && ep.minutesLeft) {
    const progress = Math.max(0, Math.min(100, 100 - Math.round((ep.minutesLeft / (total || 1)) * 100)));
    statusTag = `<span class="podcast__tag tag-progress">${ep.minutesLeft} min left</span>`;
    progressBar = `<div class="progress"><div class="progress-bar" style="width:${progress}%;"></div></div>`;
  } else {
    // No status property or status is something else - show episode length
    statusTag = total > 0 ? `<span class="podcast__tag">${total} min</span>` : '';
    progressBar = '<div class="progress"><div class="progress-bar" style="width:0%;"></div></div>';
  }

  // Duration display
  const durationDisplay = total > 0 ? `<div class="episode-duration">${total} minutes</div>` : '';

  // image fallback: if the image fails to load, replace with a placeholder service
  const imgSrc = ep.cover || 'https://via.placeholder.com/300x300?text=No+Cover';
  const imgFallback = 'https://via.placeholder.com/300x300?text=No+Cover';

  const descriptionHtml = ep.description ? `<p class="podcast__desc">${ep.description}</p>` : '';
  const tagsHtml = Array.isArray(ep.tags) && ep.tags.length
    ? `<ul class="podcast-tags">${ep.tags.map(tag => `<li>${escapeHtml(tag)}</li>`).join('')}</ul>`
    : '';

  return `<article class="podcast" data-platform="${platform}">
    <img loading="lazy" class="podcast__img" src="${imgSrc}" alt="Cover of ${escapeHtml(ep.title)}" onerror="this.onerror=null;this.src='${imgFallback}';">
    ${statusTag}
    ${platformIcon}
    <div class="podcast-content">
      <h2 class="podcast__title"><a href="${ep.link || '#'}" target="_blank" rel="noopener">${escapeHtml(ep.title)}</a></h2>
      <p class="podcast__host">${escapeHtml(ep.show)}</p>
      ${descriptionHtml}
      ${durationDisplay}
      ${tagsHtml}
      ${progressBar}
    </div>
  </article>`;
}

// Function to apply uniform height to all podcast cards
function applyUniformHeight() {
  const allPodcasts = document.querySelectorAll('.podcast');
  if (allPodcasts.length === 0) return;
  
  // Reset heights to auto to get natural heights
  allPodcasts.forEach(card => {
    card.style.height = 'auto';
  });
  
  // Force reflow to ensure heights are calculated
  document.body.offsetHeight;
  
  // Find the tallest card after a small delay to ensure images are loaded
  setTimeout(() => {
    let maxHeight = 0;
    allPodcasts.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    
    // Only apply if we have a valid height
    if (maxHeight > 0) {
      // Apply the max height to all cards directly
      allPodcasts.forEach(card => {
        card.style.height = maxHeight + 'px';
      });
      
      // Also set CSS custom property for future use
      const containers = document.querySelectorAll('.podcasts, .podcasts-for-date');
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
  const el = document.getElementById('episode-count');
  if(el) el.textContent = n + ' episodes';
}

function setupFilters(){
  const bar = document.getElementById('podcast-filters');
  const tagSelect = document.getElementById('podcast-tag');
  const sortSelect = document.getElementById('podcast-sort');
  const clearBtn = document.getElementById('podcast-clear');
  if(!bar) return;

  // populate tag select from data
  if(tagSelect){
    const tags = collectAllTags(PODCAST_EPISODES);
    // keep existing 'all' option then append
    tags.forEach(t=>{
      const opt = document.createElement('option'); opt.value = t; opt.textContent = t; tagSelect.appendChild(opt);
    });
    tagSelect.addEventListener('change', ()=> renderEpisodes({}));
  }

  if(sortSelect){
    sortSelect.addEventListener('change', ()=> renderEpisodes({}));
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
      renderEpisodes({});
    });
  }

  bar.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    bar.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderEpisodes({});
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupFilters();
  // set last-updated text
  const last = document.getElementById('podcast-last-updated');
  if(last){
    // try to infer newest date
    const dates = PODCAST_EPISODES.map(e=>e.date).filter(Boolean).sort().reverse();
    if(dates.length) last.textContent = 'Last updated: ' + new Date(dates[0]).toLocaleDateString('cs-CZ');
  }
  renderEpisodes({});
  
  // Apply uniform height when window is resized
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      applyUniformHeight();
    }, 150);
  });
});
