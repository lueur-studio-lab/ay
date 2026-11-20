// lueur.studio — site.js
// 全站共用：手機和平板上，右上角「選單」按鈕的開關。
(function () {
  function init() {
    var btn = document.querySelector('.menu-toggle');
    if (!btn) return;

    function setOpen(open) {
      document.body.classList.toggle('menu-open', open);
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    btn.addEventListener('click', function () {
      setOpen(!document.body.classList.contains('menu-open'));
    });

    // 點了選單裡的連結、按 Esc、或視窗變寬，就把選單收起來
    document.querySelectorAll('.side-list a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setOpen(false);
    });
    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) setOpen(false);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
