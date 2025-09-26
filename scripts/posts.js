// Simple in-memory posts definition; could be replaced with JSON fetch later.
const BLOG_POSTS = [
  {
    id: 'consistency-checkpoint',
    date: '2025-09-20',
    title: { en: 'Consistency Checkpoint', cs: 'Kontrolní bod konzistence', es: 'Punto de control de constancia' },
    excerpt: { en: 'Reviewing habit streaks and adjusting next week\'s focus.', cs: 'Kontrola sérií návyků a úprava zaměření na příští týden.', es: 'Revisión de rachas de hábitos y ajuste del enfoque de la próxima semana.' },
    body: { en: 'Longer body text placeholder.', cs: 'Delší text těla placeholder.', es: 'Texto de cuerpo más largo de marcador.' }
  },
  {
    id: 'learning-crypto',
    date: '2025-09-15',
    title: { en: 'Learning Cryptography Basics', cs: 'Učení základů kryptografie', es: 'Aprendiendo fundamentos de criptografía' },
    excerpt: { en: 'Notes from studying foundational cryptographic primitives.', cs: 'Poznámky ze studia základních kryptografických primitiv.', es: 'Notas del estudio de primitivas criptográficas básicas.' },
    body: { en: 'Longer body text placeholder.', cs: 'Delší text těla placeholder.', es: 'Texto de cuerpo más largo de marcador.' }
  },
  {
    id: 'small-systems',
    date: '2025-09-01',
    title: { en: 'Thinking in Small Systems', cs: 'Přemýšlení v malých systémech', es: 'Pensando en pequeños sistemas' },
    excerpt: { en: 'Breaking goals into atomic, repeatable loops.', cs: 'Rozdělení cílů na atomické, opakovatelné smyčky.', es: 'Dividir objetivos en bucles atómicos y repetibles.' },
    body: { en: 'Longer body text placeholder.', cs: 'Delší text těla placeholder.', es: 'Texto de cuerpo más largo de marcador.' }
  }
];

function renderPosts() {
  const lang = localStorage.getItem('lang') || 'en';
  const latestContainer = document.getElementById('latest-posts');
  const allList = document.getElementById('all-posts');
  if(!latestContainer || !allList) return;
  // Sort by date descending
  const sorted = [...BLOG_POSTS].sort((a,b)=> b.date.localeCompare(a.date));
  const latest = sorted.slice(0,2);
  latestContainer.innerHTML = latest.map(p => cardHTML(p, lang)).join('');
  allList.innerHTML = sorted.map(p => `<li><a href="#" data-post="${p.id}">${p.title[lang]||p.title.en}</a> <small style="color:#666;font-size:.6rem;letter-spacing:1px;">${p.date}</small></li>`).join('');
}

function cardHTML(post, lang){
  return `<article class="post-card" data-post="${post.id}">
    <div class="post-meta">${post.date}</div>
    <h3 class="post-title">${post.title[lang]||post.title.en}</h3>
    <p class="post-excerpt">${post.excerpt[lang]||post.excerpt.en}</p>
    <a href="#" class="read-more" data-read="${post.id}">READ</a>
  </article>`;
}

document.addEventListener('DOMContentLoaded',()=>{
  renderPosts();
  document.addEventListener('click',e=>{
    const readBtn = e.target.closest('[data-read]');
    if(readBtn){
      e.preventDefault();
      const id = readBtn.getAttribute('data-read');
      const post = BLOG_POSTS.find(p=>p.id===id);
      if(post){
        const lang = localStorage.getItem('lang') || 'en';
        alert(post.body[lang]||post.body.en); // Simple placeholder for full post modal
      }
    }
  });
});

function renderHomeLatest(){
  const container = document.getElementById('home-latest-posts');
  if(!container) return;
  const lang = localStorage.getItem('lang') || 'en';
  const sorted = [...BLOG_POSTS].sort((a,b)=> b.date.localeCompare(a.date));
  const latest = sorted.slice(0,2);
  container.innerHTML = latest.map(p => cardHTML(p, lang)).join('');
}
// Extend renderPosts to call this too
const originalRenderPosts = renderPosts;
renderPosts = function(){
  originalRenderPosts();
  renderHomeLatest();
};
// Also run on DOM ready separately
document.addEventListener('DOMContentLoaded',renderHomeLatest);

// Re-render when language changes (hook into existing language application)
const originalApplyLang = window.applyLanguageAfterNavbar;
window.applyLanguageAfterNavbar = function(){
  if(originalApplyLang) originalApplyLang();
  renderPosts();
};
