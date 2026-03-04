/**
 * Podcast Episodes Dataset (extracted from provided screenshots – incomplete titles marked with '…').
 * You can refine: title, link, cover, totalMinutes.
 */

const PODCAST_EPISODES = [


  // 3 Mar 2026
  { id:'2026-03-03-1', date:'2026-03-03', title:'#148: Žaneta Polášková – "Nebuďte na sebe tvrdí, buďte vytrvalí."', show:'TŘIŠESTPĚT', totalMinutes:94, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab000015be7b9bdc334b25ab7fc7097cbc', platform:'spotify', link:'https://open.spotify.com/episode/5nsfY39mq097poeIXdcDBX?si=vsiH72ovTxmiSHyHaQtnXg', tags:['Czech','Running','Ultra','Interview','Spotify'] },
  { id:'2026-03-03-2', date:'2026-03-03', title:'#134: Daniel Ligocki – "Překonávejte svůj strach a buďte lepší verzí sami sebe."', show:'TŘIŠESTPĚT', totalMinutes:0, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015be3fba9ee3459848b655e9092b', platform:'spotify', link:'https://open.spotify.com/episode/6CH1X0m7BncIKt5mBKSvms?si=iDnIGEQaQ5iQZP9jJKq14Q', tags:['Czech','Running','Ultra','Interview','Spotify'] },

  // 2 Mar 2026
  { id:'2026-03-02-1', date:'2026-03-02', title:'Těšilo mě, když mi lídři dávali vědět, jak si váží mojí práce, vzpomíná na roli domestika Raboň', show:'Kilometry Jiřího Ježka', totalMinutes:53, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/6vSd5BzLSwZrk2oFTWARIv?si=c26t5ucyS9GfgzTXpPjFog', tags:['Czech','Cycling','Interview','Spotify'] },

  // 28 Feb 2026
  { id:'2026-02-28-1', date:'2026-02-28', title:'Petr Cech: What Most People Get Wrong About Football', show:'Business of Sport', totalMinutes:0, cover:'https://i.ytimg.com/vi/lot5Ixgbxkk/maxresdefault.jpg', platform:'youtube', link:'https://youtu.be/lot5Ixgbxkk?si=gc3fjnAxcTjmQP2l', tags:['English','Football','Interview','Sport','YouTube'] },
  { id:'2026-02-28-2', date:'2026-02-28', title:'#131 Dalibor Dědek – Příběh skromného miliardáře z Jizerek', show:'Brocast', totalMinutes:0, cover:'https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1f88a8ed53a0775d7d2cc3fd86', platform:'spotify', link:'https://open.spotify.com/episode/2lNscCnQVp5HbUtLN4aXth?si=e2537EGGSeK3QTvFFl5Z3A', tags:['Czech','Interview','Business','Success','Spotify'] },
  { id:'2026-02-28-3', date:'2026-02-28', title:'#128 MUDr. Gertrúda Čápová – Tajemství švýcarského zdraví…', show:'Brocast', totalMinutes:0, cover:'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fde75b41297998a5b2d6a20ec', platform:'spotify', link:'https://open.spotify.com/episode/1pwVl9sW7AclRiUKmVmQG9?si=wW23B-KPTRCyJZlBNLkRPQ', tags:['Czech','Health','Interview','Medicine','Spotify'] },

  // 27 Feb 2026
  { id:'2026-02-27-1', date:'2026-02-27', title:'Makej vole! Podcast #94 – Závodní speciál: Chopok Skymarathon, Beskydská sedmička a UTMB', show:'Makej vole! Podcast', totalMinutes:0, cover:'https://i.scdn.co/image/ab67656300005f1f5426fd70c857a0c0d055e8d8', platform:'spotify', link:'https://open.spotify.com/episode/3OnRfEWVHoCpsskMr82CmU?si=-q0udo9hTvu_CAaRKEYb5Q', tags:['Czech','Running','Ultra','B7','UTMB','Spotify'] },
  { id:'2026-02-27-2', date:'2026-02-27', title:'Makej vole! Podcast #95 Speciál – Ross Edgley, Kilian Jornet, rekord na Tor de Géants, Strava novinky a další…', show:'Makej vole! Podcast', totalMinutes:0, cover:'https://i.scdn.co/image/ab67656300005f1f5426fd70c857a0c0d055e8d8', platform:'spotify', link:'https://open.spotify.com/episode/3umavfYvE5PsL3BxMWioV2?si=pxVrB3P6QgCO28cCmrMx1g', tags:['Czech','Running','Ultra','Special','Spotify'] },
  { id:'2026-02-27-3', date:'2026-02-27', title:'#28 Metoděj Jílek: moje několikaté používání Penca bylo letos završeno spoluprací', show:'Penco podcast', totalMinutes:0, cover:'https://i.scdn.co/image/ab67656300005f1f0441e07884a097d964f41361', platform:'spotify', link:'https://open.spotify.com/episode/3Z00umZZGJoxjYsnMRt1if', tags:['Czech','Running','Sport','Spotify'] },

  // 26 Feb 2026
  { id:'2026-02-26-1', date:'2026-02-26', title:'Makej vole! Podcast #98 - Terka Rudolfová nejen o rekordu na Beskydské sedmičce', show:'Makej vole! Podcast', totalMinutes:0, cover:'https://i.scdn.co/image/ab67656300005f1f5426fd70c857a0c0d055e8d8', platform:'spotify', link:'https://open.spotify.com/episode/1mjv46beRp7XW3Qn6ayoZT?si=UT6RrHDmT1Wqh0kTDKPkWA', tags:['Czech','Running','Ultra','B7','Spotify'] },

  // 25 Feb 2026
  { id:'2026-02-25-1', date:'2026-02-25', title:'#176 - JAN KOLLER - Miliony z fotbalu rozumně investoval, Dnes spoluvlastní padelový klub - Legenda fotbalu', show:'Kid Ajvn & A-Cast', totalMinutes:0, cover:'https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1fd3ec3065a51959341d5b0367', platform:'spotify', link:'https://open.spotify.com/episode/40j4q27YXlfTGd0LmEDgt2', tags:['Czech','Football','Interview','Business','Spotify'] },

  // 24 Feb 2026
  { id:'2026-02-24-1', date:'2026-02-24', title:'RoadCast #2 - Offseason a zimní příprava', show:'RoadCast', totalMinutes:0, cover:'https://image-cdn-ak.spotifycdn.com/image/ab67656300005f1f43e0955e4175799299096222', platform:'spotify', link:'https://open.spotify.com/episode/1YWxdnBsFlEHZVxKgUSKDP?si=66sjJOq6RrKW3wXpGtAY8g', tags:['Czech','Cycling','Training','Spotify'] },

  // 23 Feb 2026
  { id:'2026-02-23-1', date:'2026-02-23', title:'RoadCast #1 - Život profesionální cyklistky', show:'RoadCast', totalMinutes:0, cover:'https://image-cdn-fa.spotifycdn.com/image/ab67656300005f1fdb2417ec09f8a10f4042f525', platform:'spotify', link:'https://open.spotify.com/episode/71VKaxLjyTkXFGSQUTFrpZ?si=6PxxQ0eKSLKijxVQKWRirQ', tags:['Czech','Cycling','Interview','Spotify'] },

  // 22 Feb 2026
  { id:'2026-02-22-1', date:'2026-02-22', title:'JIŘÍ LANGMAJER: Byl jsem hrozný k*kot, teď čím dál víc pláču', show:'Čestmír Strakatý', totalMinutes:0, cover:'https://i.ytimg.com/vi/hEibxJ9omzs/maxresdefault.jpg', platform:'youtube', link:'https://youtu.be/hEibxJ9omzs?si=aVQDap6h-8ASSi5P', tags:['Czech','Interview','YouTube'] },
  { id:'2026-02-22-2', date:'2026-02-22', title:'How to Train and Recover Like a 8X Cyclocross World Champion', show:'WHOOP', totalMinutes:0, cover:'https://i.ytimg.com/vi/xT1QXOmeFuI/maxresdefault.jpg', platform:'youtube', link:'https://youtu.be/xT1QXOmeFuI?si=95NkoDoCjdNs9cCE', tags:['English','Cycling','Training','YouTube'] },

  // 20 Feb 2026 
  { id:'2026-02-20-1', date:'2026-02-20', title:'Už nechci Rolexky ani Lamba: Vémola o radikální změně životních priorit I NERUDACAST 86', show:'NerudaCast - Pavol Neruda', totalMinutes:55, cover:'https://i.ytimg.com/vi/0SYtocNLeXA/maxresdefault.jpg', platform:'youtube', link:'https://youtu.be/0SYtocNLeXA?si=49M5AGmUgbSwyvh0', tags:['Slovak','Interview','YouTube'] },

  { id:'2026-02-20-2', date:'2026-02-20', title:'Tréninkové zóny nejen v TrainingPeaks - Pohledem trenéra', show:'Pohledem trenéra', totalMinutes:22, cover:'https://i.scdn.co/image/ab67656300005f1fdc2f5cff492a72f54b511a44', platform:'spotify', link:'https://open.spotify.com/episode/3Zz0CMkSqlzOnYtIrLJkV4?si=TMJ43J8BQ1eBrJFEUODorw', tags:['Czech','Training','Spotify'] },

  { id:'2026-02-20-3', date:'2026-02-20', title:'Nechápu kam až to může růst. Talenti mají top profesionální přístup už od začátku, diví se Ježek', show:'Kilometry Jiřího Ježka', totalMinutes:47, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/5MqNzYU49p8zVUYxi1hRY2?si=vO8MK297QG6cNP_OUo3U5w', tags:['Czech','Cycling','Spotify'] },

  { id:'2026-02-20-4', date:'2026-02-20', title:'Makej vole! Podcast #101 - Jirka Petr a Petr Hének: O vítězství, supportu a tréninku na LH24', show:'Makej vole! Podcast', totalMinutes:35, cover:'https://i.scdn.co/image/ab67656300005f1f5426fd70c857a0c0d055e8d8', platform:'spotify', link:'https://open.spotify.com/episode/4riwPwWuvT5pChA19Mj4bd?si=wuv7kS41Rde1Myu5YNvalw', tags:['Czech','Running','Podcast','LH24','Spotify'] },

  // 19 Feb 2026 
  { id:'2026-02-19-1', date:'2026-02-19', title:'VO2max, zóna 1 či 2 a vše ostatní z posledních článků na blogu - Pohledem trenéra', show:'Pohledem trenéra', totalMinutes:19, cover:'https://i.scdn.co/image/ab67656300005f1fdc2f5cff492a72f54b511a44', platform:'spotify', link:'https://open.spotify.com/episode/4eEl6jtjoR2YoDWpEqeSxK?si=f8mexCsWQL6V57qXLS3XnA', tags:['Czech','Training','Spotify'] },
  
  // 18 Feb 2026 
  { id:'2026-02-18-1', date:'2026-02-18', title:'#12 - MATĚJ KUBRT - Ještěďák - finančník', show:'#DYCKYJESTED (ne)podcast', totalMinutes:41, cover:'https://i.scdn.co/image/ab67656300005f1fa15a69b93e0626791c9aa6c4', platform:'spotify', link:'https://open.spotify.com/episode/5jQB6vyNjIPZe5HcQM1Vnx?si=KZhLIzb8T8iEsAjo04xGWA', tags:['Czech','Podcast','Spotify'] },
  { id:'2026-02-18-2', date:'2026-02-18', title:'Jak si hlídat zdraví jednoduše a dlouhodobě - MUDr. Tomáš Kaštovský - progresstalk', show:'progresstalk', totalMinutes:49, cover:'https://i.scdn.co/image/ab67656300005f1fddb32fc687251ee907f66dfc', platform:'spotify', link:'https://open.spotify.com/episode/0tD7nIbpouH8IEkhxDK1TA?si=18FiqH6aTj6BGR7QHSaf5A', tags:['Czech','Health','Spotify'] },

  // 16 Feb 2026 
  { id:'2026-02-16-1', date:'2026-02-16', title:'Tréninková Bible č. 8 - Anatomie dokonalé sezóny: Trénink podle Kiliana Jorneta', show:'Tréninková Bible', totalMinutes:30, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab00001692cf8eeb730ebbd0000eed723b', platform:'spotify', link:'https://open.spotify.com/episode/3e2cGTzn4Fdd2UsT9dqA5A', tags:['Czech','Training','Spotify'] },

  // 17 Feb 2026 
  { id:'2026-02-17-1', date:'2026-02-17', title:'Měl jsem krizi třeba i čtyřicet kilometrů. Často se na trati trápím sám, přiznává běžec Šumný', show:'Kilometry Jiřího Ježka', totalMinutes:43, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/4UYg4ndyRdGm0dQtnf9DhX?si=8H7kboHASGiNCCNA39Z4gA', tags:['Czech','Running','Spotify'] },
  { id:'2026-02-17-2', date:'2026-02-17', title:'YOU NEED TO RESET, RESTART AND REFOCUS - Powerful Motivational Speech | Eric Thomas', show:'Motivation Daily by Motiversity', totalMinutes:9, cover:'https://i.ytimg.com/vi/T0mjs9t616s/mqdefault.jpg', platform:'spotify', link:'https://open.spotify.com/episode/0XHYmUFJkzCg3JdZwCUcBw?si=mDIGZIgQS9OaEVTfpmL4ow', tags:['English','Motivation','Spotify'] },
  
  // 11 Feb 2026 
  { id:'2026-02-11-1', date:'2026-02-11', title:'Makej vole! Trénink #2 - O běžecké technice', show:'Makej vole! Trénink', totalMinutes:17, cover:'https://i.scdn.co/image/ab67656300005f1fbb9b8343e92c7814d6a0efc2', platform:'spotify', link:'https://open.spotify.com/episode/3UOyuxRVrB0nVGhq5LGjt5?si=7cb518ff77004de5', tags:['Czech','Running','Training','Spotify'] },
  { id:'2026-02-11-2', date:'2026-02-11', title:'Makej vole! Podcast #100 - Veronika Reade a Ing. Jiří Sedláček, CSc: Příběh značky PENCO', show:'Makej vole! Podcast', totalMinutes:34, cover:'https://i.scdn.co/image/ab67656300005f1f5426fd70c857a0c0d055e8d8', platform:'spotify', link:'https://open.spotify.com/episode/7yRAg4kyuKBWjs90YQnrwr?si=FNwV9nNWT0G3s5PLnhXZuw', tags:['Czech','Podcast','Spotify'] },
  
  // 10 Feb 2026 
  { id:'2026-02-10-1', date:'2026-02-10', title:'UTMB – Jaká je historie a zajímavosti ohledně této světové série?', show:'Hodinky 365 smart', totalMinutes:0, cover:'https://i.ytimg.com/vi/vvQG90Pvj5s/maxresdefault.jpg', platform:'youtube', link:'https://youtu.be/vvQG90Pvj5s?si=R2FyQa2M4IlSO49O', tags:['Czech','Running','YouTube'] },
  { id:'2026-02-10-2', date:'2026-02-10', title:'Znám každou výmluvu, která existuje. Na mě si svěřenci nepřijdou. Musí makat, směje se Šimůnek', show:'Kilometry Jiřího Ježka', totalMinutes:74, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/6BkYb0ze53OWXGwnO93FRn?si=5f9ZPSGAQFCwfVa7U25M6Q', tags:['Czech','Cycling','Spotify'] },
  
  // 07 Feb 2026
  { id:'2026-02-07-1', date:'2026-02-07', title:'Myslel jsem si, že jsem naivní | Řekl jsem hov*o - udělám z toho svojí výhodu | PETR JÁKL', show:'NOHAMA NA ZEMI', totalMinutes:132, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab0000169254458474a113ae4d7f8e3bd3', platform:'spotify', link:'https://open.spotify.com/episode/0tArf1zgeY5iJF5sqrEGps', tags:['Czech', 'Interview', 'Self improvement'] },
  { id:'2026-02-07-2', date:'2026-02-07', title:'JIRKA KRÁL - Chystá návrat na Youtube nebo chce úplně zmizet ze sítí? | MineCast #3', show:'MineCast', totalMinutes:90, cover:'https://i.ytimg.com/vi/URDvhaIhki0/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=URDvhaIhki0', tags:['Czech', 'Interview', 'YouTube'] },

  // 06 Feb 2026
  { id:'2026-02-06-1', date:'2026-02-06', title:'#3 Adam Korecký - „Neboj se doplňovat sacharidy včas…" | UltraMinuty', show:'UltraMinuty', totalMinutes:128, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab00001692dff3781e418e18209470565f', platform:'spotify', link:'https://open.spotify.com/episode/6G7yPXeDo2eTc5edo6z9G7', tags:['Czech', 'Running', 'Ultra', 'Nutrition'] },

  // 31 Jan 2026
  { id:'2026-01-31-1', date:'2026-01-31', title:'Pohodlí je výkon. Konzistence je klíčem úspěchu pro profíka i hobby sportovce, říká biomechanik', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:'https://i.scdn.co/image/ab6765630000ba8a65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/2etueq7SDC7x3Vn0Srf2qS', tags:['Czech', 'Cycling', 'Science', 'Biomechanics'] },

  // 30 Jan 2026
  { id:'2026-01-30-1', date:'2026-01-30', title:'Makej vole! Podcast #84 – Honza Procházka o tréninku a vítězství na LH24 2025', show:'Makej vole! Podcast', totalMinutes:90, cover:'https://i.ytimg.com/vi/6krg0G80NgY/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=6krg0G80NgY', tags:['Czech', 'Running', 'Ultra', 'LH24'] },

  // 28 Jan 2026
  { id:'2026-01-28-1', date:'2026-01-28', title:'#145: Martina Oroszová – "B7 jsem odběhla na Marskách."', show:'TŘIŠESTPĚT', totalMinutes:74, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab00001692a7d9239f2a1fbec3f11c9b1a', platform:'spotify', link:'https://open.spotify.com/episode/02YceG56oEVctkJmv3WqvP', tags:['Czech', 'Running', 'Ultra', 'B7'] },

  // 23 Jan 2026
  { id:'2026-01-23-1', date:'2026-01-23', title:'Tréninková Bible č. 7 - Proč pomalý trénink dělá rychlé běžce', show:'Tréninková Bible', totalMinutes:29, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab00001692cf8eeb730ebbd0000eed723b', platform:'spotify', link:'https://open.spotify.com/episode/6pJbwgz5KPYEgYCErUHZ1y', tags:['Czech', 'Running', 'Training'] },
  
  // 20 Jan 2026 
  { id:'2026-01-20-1', date:'2026-01-20', title:'Kroky týmu Visma jsou zvláštní. Konec kariéry Yatese je toho dalším důkazem, diví se Ježek', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/7bQCkjs8U1yByfjd5EyvE1?si=b35bc8000111443e', tags:['Czech', 'Cycling', 'News'] },
  
  // 14 Jan 2026 (from Spotify)
  { id:'2026-01-14-1', date:'2026-01-14', title:'Tréninková Bible č. 6 - Tajemství silového tréninku pro běžce', show:'Tréninková Bible', totalMinutes:28, cover:'https://image-cdn-fa.spotifycdn.com/image/ab6772ab000015be5cebb896f2fb98e1b1889e40', platform:'spotify', link:'https://open.spotify.com/episode/6SfAdG0txuoy4ubEyVYWIc', tags:['Czech', 'Running', 'Training'] },
  { id:'2026-01-14-2', date:'2026-01-14', title:"IT'S TIME TO RESET, RESTART, AND REFOCUS IN 2026 - The Most Powerful Motivational Speech Compilation", show:'Motivation Daily by Motiversity', totalMinutes:38, cover:'https://i.scdn.co/image/ab67656300005f1f132579598f5357289e616768', platform:'spotify', link:'https://open.spotify.com/episode/2XNv4MPCrgsDb2PitzdtD5', tags:['English','Motivation'] },
  
  // 31 Dec 2025
  { id:'2025-12-31-1', date:'2025-12-31', title:'HOUSE - Od Minecraftu k Everestu, dítěti a životu mimo YouTube | MineCast #2', show:'MineCast', totalMinutes:90, cover:'https://i.ytimg.com/vi/tE-FrPm8cDA/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=tE-FrPm8cDA', tags:['Czech', 'Interview', 'YouTube', 'Minecraft'] },
  
  // 30 Dec 2025 
  { id:'2025-12-30-1', date:'2025-12-30', title:'Hobby sportovci si někdy škodí tím, že jí málo. Vše dohání sladkostmi, říká specialistka Mokrejšová', show:'Kilometry Jiřího Ježka', totalMinutes:53, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/3rJgLhIYQ3iJ19y9Izrdey?si=e13ce08ae20d4ee0', tags:['Czech', 'Nutrition', 'Running'] },

  // 20 Dec 2025
  { id:'2025-12-20-1', date:'2025-12-20', title:'GEJMR - Otevřeně o vyhoření, anonymitě a cestě k milionu odběratelů | MineCast #1', show:'MineCast', totalMinutes:90, cover:'https://i.ytimg.com/vi/wHtPgpbtfYc/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=wHtPgpbtfYc', tags:['Czech', 'Interview', 'YouTube', 'Minecraft'] },
  
  // 12 Dec 2025 (from Spotify)
  { id:'2025-12-12-1', date:'2025-12-12', title:'Tréninková Bible č. 5 - Pražská stovka', show:'Tréninková Bible', totalMinutes:100, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015beb97347331c4ebd7f7596575c', platform:'spotify', link:'https://open.spotify.com/episode/2dIqdZYWPxwDgPgHQ98rQR', tags:['Czech', 'Running', 'Ultra'] },
  
  // 30 Nov 2025 
  { id:'2025-11-30-1', date:'2025-11-30', title:'Cyklokros je fajn, ale pořád ho beru jako doplněk k hlavní sezoně. Na olympiádu nepatří, tvrdí Ježek', show:'Kilometry Jiřího Ježka', totalMinutes:50, cover:'https://i.scdn.co/image/ab67656300005f1f65bfd0524d2e54f9cf14232c', platform:'spotify', link:'https://open.spotify.com/episode/2z6bCSvOu1ifxpqmv2oleJ?si=a4fc6b9fee214525', tags:['Czech', 'Cycling', 'Chill'] },

  // 23 Nov 2025
  { id:'2025-11-23-1', date:'2025-11-23', title:'Tréninková Bible č. 4 - Odpovědnice', show:'Tréninková Bible', totalMinutes:96, cover:'https://i.scdn.co/image/ab6765630000f68d896ff1bbff5d945b6b02e7f7', platform:'spotify', link:'https://open.spotify.com/episode/0eTG781YyPjaGSkoUNzFsX?si=55f72f77f9da46bb', tags:['Czech', 'Running', 'Training', 'Q&A'] },
  
  // 20 Nov 2025
  { id:'2025-11-20-1', date:'2025-11-20', title:'#29 LEGS:ON podcast - SPECIÁL Na co se těšíme v roce 2026?', show:'LEGS:ON | Cyklistický podcast', totalMinutes:32, cover:'https://i.ytimg.com/vi/vAtwHh5o7z0/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=vAtwHh5o7z0', tags:['Czech', 'Cycling', 'Special'] },
  
  // 11 Nov 2025
  { id:'2025-11-11-1', date:'2025-11-11', title:'Tadej Pogačar Interview › Cyclist Magazine Podcast [ft. Fahri Diner]', show:'Cyclist', totalMinutes:88, cover:'https://i.ytimg.com/vi/ztqycLMnQgk/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=ztqycLMnQgk', tags:['English', 'Cycling', 'Interview', 'Tour de France'] },
  { id:'2025-11-11-2', date:'2025-11-11', title:'Je to 7 let... Co dělám teď a jaké mám plány? l Jirka Král', show:'RestDay', totalMinutes:83, cover:'https://i.ytimg.com/vi/FxeeAjUJsZg/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=FxeeAjUJsZg', tags:['Czech', 'Lifestyle', 'Vlog', 'Interview'] },
  
  // 10 Nov 2025
  { id:'2025-11-10-1', date:'2025-11-10', title:'145: The Pitfalls of High Volume Endurance Training', show:'The Nick Bare Podcast', totalMinutes:64, cover:'https://i.scdn.co/image/ab6765630000f68dbf809ec21bc6132d3e2b5852', platform:'spotify', link:'https://open.spotify.com/episode/05hPzbCZ8JE3lfW8RIbMtI?si=ce2d0d1a159f4b1f', tags:['English', 'Running', 'Training', 'Science'] },
  { id:'2025-11-10-2', date:'2025-11-10', title:'Horolezec Trávniček: Výstup na Everest môže vyjsť až na 100 000 eur!', show:'Diskusný klub so Šimonom Žďárským', totalMinutes:34, cover:'https://i.ytimg.com/vi/ucwBXQeRN-g/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=ucwBXQeRN-g', tags:['Slovak', 'Mountaineering', 'Everest', 'Interview'] },
  
  // 9 Nov 2025
  { id:'2025-11-09-1', date:'2025-11-09', title:'Tréninková Bible č. 3 - Bicarb, ketony a porovnání tréninkových přístupů z předchozích epizod', show:'Tréninková Bible', totalMinutes:85, cover:'https://i.scdn.co/image/ab6765630000f68d896ff1bbff5d945b6b02e7f7', platform:'spotify', link:'https://open.spotify.com/episode/6KMUf2dT2moQWBk1WamjQ5?si=3d7f561638134ce9', tags:['Czech', 'Running', 'Training', 'Science', 'Nutrition'] },

  // 2 Nov 2025
  { id:'2025-11-02-1', date:'2025-11-02', title:'#09 - TOMÁŠ ŠTVERÁK - Elitní ultrarunner', show:'#DYCKYJESTED (ne)podcast', totalMinutes:87, cover:'https://i.scdn.co/image/ab67656300005f1f83f88c0923e175cfff29b3e6', platform:'spotify', link:'https://open.spotify.com/episode/23c621ZeIUdNpTTgNw98hA?si=36567ae77d394325', tags:['Czech', 'Running', 'Ultra', 'Interview'] },

  // 28 Oct 2025
  { id:'2025-10-28-1', date:'2025-10-28', title:'O sportu, mozku a lidskosti s neurochirurgem Vladimírem Benešem', show:'progresstalk', totalMinutes:40, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015be79a35fa69d248ef42f6c31cb', platform:'spotify', link:'https://open.spotify.com/episode/6JFSmx0nJxOjQvk0uGHTI6?si=95b2aec81ab34ce6', tags:['Czech', 'Science', 'Medicine', 'Neuroscience', 'Sports', 'Health'] },

  // 27 Oct 2025
  { id:'2025-10-27-1', date:'2025-10-27', title:'Speciál o běhání: Jak začít běhat? Jaké boty NEkupovat? Co dýchání? A jak pokořit maraton? David Vaš', show:'Podcast Inspiro Jakuba Stejskala', totalMinutes:89, cover:'https://i.ytimg.com/vi/qzO_N3BahSI/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=qzO_N3BahSI', tags:['Czech', 'Running', 'Marathon', 'Training'] },
  { id:'2025-10-27-2', date:'2025-10-27', title:'Tréninková Bible č. 2 - David a Megan Roche – trénink, věda a rekord na Leadville Trail 100 Run', show:'Tréninková Bible', totalMinutes:91, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015beb3593361b68d9f980a493b16', platform:'spotify', link:'https://open.spotify.com/episode/2L3vsxRdmdNorf2lG5EWiP?si=998ac1ae047c4866', tags:['Czech', 'Running', 'Ultra', 'Training', 'Science', 'Leadville'] },

  // 26 Oct 2025
  { id:'2025-10-26-1', date:'2025-10-26', title:'Tréninková Bible č. 1 - Svalová vytrvalost', show:'Tréninková Bible', totalMinutes:78, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015be0fdfee7d7b483f13815aa919', platform:'spotify', link:'https://open.spotify.com/episode/5RyklHgI597VALqi3EBdxF?si=67c9a4acddf04fa0', tags:['Czech', 'Running', 'Training', 'Ultra', 'Science'] },

  // 21 Oct 2025
  { id:'2025-10-21-1', date:'2025-10-21', title:'01 Damián Vích', show:'RunCzech podcast', totalMinutes:50, cover:'https://i.scdn.co/image/ab67656300005f1f7ed52563d918c43d3d932bcf', platform:'spotify', link:'https://open.spotify.com/episode/5CaZzbHGtinISA4Gdv1YYX?si=3d7d86ffcf024b4f', tags:['Czech', 'Running', 'Marathon'] },
  { id:'2025-10-21-2', date:'2025-10-21', title:'DÍL SEDMÝ: Regeneruj jako profík! Bílkoviny ve vytrvalostních sportech.', show:'BETRI CAST 🎙️', totalMinutes:30, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015bedb3cae8583d710e95c0c1ff0', platform:'spotify', link:'https://open.spotify.com/episode/5zKPqX3AuuDNzuwxBPHK7B?si=b2cdde773ee44fd2', tags:['Czech', 'Nutrition', 'Training', 'Science', 'Triathlon'] },

  // 20 Oct 2025
  { id:'2025-10-20-1', date:'2025-10-20', title:'JIRKA PROCHÁZKA: Stav boží přítomnosti máme v sobě', show:'Kid Ajvn & A-Cast', totalMinutes:97, cover:'https://i.ytimg.com/vi/QlFbm5JEaqQ/maxresdefault.jpg', platform:'youtube', link:'https://www.youtube.com/watch?v=QlFbm5JEaqQ', tags:['Czech', 'Philosophy', 'Spirituality', 'Self improvement', 'UFC'] },

  // 19 Oct 2025
  { id:'2025-10-19-1', date:'2025-10-19', title:'DÍL TŘETÍ - Karbonové boty - revoluce v běhu, nebo jen hype?', show:'BETRI CAST', totalMinutes:70, cover:'https://image-cdn-ak.spotifycdn.com/image/ab6772ab000015beb7a811f699a501cf7eae3341', platform:'spotify', link:'https://open.spotify.com/episode/2UAICel6XQbVgjILNcSuKj?si=9a030a4b85454cc9', tags:['Czech', 'Running', 'Technology'] },

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
