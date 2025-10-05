/**
 * Curated video library (primarily YouTube) with lightweight filtering and sorting.
 * Replace or extend the VIDEO_LIBRARY items to keep the collection fresh.
 */

const VIDEO_LIBRARY = [
  {
    id: '2025-09-28-torres',
    title: 'David Goggins: Never Finished (Full Interview)',
    channel: 'Impact Theory',
    published: '2025-09-28',
    duration: '1:45:26',
    tags: ['Endurance', 'Mindset', 'Ultra'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/gFs6bJ9_He0/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=gFs6bJ9_He0',
    description: 'A brutally honest conversation about resilience, training deep focus, and carrying the logs when nobody is watching.'
  },
  {
    id: '2025-09-14-nn',
    title: 'Courtney Dauwalter: How to Run for Days',
    channel: 'Rich Roll Podcast',
    published: '2025-09-14',
    duration: '2:09:44',
    tags: ['Ultra', 'Running', 'Mindset'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/4LkMuNw0XMQ/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=4LkMuNw0XMQ',
    description: 'Courtney shares her approach to pain caves, nutrition, and staying playful while dominating ultras.'
  },
  {
    id: '2025-08-30-hoka',
    title: 'Jim Walmsley: Hoka UTMB 2024 Documentary',
    channel: 'Hoka',
    published: '2025-08-30',
    duration: '34:13',
    tags: ['Ultra', 'Documentary', 'Training'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/OT5t2xbYF9Y/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=OT5t2xbYF9Y',
    description: 'Inside Jim Walmsley’s preparation, race-day execution, and mindset on the path to making UTMB history.'
  },
  {
    id: '2025-08-10-lex',
    title: 'David Sinclair: Extend Your Lifespan (Best Strategies)',
    channel: 'Lex Fridman Podcast',
    published: '2025-08-10',
    duration: '2:51:34',
    tags: ['Longevity', 'Science', 'Mindset'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/9nXop2lLDa4/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=9nXop2lLDa4',
    description: 'Harvard geneticist David Sinclair breaks down aging research and daily protocols for long-term performance.'
  },
  {
    id: '2025-07-21-pat',
    title: 'How to Stay Hard: Jocko Willink & David Goggins',
    channel: 'Jocko Podcast',
    published: '2025-07-21',
    duration: '3:14:03',
    tags: ['Leadership', 'Discipline', 'Mindset'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/SmAJjl1yTe8/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=SmAJjl1yTe8',
    description: 'Two masters of discipline discuss structured suffering, self-talk, and how to keep showing up.'
  },
  {
    id: '2025-06-24-nike',
    title: 'Eliud Kipchoge: Inside a Champion’s Mind',
    channel: 'NN Running Team',
    published: '2025-06-24',
    duration: '23:48',
    tags: ['Running', 'Mindset', 'Documentary'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/pCg_mNv9BA0/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=pCg_mNv9BA0',
    description: 'Training routines, mental frameworks, and life philosophy from the marathon legend.'
  },
  {
    id: '2025-05-15-sports',
    title: 'The Science of Recovery with Dr. Peter Attia',
    channel: 'The Drive Podcast Clips',
    published: '2025-05-15',
    duration: '18:06',
    tags: ['Recovery', 'Science', 'Performance'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/a3xxwO_QGcE/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=a3xxwO_QGcE',
    description: 'Protocols for sleep, heat, and cold exposure to accelerate adaptation and protect long-term capacity.'
  },
  {
    id: '2025-04-01-b7',
    title: 'Beskydská Sedmička 2024 Official Documentary',
    channel: 'B7 Official',
    published: '2025-04-01',
    duration: '41:55',
    tags: ['B7', 'Ultra', 'Czech'],
    platform: 'youtube',
    thumbnail: 'https://i.ytimg.com/vi/A0BEgJ7-Q6M/hqdefault.jpg',
    link: 'https://www.youtube.com/watch?v=A0BEgJ7-Q6M',
    description: 'Course breakdown, athlete stories, and race strategy from the Beskydská Sedmička ultra-marathon.'
  }
];

function collectVideoTags(list) {
  const set = new Set();
  list.forEach(video => {
    if (Array.isArray(video.tags)) {
      video.tags.forEach(tag => set.add(tag));
    }
  });
  return Array.from(set).sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
}

function parseDurationToMinutes(duration) {
  if (!duration) return 0;
  const parts = duration.split(':').map(Number).reverse();
  let minutes = 0;
  if (parts[0]) minutes += parts[0] / 60; // seconds to minutes fraction
  if (parts[1]) minutes += parts[1];
  if (parts[2]) minutes += parts[2] * 60;
  return minutes;
}

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  if (Number.isNaN(date.getTime())) return dateStr;
  return date.toLocaleDateString('cs-CZ', { day: 'numeric', month: 'numeric', year: 'numeric' });
}

function applyVideoFilters({ tag = 'all', sort = 'published-desc' } = {}) {
  let list = [...VIDEO_LIBRARY];

  if (tag && tag !== 'all') {
    list = list.filter(video => Array.isArray(video.tags) && video.tags.includes(tag));
  }

  list.sort((a, b) => {
    switch (sort) {
      case 'published-asc':
        return (a.published || '').localeCompare(b.published || '');
      case 'duration-desc':
        return parseDurationToMinutes(b.duration) - parseDurationToMinutes(a.duration);
      case 'duration-asc':
        return parseDurationToMinutes(a.duration) - parseDurationToMinutes(b.duration);
      case 'title-asc':
        return (a.title || '').localeCompare(b.title || '', undefined, { sensitivity: 'base' });
      case 'published-desc':
      default:
        return (b.published || '').localeCompare(a.published || '');
    }
  });

  return list;
}

function renderVideoGrid(options = {}) {
  const grid = document.getElementById('video-grid');
  const sortSelect = document.getElementById('video-sort');
  const filterBar = document.getElementById('video-filter-bar');
  const countEl = document.getElementById('video-count');

  if (!grid) return;

  const activeChip = filterBar ? filterBar.querySelector('.video-chip.active') : null;
  const tag = options.tag || (activeChip ? activeChip.dataset.tag : 'all');
  const sort = options.sort || (sortSelect ? sortSelect.value : 'published-desc');

  const list = applyVideoFilters({ tag, sort });

  grid.innerHTML = list
    .map(video => renderVideoCard(video))
    .join('');

  if (countEl) {
    countEl.textContent = `${list.length} video${list.length === 1 ? '' : 's'}`;
  }
}

function renderVideoCard(video) {
  const safeTitle = escapeHtml(video.title);
  const safeChannel = escapeHtml(video.channel);
  const safeDescription = escapeHtml(video.description || '');
  const formattedDate = formatDate(video.published);
  const tagsList = (video.tags || [])
    .map(tag => `<li>${escapeHtml(tag)}</li>`)
    .join('');

  const platformLabel = video.platform === 'youtube' ? 'YouTube' : 'Watch';

  return `<article class="video-card" data-platform="${escapeHtml(video.platform || 'video')}">
    <a class="video-thumb" href="${video.link || '#'}" target="_blank" rel="noopener">
      <img loading="lazy" src="${video.thumbnail || 'https://via.placeholder.com/400x225?text=Video'}" alt="Thumbnail for ${safeTitle}" />
      ${video.duration ? `<span class="video-duration">${escapeHtml(video.duration)}</span>` : ''}
      <span class="video-platform">${renderPlatformIcon(video.platform)}${platformLabel}</span>
    </a>
    <div class="video-body">
      <h2 class="video-title"><a href="${video.link || '#'}" target="_blank" rel="noopener">${safeTitle}</a></h2>
      <div class="video-meta">
        <span>${safeChannel}</span>
        ${formattedDate ? `<span>• ${formattedDate}</span>` : ''}
      </div>
      ${safeDescription ? `<p class="video-description">${safeDescription}</p>` : ''}
      ${tagsList ? `<ul class="video-tags">${tagsList}</ul>` : ''}
    </div>
  </article>`;
}

function renderPlatformIcon(platform) {
  if (platform === 'youtube') {
    return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.58 7.19a2.76 2.76 0 0 0-1.94-1.95C17.37 4.75 12 4.75 12 4.75s-5.37 0-7.64.49a2.76 2.76 0 0 0-1.94 1.95A28.7 28.7 0 0 0 1.94 12a28.7 28.7 0 0 0 .47 4.81 2.76 2.76 0 0 0 1.94 1.95c2.27.49 7.64.49 7.64.49s5.37 0 7.64-.49a2.76 2.76 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22.06 12a28.7 28.7 0 0 0-.48-4.81ZM10 15.02V8.98L15.27 12Z"/></svg>';
  }
  return '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4a8 8 0 1 1 0 16 8 8 0 0 1 0-16Zm0 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13Zm-.37 3.15 3.87 2.35a1 1 0 0 1 0 1.7l-3.87 2.35A1 1 0 0 1 11 14.35v-4.7a1 1 0 0 1 1.63-.74Z"/></svg>';
}

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function setupVideoFilters() {
  const filterBar = document.getElementById('video-filter-bar');
  const sortSelect = document.getElementById('video-sort');
  const clearBtn = document.getElementById('video-clear');
  const lastUpdatedEl = document.getElementById('video-last-updated');

  if (filterBar) {
    const tags = collectVideoTags(VIDEO_LIBRARY);
    tags.forEach(tag => {
      const btn = document.createElement('button');
      btn.className = 'video-chip';
      btn.dataset.tag = tag;
      btn.textContent = tag;
      filterBar.appendChild(btn);
    });

    filterBar.addEventListener('click', event => {
      const chip = event.target.closest('.video-chip');
      if (!chip) return;
      filterBar.querySelectorAll('.video-chip').forEach(el => el.classList.remove('active'));
      chip.classList.add('active');
      renderVideoGrid({ tag: chip.dataset.tag });
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener('change', () => {
      renderVideoGrid({ sort: sortSelect.value });
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener('click', () => {
      if (filterBar) {
        filterBar.querySelectorAll('.video-chip').forEach(el => el.classList.remove('active'));
        const allBtn = filterBar.querySelector('.video-chip[data-tag="all"]');
        if (allBtn) allBtn.classList.add('active');
      }
      if (sortSelect) sortSelect.value = 'published-desc';
      renderVideoGrid({ tag: 'all', sort: 'published-desc' });
    });
  }

  if (lastUpdatedEl) {
    const newestDate = VIDEO_LIBRARY
      .map(video => video.published)
      .filter(Boolean)
      .sort()
      .reverse()[0];
    if (newestDate) {
      lastUpdatedEl.textContent = 'Last updated: ' + formatDate(newestDate);
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setupVideoFilters();
  renderVideoGrid({});
});
