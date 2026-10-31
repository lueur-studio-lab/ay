// ═══════════════════════════════════════════
//  lueur.studio — main.js
//  需要先載入 data.js（裡面有 POSTS 與 ALBUMS）
// ═══════════════════════════════════════════

// ── Google 表單設定（留言會存到你的 Google 試算表）──
const FORM_URL      = 'https://docs.google.com/forms/d/e/1FAIpQLSdxMO7JvuMLH4gJhOq0XfegeMHNNml34gbVgt1zp7Bspgsd8w/formResponse';
const ENTRY_NAME    = 'entry.450055053';
const ENTRY_MESSAGE = 'entry.1563429280';
const ENTRY_EMAIL   = 'entry.1796219169';

// ── 小工具：自動補上 images/ 路徑 ──
function imgPath(src) {
  return (src.startsWith('http') || src.startsWith('images/')) ? src : 'images/' + src;
}

// ═══════════ 1. 文章列表 ═══════════
function renderPosts() {
  const container = document.querySelector('.journal-list');
  if (!container) return;
  container.innerHTML = '';
  [...POSTS].reverse().forEach(p => {
    container.innerHTML += `
      <div class="journal-item" onclick="openArt('${p.id}')">
        <div class="j-meta"><span class="j-cat">${p.cat}</span><span class="j-date">${p.date}</span></div>
        <div class="j-content"><h3 class="j-title">${p.title}</h3><p class="j-excerpt">${p.excerpt || ''}</p></div>
        <div class="j-thumb" style="background-image:url('${imgPath(p.img)}')"></div>
      </div>`;
  });
}

// ═══════════ 2. 文章閱讀（含留言框）═══════════
let currentArtTitle = '';

function openArt(id) {
  const p = POSTS.find(x => x.id === id);
  if (!p) return;
  currentArtTitle = p.title;

  // 文章內的圖片自動加上浮水印
  const processedContent = p.content.replace(/<img (.*?)>/g, (match) =>
    `<div class="art-img-container">${match}<span class="art-watermark">© lueur.studio</span></div>`
  );

  const inputStyle = 'width:100%;background:transparent;border:none;border-bottom:1px solid rgba(43,45,66,.15);padding:.6rem 0;font-family:\'Noto Serif TC\',serif;font-size:.95rem;font-weight:300;outline:none;color:#2b2d42;border-radius:0';

  document.getElementById('artWrap').innerHTML = `
    <div class="art-inner-container">
      <div class="art-nav">
        <button class="art-back" onclick="closeArt()">← BACK</button>
        <a class="logo" href="#" onclick="closeArt(); return false;">lueur.studio</a>
      </div>

      <div class="art-header">
        <span class="j-cat" style="letter-spacing:0.3em; color:var(--blue-mid);">${p.cat}</span>
        <h1>${p.title}</h1>
        <p>— PUBLISHED ON ${p.date}</p>
      </div>

      <div class="art-img-container">
        <img src="${imgPath(p.img)}">
        <span class="art-watermark">© lueur.studio</span>
      </div>

      <div class="art-content-body">${processedContent}</div>

      <!-- 留言區 -->
      <hr style="border:none;border-top:1px solid rgba(43,45,66,.1);margin:5rem 0 3rem">
      <div style="max-width:560px;margin:0 auto 5rem">
        <p style="font-family:Inter,sans-serif;font-size:.58rem;letter-spacing:.22em;text-transform:uppercase;color:#6b7a9a;margin-bottom:.5rem">留言 · LEAVE A NOTE</p>
        <p style="font-family:'Noto Serif TC',serif;font-size:.9rem;color:#8d99ae;margin-bottom:2rem;font-weight:300">讀完有什麼想說的，都可以留在這裡。</p>

        <form id="artCommentForm" onsubmit="submitArtComment(event)" style="display:flex;flex-direction:column;gap:1.6rem">
          <input id="ac-name" type="text" placeholder="名字（選填）" style="${inputStyle}">
          <textarea id="ac-msg" rows="4" placeholder="想說什麼都可以…" style="${inputStyle};resize:none;line-height:1.8"></textarea>
          <input id="ac-email" type="email" placeholder="Email（選填，方便我回覆你）" style="${inputStyle}">
          <button type="submit" style="align-self:flex-start;padding:.7rem 2.2rem;background:#4a5a7a;color:#f2f1ee;font-family:Inter,sans-serif;font-size:.6rem;letter-spacing:.18em;text-transform:uppercase;border:none;cursor:pointer">送出留言</button>
          <div id="ac-success" style="display:none;padding:1rem 1.5rem;border-left:2px solid #4a5a7a;font-family:'Noto Serif TC',serif;font-size:.9rem;font-style:italic;color:#3a3c52">謝謝你的留言，我收到了 ✦</div>
          <div id="ac-error" style="display:none;font-family:'Noto Serif TC',serif;font-size:.85rem;color:#a05050">送出失敗，請檢查網路後再試一次。</div>
        </form>
      </div>
    </div>`;

  const overlay = document.getElementById('artOverlay');
  overlay.style.display = 'block';
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

// 送出文章留言（會自動標註是哪一篇文章）
function submitArtComment(e) {
  e.preventDefault();
  const msgEl = document.getElementById('ac-msg');
  const msg = msgEl.value.trim();
  if (!msg) { msgEl.focus(); return; }

  const body = new URLSearchParams();
  body.append(ENTRY_NAME,    document.getElementById('ac-name').value.trim());
  body.append(ENTRY_MESSAGE, '【' + currentArtTitle + '】\n' + msg);
  body.append(ENTRY_EMAIL,   document.getElementById('ac-email').value.trim());

  fetch(FORM_URL, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  }).then(() => {
    document.getElementById('artCommentForm').reset();
    document.getElementById('ac-error').style.display = 'none';
    document.getElementById('ac-success').style.display = 'block';
  }).catch(() => {
    document.getElementById('ac-success').style.display = 'none';
    document.getElementById('ac-error').style.display = 'block';
  });
}

function closeArt() {
  document.getElementById('artOverlay').style.display = 'none';
  document.body.style.overflow = 'auto';
}

// ═══════════ 3. 相簿 ═══════════
let currentList = [];
let currentIdx = 0;

function renderGallery() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;
  grid.innerHTML = '';
  ALBUMS.forEach(album => {
    grid.innerHTML += `
      <div class="g-item" onclick="openAlbum('${album.id}')" style="position:relative; cursor:pointer; overflow:hidden; aspect-ratio:1/1;">
        <img src="${album.cover}" style="width:100%; height:100%; object-fit:cover; display:block; transition:0.6s;">
        <div style="position:absolute; inset:0; background:linear-gradient(transparent, rgba(0,0,0,0.5)); display:flex; flex-direction:column; justify-content:flex-end; padding:20px;">
          <div style="color:white; font-family:var(--serif); font-size:1.1rem; font-style:italic;">${album.title}</div>
        </div>
      </div>`;
  });
}

function openAlbum(albumId) {
  const album = ALBUMS.find(a => a.id === albumId);
  if (!album) return;
  currentList = album.photos;
  openLightbox(0);
}

function openLightbox(idx) {
  currentIdx = idx;
  const overlay = document.getElementById('artOverlay');
  const wrap = document.getElementById('artWrap');

  const photo = currentList[currentIdx];
  const finalSrc = imgPath(photo.img);
  const caption = photo.desc || '';
  const multi = currentList.length > 1;

  wrap.innerHTML = `
    <div class="art-inner-container">
      <div class="art-nav">
        <button class="art-back" onclick="closeArt()">← CLOSE</button>
        <div class="logo">lueur.studio</div>
      </div>

      <div style="position:relative; display:flex; align-items:center; justify-content:center; margin:40px auto; max-width:75%;">
        ${multi ? `<button onclick="changePhoto(-1)" style="position:absolute;left:-50px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1.8rem;color:var(--muted);z-index:10;">‹</button>` : ''}

        <div class="art-img-container">
          <img src="${finalSrc}" alt="${caption}" style="width:100%;height:auto;display:block;object-fit:contain;max-height:80vh;">
          <span class="art-watermark">© lueur.studio</span>
        </div>

        ${multi ? `<button onclick="changePhoto(1)" style="position:absolute;right:-50px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;font-size:1.8rem;color:var(--muted);z-index:10;">›</button>` : ''}
      </div>

      ${caption ? `<p style="text-align:center;font-family:var(--mono);font-size:.6rem;color:var(--muted);letter-spacing:.15em;text-transform:uppercase;margin-top:1.5rem">${caption}</p>` : ''}
      ${multi ? `<p style="text-align:center;font-family:var(--mono);font-size:.6rem;color:var(--pale);letter-spacing:.1em;margin-top:.8rem">${currentIdx + 1} / ${currentList.length}</p>` : ''}
    </div>`;

  overlay.style.display = 'block';
  overlay.scrollTop = 0;
  document.body.style.overflow = 'hidden';
}

function changePhoto(step) {
  currentIdx += step;
  if (currentIdx < 0) currentIdx = currentList.length - 1;
  if (currentIdx >= currentList.length) currentIdx = 0;
  openLightbox(currentIdx);
}

// ═══════════ 4. 其他功能 ═══════════
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.onscroll = () => {
  const btn = document.getElementById('backToTop');
  if (btn) btn.style.display = window.scrollY > 400 ? 'block' : 'none';
};

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeArt();
});

window.onload = () => {
  renderPosts();
  renderGallery();
};
