#!/usr/bin/env python3
"""lueur.studio 建置腳本

讀 data.js，產生：
  - posts/<slug>.html：每篇文章一個靜態頁面（完整內容、分享預覽圖、Google 結構化資料）
  - journal.html：把文章列表事先寫進頁面，讓搜尋引擎看得到
  - sitemap.xml：給 Google Search Console 用

用法：python3 tools/build.py [輸出資料夾，預設 _site]
平常不用自己跑：推上 GitHub 後，.github/workflows/pages.yml 會自動執行並發布網站。
"""

import html
import json
import shutil
import subprocess
import sys
from pathlib import Path

SITE = "https://lueur-studio-lab.github.io/ay/"
SITE_NAME = "lueur.studio"
GA_ID = "G-SZRMZ00SD1"

ROOT = Path(__file__).resolve().parent.parent
SKIP = {".git", ".github", "tools", "_site", ".DS_Store", ".gitignore", "README.md"}

# 不會出現在 sitemap 的頁面（轉址頁、需要 ?id= 才有內容的頁面）
STATIC_PAGES = ["", "journal.html", "gallery.html", "about.html", "comments.html"]

# 已經從文章列表拿掉、但網址曾經公開過的文章：舊網址自動轉到新位置，免得連結失效
# 格式：舊的 slug → 要轉去的頁面
MOVED = {
    "why-i-write-in-paris": "about.html",   # 2026-11-20 移到 About 頁
}


def load_data():
    """把 data.js 交給 JavaScript 執行，拿回 POSTS 與 ALBUMS。"""
    data_js = str(ROOT / "data.js")
    node_code = (
        "const fs=require('fs'),vm=require('vm');const c={};vm.createContext(c);"
        "vm.runInContext(fs.readFileSync(process.argv[1],'utf8')+"
        "';this.__out=JSON.stringify({POSTS,ALBUMS})',c);process.stdout.write(c.__out)"
    )
    jxa_code = (
        'ObjC.import("Foundation"); function run(argv){ var s=$.NSString.'
        "stringWithContentsOfFileEncodingError(argv[0],$.NSUTF8StringEncoding,null).js;"
        ' return eval(s+";JSON.stringify({POSTS:POSTS,ALBUMS:ALBUMS})"); }'
    )
    attempts = [
        ["node", "-e", node_code, data_js],
        ["osascript", "-l", "JavaScript", "-e", jxa_code, data_js],  # Mac 沒裝 node 時
    ]
    for cmd in attempts:
        try:
            out = subprocess.run(cmd, capture_output=True, text=True, check=True).stdout
            return json.loads(out)
        except (FileNotFoundError, subprocess.CalledProcessError, json.JSONDecodeError) as e:
            last = e
    sys.exit(f"讀不了 data.js（可能有語法錯誤，例如少了逗號或引號）：{last}")


def esc(s):
    return html.escape(str(s or ""), quote=True)


def img_path(src):
    return src if src.startswith(("http", "images/")) else "images/" + src


def abs_url(path):
    return path if path.startswith("http") else SITE + path


def iso_date(d):
    """'01.04.2026'（日.月.年）→ '2026-04-01'"""
    day, month, year = d.strip().split(".")
    return f"{year}-{month.zfill(2)}-{day.zfill(2)}"


def slug_of(post):
    return post.get("slug") or post["id"]


def ga_tag():
    return f"""  <script async src="https://www.googletagmanager.com/gtag/js?id={GA_ID}"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){{dataLayer.push(arguments);}}
    gtag('js', new Date());
    gtag('config', '{GA_ID}');
  </script>"""


def post_head(post, url, image):
    title = f"{post['title']} — {SITE_NAME}"
    desc = post.get("excerpt") or ""
    ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post["title"],
        "description": desc,
        "image": image,
        "datePublished": iso_date(post["date"]),
        "inLanguage": "zh-TW",
        "url": url,
        "mainEntityOfPage": url,
        "author": {"@type": "Person", "name": "lueur", "url": SITE + "about.html"},
        "publisher": {"@type": "Organization", "name": SITE_NAME, "url": SITE},
    }
    ld_json = json.dumps(ld, ensure_ascii=False, indent=2).replace("</", "<\\/")
    return f"""  <title>{esc(title)}</title>
  <meta name="description" content="{esc(desc)}">
  <link rel="canonical" href="{url}">

  <meta property="og:type" content="article">
  <meta property="og:site_name" content="{SITE_NAME}">
  <meta property="og:locale" content="zh_TW">
  <meta property="og:title" content="{esc(post['title'])}">
  <meta property="og:description" content="{esc(desc)}">
  <meta property="og:url" content="{url}">
  <meta property="og:image" content="{image}">
  <meta property="article:published_time" content="{iso_date(post['date'])}">
  <meta name="twitter:card" content="summary_large_image">

{ga_tag()}

  <script type="application/ld+json">
{ld_json}
  </script>"""


def post_article(post, nxt):
    """和原本 article.html 的 JS 產生的內容一模一樣，只是事先寫好。"""
    next_html = ""
    if nxt:
        next_html = f"""
        <a class="read-next" href="posts/{esc(slug_of(nxt))}.html">
          <span class="read-next-label">READ NEXT →</span>
          <span class="read-next-title">{nxt['title']}</span>
        </a>"""
    return f"""        <a class="back-home" href="journal.html">← 所有文章 · ALL POSTS</a>

        <span class="article-category">{post['cat']}</span>
        <h1>{post['title']}</h1>
        <p class="article-date">— PUBLISHED ON <time datetime="{iso_date(post['date'])}">{post['date']}</time></p>

        <figure class="article-cover">
          <img src="{esc(img_path(post['img']))}" alt="{esc(post['title'])}">
          <span class="watermark">© lueur.studio</span>
        </figure>

        <div class="article-body">{post['content']}</div>

        <section class="comment-section">
          <span class="comment-label">留言 · Leave a note</span>
          <p class="comment-intro">讀完有什麼想說的，都可以留在這裡。</p>

          <form class="comment-form" onsubmit="submitComment(event)">
            <input id="commentName" type="text" placeholder="名字（選填）" aria-label="名字">
            <textarea id="commentMessage" rows="4" placeholder="想說什麼都可以…" aria-label="留言內容" required></textarea>
            <input id="commentEmail" type="email" placeholder="Email（選填，方便我回覆你）" aria-label="Email">
            <button type="submit">送出留言</button>
            <p class="comment-ok" id="commentOk" role="status">謝謝你的留言，我收到了 ✦</p>
            <p class="comment-error" id="commentError" role="alert">送出失敗，請檢查網路後再試一次。</p>
          </form>
        </section>
{next_html}"""


def journal_list(ordered):
    """和 journal.html 的 JS 產生的列表一樣。"""
    items = []
    for post in ordered:
        items.append(f"""
          <a class="journal-item" href="posts/{esc(slug_of(post))}.html">
            <div class="j-meta">
              <span class="j-cat">{post['cat']}</span>
              <span class="j-date">{post['date']}</span>
            </div>

            <div class="j-content">
              <h2>{post['title']}</h2>
              <p>{post.get('excerpt') or ''}</p>
            </div>

            <div class="j-thumb" style="background-image:url('{esc(img_path(post['img']))}')"></div>
          </a>""")
    return "".join(items)


def main():
    out = Path(sys.argv[1] if len(sys.argv) > 1 else "_site").resolve()
    data = load_data()
    posts = data["POSTS"]

    slugs = [slug_of(p) for p in posts]
    dupes = {s for s in slugs if slugs.count(s) > 1}
    if dupes:
        sys.exit(f"有重複的 slug：{', '.join(sorted(dupes))}。每篇文章的 slug 要不一樣。")

    # 1. 複製整個網站
    if out.exists():
        shutil.rmtree(out)
    shutil.copytree(ROOT, out, ignore=lambda d, names: [n for n in names if n in SKIP])

    # 2. 每篇文章一個頁面（順序和「日常」頁相同：新的在前，最後一篇接回第一篇）
    template = (ROOT / "tools" / "post-template.html").read_text(encoding="utf-8")
    ordered = list(reversed(posts))
    (out / "posts").mkdir(exist_ok=True)
    for i, post in enumerate(ordered):
        nxt = ordered[(i + 1) % len(ordered)] if len(ordered) > 1 else None
        url = f"{SITE}posts/{slug_of(post)}.html"
        image = abs_url(img_path(post["img"]))
        page = (template
                .replace("{{HEAD}}", post_head(post, url, image))
                .replace("{{ARTICLE}}", post_article(post, nxt))
                .replace("{{POST_TITLE_JSON}}", json.dumps(post["title"], ensure_ascii=False)))
        (out / "posts" / f"{slug_of(post)}.html").write_text(page, encoding="utf-8")

    # 2b. 搬走的文章：舊網址轉到新位置
    for old_slug, target in MOVED.items():
        if old_slug in slugs:
            continue  # 文章又放回來了，就不轉址
        dest = SITE + target
        (out / "posts" / f"{old_slug}.html").write_text(f"""<!DOCTYPE html>
<html lang="zh-TW">
<head>
  <meta charset="UTF-8">
  <title>{SITE_NAME}</title>
  <meta name="robots" content="noindex">
  <link rel="canonical" href="{dest}">
  <meta http-equiv="refresh" content="0; url={dest}">
  <script>location.replace("{dest}");</script>
</head>
<body><p>這篇文章已經搬到 <a href="{dest}">{dest}</a></p></body>
</html>
""", encoding="utf-8")

    # 3. 文章列表事先寫進 journal.html
    journal = out / "journal.html"
    j = journal.read_text(encoding="utf-8")
    marker = '<div class="journal-list" id="journalList"></div>'
    if marker in j:
        j = j.replace(marker, f'<div class="journal-list" id="journalList">{journal_list(ordered)}\n      </div>')
        journal.write_text(j, encoding="utf-8")
    else:
        print("提醒：journal.html 裡找不到文章列表的位置，列表沒有事先寫入（網站仍正常運作）。")

    # 3b. 首頁的「最新文章」：最新 3 篇事先寫進 index.html
    index = out / "index.html"
    ix = index.read_text(encoding="utf-8")
    marker = '<div class="latest-list" id="latestList"></div>'
    if marker in ix:
        ix = ix.replace(marker, f'<div class="latest-list" id="latestList">{journal_list(ordered[:3])}\n      </div>')
        index.write_text(ix, encoding="utf-8")
    else:
        print("提醒：index.html 裡找不到最新文章的位置，首頁沒有事先寫入（網站仍正常運作）。")

    # 4. sitemap.xml
    newest = max(iso_date(p["date"]) for p in posts)
    rows = [(SITE + page, newest) for page in STATIC_PAGES]
    rows += [(f"{SITE}posts/{slug_of(p)}.html", iso_date(p["date"])) for p in ordered]
    sitemap = ['<?xml version="1.0" encoding="UTF-8"?>',
               '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">']
    sitemap += [f"  <url><loc>{esc(loc)}</loc><lastmod>{mod}</lastmod></url>" for loc, mod in rows]
    sitemap.append("</urlset>\n")
    (out / "sitemap.xml").write_text("\n".join(sitemap), encoding="utf-8")

    print(f"完成：{len(posts)} 篇文章 → {out}")
    for p in ordered:
        print(f"  posts/{slug_of(p)}.html  {p['title']}")


if __name__ == "__main__":
    main()
