/**
 * Video Episodes Dataset
 */

const VIDEOS = [
  {
    id: "2026-06-09-1",
    date: "2026-06-09",
    title: "Claude Code + Graphify = Insane Agentic OS",
    show: "Jack Roberts",
    totalMinutes: 10,
    cover: "https://i.ytimg.com/vi_webp/Owv503rTqYY/maxresdefault.webp",
    platform: "youtube",
    link: "https://www.youtube.com/watch?v=Owv503rTqYY",
    tags: [
      "English",
      "Programming",
      "AI",
      "Tech",
      "Claude"
    ],
    favourite: false
  },
  {
    id: "2026-06-08-1",
    date: "2026-06-08",
    title: "This Open Source Repo Just Solved Claude Code's #1 Problem",
    show: "Chase AI",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi_webp/ChskqGovoHg/maxresdefault.webp",
    platform: "youtube",
    link: "https://www.youtube.com/watch?v=ChskqGovoHg",
    tags: [
      "English",
      "Programming",
      "AI",
      "Tech",
      "Claude"
    ],
    favourite: true
  },
  {
    id: "2026-06-08-2",
    date: "2026-06-08",
    title: "Horský trénink - Sezóna Ultraběžce 2026: díl 12.",
    show: "David Kuneš | Sportovní psycholog",
    totalMinutes: 7,
    cover: "https://i.ytimg.com/vi/39s4qC24KjA/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/39s4qC24KjA?si=G1eG-CufrLR1W8yb",
    tags: [
      "Czech",
      "Psychology",
      "Sports"
    ],
    favourite: false
  },
  {
    id: "2026-06-05-3",
    date: "2026-06-05",
    title: "Claude Code - Full Tutorial for Beginners",
    show: "Tech With Tim",
    totalMinutes: 36,
    cover: "https://i.ytimg.com/vi/ntDIxaeo3Wg/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/ntDIxaeo3Wg?si=cwJbkiAL6K0tJ8F4",
    tags: [
      "English",
      "Programming",
      "Python",
      "AI",
      "Tech",
      "Claude"
    ],
    favourite: false
  },
  {
    id: "2026-06-05-4",
    date: "2026-06-05",
    title: "Learn 97% of Claude in Under 16 Minutes",
    show: "Dan Martell",
    totalMinutes: 15,
    cover: "https://i.ytimg.com/vi/wZeOwqmSw84/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/wZeOwqmSw84?si=sDAWGpp7GyExe9f_",
    tags: [
      "English",
      "Business",
      "AI",
      "Tech",
      "Programming",
      "Claude"
    ],
    favourite: true,
    comment: "Mindblowing how Claude actually works — I am really into it now."
  },
  {
    id: "2026-06-02-5",
    date: "2026-06-02",
    title: "Jak sledovat spotřebu tokenů v GitHub Copilot",
    show: "Miroslav Holec",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi/--8_zEHS8wg/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/--8_zEHS8wg?si=1EUKeqSp55zbJ3pf",
    tags: [
      "Czech",
      "Programming",
      ".NET",
      "AI",
      "Tech",
      "GitHub Copilot"
    ],
    favourite: false
  },
  {
    id: "2026-05-30-6",
    date: "2026-05-30",
    title: "How Much Does Weight Actually Matter In Running?",
    show: "Nicklas Rossner",
    totalMinutes: 8,
    cover: "https://i.ytimg.com/vi/n-GaVt3xxPs/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/n-GaVt3xxPs?si=WYhbqxyoNat7FrL_",
    tags: [
      "English",
      "Running",
      "Science",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-05-26-7",
    date: "2026-05-26",
    title: "C# multithreading 🧶",
    show: "Bro Code",
    totalMinutes: 7,
    cover: "https://i.ytimg.com/vi/rUbmW4qAh8w/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/rUbmW4qAh8w?si=nbgXzaJMb7UD9WLV",
    tags: [
      "English",
      "Programming",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-05-26-8",
    date: "2026-05-26",
    title: "Async/Await in C#: The Ultimate Guide (How to Write Non-Blocking Code)",
    show: "Aura Theme",
    totalMinutes: 7,
    cover: "https://i.ytimg.com/vi_webp/pcMX9YJ-zQc/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/pcMX9YJ-zQc?si=J4Tjp5RfMOHTLIKs",
    tags: [
      "English",
      "Programming",
      "C#",
      "AI",
      "Tech",
      "Machine Learning",
      ".NET",
      "Software Development"
    ],
    favourite: false
  },
  {
    id: "2026-05-26-9",
    date: "2026-05-26",
    title: "Part 23 :- Thread Pool in C#  | Multithreading/asynchronous and Parallel Programming in C#",
    show: "The DotNet Office",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi/OzAMikTKE40/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB4ISrVwI77pv0qjH5ee0-NxVn-Xw",
    platform: "youtube",
    link: "https://youtu.be/OzAMikTKE40?si=TWDbZCMNLpzkNBxw",
    tags: [
      "English",
      "Programming",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-05-26-10",
    date: "2026-05-26",
    title: "Quick Guide to Async Await in C# for Beginners",
    show: "DotNetMastery",
    totalMinutes: 4,
    cover: "https://i.ytimg.com/vi/u8Xr2e-Zvb4/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/u8Xr2e-Zvb4?si=f2-T5w0s8R-gRXL7",
    tags: [
      "English",
      "Programming",
      ".NET",
      "AI",
      "Tech",
      "Machine Learning",
      "C#",
      "Software Development"
    ],
    favourite: false
  },
  {
    id: "2026-05-26-11",
    date: "2026-05-26",
    title: "Byzantine Generals Problem",
    show: "Mark Reddick",
    totalMinutes: 4,
    cover: "https://i.ytimg.com/vi/dfsRQyYXOsQ/hqdefault.jpg?sqp=-oaymwEgCNACELwBSFXyq4qpAxIIARUAAIhCGAFwAcABBrgC8xg=&rs=AOn4CLAjrf322-xDKOMUqtJJL9TlJBYXyA",
    platform: "youtube",
    link: "https://youtu.be/dfsRQyYXOsQ?si=Luy7bh2mnv6zLruI",
    tags: [
      "English",
      "Algorithms",
      "Vlog"
    ],
    favourite: false
  },
  {
    id: "2026-05-24-12",
    date: "2026-05-24",
    title: "LHUT 2026 | TOHLE NENÍ JEN ZÁVOD | MOJE CESTA NA UTMB #5",
    show: "Ondřej Mořkovský | Moje cesta na UTMB",
    totalMinutes: 17,
    cover: "https://i.ytimg.com/vi/pidEDyYWCO4/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/pidEDyYWCO4?si=MCOXC0qicho9e_xK",
    tags: [
      "Czech",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-05-23-13",
    date: "2026-05-23",
    title: "Běžecké Vybavení - Sezóna Ultraběžce 2026: díl 10.",
    show: "David Kuneš | Sportovní psycholog",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi/_XM6kTWWLwo/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/_XM6kTWWLwo?si=uxmp8K8rzqDoqZAs",
    tags: [
      "Czech",
      "Psychology",
      "Sports"
    ],
    favourite: false
  },
  {
    id: "2026-05-22-14",
    date: "2026-05-22",
    title: "MENTÁLNE DNO: Behal som 7 hodín nonstop na jednom kopci! (Ultra Lanovka)",
    show: "FULLTIME - Chris G",
    totalMinutes: 16,
    cover: "https://i.ytimg.com/vi/U8NnXXLV5b4/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/U8NnXXLV5b4?si=Vl9DPzI1HV64SkdA",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon"
    ],
    favourite: false
  },
  {
    id: "2026-05-22-15",
    date: "2026-05-22",
    title: "Zvládnul jsem moravský bahno? | Road Classics Pálava 2026",
    show: "Jan Střecha | Na chvostu",
    totalMinutes: 11,
    cover: "https://i.ytimg.com/vi/alIokdnydA0/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/alIokdnydA0?si=dp3HvwJNn3-kc4tu",
    tags: [
      "Czech",
      "Cycling",
      "Road Classics",
      "Sports",
      "Endurance",
      "Biking"
    ],
    favourite: false
  },
  {
    id: "2026-05-20-16",
    date: "2026-05-20",
    title: "What is fractal geometry? │ The History of Mathematics with Luc de Brabandère",
    show: "What makes it tick?",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi/jMqgJOr0veo/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/jMqgJOr0veo?si=e8QPJldajRiTTub-",
    tags: [
      "English",
      "Mathematics",
      "Geometry",
      "Education",
      "Tech",
      "History",
      "Math",
      "Computer Science"
    ],
    favourite: false
  },
  {
    id: "2026-05-20-17",
    date: "2026-05-20",
    title: "The Beauty of Fractal Geometry (#SoME2)",
    show: "Geometry",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi_webp/YkApFcYsP30/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/YkApFcYsP30?si=BLJgh0xo02KtRElB",
    tags: [
      "English",
      "Mathematics",
      "Fractals",
      "Education",
      "Tech",
      "History",
      "Math",
      "Computer Science"
    ],
    favourite: false
  },
  {
    id: "2026-05-18-18",
    date: "2026-05-18",
    title: "HISTORICKY první GARAGE RACE v Česku | Arkády Garage Race",
    show: "Falťas",
    totalMinutes: 12,
    cover: "https://i.ytimg.com/vi_webp/SaT9p7zhPPM/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/SaT9p7zhPPM?si=uH_qVM7fz3A5vT6M",
    tags: [
      "Czech",
      "Cycling",
      "Racing"
    ],
    favourite: false
  },
  {
    id: "2026-05-09-19",
    date: "2026-05-09",
    title: "Pražský maraton pod 3 hodiny",
    show: "nikos je frajer",
    totalMinutes: 15,
    cover: "https://i.ytimg.com/vi_webp/hfgvjjoQ_1A/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/hfgvjjoQ_1A?si=aZyKAbZ036LQG8tX",
    tags: [
      "Czech",
      "Running",
      "Marathon"
    ],
    favourite: false
  },
  {
    id: "2026-05-01-20",
    date: "2026-05-01",
    title: "Chasing Sub 2: The Journey of Sabastian Sawe’s Historic 1:59:30 Marathon",
    show: "adidas",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi/qRr0lmYvp5g/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/qRr0lmYvp5g?si=WN6PS2ZDRry5GqJd",
    tags: [
      "English",
      "Running",
      "Marathon",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-04-30-21",
    date: "2026-04-30",
    title: "Zwift Acquires ROUVY and FulGaz // What To Expect Today!",
    show: "Shane Miller",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi/0pGEMsf-nGI/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/0pGEMsf-nGI?si=srQd_na1kVkUxt1t",
    tags: [
      "English",
      "Cycling",
      "Zwift",
      "Sports",
      "Endurance",
      "Biking"
    ],
    favourite: false
  },
  {
    id: "2026-04-27-22",
    date: "2026-04-27",
    title: "Garmin Connect+ One Year Later // More Features...Worth It?",
    show: "DesFit",
    totalMinutes: 15,
    cover: "https://i.ytimg.com/vi/aIDsXz7qyp4/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/aIDsXz7qyp4?si=gNwEIv7cgtjmEUWm",
    tags: [
      "English",
      "Fitness",
      "Tech",
      "Vlog"
    ],
    favourite: true
  },
  {
    id: "2026-04-26-23",
    date: "2026-04-26",
    title: "LAZOVA 100 - Keď hlava chce skončiť",
    show: "FULLTIME - Chris G",
    totalMinutes: 17,
    cover: "https://i.ytimg.com/vi/e4xCyVFicc8/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/e4xCyVFicc8?si=kixNEvTXfJ_zMzB9",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon"
    ],
    favourite: false
  },
  {
    id: "2026-04-22-24",
    date: "2026-04-22",
    title: "5 Ways To Improve Your Running Efficiency",
    show: "Run Elite",
    totalMinutes: 17,
    cover: "https://i.ytimg.com/vi_webp/Nr6EHe6QziM/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/Nr6EHe6QziM?si=FAFgBKtFgXZj-bs-",
    tags: [
      "English",
      "Running",
      "Training",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-04-21-25",
    date: "2026-04-21",
    title: "KOLIK STOJÍ UTMB SEN? | MOJE REALITA | MOJE CESTA NA UTMB #4",
    show: "Ondřej Mořkovský | Moje cesta na UTMB",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi/SXeLlRLX2t0/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/SXeLlRLX2t0?si=KuPSqah4fsi_IxVV",
    tags: [
      "Czech",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-04-18-26",
    date: "2026-04-18",
    title: "Istria 100 BY UTMB 100 miles 2026",
    show: "Michal Fröhlich",
    totalMinutes: 42,
    cover: "https://i.ytimg.com/vi/ddRHhU6d9Mw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCo9Pi22AKyiYSACckKuU91TJKwCw",
    platform: "youtube",
    link: "https://youtu.be/ddRHhU6d9Mw?si=WmbBv-621r-Wm26m",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon",
      "Sports",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-04-17-27",
    date: "2026-04-17",
    title: "VYRAZILI JSME NA MILÁN–SANREMO",
    show: "Cyklistickey",
    totalMinutes: 12,
    cover: "https://i.ytimg.com/vi_webp/UgRjfenjj-8/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/UgRjfenjj-8?si=TWfbQxfMOuhN4loM",
    tags: [
      "Czech",
      "Cycling",
      "Monument",
      "Sports",
      "Endurance",
      "Biking"
    ],
    favourite: false
  },
  {
    id: "2026-04-16-28",
    date: "2026-04-16",
    title: "5 mentálních rad, které vám pomohou překonat krizi při ultra běhu",
    show: "Hodinky 365 smart",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi_webp/yGzToy8-L-Q/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/yGzToy8-L-Q?si=w4jCguAc8OeIOnf7",
    tags: [
      "Czech",
      "Running",
      "Psychology",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running",
      "Mindset",
      "Mental Health"
    ],
    favourite: false
  },
  {
    id: "2026-04-14-29",
    date: "2026-04-14",
    title: "Vstup do sezóny JAKÝ CHCEŠ 🥇",
    show: "Falťas",
    totalMinutes: 10,
    cover: "https://i.ytimg.com/vi_webp/Kt2VPTCy3Ts/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/Kt2VPTCy3Ts?si=UYBxlANzAnud2_it",
    tags: [
      "Czech",
      "Cycling",
      "Racing"
    ],
    favourite: false
  },
  {
    id: "2026-04-06-30",
    date: "2026-04-06",
    title: "30 Hours to Run 100 Miles (Leadville 100)",
    show: "Kara and Nate",
    totalMinutes: 97,
    cover: "https://i.ytimg.com/vi/x8xHlz1ZjPI/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/x8xHlz1ZjPI?si=957voyEM5p8PvsJ8",
    tags: [
      "English",
      "Running",
      "Leadville",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-03-28-31",
    date: "2026-03-28",
    title: "IMOS LH24 2026 – Aftermovie",
    show: "LH24",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi_webp/JCwmWlsJECY/maxresdefault.webp?v=69c5972b",
    platform: "youtube",
    link: "https://youtu.be/JCwmWlsJECY?si=082RBnwY-c4uwMFh",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon",
      "Sports",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-03-27-32",
    date: "2026-03-27",
    title: "How to Secure .NET 10 APIs with Keycloak and OAuth 2.0",
    show: "Milan Jovanović",
    totalMinutes: 15,
    cover: "https://i.ytimg.com/vi_webp/PLHmcXCljNg/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/PLHmcXCljNg?si=S6HYSLL9jC3rRr6J",
    tags: [
      "English",
      "Programming",
      ".NET",
      "C#",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-03-27-33",
    date: "2026-03-27",
    title: "Getting Started With Keycloak in 2026 (free Identity Server alternative)",
    show: "Milan Jovanović",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi_webp/neqUYC61tUM/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/neqUYC61tUM?si=ewopHaTPamyRkl29",
    tags: [
      "English",
      "Programming",
      ".NET",
      "Coding"
    ],
    favourite: false
  },
  {
    id: "2026-03-26-34",
    date: "2026-03-26",
    title: "Obří korupční skandál v Českém fotbale! Co hrozí Karviné, Opavě, Šigutovi a dalším?",
    show: "THE TOP",
    totalMinutes: 17,
    cover: "https://i.ytimg.com/vi_webp/jSZqlFw7mzg/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/jSZqlFw7mzg?si=CIKuqzJ0RrtkOVZp",
    tags: [
      "Czech",
      "Football",
      "News"
    ],
    favourite: false
  },
  {
    id: "2026-03-22-35",
    date: "2026-03-22",
    title: "PROČ UTMB? | B7 | MOJE CESTA NA UTMB #3",
    show: "Ondřej Mořkovský | Moje cesta na UTMB",
    totalMinutes: 14,
    cover: "https://i.ytimg.com/vi/oN1iM0D-DLA/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/oN1iM0D-DLA?si=mItPugIAOSW58G1W",
    tags: [
      "Czech",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-03-22-36",
    date: "2026-03-22",
    title: "Fuel Skool: How to train your gut (to tolerate more carb)",
    show: "Precision Fuel & Hydration",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi_webp/fj0HazJc1VY/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/fj0HazJc1VY?si=q3eIThQbwZ66fzLb",
    tags: [
      "English",
      "Nutrition",
      "Endurance"
    ],
    favourite: false
  },
  {
    id: "2026-03-11-37",
    date: "2026-03-11",
    title: "Jak se připravit na ultra závod B7? | IMOS B7 2026",
    show: "Beskydská sedmička",
    totalMinutes: 91,
    cover: "https://i.ytimg.com/vi/lcpsSC2m40I/maxresdefault.jpg?v=69a6a0fb",
    platform: "youtube",
    link: "https://www.youtube.com/live/lcpsSC2m40I?si=4U-jRXF66BsrChfJ",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon",
      "Sports",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-02-25-38",
    date: "2026-02-25",
    title: "E5: Ďalšie Apple Watch Zlyhali.. Toto Nedávajú Dobre",
    show: "Patryk Kmeť",
    totalMinutes: 26,
    cover: "https://i.ytimg.com/vi_webp/Y0Chvdvhung/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/Y0Chvdvhung?si=QBBmrs0rP4ssp7Vr",
    tags: [
      "Czech",
      "Tech",
      "Apple"
    ],
    favourite: false
  },
  {
    id: "2026-02-23-39",
    date: "2026-02-23",
    title: "Mallorca by UTMB 2025 - Aftermovie",
    show: "Mallorca by UTMB",
    totalMinutes: 14,
    cover: "https://i.ytimg.com/vi/oiduy_wqtSQ/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/oiduy_wqtSQ?si=iDrtFi5GCPaF1yIa",
    tags: [
      "English",
      "Running",
      "Ultramarathon",
      "UTMB",
      "Sports",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-02-09-40",
    date: "2026-02-09",
    title: "LH24 2026 | MOJE CESTA NA UTMB #2",
    show: "Ondřej Mořkovský | Moje cesta na UTMB",
    totalMinutes: 23,
    cover: "https://i.ytimg.com/vi/A_uCSegGKdI/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/A_uCSegGKdI?si=JMN66ohgmQ-D2-tO",
    tags: [
      "Czech",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: true
  },
  {
    id: "2026-02-09-41",
    date: "2026-02-09",
    title: "GARMIN HRM 600 Review - Top of the Line OR Crossing the Line?",
    show: "Dave Does Fitness",
    totalMinutes: 10,
    cover: "https://i.ytimg.com/vi_webp/ENqTZDpnZAM/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/ENqTZDpnZAM?si=BXlbw3kCg2GrbS38",
    tags: [
      "English",
      "Fitness",
      "Tech",
      "Vlog"
    ],
    favourite: false
  },
  {
    id: "2026-02-08-42",
    date: "2026-02-08",
    title: "Nejrychlejší způsob, jak zvýšíš tvoje VO2max (3 jednoduché kroky)",
    show: "Ondra \"Bříza\" Březina",
    totalMinutes: 18,
    cover: "https://i.ytimg.com/vi/9phMyXForCU/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/9phMyXForCU?si=8XX_UQTP1xZnmIOY",
    tags: [
      "Czech",
      "Fitness",
      "VO2max"
    ],
    favourite: false
  },
  {
    id: "2026-02-08-43",
    date: "2026-02-08",
    title: "Pushdown Automata (PDA)",
    show: "Andreas Schaefer",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi_webp/3ECg6F9ssTA/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/3ECg6F9ssTA?si=__d_SRqIzQlf_-iM",
    tags: [
      "English",
      "Computer Science",
      "Automata",
      "Education",
      "Tech",
      "History",
      "Math"
    ],
    favourite: false
  },
  {
    id: "2026-02-08-44",
    date: "2026-02-08",
    title: "What is a Pushdown Automaton (PDA)?",
    show: "Easy Theory",
    totalMinutes: 12,
    cover: "https://i.ytimg.com/vi/Br44Zxv84-Q/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/Br44Zxv84-Q?si=PbnTbGIpDEWL4xh3",
    tags: [
      "English",
      "Computer Science",
      "Automata",
      "Education",
      "Tech",
      "History",
      "Math"
    ],
    favourite: false
  },
  {
    id: "2026-02-05-45",
    date: "2026-02-05",
    title: "Is .NET Really Underrated in 2026? Well...",
    show: "Nick Chapsas",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi_webp/QNLKV6kx82Q/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/QNLKV6kx82Q?si=QKLfHHYTBvuKo4uj",
    tags: [
      "English",
      "Programming",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-02-04-46",
    date: "2026-02-04",
    title: "Extrémní zimní závod LH24 - Sezóna Ultraběžce 2026: díl 6.",
    show: "David Kuneš | Sportovní psycholog",
    totalMinutes: 6,
    cover: "https://i.ytimg.com/vi/HDuyBLL7Qto/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/HDuyBLL7Qto?si=JIxlZ-ODtrjNVnlX",
    tags: [
      "Czech",
      "Psychology",
      "Sports",
      "Running",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-02-02-47",
    date: "2026-02-02",
    title: "How Much Does Weight Actually Matter On A Climb?",
    show: "Global Cycling Network",
    totalMinutes: 14,
    cover: "https://i.ytimg.com/vi_webp/oQN0C7Eedo0/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/oQN0C7Eedo0?si=hRwCy5j5hOwY1ZBG",
    tags: [
      "English",
      "Cycling",
      "Climbing",
      "Sports",
      "Endurance",
      "Biking"
    ],
    favourite: true
  },
  {
    id: "2026-02-01-48",
    date: "2026-02-01",
    title: "My Brain after 569 Leetcode Problems",
    show: "NeetCode",
    totalMinutes: 8,
    cover: "https://i.ytimg.com/vi/8wysIxzqgPI/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/8wysIxzqgPI?si=GmrVegx6MdKomy3M",
    tags: [
      "English",
      "Programming",
      "Algorithms",
      "AI",
      "Tech",
      "Machine Learning",
      "Psychology",
      "Mindset",
      "Mental Health"
    ],
    favourite: false
  },
  {
    id: "2026-01-30-49",
    date: "2026-01-30",
    title: "I Trained AI to Predict Sports (again)",
    show: "Green Code",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi_webp/N4JDlSTMOck/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/N4JDlSTMOck?si=yHL08WJWnWVzcN-A",
    tags: [
      "English",
      "Programming",
      "AI",
      "Tech",
      "Machine Learning"
    ],
    favourite: false
  },
  {
    id: "2026-01-30-50",
    date: "2026-01-30",
    title: "I Trained AI to Predict Sports",
    show: "Green Code",
    totalMinutes: 11,
    cover: "https://i.ytimg.com/vi/LkJpNLIaeVk/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/LkJpNLIaeVk?si=SZxxEQpHGmUk0oB-",
    tags: [
      "English",
      "Programming",
      "AI",
      "Tech",
      "Machine Learning"
    ],
    favourite: false
  },
  {
    id: "2026-01-30-51",
    date: "2026-01-30",
    title: "LH24 PREVIEW – Představení závodu, trati a favoritů",
    show: "Přepáleno",
    totalMinutes: 21,
    cover: "https://i.ytimg.com/vi/I0Xg3f02do0/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/I0Xg3f02do0?si=z6lU6Qo6_fPnKvAB",
    tags: [
      "Czech",
      "Running",
      "Podcast",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-01-30-52",
    date: "2026-01-30",
    title: "The Boolean Trick No C# Developer Knows About",
    show: "Nick Chapsas",
    totalMinutes: 5,
    cover: "https://i.ytimg.com/vi_webp/g-nfvnxLAVo/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/g-nfvnxLAVo?si=wvYgmY9MVuY_p9OV",
    tags: [
      "English",
      "Programming",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-01-29-53",
    date: "2026-01-29",
    title: "UTMB 2025 | Tom Evans & Ruth Croft Make History in Chamonix | HOKA UTMB Mont-Blanc",
    show: "Hoka UTMB Mont-Blanc",
    totalMinutes: 15,
    cover: "https://i.ytimg.com/vi/IQAH49TJJIg/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/IQAH49TJJIg?si=fSJjZx-glgmuAUZd",
    tags: [
      "English",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running",
      "Education",
      "Tech",
      "History",
      "Math",
      "Computer Science"
    ],
    favourite: false
  },
  {
    id: "2026-01-28-54",
    date: "2026-01-28",
    title: "The First C# 15 Feature Is Here",
    show: "Nick Chapsas",
    totalMinutes: 6,
    cover: "https://i.ytimg.com/vi/wNynE4mwEKI/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/wNynE4mwEKI?si=MNUDG9Rxw5Wcvad8",
    tags: [
      "English",
      "Programming",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-01-27-55",
    date: "2026-01-27",
    title: "I Have Spent 500+ Hours Programming With AI. This Is what I learned",
    show: "The Coding Sloth",
    totalMinutes: 14,
    cover: "https://i.ytimg.com/vi_webp/91B_v-wOaws/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/91B_v-wOaws?si=1ORNIIiewybjjIlw",
    tags: [
      "English",
      "Programming",
      "AI",
      "Tech",
      "Machine Learning",
      "C#",
      ".NET",
      "Software Development"
    ],
    favourite: false
  },
  {
    id: "2026-01-26-56",
    date: "2026-01-26",
    title: "AFTERMOVIE | IMOS Beskydská sedmička 2025",
    show: "Beskydská sedmička",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi_webp/EnWRGwI03LQ/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/EnWRGwI03LQ?si=7dh5F0ze6QoiVpYg",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon"
    ],
    favourite: false
  },
  {
    id: "2026-01-26-57",
    date: "2026-01-26",
    title: "JEŠTĚD WINTER 24h 2026 | MOJE CESTA NA UTMB #1",
    show: "Ondřej Mořkovský | Moje cesta na UTMB",
    totalMinutes: 20,
    cover: "https://i.ytimg.com/vi_webp/rmpG2JPUGQA/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/rmpG2JPUGQA?si=qDfE_JWuSU7hw1F4",
    tags: [
      "Czech",
      "Running",
      "UTMB",
      "Sports",
      "Ultramarathon",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-01-26-58",
    date: "2026-01-26",
    title: "A brief history of programming...",
    show: "Fireship",
    totalMinutes: 6,
    cover: "https://i.ytimg.com/vi_webp/9uW6B9LPntY/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/9uW6B9LPntY?si=NPKEiRSxPe_Q45M4",
    tags: [
      "English",
      "Programming",
      "Web Dev",
      "C#",
      ".NET",
      "Software Development",
      "Tech",
      "Education",
      "History",
      "Math",
      "Computer Science"
    ],
    favourite: false
  },
  {
    id: "2026-01-26-59",
    date: "2026-01-26",
    title: "Stop \"Vibe Coding\": An Engineering Approach to AI",
    show: "Milan Jovanović",
    totalMinutes: 11,
    cover: "https://i.ytimg.com/vi/sGscFMQDGSg/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/sGscFMQDGSg?si=WS38xyqSqA4zCd_R",
    tags: [
      "English",
      "Programming",
      ".NET",
      "AI",
      "Tech",
      "Machine Learning"
    ],
    favourite: false
  },
  {
    id: "2026-01-25-60",
    date: "2026-01-25",
    title: "IMOS LH24 2024 | Aftermovie",
    show: "LH24",
    totalMinutes: 11,
    cover: "https://i.ytimg.com/vi_webp/lmhS6S0PiKo/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/lmhS6S0PiKo?si=x4GiHchly6yBtwdG",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon",
      "Sports",
      "Endurance",
      "Trail Running"
    ],
    favourite: false
  },
  {
    id: "2026-01-20-61",
    date: "2026-01-20",
    title: "20 Minute Full Body Flexibility Routine! (FOLLOW ALONG)",
    show: "Tom Merrick",
    totalMinutes: 20,
    cover: "https://i.ytimg.com/vi_webp/lPKRiU9u_Hc/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/lPKRiU9u_Hc?si=mlgnNS-nqQDvgzCP",
    tags: [
      "English",
      "Fitness",
      "Flexibility",
      "Vlog"
    ],
    favourite: false
  },
  {
    id: "2026-01-19-62",
    date: "2026-01-19",
    title: ".NET in 100 Seconds",
    show: "Fireship",
    totalMinutes: 3,
    cover: "https://i.ytimg.com/vi_webp/MFsYaRnrcPQ/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/MFsYaRnrcPQ?si=UPj6KlVMDWkL_8qy",
    tags: [
      "English",
      "Programming",
      "Web Dev",
      "C#",
      ".NET",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-01-18-63",
    date: "2026-01-18",
    title: "Ještěd 24h Winter 2026",
    show: "Michal Fröhlich",
    totalMinutes: 26,
    cover: "https://i.ytimg.com/vi/LDdfUzd_WXc/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/LDdfUzd_WXc?si=wDgdgWKfs-mBKrwL",
    tags: [
      "Czech",
      "Running",
      "Ultramarathon"
    ],
    favourite: false
  },
  {
    id: "2026-01-16-64",
    date: "2026-01-16",
    title: "The unhinged world of tech in 2026...",
    show: "Fireship",
    totalMinutes: 9,
    cover: "https://i.ytimg.com/vi_webp/EKOU3JWDNLI/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/EKOU3JWDNLI?si=PAogSIyXQ87ZC7A2",
    tags: [
      "English",
      "Programming",
      "Web Dev",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-01-16-65",
    date: "2026-01-16",
    title: "Here's What I Think About Aspire Testing (honestly... surprised)",
    show: "Milan Jovanović",
    totalMinutes: 14,
    cover: "https://i.ytimg.com/vi/mh_Eqia3g50/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/mh_Eqia3g50?si=YxvdgBpYBhBrEqVl",
    tags: [
      "English",
      "Programming",
      ".NET",
      "Coding"
    ],
    favourite: false
  },
  {
    id: "2026-01-15-66",
    date: "2026-01-15",
    title: "What Every .NET Developer Actually Needs to Know in 2026",
    show: "Milan Jovanović",
    totalMinutes: 12,
    cover: "https://i.ytimg.com/vi/WYBZTraXlXQ/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/WYBZTraXlXQ?si=kFAcw3Ni1IhX_MPF",
    tags: [
      "English",
      "Programming",
      ".NET",
      "C#",
      "Software Development",
      "Tech"
    ],
    favourite: false
  },
  {
    id: "2026-01-07-67",
    date: "2026-01-07",
    title: "Vše se změní jakmile máte 106 285 Kč",
    show: "Lukáš Investor",
    totalMinutes: 10,
    cover: "https://i.ytimg.com/vi_webp/3IHD1RHuTQk/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/3IHD1RHuTQk?si=bPy3787l9E0lz_VJ",
    tags: [
      "Czech",
      "Finance",
      "Investing"
    ],
    favourite: false
  },
  {
    id: "2026-01-06-68",
    date: "2026-01-06",
    title: "I Organised the World's Craziest Cycling Race (Turbo Cross)",
    show: "Average Bob",
    totalMinutes: 37,
    cover: "https://i.ytimg.com/vi_webp/UfypQOn3DGo/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/UfypQOn3DGo?si=ViR4QecME4thV2eX",
    tags: [
      "English",
      "Cycling",
      "Entertainment",
      "Sports",
      "Endurance",
      "Biking"
    ],
    favourite: false
  },
  {
    id: "2026-01-06-69",
    date: "2026-01-06",
    title: "2026 bude tvoje HRA, tohle jsou výzvy, které tě čekají... Ready Player ONE!",
    show: "Petr Mára",
    totalMinutes: 25,
    cover: "https://i.ytimg.com/vi_webp/nyzsJ-O9K9A/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/nyzsJ-O9K9A?si=0MiipAKNVtVk5FdF",
    tags: [
      "Czech",
      "Tech",
      "Apple"
    ],
    favourite: false
  },
  {
    id: "2025-12-31-70",
    date: "2025-12-31",
    title: "Guess The Celebrity In 3 Seconds | 200 Most Famous People In The World",
    show: "Quiz Plug",
    totalMinutes: 26,
    cover: "https://i.ytimg.com/vi_webp/F5ZjXvUfiP0/maxresdefault.webp",
    platform: "youtube",
    link: "https://youtu.be/F5ZjXvUfiP0?si=RbdhP2hywgcshl9J",
    tags: [
      "English",
      "Quiz",
      "Entertainment",
      "Vlog"
    ],
    favourite: false
  },
  {
    id: "2025-12-31-71",
    date: "2025-12-31",
    title: "Can You Guess These 20 Cities From Above? 🌍 | European Capitals | Geography Quiz #2",
    show: "imperatur",
    totalMinutes: 10,
    cover: "https://i.ytimg.com/vi/qxo_tbeEidM/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/qxo_tbeEidM?si=M1jK-ESwFNmVFyT4",
    tags: [
      "English",
      "Quiz",
      "Geography",
      "Vlog"
    ],
    favourite: false
  },
  {
    id: "2025-12-31-72",
    date: "2025-12-31",
    title: "Kvíz Všeobecných Znalostí | 50 Otázek, Které By Měl Každý Znát",
    show: "Kvízobraní",
    totalMinutes: 13,
    cover: "https://i.ytimg.com/vi/7Y10ax5_cMM/maxresdefault.jpg",
    platform: "youtube",
    link: "https://youtu.be/7Y10ax5_cMM?si=mTEOMGyvf9GcgJ_7",
    tags: [
      "Czech",
      "Quiz",
      "General Knowledge"
    ],
    favourite: false
  },
  {
    id: "2025-12-31-73",
    date: "2025-12-31",
    title: "Všechno, co se stalo v roce 2025",
    show: "iVysílání",
    totalMinutes: 11,
    cover: "https://i.ytimg.com/vi_webp/lEbvMHsczjQ/maxresdefault.webp?v=69727947",
    platform: "youtube",
    link: "https://youtu.be/lEbvMHsczjQ?si=oLn9IOeqihRYG5fg",
    tags: [
      "Czech",
      "News",
      "Recap"
    ],
    favourite: false
  }
];


/** Utility: group episodes by date descending */
function groupByDateDescending(list){
  const map = new Map();
  list.forEach(ep=>{ if(!map.has(ep.date)) map.set(ep.date, []); map.get(ep.date).push(ep); });
  return Array.from(map.entries()).sort((a,b)=> b[0].localeCompare(a[0]));
}

function collectAllTags(list){
  const counts = {};
  list.forEach(e=>{ if(Array.isArray(e.tags)) e.tags.forEach(t=>{ counts[t] = (counts[t] || 0) + 1; }); });
  return Object.keys(counts).sort((a,b)=> counts[b] - counts[a]);
}

function collectAllShows(list){
  const counts = {};
  list.forEach(e=>{ if(e.show) counts[e.show] = (counts[e.show] || 0) + 1; });
  return Object.keys(counts).sort((a,b)=> counts[b] - counts[a]);
}

function applyFiltersAndSort({filter='all', tag='all', show='all'} = {}){
  let list = [...VIDEOS];
  // apply quick filters
  switch(filter){
    case '2026': list = list.filter(e=>e.date && e.date.startsWith('2026-')); break;
    case '2025': list = list.filter(e=>e.date && e.date.startsWith('2025-')); break;
    case 'favourite': list = list.filter(e=>e.favourite); break;
    default: break;
  }
  // tag filter
  if(tag && tag!=='all') list = list.filter(e=>Array.isArray(e.tags) && e.tags.includes(tag));
  
  // show filter
  if(show && show!=='all') list = list.filter(e=>e.show===show);

  // sort by date descending
  list.sort((a,b)=> (b.date||'').localeCompare(a.date||''));

  return list;
}

function renderVideos(opts){
  const container = document.getElementById('video-grid');
  if(!container) return;
  const filterBar = document.getElementById('video-filters');
  const tagSelect = document.getElementById('video-tag');
  const showSelect = document.getElementById('video-show');
  const filter = (opts && opts.filter) || (filterBar && filterBar.querySelector('button.active') && filterBar.querySelector('button.active').getAttribute('data-filter')) || 'all';
  const tag = (opts && opts.tag) || (tagSelect && tagSelect.value) || 'all';
  const show = (opts && opts.show) || (showSelect && showSelect.value) || 'all';

  const list = applyFiltersAndSort({filter, tag, show});

  // grouped by date
  const grouped = groupByDateDescending(list);
  container.innerHTML = grouped.map(([date, eps])=>{
    const dateDisplay = new Date(date).toLocaleDateString('cs-CZ',{day:'numeric',month:'numeric',year:'numeric'});
    const cols = Math.min(eps.length, 5);
    const videoCards = eps.map(renderCard).join('');
    return `<div class="date-group" data-cols="${cols}">
      <h3 class="date-heading">${dateDisplay}</h3>
      <div class="videos-for-date">${videoCards}</div>
    </div>`;
  }).join('');
  updateCount(list.length);
  
  // Apply uniform height after rendering and images load
  setTimeout(() => {
    applyUniformHeight();
  }, 200);
  
  // Also apply when all images are loaded
  const images = container.querySelectorAll('.video__img');
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

  const lang = localStorage.getItem('lang') || 'en';
  const i18n = {
    minutes: { en: 'minutes', cs: 'minut', es: 'minutos' }
  };

  // Duration display
  const durationDisplay = total > 0 ? `<div class="video-duration">${total} ${i18n.minutes[lang] || i18n.minutes.en}</div>` : '';

  // image fallback: if the image fails to load, replace with a placeholder service
  const imgSrc = ep.cover || 'https://via.placeholder.com/300x300?text=No+Cover';
  const imgFallback = 'https://via.placeholder.com/300x300?text=No+Cover';

  const descriptionHtml = ep.description ? `<p class="video__desc">${ep.description}</p>` : '';

  // Personal note ("my comment") – only rendered when present
  const noteLabel = { en: 'My note', cs: 'Moje poznámka', es: 'Mi nota' };
  const commentHtml = ep.comment
    ? `<div class="media__comment"><span class="media__comment-label">💬 ${noteLabel[lang] || noteLabel.en}</span><span class="media__comment-text">${escapeHtml(ep.comment)}</span></div>`
    : '';

  const tagsHtml = Array.isArray(ep.tags) && ep.tags.length
    ? `<ul class="video-tags">${ep.tags.map(tag => `<li>${escapeHtml(translateTag(tag, lang))}</li>`).join('')}</ul>`
    : '';

  const favouriteStar = ep.favourite ? '<div class="favourite-star" title="Favourite">★</div>' : '';

  return `<article class="video" data-platform="${platform}">
    <img loading="lazy" class="video__img" src="${imgSrc}" alt="Cover of ${escapeHtml(ep.title)}" onerror="this.onerror=null;this.src='${imgFallback}';">
    ${platformIcon}
    ${favouriteStar}
    <div class="video-content">
      <h2 class="video__title"><a href="${ep.link || '#'}" target="_blank" rel="noopener">${escapeHtml(ep.title)}</a></h2>
      <p class="video__host">${escapeHtml(ep.show)}</p>
      ${descriptionHtml}
      ${commentHtml}
      ${durationDisplay}
      ${tagsHtml}
    </div>
  </article>`;
}

// Function to apply uniform height to all video cards
function applyUniformHeight() {
  const allVideos = document.querySelectorAll('.video');
  if (allVideos.length === 0) return;
  
  // Reset heights to auto to get natural heights
  allVideos.forEach(card => {
    card.style.height = 'auto';
  });
  
  // Force reflow to ensure heights are calculated
  document.body.offsetHeight;
  
  // Find the tallest card after a small delay to ensure images are loaded
  setTimeout(() => {
    let maxHeight = 0;
    allVideos.forEach(card => {
      const height = card.offsetHeight;
      if (height > maxHeight) {
        maxHeight = height;
      }
    });
    
    // Only apply if we have a valid height
    if (maxHeight > 0) {
      // Apply the max height to all cards directly
      allVideos.forEach(card => {
        card.style.height = maxHeight + 'px';
      });
      
      // Also set CSS custom property for future use
      const containers = document.querySelectorAll('.videos, .videos-for-date');
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
  const el = document.getElementById('video-count');
  const lang = localStorage.getItem('lang') || 'en';
  const label = { en: 'videos', cs: 'videí', es: 'videos' };
  if(el) el.textContent = n + ' ' + (label[lang] || label.en);
}

function setupFilters(){
  const bar = document.getElementById('video-filters');
  const tagSelect = document.getElementById('video-tag');
  const showSelect = document.getElementById('video-show');
  const clearBtn = document.getElementById('video-clear');
  const lang = localStorage.getItem('lang') || 'en';
  if(!bar) return;

  // populate show select from data
  if(showSelect){
    const shows = collectAllShows(VIDEOS);
    shows.forEach(s=>{
      const opt = document.createElement('option'); opt.value = s; opt.textContent = s; showSelect.appendChild(opt);
    });
    showSelect.addEventListener('change', ()=> renderVideos({}));
  }

  // populate tag select from data
  if(tagSelect){
    const tags = collectAllTags(VIDEOS);
    // keep existing 'all' option then append
    tags.forEach(t=>{
      const opt = document.createElement('option'); opt.value = t; opt.textContent = translateTag(t, lang); tagSelect.appendChild(opt);
    });
    tagSelect.addEventListener('change', ()=> renderVideos({}));
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
      if(showSelect) showSelect.value = 'all';
      renderVideos({});
    });
  }

  bar.addEventListener('click', e=>{
    const btn = e.target.closest('button[data-filter]');
    if(!btn) return;
    bar.querySelectorAll('button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
    renderVideos({});
  });
}

document.addEventListener('DOMContentLoaded', ()=>{
  setupFilters();
  // set last-updated text
  const last = document.getElementById('video-last-updated');
  if(last){
    // try to infer newest date
    const dates = VIDEOS.map(e=>e.date).filter(Boolean).sort().reverse();
    const lang = localStorage.getItem('lang') || 'en';
    const label = { en: 'Last updated: ', cs: 'Poslední aktualizace: ', es: 'Última actualización: ' };
    if(dates.length) last.textContent = (label[lang] || label.en) + new Date(dates[0]).toLocaleDateString('cs-CZ');
  }
  renderVideos({});
  
  // Apply uniform height when window is resized
  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      applyUniformHeight();
    }, 150);
  });
});

document.addEventListener('languageChanged', () => {
  const n = document.querySelectorAll('.video').length; // approximation for count if needed
  renderVideos({});
  
  // Update last-updated text
  const last = document.getElementById('video-last-updated');
  if(last){
    const dates = VIDEOS.map(e=>e.date).filter(Boolean).sort().reverse();
    const lang = localStorage.getItem('lang') || 'en';
    const label = { en: 'Last updated: ', cs: 'Poslední aktualizace: ', es: 'Última actualización: ' };
    if(dates.length) last.textContent = (label[lang] || label.en) + new Date(dates[0]).toLocaleDateString('cs-CZ');
  }
});
