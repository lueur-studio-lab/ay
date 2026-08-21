const POSTS = [
  {
    id: 'a1',
    title: '巴黎，星期天',
    cat: '巴黎日常 · Just Paris',
    date: '01.04.2026',
    img: 'paris.webp',
    excerpt: '沒有計畫的星期天，一本筆記本，一個剛好空出的吧檯位子。待到快打烊，走出去天還亮著——夏令時間的幸福就是這樣。', 
    content: `
  <p>上週末，一個興起。<br>
  沒有計畫，沒有行程，只是拿起包包，順手塞了一本小筆記本，就出門了。<br>
  目的地是一家收藏在手機裡很久的韓系咖啡廳——那種會讓人在 IG 上存了又存、卻一直找不到理由去的地方。</p>
  <p>星期天，當然人很多。這是預料中的事。<br>
  但走進去的瞬間，吧檯剛好空出一個位子。像是某種默契，我坐下了。<br>
  點了一杯咖啡，打開筆記本，開始寫最近堆在心裡、一直沒有整理的東西。</p>
  <blockquote class="art-quote">
    沒有人打擾，沒有人認識我。周圍的聲音變成一種白噪音，反而讓思緒變得清楚。
  </blockquote>
  <p>就這樣一直待到快打烊，走出店外，天空還亮著。<br>
  夏令時間的巴黎是這樣的——明明已經快晚上七點多，光線還捨不得走。<br>
  站在路邊那一刻，突然覺得，星期天就應該是這個樣子。<br>
  不需要做什麼有意義的事，只要好好地存在就夠了。</p>

  <p class="art-lang-switch"><em>C'est ça, le bonheur.</em></p>

  <hr class="art-divider">

  <p>Last Sunday, on a whim.<br>
  No plans, no agenda. Just grabbed my bag, tossed in a small notebook, and walked out the door.<br>
  The destination: a Korean café I'd been saving on my phone for months — the kind of place you screenshot on Instagram and never quite get around to visiting.</p>

  <p>Sunday, so of course it was packed. I knew it would be.<br>
  But the moment I walked in, a single bar stool opened up. Something like fate. I sat down.<br>
  Ordered a coffee, opened the notebook, and started writing — all the things that had been piling up in my head, unprocessed.</p>

  <blockquote class="art-quote">
    No one knew me here. The noise around me softened into white noise, and somehow my thoughts became clearer.
  </blockquote>

  <p>I stayed until almost closing time. Walking out, the sky was still light.<br>
  That's Paris in summer time — nearly half past seven in the evening and the light still refuses to leave.<br>
  Standing there on the pavement, I thought: this is exactly what Sundays should feel like.<br>
  You don't need to do anything meaningful. Just exist, quietly, for a while.</p>

  <p class="art-lang-switch"><em>C'est ça, le bonheur.</em></p>
`
  },
  {
    id: 'a2',
    title: '放空也是一種奢侈',
    cat: '巴黎日常 · Just Paris',
    date: '04.04.2026',
    img: 'boursedecommerce.webp',    
    excerpt: '一個人的巴黎午後，在皮諾私人美術館的穹頂之下，放空，也是一種奢侈。', 
    content: `
  <p>三月中旬的某一天，預約了下午場的巴黎證券交易所——皮諾私人美術館。<br>
  沒有特別去研究當期的展覽主題，只是帶著一份期待與好奇，就這樣出發了。<br>
  平日的午後，人潮稀落。踏入展廳，穹頂之下的空間靜謐而開闊，<br>
  每一位觀展的人都安靜地凝視著前方的大螢幕，影像緩緩流動。</p>

  <img src="images/bourse02.webp">

  <blockquote class="art-quote">
    時間彷彿在此凝止。我也找了個位置坐下，似懂非懂地看著螢幕上的畫面，卻意外地感到一種平靜。
  </blockquote>

  <p>起身，走上樓層，每一件展品似乎都在訴說著什麼。<br>
  不確定自己能否完全共鳴，但在駐足與思索之間，思緒反而漸漸變得清晰。<br>
  就這樣走走停停，在不同的展間裡緩行，心靈也在不知不覺中被滋養了。<br>
  直到閉館時刻，趁著夜色步出，搭上地鐵。<br>
  這個平凡的藝術午後，我很喜歡——是屬於自己的 ME TIME。</p>

  <p class="art-lang-switch"><em>有時候，放空也是一種奢侈。而這樣的時光，正是現在要好好珍惜的。</em></p>

  <hr class="art-divider">

  <p>One afternoon in mid-March, I booked a ticket for the Bourse de Commerce — Pinault Collection.<br>
  I hadn't researched the current exhibition beforehand. I simply showed up, carrying nothing but curiosity and a quiet sense of anticipation.<br>
  It was a weekday afternoon, and the crowds were few. Stepping into the main hall, I found myself beneath a vast, domed ceiling — hushed and expansive.<br>
  Visitors stood or sat in stillness, their eyes fixed on a large screen where images moved at an unhurried pace.</p>

  <blockquote class="art-quote">
    Time seemed to pause. I found a seat and settled in, watching the film without fully understanding it, yet feeling, somehow, at ease.
  </blockquote>

  <p>I eventually rose and made my way upstairs. Each piece seemed to be saying something — whether I truly grasped it or not, I wasn't always sure.<br>
  But the act of pausing, of wondering, had a strange clarifying effect.<br>
  I drifted from room to room, unhurried, and somewhere in that gentle wandering, I felt something in me quietly restored.</p>

  <img src="images/bourse03.webp">

  <p>When closing time came, I stepped out into the evening and caught the metro home.<br>
  It was an ordinary afternoon, and yet — I loved it. A ME TIME, entirely my own.</p>

  <p class="art-lang-switch"><em>Sometimes, doing nothing is a luxury. And perhaps that's exactly what's worth holding onto, right now.</em></p>
`
  },
  {
    id: 'a3',
    title: '羅浮宮的夜',
    cat: '巴黎日常 · Just Paris',
    date: '05.04.2026',
    img: 'pyramidedulouvre.webp',
    excerpt: '每月第一個週五夜晚，免費開放的羅浮宮——再度造訪，才發現記憶比想像中更容易消散。', 
    content: `
  <p>每個月的第一個週五晚上，羅浮宮開放免費預約入場。<br>
  距離上一次造訪，已是整整一年前的事了。<br>
  入夜後的羅浮宮，和白天是截然不同的。燈光打在石砌的廊柱上，泛著一種沉靜的金黃；<br>
  走廊裡的人聲輕了，腳步也慢了，彷彿夜色本身替這座宮殿換上了另一副面孔。</p>

  <p>那時恰逢高訂展，展品與各個廳室的搭配渾然天成，留下了深刻的印象。<br>
  然而這次重遊，記憶卻變得模糊——許多展品與畫作，彷彿似曾相識，又彷彿從未謀面。<br>
  大多數的細節已悄然淡去，唯有勝利女神那份凌空而立的優雅，依然清晰地刻在腦海之中。</p>

  <img src="images/WingedVictoryofSamothrace.webp">

  <blockquote class="art-quote">
    與朋友邊走邊聊，說的不全是眼前的畫，更多是生活裡的瑣碎與近況。有時走著走著，話題自然停了，各自在某件展品前沉默片刻，再繼續前行。這種陪伴不需要解釋，卻讓整個夜晚多了一份溫度。
  </blockquote>

  <p>我們不約而同地感嘆：好幾次來看展，卻從未認真聆聽過那些著名畫作背後的故事與解說。<br>
  或許，在往後的日子裡，這次的記憶也只剩下一句話：曾經來過，知道蒙娜麗莎在此。而其他的——又會留下多少？<br>
  不是每一次造訪都要留下深刻的領悟，有時候只是走過、感受過、和好姐妹在夜裡邊走邊說著有的沒的——那本身，已經是一件值得的事了。</p>

  <p class="art-lang-switch"><em>在未來的某日回想起，大概會笑著說：那晚我們在羅浮宮閒晃，什麼都沒認真看，卻什麼都沒有白走。</em></p>

  <hr class="art-divider">

  <p>On the first Friday evening of each month, the Louvre offers free admission by reservation. It had been exactly a year since my last visit.<br>
  The Louvre at night is a different place entirely. Light falls across the stone colonnades in a deep, warm gold;<br>
  the voices soften, the footsteps slow, and the darkness outside seems to settle over the palace like a second skin.</p>

  <p>That time, a haute couture exhibition was on display, woven seamlessly throughout the galleries.<br>
  It had left a strong impression. Yet standing here again, the memory felt strangely blurred.<br>
  Most details had quietly slipped away — all except the Winged Victory of Samothrace, whose poised and timeless grace remained as vivid as ever.</p>

  <blockquote class="art-quote">
    My friend and I walked and talked — not always about the art, but about life, the small and scattered things that fill the days between visits like this. Every so often, mid-conversation, we'd both fall quiet in front of something, linger for a moment, then move on.
  </blockquote>

  <p>We found ourselves wondering aloud: how many times had we been to places like this, and never once stopped to really listen to the stories behind what we were looking at?<br>
  Sometimes it's enough to have simply passed through — to have wandered these galleries with your best girl, talking about everything and nothing, until the lights told you it was time to go.</p>

  <p class="art-lang-switch"><em>And someday, looking back, I think we'll laugh and say: we didn't really look at anything that night. But none of it was wasted.</em></p>
`
  },
  {
    id: "intro-paris",
    title: "在巴黎，拾起那些被遺落的瞬間",
    enTitle: "Picking Up the Moments Left Behind in Paris",
    cat: '巴黎日常 · Just Paris',
    date: "11.04.2026", 
    img: 'louvre02.webp',
    excerpt: "一個搬來巴黎的人，在等待與迷茫之間，找到了記錄日常的理由——不為演算法，只為自己。",
    content: `
        <div style="margin-top: 2rem;">
        <p><strong>契機</strong></p>
        <p>2年前搬來巴黎之後，日子好像一直在尋找方向——住處、實習、工作，每一件事都在流動。<br>
        後來有了一段被迫暫停的日子，與其說是放假，不如說是一個不知所措的等待期。<br>
        照常和朋友出門、逛展覽、聊心情，卻總覺得少了點什麼。</p>

        <p>手機裡存著咖啡廳的午後光線、展覽裡人來人往的片段、巴黎街頭的隨性瞬間。<br>
        在和幾位知心的前輩聊完天後，某個夜晚，那個開關突然被啟動了。<br>
        說是突然，其實早有伏筆——碩士課程裡接觸過網頁設計，去年也曾動念，只是沒有真正落實，就這樣擱著。<br>
        這一次，終於做了。</p>

       <p><strong>初衷</strong></p>
       <p>社群的消耗，好像比自己以為的還要來得重。<br>
        能夠建立一個屬於自己的空間，是一份小小的成就感，也是一本記事，<br>
        記錄著那些巴黎的點滴，還有在歐洲生活的平凡與不平凡。</p>

      <p><strong>對你說</strong></p>
      <p>或許你會在某篇裡找到一點共鳴，也說不定。</p>

      <hr style="border: 0; border-top: 1px solid #eee; margin: 3rem 0;">
      
       <p>Two years after moving to Paris, life still felt like a constant search for direction — finding a place to live, figuring out internships, then work. Everything kept shifting.<br>
        A while back, I found myself in a stretch of forced stillness. Less a holiday, more a waiting period with no clear end in sight.<br>
        I still went out with friends, visited exhibitions, talked about how things felt — but something was missing, and I couldn't quite name it.</p>

        <p>My phone was full of it, though: afternoon light in cafés, the quiet drift of people through gallery halls, the unhurried randomness of Parisian streets.<br>
        After conversations with a few mentors and friends I deeply admire, something clicked one evening.<br>
        It felt sudden, but looking back, it had been building for a while — I'd studied web design during my master's, thought about doing something with it last year, never followed through.<br>
        This time, I did.</p>

        <p><strong>Why not just post on Instagram?</strong></p>
        <p>Because I wanted somewhere quieter. Somewhere the algorithm couldn't reach.<br>
        The weight of social media had been heavier than I'd realised,<br>
        and building a space that was entirely my own felt like a small but meaningful achievement.<br>
        A place to keep things — the everyday moments of life in Paris, the ordinary and not-so-ordinary of living in Europe.</p>


      <p><strong>A note to you</strong></p>
      <p>Maybe you'll find something that resonates. Maybe you won't. Either way, you're welcome here.</p>
      </div>
    </div>
`
},
{
    id: "a4",
    title: "再見，五月",
    enTitle: "May, Already",
    cat: '巴黎日常 · Just Paris',
    date: "31.05.2026", 
    img: 'may.webp',
    excerpt: "勞動節的罷工、倫敦來的朋友、突然變熱的天氣，還有吃不完的蛋糕——這個五月，平凡又充實。",
    content: `

      <p>今天是五月的最後一天。日子過得飛快。<br>
      五一勞動節連假，和朋友搭車去巴黎近郊走走。因為罷工，原訂的地方沒有火車可以抵達，前一晚臨時改了目的地。<br>
      到了才發現——兩年前我們已經來過了。記憶慢慢拼湊回來，然後兩個人就這樣笑蠢了自己。</p>
      
      <p>上旬朋友從倫敦來訪，沒有特別排行程，主打吃得開心、買有緣分的東西。兩天下來碳水含量嚴重超標，吃到昏昏欲睡。<br>
      平日就正常上下班。天氣熱起來之前搶先買了一台新風扇——前一週還在發冷，後一週已經在翻背心和短袖，防曬襯衫都快穿不住了。</p>
      
      <p>這個月吃了好多美食和蛋糕。有自己買的，也有朋友特地買來我喜歡口味的小蛋糕。<br>
      有和朋友一起分享的熱鬧，也有自己從甜點店帶回家慢慢享用的安靜。<br>
      最印象深刻的，莫過於PSG贏球那晚——嬉鬧聲此起彼落，不時張望路上瘋狂的人群，到底是在慶祝還是作亂，似乎不論輸贏都會發生的事。</p>
      
      <p class="art-lang-switch"><em>這個五月，很棒，很幸福。</em></p>
      
      <hr class="art-divider">

      <p>Today is the last day of May. The month flew by.<br>
      During the Labour Day holiday, a friend and I took the train out to the Paris suburbs for a wander. A strike meant our original destination was unreachable, so we changed plans the night before.<br>
      When we arrived, we slowly realised we'd already been there two years ago. The memories came back piece by piece — and we ended up laughing at ourselves the whole way home.</p>
      
      <p>Early in the month, a friend came to visit from London. No itinerary, no pressure — just good food and whatever we happened to stumble upon. Two days of excessive carbs later, we were barely keeping our eyes open.<br>
      The rest of the week was the usual rhythm of commuting and working. I bought a new fan just before the heat arrived — one week I was cold from the rain, the next I was already digging out tank tops, too warm for anything with sleeves.</p>
      
      <p>So much good food this month. Cakes I picked out myself, and a small cake a friend brought over in exactly the flavour she knew I'd love.<br>
      Moments shared loudly with friends, and quieter ones — a pastry from the patisserie, eaten slowly at home alone.<br>
      The most memorable night of all: PSG winning the championship. The city erupted around us — we kept glancing out at the crowds spilling into the streets, half celebrating, half causing chaos. Honestly, it probably would have looked the same either way.</p>
      
      <p class="art-lang-switch"><em>May was a good one. A happy one.</em></p>
      `
},
{
    id: "a5",
    title: "落地",
    enTitle: "Landing",
    cat: '巴黎日常 · Just Paris',
    date: "21.08.2026", 
    img: 'aug2026.webp',
    excerpt: "法國碩士畢業後，帶著一張求職簽證和一股不肯認輸的傲氣，在巴黎找一個屬於自己的位置。",
    content: `

      <p>接到那通電話的時候，我的手在抖。<br>
         聲音也是——但那是後來的事了。在那之前，還有很長的一段路要走。</p>
      
      <p>法國高商碩士畢業後的一年左右，我持著 RECE 居留身分在法國找一個理想。<br>
      白天在餐飲業打工，結束一天的班後，回到家稍作休息，便打開電腦，準備下一份履歷。<br>
      骨子裡有一股傲氣，或許也是一股不肯認輸的固執——不太敢打電話回家，不是沒有話說，而是不知道怎麼開口。<br>
      怎麼解釋那些投出去沒有回音的履歷，那些走出面試公司卻不確定自己表現如何的日子。</p>

      <p>每個日出日落，都推著我繼續往前。</p>
      
      <p>遠在台灣的閨蜜時常聽我說話，透過電話傳來聲音上的力量。<br>
         而在巴黎，我也有能夠說話的親近友人——不會說好聽話灌迷湯，因為他們深知這裡的環境有多競爭。<br>
         但他們總是在那，在我需要的時候，聽我說說話，陪我吃東西。<br>
         儘管有時我得在腦海裡想很久，才能把那些話說出口——因為那是多麼不容易的一件事。</p>

      <p>最難熬的一次，是進到最後一輪面試之後。</p>
      
      <p>每一關都順利，心裡隱隱覺得，這次或許真的可以。<br>
        把手機放回口袋，繼續工作。那一整天，心情像被什麼東西壓著，說不出來，也沒有辦法說。<br>
        空擋時間發了條訊息給朋友們，說下班想吃飯——沒有多說什麼，他們就答應了。<br>
        下班後，朋友們已經在等我。問我發生了什麼事，聽我說，陪我吃飯聊聊，給我加油打氣，然後給了我一個溫暖的擁抱。</p>
      <p>那個擁抱，撐過了那個夜晚。</p>
      <p>但第二天，日子還是繼續運轉。</p>
      
      <p>年初，照常利用空檔準備履歷和面試。甚至在旅行途中，還特地安排了一堂課，和法語老師進行電話模擬練習；<br>
         回到巴黎後，也找了朋友幫我繼續練膽量，讓自己能夠更從容地走進公司，面對線下的面試。<br>
         等待的過程，心情總是七上八下。但我告訴自己：既然已經完成這場，就繼續好好準備下一場。</p>
        
       <p>而那一份屬於我的工作，終究還是來了。</p>
       
        <p>不是夢想中的職位，但是一個開始。<br>
          更重要的是——終於踏進了我一直想進的產業。</p>
        
        <p>接電話時，手在顫抖，聲音也是——但那是興奮，是替自己開心的顫抖。<br>
        掛上電話後，我愣了一下，才慢慢意識到，那段漫長的等待，結束了。</p>
        
        <p>入職後，為了順利通過試用期，我很認真地把同事教的每一個流程都寫下來，不會的隨時翻回去看。<br>
        同事們說，沒關係，慢慢來，做好比較重要——然後耐心地、和善地教我，也告訴我一些只有在裡面才會知道的眉角。<br>
        新環境加上新產業，需要適應的事情很多，但那種被接納的感覺，讓一切都稍微容易了一些。</p>
        
        <p>凡事都有它的道理。就像老天冥冥之中自有安排，在最好的時機給你一條路。<br>
        或許過程坎坷曲折，繞了點遠路——但那是為了摘果實、歇息片刻，積攢足夠的能量，再出發。</p>
      
      <p class="art-lang-switch"><em>我是這樣相信著的。</em></p>
      
      <hr class="art-divider">

      <p>My hand was shaking when I answered the phone.<br>
        My voice too — but that came later. Before that, there was a long road to walk.</p>
        
     <p>About a year after graduating from a French Grande École, I was still in France on a RECE visa, searching for somewhere to belong.<br>
     I was working part-time in hospitality, and after every shift, I'd come home, rest for a moment, then open my laptop to work on the next application.<br>
     There's a stubbornness in me — maybe pride, maybe something closer to refusing to lose. I stopped calling home as often.<br>
     Not because I had nothing to say, but because I didn't know how to say it. <br>
     How do you explain the CVs that disappeared into silence, the days spent walking out of interview rooms not knowing if you'd done enough?</p>

    <p>Every sunrise and sunset pushed me forward, whether I felt ready or not.</p>

    <p>My closest friend in Taiwan listened from across the world, sending me energy through the phone.<br>
    In Paris, I had a few true friends who wouldn't sugarcoat things — who knew exactly how competitive this city could be — but who were simply there.<br>
    To listen. To share a meal. Even when it took me a long time to find the words, because some things are just hard to say out loud.</p>

    <p>The hardest moment came after I made it to the final round of an interview process.</p>

    <p>Everything had gone smoothly. I let myself believe, quietly, that maybe this was it.<br>
    The rejection came by email, while I was mid-shift at work.<br>
    The words on the screen were clear enough — I just needed a few extra seconds for them to land.<br>
    I put my phone back in my pocket and kept working. The rest of that day, something heavy sat on my chest that I couldn't name and couldn't say out loud.<br>
    During a break, I sent a message to my friends — just that I wanted to grab dinner after work. Nothing more. They said yes without asking why.<br>
    When I finished my shift, they were already there waiting. They asked what happened, listened, ate with me, cheered me on — and then gave me a warm hug.</p>

    <p>That hug got me through the night.</p>

    <p>But the next day, life kept moving.</p>

    <p>I used every spare moment to prepare — even arranging a mock phone interview with my French tutor while I was travelling.<br>
    Back in Paris, I practised with a friend to build my confidence before walking into in-person interviews.<br>
    The waiting was the hardest part, my mood swinging constantly, but I kept telling myself: you've finished this one, now prepare for the next.</p>

    <p>And then the job came.</p>

    <p>Not the dream title. But a beginning.<br>
      And finally — a foot in the door of the industry I'd always wanted to be part of.</p>

    <p>My hand was shaking when I answered. My voice too — but it was the kind of shaking that comes from joy, from being genuinely, quietly proud of yourself.<br>
    When I hung up, I sat still for a moment, slowly realising the long wait was finally over.</p>

    <p>Starting the role, I wrote down every process my colleagues walked me through, so I could refer back whenever I needed to.<br>
    They told me to take my time — that doing things right mattered more than doing them fast — and they meant it.<br>
    Patient, kind, and generous with the details that only insiders know.<br>
    A new environment and a new industry meant there was a lot to take in, but that sense of being welcomed made everything a little easier to navigate.</p>

    <p>Everything happens for a reason. The timing, the detours, the long way around — maybe it was all part of the journey.<br>
    A chance to rest, to gather strength, to pick something up along the way before setting off again.</p>
      
    <p class="art-lang-switch"><em>That's what I choose to believe.</em></p>
      `
},
];

const ALBUMS = [
  { 
    id: 'alb_paris', 
    title: 'PARIS', 
    cat: 'PARIS', 
    cover: 'images/palaisroyal.webp', // 這是妳在主頁會看到的封面圖
    desc: '巴黎碎片 · Parisian Fragments',
    photos: [
      { img: 'images/palaisroyal.webp', desc: 'Le Palais-Royal · 法國女人' },
      { img: 'images/palaisroyal03.webp', desc: 'Le Palais-Royal · 白紗迴聲' },
      { img: 'images/palaisroyal04.webp', desc: 'Le Palais-Royal · 光影的交會點' },
      { img: 'images/citywalk.webp', desc: 'City walk in Paris · 城市漫步' },
      { img: 'images/canalsaintmartin.webp', desc: 'Canal Saint-Martin · 靈魂的停靠站' }
    ]
  },
  { 
    id: 'alb_museum', 
    title: 'MUSEUM', 
    cat: 'MUSEUM', 
    cover: 'images/lasaintechapelle.webp', 
    desc: '影像紀錄 · Visual Diary',
    photos: [
      { img: 'images/lasaintechapelle.webp', desc: 'La Sainte-Chapelle · 最美的彩色玻璃窗教堂' },
      { img: 'images/boursedecommerce02.webp', desc: 'Bourse de Commerce · 皮諾私人美術館' },
      { img: 'images/lvfoundation.webp', desc: 'Fondation Louis Vuitton · 路易威登藝術基金會' },
      { img: 'images/MuseeRodin.webp', desc: 'Le musée Rodin · 沉思者 Le Penseur' },
      { img: 'images/petitpalais.webp', desc: 'Petit Palais · 大腦的背後' }
    ]
  }
];
