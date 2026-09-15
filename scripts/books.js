/**
 * books.js — interactive filters, tag aggregation, keyboard-accessible dropdowns,
 * and dynamic language updates for the Read Books page.
 */

document.addEventListener('DOMContentLoaded', function () {
  var books = document.querySelectorAll('.books .book');

  /* ── 1. Count tag frequencies ── */
  var tagCount = {};
  books.forEach(function (book) {
    (book.dataset.tags || '').split(',').forEach(function (t) {
      t = t.trim();
      if (t) tagCount[t] = (tagCount[t] || 0) + 1;
    });
  });
  var allTags = Object.keys(tagCount)
    .sort(function (a, b) { return tagCount[b] - tagCount[a] || a.localeCompare(b); });

  /* ── Image fallback for remote covers ── */
  books.forEach(function (book) {
    var img = book.querySelector('.book__img');
    if (img) {
      img.addEventListener('error', function () {
        this.src = '../images/media-placeholder.svg';
      }, { once: true });
    }
  });

  /* ── 2. Populate tag dropdown and card decorations dynamically ── */
  var activeStatus = 'all';   // all | favourite | reading
  var activeYear   = '';      // '' = any year
  var activeTag    = '';      // '' = any tag

  var yearAllTexts = { en: 'All', cs: 'Vše', es: 'Todos' };
  var tagAnyTexts = { en: 'Any', cs: 'Jakýkoliv', es: 'Cualquier' };
  var anyTagTexts = { en: 'Any tag', cs: 'Jakýkoliv tag', es: 'Cualquier etiqueta' };
  var noteLabel = { en: 'My note', cs: 'Moje poznámka', es: 'Mi nota' };

  function translatePageContent() {
    var lang = localStorage.getItem('lang') || 'en';

    // Update year value button display
    var yearValEl = document.getElementById('bfd-year-value');
    if (yearValEl) {
      yearValEl.textContent = activeYear || (yearAllTexts[lang] || yearAllTexts.en);
    }

    // Update tag value button display
    var tagValEl = document.getElementById('bfd-tag-value');
    if (tagValEl) {
      tagValEl.textContent = activeTag ? '# ' + translateTag(activeTag, lang) : (tagAnyTexts[lang] || tagAnyTexts.en);
    }

    // Rebuild tag dropdown menu
    var tagMenu = document.getElementById('bfd-tag-menu');
    if (tagMenu) {
      tagMenu.innerHTML = '';
      
      var anyLi = document.createElement('li');
      anyLi.className = 'bfd__item' + (activeTag === '' ? ' bfd__item--active' : '');
      anyLi.dataset.tag = '';
      anyLi.setAttribute('role', 'option');
      anyLi.setAttribute('aria-selected', activeTag === '' ? 'true' : 'false');
      anyLi.textContent = anyTagTexts[lang] || anyTagTexts.en;
      tagMenu.appendChild(anyLi);

      var sep = document.createElement('li');
      sep.className = 'bfd__sep';
      sep.setAttribute('aria-hidden', 'true');
      tagMenu.appendChild(sep);

      allTags.forEach(function (tag) {
        var li = document.createElement('li');
        li.className = 'bfd__item' + (activeTag === tag ? ' bfd__item--active' : '');
        li.dataset.tag = tag;
        li.setAttribute('role', 'option');
        li.setAttribute('aria-selected', activeTag === tag ? 'true' : 'false');
        li.textContent = '# ' + translateTag(tag, lang);
        tagMenu.appendChild(li);
      });
    }

    // Render card decorations
    books.forEach(function (book) {
      // Remove previous decorations to avoid duplication
      var oldStar = book.querySelector('.favourite-star'); if (oldStar) oldStar.remove();
      var oldComment = book.querySelector('.media__comment'); if (oldComment) oldComment.remove();
      var oldTags = book.querySelector('.book-tags'); if (oldTags) oldTags.remove();

      // Favourite star
      if (book.dataset.favourite === 'true') {
        var star = document.createElement('div');
        star.className = 'favourite-star'; star.title = 'Favourite'; star.textContent = '★';
        book.appendChild(star);
      }

      // Comment note
      var commentKey = 'comment' + lang.charAt(0).toUpperCase() + lang.slice(1);
      var comment = book.dataset[commentKey] || book.dataset.commentEn || book.dataset.comment;
      if (comment && comment.trim()) {
        var c = book.querySelector('.book-content');
        if (c) {
          var note = document.createElement('div'); note.className = 'media__comment';
          var lbl = document.createElement('span'); lbl.className = 'media__comment-label';
          lbl.textContent = '💬 ' + (noteLabel[lang] || noteLabel.en);
          var txt = document.createElement('span'); txt.className = 'media__comment-text'; txt.textContent = comment;
          note.appendChild(lbl); note.appendChild(txt); c.appendChild(note);
        }
      }

      // Tags
      var tags = (book.dataset.tags || '').split(',').map(function (t) { return t.trim(); }).filter(Boolean);
      if (tags.length) {
        var c2 = book.querySelector('.book-content');
        if (c2) {
          var wrap = document.createElement('div'); wrap.className = 'book-tags';
          tags.forEach(function (tag) {
            var pill = document.createElement('span'); pill.className = 'book-tag';
            pill.textContent = '# ' + translateTag(tag, lang); wrap.appendChild(pill);
          });
          c2.appendChild(wrap);
        }
      }
    });
  }

  /* ── 4. Dropdown open/close (WCAG APG Listbox pattern) ── */
  var dropdowns = document.querySelectorAll('.bfd');

  function optionsOf(drop) {
    return Array.prototype.slice.call(drop.querySelectorAll('.bfd__item'));
  }

  function closeAll(returnFocusTo) {
    dropdowns.forEach(function (d) {
      d.classList.remove('bfd--open');
      d.querySelector('.bfd__btn').setAttribute('aria-expanded', 'false');
    });
    if (returnFocusTo) returnFocusTo.focus();
  }

  function openDrop(drop) {
    closeAll();
    drop.classList.add('bfd--open');
    drop.querySelector('.bfd__btn').setAttribute('aria-expanded', 'true');
    var opts = optionsOf(drop);
    opts.forEach(function (o) { o.setAttribute('tabindex', '-1'); });
    var active = drop.querySelector('.bfd__item--active') || opts[0];
    if (active) active.focus();
  }

  function focusOption(drop, from, delta) {
    var opts = optionsOf(drop);
    if (!opts.length) return;
    var i = opts.indexOf(from);
    if (i === -1) i = 0;
    var next = opts[Math.min(opts.length - 1, Math.max(0, i + delta))];
    if (next) next.focus();
  }

  dropdowns.forEach(function (drop) {
    var btn = drop.querySelector('.bfd__btn');

    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      if (drop.classList.contains('bfd--open')) closeAll();
      else openDrop(drop);
    });

    btn.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown' || e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openDrop(drop);
      }
    });

    drop.querySelector('.bfd__menu').addEventListener('keydown', function (e) {
      var item = e.target.closest('.bfd__item');
      if (e.key === 'ArrowDown') { e.preventDefault(); focusOption(drop, item, 1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); focusOption(drop, item, -1); }
      else if (e.key === 'Home') { e.preventDefault(); focusOption(drop, null, 0); }
      else if (e.key === 'End') { e.preventDefault(); focusOption(drop, null, optionsOf(drop).length); }
      else if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (item) { item.click(); btn.focus(); }
      } else if (e.key === 'Escape') {
        e.preventDefault();
        closeAll(btn);
      } else if (e.key === 'Tab') {
        closeAll();
      }
    });
  });

  document.addEventListener('click', function () { closeAll(); });
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    var open = document.querySelector('.bfd--open');
    if (open) closeAll(open.querySelector('.bfd__btn'));
  });

  /* ── 5. Three independent filter states ── */
  function applyFilters() {
    books.forEach(function (book) {
      var statusOk = activeStatus === 'all'       ? true
        : activeStatus === 'favourite'            ? book.dataset.favourite === 'true'
        : /* reading */                             book.dataset.year === 'reading';
      var yearOk = !activeYear || book.dataset.year === activeYear;
      var tagOk  = !activeTag  ||
        (book.dataset.tags || '').split(',').map(function (t) { return t.trim(); }).indexOf(activeTag) !== -1;
      book.style.display = (statusOk && yearOk && tagOk) ? '' : 'none';
    });
  }

  /* ── 6. Status buttons ── */
  var statusBtns = document.querySelectorAll('.bfb[data-status]');
  statusBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      statusBtns.forEach(function (b) { b.classList.remove('bfb--active'); });
      btn.classList.add('bfb--active');
      activeStatus = btn.dataset.status;
      applyFilters();
    });
  });

  /* ── 7. Year dropdown ── */
  var yearMenu = document.getElementById('bfd-year-menu');
  if (yearMenu) {
    yearMenu.addEventListener('click', function (e) {
      var item = e.target.closest('.bfd__item');
      if (!item) return;
      this.querySelectorAll('.bfd__item').forEach(function (i) {
        i.classList.remove('bfd__item--active'); i.setAttribute('aria-selected', 'false');
      });
      item.classList.add('bfd__item--active'); item.setAttribute('aria-selected', 'true');
      activeYear = item.dataset.year || '';
      translatePageContent();
      closeAll(); applyFilters();
    });
  }

  /* ── 8. Tag dropdown ── */
  var tagMenuEl = document.getElementById('bfd-tag-menu');
  if (tagMenuEl) {
    tagMenuEl.addEventListener('click', function (e) {
      var item = e.target.closest('.bfd__item');
      if (!item) return;
      activeTag = item.dataset.tag || '';
      translatePageContent();
      closeAll(); applyFilters();
    });
  }

  // Initialize translations and card rendering
  translatePageContent();
  applyFilters();

  // Listen for languageChanged event fired by the header
  document.addEventListener('languageChanged', function () {
    translatePageContent();
  });
});
