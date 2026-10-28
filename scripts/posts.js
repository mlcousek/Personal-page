const BLOG_POSTS = [
  {
    id: '24ds-2026',
    date: '2026-10-04',
    category: 'Running',
    stravaUrl: 'https://www.strava.com/activities/20443296331',
    title: {
      en: '24DS: 132 km, 7,400 m and 5th Place — Nine Laps Up Dlouhé Stráně',
      cs: '24DS: 132 km, 7 400 m a 5. místo — devět kol na Dlouhé stráně',
      es: '24DS: 132 km, 7.400 m y 5.º puesto — nueve vueltas a Dlouhé Stráně'
    },
    excerpt: {
      en: 'My longest run ever: nine laps of the Dlouhé Stráně loop in 24 hours, 21 km further than my previous record. Fifth of 52 solo runners — and a lap ten that was lost at the base, not on the trail.',
      cs: 'Nejdelší běh v životě: devět kol okruhu na Dlouhých stráních za 24 hodin, o 21 km dál než můj dosavadní rekord. Pátý z 52 jednotlivců — a desáté kolo, které se ztratilo na základně, ne na trati.',
      es: 'Mi carrera más larga: nueve vueltas al circuito de Dlouhé Stráně en 24 horas, 21 km más que mi récord anterior. Quinto de 52 corredores individuales, y una décima vuelta que se perdió en la base, no en el sendero.'
    },
    body: {
      en: `<p>24DS is a 24-hour race on a single 14.7 km loop in the Jeseníky mountains: out of the base at Kouty nad Desnou, up to the upper reservoir of Dlouhé Stráně at 1,354 m, and back down — <strong>820 m of climbing per lap</strong>. Most laps you do, the better you rank. The goal on the register was ten laps. I did <strong>nine: 132.3 km and about 7,400 m of climbing</strong> — the longest run of my life, beating my previous record of 110.5 km (Ještěd 24h) by 21 km.</p>
<p>The result: <strong>5th of 52 solo runners</strong>, 5th of 36 men and <strong>3rd in my category</strong> (men 18–35). Only six solo runners finished nine laps or more. I was the first of the nine-lap runners to finish them, at 08:31 on Sunday morning.</p>
<p>On the loop itself I was <strong>33 minutes faster than my plan</strong> — 19:57 for nine laps against the planned 20:30. Eighty percent of the race was in heart-rate Zone 1. After a first lap that was too hard (climb at 146 bpm against a cap of 140), the second lap was the correction, and the second half of the distance was only 13 % slower than the first.</p>
<p>Lap ten was lost somewhere else: at the base. I planned 40 minutes of stops in total and spent <strong>1 h 32 min</strong>. The five-minute rule held for two laps, and then the stops crept from 11 to 16 to 18 to 20 minutes. I came back from lap nine six minutes after the last planned departure. It would have fitted on the clock — barely — but I did not go. Compared to Ještěd it is still a big step: stops halved (1:32 instead of 3:19), no stop longer than 20 minutes.</p>
<p>The low point was lap seven, between 00:48 and 03:30: 2:41 against 2:15 for the lap before, with the heart rate falling together with the speed — sleepiness or an empty tank, not a cardiac ceiling. The same window collapsed at Ještěd, so it is now the first thing I plan for. And the best proof that there was more in the legs: lap nine, at dawn, after 19 hours, took 2:09 and was the fourth-fastest lap of the whole race.</p>
<p><strong>For the next 24-hour race:</strong> a stop has a departure time, not a feeling; the first climb at heart rate 140 even if it costs ten minutes; a plan for the hours 00:30–04:00; and write the food down — I have no record of what I ate, so I cannot judge the fuelling plan.</p>`,
      cs: `<p>24DS je 24hodinový závod na jediném 14,7km okruhu v Jeseníkách: ze základny v Koutech nad Desnou nahoru k horní nádrži Dlouhých strání ve 1 354 m a zase dolů — <strong>820 m převýšení na kolo</strong>. Čím víc kol, tím lepší pořadí. Cíl v registru bylo deset kol. Zvládl jsem <strong>devět: 132,3 km a zhruba 7 400 m převýšení</strong> — nejdelší běh v životě, o 21 km víc než můj dosavadní rekord 110,5 km z Ještěd 24h.</p>
<p>Výsledek: <strong>5. z 52 jednotlivců</strong>, 5. z 36 mužů a <strong>3. v kategorii</strong> (muži 18–35). Devět a více kol dokončilo jen šest jednotlivců. Ze všech devítikolových jsem je dokončil jako první, v neděli v 08:31.</p>
<p>Na samotném okruhu jsem byl o <strong>33 minut rychlejší než plán</strong> — 19:57 za devět kol místo plánovaných 20:30. Osmdesát procent závodu jsem strávil v tepové zóně 1. Po příliš tvrdém prvním kole (výstup s tepem 146 při stropu 140) bylo druhé kolo korekcí a druhá polovina vzdálenosti byla jen o 13 % pomalejší než první.</p>
<p>Desáté kolo se ztratilo jinde: na základně. Plánoval jsem celkem 40 minut zastávek a strávil jsem <strong>1 h 32 min</strong>. Pravidlo pěti minut vydrželo dvě kola a pak zastávky rostly z 11 na 16, 18 a 20 minut. Z devátého kola jsem se vrátil šest minut po posledním plánovaném odchodu. Na hodinách by se desáté kolo ještě vešlo — těsně — ale nešel jsem. Proti Ještědu je to přesto velký krok: zastávky poloviční (1:32 místo 3:19), žádná delší než 20 minut.</p>
<p>Nejhorší bylo sedmé kolo, mezi 00:48 a 03:30: 2:41 proti 2:15 v kole předtím, s tepem, který klesal spolu s rychlostí — ospalost nebo prázdná nádrž, ne srdeční strop. Stejné okno se propadlo i na Ještědu, takže je to teď první věc, na kterou plánuju. A nejlepší důkaz, že v nohách ještě něco zbylo: deváté kolo za svítání, po 19 hodinách, trvalo 2:09 a bylo čtvrté nejrychlejší kolo celého závodu.</p>
<p><strong>Pro příští čtyřiadvacetihodinovku:</strong> zastávka má čas odchodu, ne pocit; první výstup s tepem 140, i kdyby to stálo deset minut; plán na hodiny 00:30–04:00; a zapisovat jídlo — nemám záznam, co jsem snědl, takže výživový plán nemůžu vyhodnotit.</p>`,
      es: `<p>24DS es una carrera de 24 horas en un único circuito de 14,7 km en los Jeseníky: desde la base en Kouty nad Desnou hasta el embalse superior de Dlouhé Stráně, a 1.354 m, y de vuelta — <strong>820 m de desnivel por vuelta</strong>. Cuantas más vueltas, mejor la clasificación. El objetivo en mi registro eran diez vueltas. Hice <strong>nueve: 132,3 km y unos 7.400 m de desnivel</strong> — la carrera más larga de mi vida, 21 km más que mi récord anterior de 110,5 km (Ještěd 24h).</p>
<p>El resultado: <strong>5.º de 52 corredores individuales</strong>, 5.º de 36 hombres y <strong>3.º en mi categoría</strong> (hombres 18–35). Solo seis individuales completaron nueve vueltas o más. Fui el primero de los de nueve vueltas en terminarlas, a las 08:31 del domingo.</p>
<p>En el propio circuito fui <strong>33 minutos más rápido que mi plan</strong>: 19:57 por nueve vueltas frente a las 20:30 previstas. El ochenta por ciento de la carrera estuvo en la zona 1 de pulsaciones. Tras una primera vuelta demasiado dura (subida a 146 ppm con un límite de 140), la segunda fue la corrección, y la segunda mitad de la distancia fue solo un 13 % más lenta que la primera.</p>
<p>La décima vuelta se perdió en otro sitio: en la base. Había planeado 40 minutos de paradas en total y gasté <strong>1 h 32 min</strong>. La regla de los cinco minutos aguantó dos vueltas y luego las paradas fueron creciendo: 11, 16, 18 y 20 minutos. Volví de la novena vuelta seis minutos después de la última salida prevista. En el reloj habría cabido — por poco — pero no salí. Frente a Ještěd sigue siendo un gran paso: paradas a la mitad (1:32 en vez de 3:19), ninguna de más de 20 minutos.</p>
<p>El peor momento fue la séptima vuelta, entre las 00:48 y las 03:30: 2:41 frente a 2:15 en la anterior, con el pulso bajando junto con la velocidad — sueño o depósito vacío, no un techo cardíaco. La misma franja se hundió en Ještěd, así que ahora es lo primero que planifico. Y la mejor prueba de que quedaba algo en las piernas: la novena vuelta, al amanecer, tras 19 horas, duró 2:09 y fue la cuarta más rápida de toda la carrera.</p>
<p><strong>Para la próxima carrera de 24 horas:</strong> una parada tiene hora de salida, no una sensación; la primera subida a 140 ppm aunque cueste diez minutos; un plan para las horas 00:30–04:00; y anotar la comida — no tengo registro de lo que comí, así que no puedo evaluar el plan de nutrición.</p>`
    }
  },
  {
    id: 'ai-changed-my-work',
    date: '2026-09-14',
    category: 'Tech',
    title: {
      en: 'AI Changed How I Work — and I Am All In',
      cs: 'AI změnila, jak pracuju — a jsem v tom naplno',
      es: 'La IA cambió mi forma de trabajar — y estoy totalmente dentro'
    },
    excerpt: {
      en: 'Writing code is no longer the slow part. What changed, what I do now instead, and why I enjoy it more than I expected.',
      cs: 'Psaní kódu už není to pomalé. Co se změnilo, co dělám místo toho a proč mě to baví víc, než jsem čekal.',
      es: 'Escribir código ya no es la parte lenta. Qué cambió, qué hago ahora en su lugar y por qué lo disfruto más de lo que esperaba.'
    },
    body: {
      en: `<p>My work as a developer has changed, and I enjoy it. That is the short version. I started with a GitHub Copilot course, and today I work daily with <strong>Claude Code and Codex</strong> — agents that read the repository, plan, write code, run the tests and come back with a result.</p>
<p>The slow part used to be typing the code. Now the slow part is <strong>knowing exactly what I want</strong>. So I spend more of my time on the things I always liked best: thinking about the design, the abstractions, the dependencies, how the thing will be tested. I write a specification first — I work with <strong>OpenSpec</strong>, a proposal, a design and a list of tasks — and only then let the agent build it.</p>
<p>My favourite habit is what I call <em>grill-me mode</em>: before anything is built, I ask the agent to interview me about the task until the gaps are gone. It finds the questions I had not asked myself. A vague idea turns into a scoped change in ten minutes, and the code that follows is better for it.</p>
<p>What did not change: I still read what is written, I still insist on tests, and I am still responsible for the result. A fast tool makes good engineering more important, not less. And one more thing it gave me — because I can start working in a new technology almost immediately, I am open to trying things I would have postponed before.</p>
<p>I am definitely in this. It is not a trend I am watching; it is how I work now.</p>`,
      cs: `<p>Moje práce vývojáře se změnila a baví mě to. To je ta krátká verze. Začal jsem kurzem GitHub Copilot a dnes denně pracuju s <strong>Claude Code a Codexem</strong> — agenty, kteří čtou repozitář, plánují, píšou kód, spouští testy a vrací výsledek.</p>
<p>Dřív bylo pomalé psaní kódu. Dnes je pomalé <strong>vědět přesně, co chci</strong>. Takže víc času trávím tím, co mě vždycky bavilo nejvíc: přemýšlením o návrhu, abstrakcích, závislostech a o tom, jak se to bude testovat. Nejdřív napíšu specifikaci — pracuju s <strong>OpenSpec</strong>, tedy návrh, design a seznam úkolů — a teprve potom to nechám agentovi postavit.</p>
<p>Můj oblíbený zvyk je to, čemu říkám <em>grill-me mode</em>: než se cokoli postaví, požádám agenta, ať mě o úkolu vyslýchá, dokud nezmizí všechny mezery. Najde otázky, které jsem si nepoložil. Z vágního nápadu se za deset minut stane ohraničená změna a kód, který následuje, je díky tomu lepší.</p>
<p>Co se nezměnilo: pořád čtu, co je napsáno, pořád trvám na testech a pořád za výsledek zodpovídám já. Rychlý nástroj dělá dobré inženýrství důležitější, ne méně důležité. A ještě jedno mi to dalo — protože můžu začít pracovat v nové technologii téměř okamžitě, jsem otevřený věcem, které bych dřív odložil.</p>
<p>Jsem v tom rozhodně naplno. Není to trend, který sleduju; je to způsob, jakým teď pracuju.</p>`,
      es: `<p>Mi trabajo como desarrollador ha cambiado y lo disfruto. Esa es la versión corta. Empecé con un curso de GitHub Copilot y hoy trabajo a diario con <strong>Claude Code y Codex</strong>: agentes que leen el repositorio, planifican, escriben código, ejecutan las pruebas y vuelven con un resultado.</p>
<p>Antes la parte lenta era escribir el código. Ahora la parte lenta es <strong>saber exactamente qué quiero</strong>. Así que dedico más tiempo a lo que siempre me gustó más: pensar en el diseño, las abstracciones, las dependencias y cómo se va a probar. Primero escribo una especificación — trabajo con <strong>OpenSpec</strong>: propuesta, diseño y lista de tareas — y solo después dejo que el agente lo construya.</p>
<p>Mi costumbre favorita es lo que llamo <em>grill-me mode</em>: antes de construir nada, le pido al agente que me entreviste sobre la tarea hasta que desaparezcan los huecos. Encuentra las preguntas que yo no me había hecho. Una idea vaga se convierte en un cambio acotado en diez minutos, y el código que sigue es mejor por ello.</p>
<p>Lo que no cambió: sigo leyendo lo que se escribe, sigo insistiendo en las pruebas y sigo siendo responsable del resultado. Una herramienta rápida hace que la buena ingeniería sea más importante, no menos. Y algo más me dio: como puedo empezar a trabajar en una tecnología nueva casi de inmediato, estoy abierto a probar cosas que antes habría aplazado.</p>
<p>Estoy definitivamente dentro. No es una tendencia que observo; es cómo trabajo ahora.</p>`
    }
  },
  {
    id: 'iteration-driver',
    date: '2026-09-01',
    category: 'Career',
    title: {
      en: 'Two Months as Iteration Driver — and I Loved It',
      cs: 'Dva měsíce jako iteration driver — a moc mě to bavilo',
      es: 'Dos meses como iteration driver — y me encantó'
    },
    excerpt: {
      en: 'This summer, right after going full-time, I tried the iteration driver role. What I learned about leading a team, and why I can see myself there.',
      cs: 'Letos v létě, hned po přechodu na plný úvazek, jsem si vyzkoušel roli iteration drivera. Co jsem se naučil o vedení týmu a proč se v ní vidím.',
      es: 'Este verano, justo después de pasar a jornada completa, probé el rol de iteration driver. Lo que aprendí sobre liderar un equipo y por qué me veo ahí.'
    },
    body: {
      en: `<p>This summer, right after I moved to full-time at Monet+, I tried something new: for two months I was the <strong>iteration driver</strong> of our team. It is the role that keeps an iteration moving — the plan, the communication, the blockers, and making sure the team can do its best work.</p>
<p>I expected to like it. I did not expect to like it <em>this much</em>. What I enjoyed most was the part that has nothing to do with code: working with the people in the team, understanding what each of them needs, and removing whatever gets in their way. A good iteration is not a lucky one, it is one somebody cared about.</p>
<p>It also pulled together things I already love. I like improving a process the same way I like improving a training plan — look at the data, change one thing, see what happens. And I like helping a team get better, not just getting better myself.</p>
<p>Two months is not a career, and I know how much I still have to learn. But I can see myself in this kind of work in the future: improving the team, improving the way we work, and doing it together with the people around me.</p>`,
      cs: `<p>Letos v létě, hned poté, co jsem v Monet+ přešel na plný úvazek, jsem zkusil něco nového: dva měsíce jsem byl <strong>iteration driverem</strong> našeho týmu. Je to role, která udržuje iteraci v pohybu — plán, komunikace, překážky a péče o to, aby tým mohl odvádět svou nejlepší práci.</p>
<p>Čekal jsem, že mě to bude bavit. Nečekal jsem, že <em>takhle moc</em>. Nejvíc mě bavila část, která s kódem nemá nic společného: práce s lidmi v týmu, pochopení toho, co každý potřebuje, a odstraňování všeho, co jim stojí v cestě. Dobrá iterace není šťastná náhoda, je to iterace, na které někomu záleželo.</p>
<p>Spojilo to také věci, které mám rád. Zlepšování procesu mě baví stejně jako zlepšování tréninkového plánu — podívat se na data, změnit jednu věc, vidět, co se stane. A baví mě pomáhat zlepšovat tým, ne jen sám sebe.</p>
<p>Dva měsíce nejsou kariéra a vím, kolik se toho ještě musím naučit. Ale vidím se v téhle práci i v budoucnu: zlepšovat tým, zlepšovat způsob, jakým pracujeme, a dělat to společně s lidmi kolem sebe.</p>`,
      es: `<p>Este verano, justo después de pasar a jornada completa en Monet+, probé algo nuevo: durante dos meses fui el <strong>iteration driver</strong> de nuestro equipo. Es el rol que mantiene en marcha una iteración: el plan, la comunicación, los bloqueos y asegurarse de que el equipo pueda hacer su mejor trabajo.</p>
<p>Esperaba que me gustara. No esperaba que me gustara <em>tanto</em>. Lo que más disfruté fue la parte que no tiene nada que ver con el código: trabajar con las personas del equipo, entender lo que necesita cada una y quitar lo que se interpone en su camino. Una buena iteración no es una iteración con suerte, es una de la que alguien se ocupó.</p>
<p>También juntó cosas que ya me gustan. Me gusta mejorar un proceso igual que mejorar un plan de entrenamiento: mirar los datos, cambiar una cosa, ver qué pasa. Y me gusta ayudar a mejorar a un equipo, no solo mejorar yo.</p>
<p>Dos meses no son una carrera y sé cuánto me queda por aprender. Pero me veo en este tipo de trabajo en el futuro: mejorando el equipo, mejorando nuestra forma de trabajar y haciéndolo junto a las personas que me rodean.</p>`
    }
  },
  {
    id: 'ai-a-week-later',
    date: '2026-10-20',
    category: 'Tech',
    title: {
      en: 'Five Weeks In: Getting Better at Work With AI',
      cs: 'Po pěti týdnech: s AI jsem v práci lepší',
      es: 'Cinco semanas después: mejorando en el trabajo con IA'
    },
    excerpt: {
      en: 'Five weeks after going all in, the habits that stuck — specs first, tests as the contract, small reviewable changes — and what I am still learning.',
      cs: 'Pět týdnů po tom, co jsem do toho šel naplno: zvyky, které zůstaly — specifikace první, testy jako smlouva, malé reviewovatelné změny — a co se ještě učím.',
      es: 'Cinco semanas después de lanzarme de lleno: los hábitos que se quedaron — especificación primero, pruebas como contrato, cambios pequeños y revisables — y lo que sigo aprendiendo.'
    },
    body: {
      en: `<p>Five weeks ago I wrote that AI changed how I work. That is long enough to see which habits are real and which were just enthusiasm. Three of them stuck.</p>
<p><strong>Spec first, always.</strong> Every time I skipped it and went straight to "just build it", I paid for it in rework. Every time I wrote the proposal and answered the agent's questions first, the result was close to what I meant. The specification is not paperwork — it is the cheapest place to change my mind.</p>
<p><strong>Tests are the contract.</strong> Testing is one of my strengths, and it has become more valuable, not less. When an agent writes the code, the tests — unit, integration with Testcontainers, end-to-end — are what let me trust it quickly. I now ask for the test first and read it more carefully than the implementation.</p>
<p><strong>Small changes I can review.</strong> A huge diff is a diff nobody understands, including me. I get better results when I split the work into small steps, each one reviewable on its own.</p>
<p>What I am still learning: how to describe architectural intent precisely enough that the agent keeps to it over many changes, and when to stop prompting and simply write the code myself. I want to get better at the layer above the syntax — architecture, paradigms, programming style — and AI is turning out to be a good sparring partner for exactly that.</p>
<p>Five weeks in, I am better at my job than I was before. That is the whole point.</p>`,
      cs: `<p>Před pěti týdny jsem psal, že AI změnila, jak pracuju. To stačí na to, abych poznal, které zvyky jsou skutečné a které byly jen nadšení. Tři z nich zůstaly.</p>
<p><strong>Specifikace vždycky první.</strong> Pokaždé, když jsem ji přeskočil a šel rovnou na „prostě to postav“, zaplatil jsem za to předělávkami. Pokaždé, když jsem nejdřív napsal návrh a odpověděl na otázky agenta, byl výsledek blízko tomu, co jsem myslel. Specifikace není papírování — je to nejlevnější místo, kde si můžu rozmyslet názor.</p>
<p><strong>Testy jsou smlouva.</strong> Testování je jedna z mých silných stránek a má teď větší hodnotu, ne menší. Když kód píše agent, testy — unit, integrační s Testcontainers, end-to-end — jsou to, co mi dovolí mu rychle důvěřovat. Dnes žádám nejdřív test a čtu ho pozorněji než implementaci.</p>
<p><strong>Malé změny, které zvládnu zreviewovat.</strong> Obří diff je diff, kterému nikdo nerozumí, včetně mě. Dostávám lepší výsledky, když práci rozdělím na malé kroky, z nichž každý jde posoudit zvlášť.</p>
<p>Co se ještě učím: jak popsat architektonický záměr dost přesně, aby se ho agent držel přes mnoho změn, a kdy přestat zadávat prompty a prostě napsat kód sám. Chci se zlepšovat ve vrstvě nad syntaxí — architektura, paradigmata, styl programování — a AI se ukazuje jako dobrý sparingpartner právě v tomhle.</p>
<p>Po pěti týdnech jsem v práci lepší než předtím. A o to jde.</p>`,
      es: `<p>Hace cinco semanas escribí que la IA cambió mi forma de trabajar. Es tiempo suficiente para ver qué hábitos son reales y cuáles eran solo entusiasmo. Tres se quedaron.</p>
<p><strong>Especificación primero, siempre.</strong> Cada vez que me la salté y fui directo a «simplemente constrúyelo», lo pagué en retrabajo. Cada vez que escribí primero la propuesta y respondí a las preguntas del agente, el resultado se parecía a lo que quería. La especificación no es papeleo: es el lugar más barato para cambiar de opinión.</p>
<p><strong>Las pruebas son el contrato.</strong> Las pruebas son una de mis fortalezas y ahora valen más, no menos. Cuando el código lo escribe un agente, las pruebas — unitarias, de integración con Testcontainers, de extremo a extremo — son lo que me permite confiar rápido. Ahora pido primero la prueba y la leo con más atención que la implementación.</p>
<p><strong>Cambios pequeños que pueda revisar.</strong> Un diff enorme es un diff que nadie entiende, yo incluido. Obtengo mejores resultados cuando divido el trabajo en pasos pequeños, cada uno revisable por sí solo.</p>
<p>Lo que sigo aprendiendo: cómo describir la intención arquitectónica con la precisión suficiente para que el agente la mantenga a lo largo de muchos cambios, y cuándo dejar de pedir y simplemente escribir el código yo mismo. Quiero mejorar en la capa por encima de la sintaxis — arquitectura, paradigmas, estilo de programación — y la IA resulta ser un buen compañero de sparring justo para eso.</p>
<p>Cinco semanas después soy mejor en mi trabajo que antes. De eso se trata.</p>`
    }
  },
  {
    id: 'road-classics-2026',
    date: '2026-07-18',
    category: 'Cycling',
    stravaUrl: 'https://www.strava.com/activities/19362663020',
    title: {
      en: 'Road Classics Vysočina: My First Gran Fondo, and the Wall at Km 65',
      cs: 'Road Classics Vysočina: můj první gran fondo a zeď na 65. km',
      es: 'Road Classics Vysočina: mi primera gran fondo y el muro del km 65'
    },
    excerpt: {
      en: '104 km and 1,912 m through the Vysočina hills in 3:41:27. Forty kilometres of attacking, three dropped chains, one wall — and a Christmas present that became one of the best days of the year.',
      cs: '104 km a 1 912 m přes kopce Vysočiny za 3:41:27. Čtyřicet kilometrů útočení, třikrát spadlý řetěz, jedna zeď — a vánoční dárek, ze kterého se stal jeden z nejlepších dnů roku.',
      es: '104 km y 1.912 m por las colinas de Vysočina en 3:41:27. Cuarenta kilómetros atacando, tres cadenas caídas, un muro — y un regalo de Navidad que se convirtió en uno de los mejores días del año.'
    },
    body: {
      en: `<p>The race was a Christmas present from Alžbeta — and what a present. <strong>Road Classics Vysočina</strong> was my first road gran fondo: <strong>104 km and 1,912 m of climbing</strong> through the Vysočina hills. I rode it in <strong>3:41:27 at 28.2 km/h</strong>, average heart rate 151, on my Lapierre.</p>
<p>The morning started nervously. Wet roads and a tight peloton made the first kilometres feel sketchy, and I rode them carefully. As the tarmac dried I found my rhythm, and from <strong>km 20 to km 60</strong> I was flying — attacking, chasing down groups, taking every descent at full speed. The only frustration: the chain dropped <strong>three times</strong> in that stretch, each time costing me a group or a gap I had worked hard for.</p>
<p>At <strong>km 65 the wall arrived</strong>. The legs simply stopped. The aggressive first half took its toll, and the last 40 km were a grind through the hills — suffering, but never stopping. I crossed the line exhausted and buzzing.</p>
<p><strong>Lessons:</strong> three dropped chains in one race is a mechanical problem, not bad luck, so the chain and derailleur get checked before the next event. Going full gas in the first half of a 100 km+ race makes a very hard second half — manage the peloton phase and save something. And bonking at km 65 says I fuelled too little, too late during the attacking phase: eat on the bike even while chasing.</p>
<p>Definitely not my last gran fondo.</p>`,
      cs: `<p>Závod byl vánoční dárek od Alžbety — a jaký to byl dárek. <strong>Road Classics Vysočina</strong> byl můj první silniční gran fondo: <strong>104 km a 1 912 m převýšení</strong> přes kopce Vysočiny. Odjel jsem ho za <strong>3:41:27 s průměrem 28,2 km/h</strong>, průměrný tep 151, na Lapierru.</p>
<p>Ráno jsem byl nervózní. Mokré silnice a kompaktní balík dělaly první kilometry nejistými, jel jsem je opatrně. Jak asfalt osychal, chytil jsem rytmus a od <strong>20. do 60. km</strong> jsem letěl — útočil jsem, dojížděl skupinky a každý sjezd bral naplno. Jediná frustrace: v té pasáži mi <strong>třikrát spadl řetěz</strong>, pokaždé mě to stálo skupinu nebo náskok, který jsem si těžce vybudoval.</p>
<p>Na <strong>65. km přišla zeď</strong>. Nohy prostě přestaly. Agresivní první polovina si vybrala daň a posledních 40 km byla dřina přes kopce — trápení, ale bez zastavení. Do cíle jsem dojel vyčerpaný a nabuzený.</p>
<p><strong>Poučení:</strong> třikrát spadlý řetěz v jednom závodě je mechanický problém, ne smůla, takže řetěz a přehazovačku před dalším závodem zkontroluju. Jet na plný plyn v první polovině závodu přes 100 km znamená velmi těžkou druhou polovinu — v balíku hospodařit a něco si nechat. A krize na 65. km říká, že jsem v útočné fázi jedl málo a pozdě: jíst na kole i při honění.</p>
<p>Rozhodně to nebyl můj poslední gran fondo.</p>`,
      es: `<p>La carrera fue un regalo de Navidad de Alžbeta, y qué regalo. <strong>Road Classics Vysočina</strong> fue mi primera gran fondo en carretera: <strong>104 km y 1.912 m de desnivel</strong> por las colinas de Vysočina. La hice en <strong>3:41:27 a 28,2 km/h</strong>, con una frecuencia cardíaca media de 151, sobre mi Lapierre.</p>
<p>La mañana empezó con nervios. Las carreteras mojadas y un pelotón compacto hicieron inseguros los primeros kilómetros, y los rodé con cuidado. Al secarse el asfalto encontré mi ritmo y del <strong>km 20 al km 60</strong> volé: atacando, cazando grupos, bajando cada descenso a tope. La única frustración: en ese tramo se me salió la cadena <strong>tres veces</strong>, y cada una me costó un grupo o una ventaja que me había costado conseguir.</p>
<p>En el <strong>km 65 llegó el muro</strong>. Las piernas simplemente se pararon. La primera mitad agresiva pasó factura y los últimos 40 km fueron pura brega por las colinas — sufriendo, pero sin parar. Crucé la meta agotado y eufórico.</p>
<p><strong>Lecciones:</strong> tres cadenas caídas en una carrera es un problema mecánico, no mala suerte, así que revisaré la cadena y el cambio antes del próximo evento. Ir a tope en la primera mitad de una carrera de más de 100 km da una segunda mitad muy dura: gestionar la fase de pelotón y guardar algo. Y la pájara del km 65 dice que comí poco y tarde en la fase de ataques: comer sobre la bici incluso persiguiendo.</p>
<p>Desde luego no será mi última gran fondo.</p>`
    }
  },
  {
    id: 'b7-2026',
    date: '2026-08-28',
    category: 'Running',
    coverPhoto: '../images/events/b72026/MAC06476.jpg',
    photos: [
      '../images/events/b72026/MAC06476.jpg',
      '../images/events/b72026/IMG_0774.jpg',
      '../images/events/b72026/61de1404-65dc-406d-a3f2-bf146807dd9a.jpg'
    ],
    stravaUrl: 'https://www.strava.com/activities/19948322867',
    title: {
      en: 'B7 2026: Sub-14 by Two Minutes and Forty-Eight Seconds',
      cs: 'B7 2026: Pod 14 hodin o dvě minuty a čtyřicet osm sekund',
      es: 'B7 2026: Sub-14 por dos minutos y cuarenta y ocho segundos'
    },
    excerpt: {
      en: '101 km and 5,603 m across the Beskydy ridge, seven hours of it in darkness and rain. The goal of the whole season was a single number — sub-14 hours. The clock stopped at 13:57:12.',
      cs: '101 km a 5 603 m po hřebeni Beskyd, sedm hodin z toho ve tmě a dešti. Cíl celé sezóny byl jediné číslo — pod 14 hodin. Hodiny se zastavily na 13:57:12.',
      es: '101 km y 5.603 m por la cresta de los Beskydy, siete horas de ellos en la oscuridad y bajo la lluvia. El objetivo de toda la temporada era un solo número: bajar de 14 horas. El crono se detuvo en 13:57:12.'
    },
    body: {
      en: `<p>The whole season pointed at one number. The <strong>Road to B7 2026</strong> campaign had a single target — <strong>sub-14 hours</strong> on the 101 km of the Beskydská Sedmička. I crossed the line in <strong>13:57:12</strong>: inside the target by 2 minutes and 48 seconds, <strong>55 minutes faster</strong> than the same course in 2025, and up from 53rd to <strong>31st of 3,015 starters</strong>. Second in the M24 category. Of those 3,015, only 2,322 reached the finish — a 22.9 % DNF rate.</p>
<p>We started at 23:00 on the stadium in Třinec, 20.8 °C and a dry night. Four kilometres of tarmac at 4:43–4:52/km, and at the timing mat 560 m in I was <strong>126th</strong> — running sub-4:50 and still 125 people ahead of me. The field went out hard. Then the first climb to Javorový, +700 m in 9.3 km, and the <strong>maximum heart rate of the entire race arrived at minute 41: 177 bpm</strong>. In the remaining thirteen hours I never came close to it again. That opening is the one place where the data says I wasted something.</p>
<p>The rain came at about 03:00 and by morning 11.3 mm had fallen. I topped <strong>Lysá hora (1,324 m) at 04:24, in darkness, cloud and rain</strong>, heart rate 146 — eighteen beats below the first climb. The section from Morávka to Ostravice turned out to be the best of my day: the <strong>23rd fastest split of 2,297 finishers</strong>, the top 1 % of the field, and across the whole stretch <strong>not one person passed me</strong> — I overtook 28 and lost nobody. Sunrise arrived at 05:57, on the long climb to Smrk, after <strong>6 hours and 57 minutes of running in the dark</strong>.</p>
<p>The last 23 km is about as cruel a closing section as a 100 km race can offer: Radhošť, then Pindula, then Velký Javorník — <strong>+1,183 m of climbing with 78 km already in the legs</strong>. And this is the part I am most pleased about. I climbed Radhošť at 647 m/h and Velký Javorník at <strong>738 m/h — the second-fastest climbing rate of the entire race, produced in hour 13</strong>. The first climb of the night, on fresh legs, went at 581 m/h. <strong>I climbed the last two hills faster than the first one.</strong> The final three kilometres down into Frenštát went at 5:13, 5:26 and 5:48.</p>
<p>The race was won in the details rather than in the legs. Compared to 2025 my first half was identical — 25 seconds quicker — but the <strong>second half was 55 minutes 39 seconds faster</strong>. I spent <strong>82.3 % of the race in Zone 2</strong> against 66.7 % last year, and 0.4 % in Zone 4 against 5.4 %. Above all, my <strong>total standing time was 13 minutes 53 seconds across fourteen hours</strong>, where last year it was 58:05. That single discipline is 44 of the 55 minutes I gained. I never lost a place at any checkpoint: plus 95 runners, minus 21, across the day.</p>
<p>What still needs work is honest enough. The opening 6 km were too fast. My descents in the second half were <strong>15 % slower than in the first at a lower heart rate</strong> — that is quads, not cardio, and it costs about 12 minutes. One stop at Čeladná ran to 3:38, more than a quarter of all the time I spent standing still. And I burned 8,836 kcal without logging a single number of what went in. The target for 2027 is <strong>sub-13:30</strong>, and the budget is realistic: 12 minutes from eccentric quad strength, 5 from the aid stations, 10 from the closing section — without running the start any faster.</p>`,
      cs: `<p>Celá sezóna mířila na jedno číslo. Kampaň <strong>Road to B7 2026</strong> měla jediný cíl — <strong>pod 14 hodin</strong> na 101 kilometrech Beskydské Sedmičky. Cílem jsem prošel v čase <strong>13:57:12</strong>: o 2 minuty a 48 sekund pod cílem, o <strong>55 minut rychleji</strong> než na stejné trati v roce 2025 a posun z 53. na <strong>31. místo z 3 015 startujících</strong>. Druhý v kategorii M24. Z těch 3 015 doběhlo do cíle jen 2 322 — 22,9 % nedokončilo.</p>
<p>Startovali jsme ve 23:00 na stadionu v Třinci, 20,8 °C a suchá noc. Čtyři kilometry asfaltu v tempu 4:43–4:52/km a na startovní bráně po 560 metrech jsem byl <strong>126.</strong> — běžel jsem pod 4:50 a přesto přede mnou bylo 125 lidí. Pole vyrazilo šíleně. Pak první stoupání na Javorový, +700 m na 9,3 km, a <strong>maximální tep celého závodu přišel ve 41. minutě: 177 bpm</strong>. Za zbývajících třináct hodin jsem se k němu už nikdy nepřiblížil. Ten úvod je jediné místo, kde data říkají „zbytečně".</p>
<p>Kolem 03:00 začalo pršet a do rána spadlo 11,3 mm. Na <strong>Lysou horu (1 324 m) jsem vystoupal ve 04:24, ve tmě, mlze a dešti</strong>, s tepem 146 — o osmnáct tepů níž než na prvním kopci. Úsek z Morávky do Ostravice se ukázal jako nejlepší část mého dne: <strong>23. nejrychlejší mezičas z 2 297 finišerů</strong>, horní 1 % pole, a za celý ten úsek mě <strong>nepředběhl jediný člověk</strong> — 28 jsem předběhl já a neztratil nikoho. Slunce vyšlo v 05:57, uprostřed dlouhého výstupu na Smrk, po <strong>6 hodinách a 57 minutách běhu ve tmě</strong>.</p>
<p>Posledních 23 km je asi tak krutý závěr, jaký stokilometrový závod dokáže nabídnout: Radhošť, pak Pindula a Velký Javorník — <strong>+1 183 m převýšení s 78 kilometry už v nohách</strong>. A právě na tohle jsem nejvíc hrdý. Radhošť jsem vyběhl rychlostí 647 m/h a Velký Javorník <strong>738 m/h — druhá nejvyšší stoupací rychlost celého závodu, a to ve 13. hodině</strong>. První kopec té noci, na čerstvé nohy, šel za 581 m/h. <strong>Poslední dva kopce jsem vyběhl rychleji než ten první.</strong> Poslední tři kilometry dolů do Frenštátu v tempu 5:13, 5:26 a 5:48.</p>
<p>Závod se nevyhrál nohama, ale v detailech. Proti roku 2025 jsem měl identickou první polovinu — o 25 sekund rychlejší — ale <strong>druhá polovina byla o 55 minut a 39 sekund rychlejší</strong>. Strávil jsem <strong>82,3 % závodu v zóně 2</strong> proti loňským 66,7 % a 0,4 % v zóně 4 proti 5,4 %. A hlavně: <strong>celkový čas ve stoje byl 13 minut a 53 sekund za čtrnáct hodin</strong>, loni to bylo 58:05. Jen tahle jediná disciplína je 44 z 55 získaných minut. Ani na jedné kontrole jsem neztratil pozici: za den plus 95 běžců, minus 21.</p>
<p>Co je potřeba zlepšit, je celkem jasné. Prvních 6 km bylo moc rychlých. Sjezdy ve druhé polovině byly <strong>o 15 % pomalejší než v první, a to při nižším tepu</strong> — to jsou stehna, ne kardio, a stojí to zhruba 12 minut. Jedna zastávka v Čeladné se protáhla na 3:38, což je přes čtvrtinu veškerého času ve stoje. A spálil jsem 8 836 kcal, aniž bych si zapsal jediné číslo o příjmu. Cíl pro rok 2027 je <strong>sub-13:30</strong> a rozpočet je reálný: 12 minut z excentrické síly stehen, 5 z občerstvovaček, 10 ze závěrečného úseku — a to bez toho, abych začátek běžel rychleji.</p>`,
      es: `<p>Toda la temporada apuntaba a un solo número. La campaña <strong>Road to B7 2026</strong> tenía un único objetivo: <strong>bajar de 14 horas</strong> en los 101 km de la Beskydská Sedmička. Crucé la meta en <strong>13:57:12</strong>: dentro del objetivo por 2 minutos y 48 segundos, <strong>55 minutos más rápido</strong> que en el mismo recorrido en 2025, y del puesto 53 al <strong>31 de 3.015 participantes</strong>. Segundo en la categoría M24. De esos 3.015, solo 2.322 llegaron a meta: un 22,9 % de abandonos.</p>
<p>Salimos a las 23:00 del estadio de Třinec, con 20,8 °C y una noche seca. Cuatro kilómetros de asfalto a 4:43–4:52/km y, en el arco de cronometraje a los 560 m, iba <strong>126.º</strong>: corriendo por debajo de 4:50 y con 125 personas todavía por delante. El pelotón salió a tumba abierta. Después llegó la primera subida a Javorový, +700 m en 9,3 km, y <strong>la frecuencia cardíaca máxima de toda la carrera apareció en el minuto 41: 177 ppm</strong>. En las trece horas restantes no volví a acercarme. Ese arranque es el único punto donde los datos dicen que malgasté algo.</p>
<p>La lluvia llegó sobre las 03:00 y por la mañana habían caído 11,3 mm. Coroné <strong>Lysá hora (1.324 m) a las 04:24, en plena oscuridad, niebla y lluvia</strong>, con 146 pulsaciones: dieciocho por debajo de la primera subida. El tramo de Morávka a Ostravice resultó ser el mejor del día: el <strong>23.º parcial más rápido de 2.297 finalistas</strong>, el 1 % superior del pelotón, y en todo ese tramo <strong>no me adelantó ni una sola persona</strong>: yo pasé a 28 y no perdí a nadie. El amanecer llegó a las 05:57, en la larga subida a Smrk, tras <strong>6 horas y 57 minutos corriendo a oscuras</strong>.</p>
<p>Los últimos 23 km son un final tan cruel como puede ofrecer una carrera de 100 km: Radhošť, luego Pindula y Velký Javorník — <strong>+1.183 m de desnivel con 78 km ya en las piernas</strong>. Y esta es la parte de la que más orgulloso estoy. Subí Radhošť a 647 m/h y Velký Javorník a <strong>738 m/h: el segundo mejor ritmo de ascenso de toda la carrera, y en la hora 13</strong>. La primera subida de la noche, con piernas frescas, fue a 581 m/h. <strong>Subí las dos últimas cuestas más rápido que la primera.</strong> Los tres kilómetros finales bajando hacia Frenštát, a 5:13, 5:26 y 5:48.</p>
<p>La carrera se ganó en los detalles, no en las piernas. Frente a 2025 mi primera mitad fue idéntica — 25 segundos más rápida — pero la <strong>segunda mitad fue 55 minutos y 39 segundos más rápida</strong>. Pasé el <strong>82,3 % de la carrera en Zona 2</strong> frente al 66,7 % del año anterior, y un 0,4 % en Zona 4 frente al 5,4 %. Y sobre todo: mi <strong>tiempo total detenido fue de 13 minutos y 53 segundos en catorce horas</strong>, cuando el año pasado fue de 58:05. Esa sola disciplina supone 44 de los 55 minutos ganados. No perdí ni un puesto en ningún control: 95 corredores adelantados y 21 perdidos en todo el día.</p>
<p>Lo que aún hay que trabajar está bastante claro. Los primeros 6 km fueron demasiado rápidos. Mis bajadas en la segunda mitad fueron <strong>un 15 % más lentas que en la primera y con menos pulsaciones</strong>: eso son los cuádriceps, no el corazón, y cuesta unos 12 minutos. Una parada en Čeladná se alargó hasta 3:38, más de una cuarta parte de todo el tiempo que pasé detenido. Y quemé 8.836 kcal sin anotar una sola cifra de lo que ingerí. El objetivo para 2027 es <strong>sub-13:30</strong>, y el presupuesto es realista: 12 minutos de fuerza excéntrica de cuádriceps, 5 de los avituallamientos y 10 del tramo final, sin necesidad de salir más rápido.</p>`
    }
  },
  {
    id: 'but82-2026',
    date: '2026-08-01',
    category: 'Running',
    coverPhoto: '../images/events/but2026/IMG_6176.JPG',
    photos: [
      '../images/events/but2026/IMG_6176.JPG',
      '../images/events/but2026/IMG_3411.jpg'
    ],
    stravaUrl: 'https://www.strava.com/activities/19560243980',
    title: {
      en: 'BUT86: 19th Overall, Top 20, and a Lesson About Starting Guns',
      cs: 'BUT86: 19. místo, top 20 a lekce ze startovního výstřelu',
      es: 'BUT86: 19.º general, top 20 y una lección sobre la salida'
    },
    excerpt: {
      en: '86 km, 3,658m+ through the Beskydy. A fast start cost me sub-11, but perfect nutrition carried me to 19th overall — without knowing my position until the finish.',
      cs: '86 km, 3 658 m+ přes Beskydy. Rychlý start stál sub-11, ale dokonalá výživa mě dovedla na 19. místo — aniž jsem do cíle tušil, kde se nacházím.',
      es: '86 km, 3.658m+ por los Beskydy. Una salida rápida me costó el sub-11, pero la nutrición perfecta me llevó al 19.º general — sin saber mi posición hasta la meta.'
    },
    body: {
      en: `<p>Beskydský Ultra Trail — my first time on the 86 km distance after running the B7 last year. The race starts at Bumbálka at 07:00, loops the entire Beskydy ridge via Pustevny, Ostravice, Lysá hora and Bílý Kříž, and finishes back in Bílá. Officially 82 km with 3,222m of climb — my watch said 86 km and 3,658m. A long day either way.</p>
<p>The first thing I noticed was heavy legs — already at km 2–3, on the first small uphill, way earlier than they should arrive. Not on the big climb, not at halfway — at km 2. By Ostravice (km 45.5, halfway) I was still <strong>24 minutes ahead of plan</strong>, but the legs never quite shook that opening feeling off. At the finish I was <strong>17 minutes behind plan</strong>. A 41-minute swing in the back half.</p>
<p>What saved the race was nutrition. Two litres of fluid between every pair of checkpoints, real food and loads of salt at every aid station, and the new Edgar hydrogels that sat perfectly in the stomach even after hours. I never bonked. The heart rate ceiling collapsed after Lysá hora — dropping from the 156s of the opening to 132–133 in the final blocks — but the pace never fell off a cliff. Km 84 still at 6:42/km after 11 hours. Controlled decline, not a death march. Eat, drink, keep moving.</p>
<p>I filmed video for the entire race and had no idea what place I was in. I ran purely on feel, with nobody telling me where I stood. At the finish line: <strong>19th overall, 8th in category</strong>, in <strong>11:17:22</strong>. Tomáš Fiala beat me across the line by three seconds. New race shoes — HOKA Tecton X3 — held up for all 86 km without a single blister. </p>`,
      cs: `<p>Beskydský Ultra Trail — poprvé na 86km distanci po loňské B7. Závod startuje v Bumbálce v 07:00, obíhá celý beskydský hřeben přes Pustevny, Ostravici, Lysou horu a Bílý Kříž a vrací se do cíle v Bílé. Oficiálně 82 km a 3 222 m převýšení — hodinky ukázaly 86 km a 3 658 m. Dlouhý den tak nebo tak.</p>
<p>První věc, kterou jsem zaregistroval, byly těžké nohy — hned na prvním malém kopečku okolo km 2–3, mnohem dřív, než by měly přijít. Ne na velkém výstupu, ne v půlce — na km 2. V Ostravici (km 45,5, půlka) jsem byl stále <strong>24 minut před plánem</strong>, ale nohy ten pocit z úvodu nikdy úplně nezatřely. V cíli jsem byl <strong>17 minut za plánem</strong>. Celkový obrat 41 minut v druhé půlce.</p>
<p>Závod zachránila výživa. Dva litry tekutin mezi každými dvěma bufety, jídlo a hodně soli na každém stanovišti a nové Edgar hydrogely, které seděly do žaludku i po hodinách. Nezhroutil jsem se. Strop tepu sice po Lysé hoře klesl — z úvodních 156 až na 132–133 v posledních blocích — ale tempo nespadlo přes okraj. Km 84 stále 6:42/km po 11 hodinách. Řízený ústup, ne agónie. Jíst, pít, jet dál.</p>
<p>Celý závod jsem natáčel videa a netušil jsem, na jakém jsem místě. Běžel jsem čistě podle pocitu, bez jakékoli informace o pořadí. Na cílové rovince: <strong>19. místo celkově, 8. v kategorii</strong>, v čase <strong>11:17:22</strong>. Tomáš Fiala mě porazil o tři sekundy. Nové závodní boty — HOKA Tecton X3 — zvládly všech 86 km bez jediného puchýře. </p>`,
      es: `<p>Beskydský Ultra Trail — mi primera vez en la distancia de 86 km tras correr la B7 el año pasado. La carrera sale de Bumbálka a las 07:00, recorre toda la cresta de Beskydy pasando por Pustevny, Ostravice, Lysá hora y Bílý Kříž, y termina en Bílá. Oficialmente 82 km con 3.222m de desnivel — mi reloj marcó 86 km y 3.658m. Un día largo de cualquier manera.</p>
<p>Lo primero que noté fueron las piernas pesadas — ya en el primer pequeño repecho del km 2–3, mucho antes de lo esperado. No en la gran subida, no en el ecuador — en el km 2. En Ostravice (km 45,5, la mitad) todavía llevaba <strong>24 minutos de ventaja</strong> sobre el plan, pero las piernas nunca terminaron de sacudirse esa sensación inicial. Al cruzar la meta iba <strong>17 minutos por detrás</strong>. Un vuelco de 41 minutos en la segunda mitad.</p>
<p>Lo que salvó la carrera fue la nutrición. Dos litros de líquido entre cada par de avituallamientos, comida real y mucha sal en cada punto, y los nuevos hidrogeles Edgar que sentaron perfectamente en el estómago incluso después de horas. Nunca sufrí un bonk. El techo de frecuencia cardíaca se derrumbó tras Lysá hora — bajando de los 156 del inicio hasta 132–133 en los últimos bloques — pero el ritmo nunca se desplomó. Km 84 todavía a 6:42/km después de 11 horas. Declive controlado, no una marcha de la muerte. Comer, beber, seguir adelante.</p>
<p>Filmé vídeos durante toda la carrera sin saber en qué puesto iba. Corrí puramente por sensaciones, sin nadie diciéndome mi posición. En la línea de meta: <strong>19.º en la general, 8.º en categoría</strong>, en <strong>11:17:22</strong>. Tomáš Fiala me adelantó por tres segundos. Las nuevas zapatillas de carrera — HOKA Tecton X3 — aguantaron los 86 km sin una sola ampolla. </p>`
    }
  },
  {
    id: 'mf50-2026',
    date: '2026-06-29',
    category: 'Running',
    coverPhoto: '../images/events/mf50-2026/mf50_finish.jpg',
    photos: ['../images/events/mf50-2026/mf50_finish.jpg'],
    stravaUrl: 'https://www.strava.com/activities/19089092100',
    title: {
      en: 'Surviving MF50: A Brutal School of Mountain Ultra',
      cs: 'Přežít MF50: Brutální škola horského ultra',
      es: 'Sobreviviendo a la MF50: Una escuela brutal de ultra de montaña'
    },
    excerpt: {
      en: 'A raw account of Malofatranská 50 (56 km, 4,400m+). High heart rates, two broken poles, toenail issues, and the deepest crisis of my running journey.',
      cs: 'Surový report z Malofatranské padesátky (56 km, 4 400 m+). Vysoké tepy, dvě zlomené hůlky, zničené nehty a největší krize mé dosavadní běžecké cesty.',
      es: 'Una crónica cruda de la Malofatranská 50 (56 km, 4.400m+). Frecuencias cardíacas altas, dos bastones rotos, problemas de uñas y la crisis más profunda de mi trayectoria.'
    },
    body: {
      en: `<p>The Malofatranská padesátka (MF50) is not just a run; it is a 56 km lesson in humility with 4,400 meters of vertical climb in the beautiful but unforgiving Malá Fatra mountains. On June 27, 2026, I lined up in Terchová ready for a major mountain test. I finished it, but the price was high and the lessons were priceless.</p>
<p>My first mistake was pacing. I ran the flat opening kilometers too fast, hitting the first climb with a heart rate of 170+ bpm. I spent nearly half of the race in zones 4 and 5—an intensity no body can sustain for a full day. Soon after calling my partner Alžbeta around km 15, I tripped and snapped my first LEKI pole. I had to improvise and find a sturdy wooden branch in the forest, which became my companion for the next 35 kilometers.</p>
<p>The course was relentless. Climbing Velký Rozsutec went well, but the descent to K2 (Sedlo Medziholie) was a vertical drop of -35% over steep rocks. With poorly trimmed toenails and quads already battered from aggressive early descents, this section started a long-lasting physical crisis. Things got even worse on the climb to Stoh under the blistering sun. Later, on the second rocky scramble near Suchý and Stratenec, dehydration and exhaustion completely broke me. I was forced to sit in the shade, questioning why I do this, while my watch battery died because I brought a charging cable that didn't fit my powerbank.</p>
<p>But ultra running is about what you do when everything goes wrong. Some runners on the course helped me with water and a gel, and calling Alžbeta, who was waiting at the finish, gave me the mental strength to keep moving. I managed to jog again, cooled my head in an ice-cold spring, and reached K4. Right after K4, I tripped again and broke my second pole, completing the final descent with only my wooden branch.</p>
<p>Crossing the finish line in Lipovec with Alžbeta and my family waiting was a moment of pure relief. I finished 22nd overall out of only 68 finishers (with a DNF rate of over 55%) in a time of 11:37:53. The data from my FIT file confirmed everything: a massive drop in heart rate ceiling due to glycogen depletion, and quad overload from too fast a start. It was a brutal school, but it made me a much wiser runner.</p>`,
      cs: `<p>Malofatranská padesátka (MF50) není jen závod, je to 56 km dlouhá lekce pokory s převýšením 4 400 metrů v krásném, ale nekompromisním prostředí Malé Fatry. 27. června 2026 jsem se postavil na start v Terchově připraven na velkou horskou zkoušku. Cílem jsem sice proběhl, ale cena byla vysoká a lekce k nezaplacení.</p>
<p>První chybou bylo tempo. Úvodní rovinaté kilometry jsem rozběhl příliš rychle a pod první kopec dorazil s tepem přes 170 bpm. Téměř polovinu závodu jsem strávil v zónách 4 a 5 — v intenzitě, kterou tělo při celodenním závodě neudrží. Krátce po prvním telefonátu s Alžbětkou na 15. kilometru jsem navíc zakopl a zlomil první hůlku LEKI. Musel jsem improvizovat a najít si v lese klacek, se kterým jsem pak odběhl dalších 35 kilometrů.</p>
<p>Trasa byla neúprosná. Výstup na Velký Rozsutec šel sice dobře, ale následný sestup na K2 (Sedlo Medziholie) byl strmý se sklonem -35 % po skalách. Kvůli neostříhaným nehtům a stehnům zničeným z agresivních úvodních seběhů se zde rozjela velká krize. Ta vyvrcholila na Stohu na přímém slunci. Později, v druhé skalnaté pasáži u Suchého a Stratence, mě úplně dorazila dehydratace a slabost. Musel jsem sedět ve stínu a poprvé v kariéře vážně uvažoval o DNF, zatímco mi zhasínaly hodinky, protože jsem si vzal špatný kabel k powerbance.</p>
<p>Ultra je ale o tom, jak se zachováte, když se všechno sype. Kluci na trati mi pomohli vodou a gelem a Alžbětka mi do telefonu připomněla, že na mě čekají v cíli. Kousek za studánkou s ledovou vodou jsem chytil druhý dech. Aby toho nebylo málo, na začátku posledního seběhu jsem zlomil i druhou hůlku a dolů kulhal už jen s klackem.</p>
<p>Cílová rovinka v Lipovci, kde na mě čekala Alžbětka s rodinou, byla obrovským vysvobozením. Dokončil jsem na 22. místě z pouhých 68 finišerů (více než 55 % startovního pole závod nedokončilo) v čase 11:37:53. Analýza FIT souboru zpětně potvrdila vše — totální vyčerpání glykogenu doprovázené poklesem tepového stropu a zničená stehna z rychlého úvodu. Byla to brutální škola, ale odnáším si z ní neskutečně cenné zkušenosti.</p>`,
      es: `<p>La Malofatranská cincuenta (MF50) no es solo una carrera; es una lección de humildad de 56 km con 4.400 metros de desnivel positivo en la hermosa pero implacable cordillera de Malá Fatra. El 27 de junio de 2026, me alineé en Terchová listo para una gran prueba de montaña. Crucé la meta, pero el precio fue alto y las lecciones, invaluables.</p>
<p>Mi primer error fue el ritmo. Corrí los kilómetros llanos iniciales demasiado rápido, llegando a la primera subida con una frecuencia cardíaca de más de 170 ppm. Pasé casi la mitad de la carrera en las zonas 4 y 5, una intensidad que ningún cuerpo puede sostener durante todo un día. Poco después de hablar por teléfono con Alžbeta en el km 15, tropecé y rompí mi primer bastón LEKI. Tuve que improvisar y buscar una rama de madera en el bosque, que se convirtió en mi compañera durante los siguientes 35 kilómetros.</p>
<p>El recorrido fue implacable. La subida al Velký Rozsutec fue buena, pero el descenso hacia K2 (Sedlo Medziholie) fue una caída vertical de -35% sobre rocas escarpadas. Con las uñas de los pies mal cortadas y los cuádriceps ya destrozados por los descensos agresivos del principio, esta sección inició una larga crisis física. Las cosas empeoraron en la subida a Stoh bajo un sol abrasador. Más tarde, en la segunda sección rocosa cerca de Suchý y Stratenec, la deshidratación y el cansancio me rompieron por completo. Me vi obligado a sentarme a la sombra, preguntándome por qué hacía esto, mientras la batería de mi reloj se agotaba porque llevé un cable que no encajaba en mi powerbank.</p>
<p>Pero el ultra running se trata de lo que haces cuando todo sale mal. Algunos corredores en la ruta me ayudaron con agua y un gel, y llamar a Alžbeta, que esperaba en la meta, me dio la fuerza mental para seguir moviéndome. Logré volver a trotar, me refresqué la cabeza en un manantial helado y llegué a K4. Justo después de K4, tropecé de nuevo y rompí mi segundo bastón, completando el descenso final solo con mi rama de madera.</p>
<p>Cruzar la línea de meta en Lipovec con Alžbeta y mi familia esperando fue un momento de puro alivio. Terminé 22.º en la general de solo 68 finalistas (con una tasa de DNF de más del 55%) en un tiempo de 11:37:53. Los datos de mi archivo FIT confirmaron todo: una caída masiva en el techo de la frecuencia cardíaca debido al agotamiento de glucógeno y sobrecarga de cuádriceps por un inicio demasiado rápido. Fue una escuela brutal, pero me convirtió en un corredor mucho más sabio.</p>`
    }
  },
  {
    id: 'masters-done',
    date: '2026-06-06',
    category: 'Life',
    coverPhoto: '../images/Posts/MastersDone/IMG_9011.jpg',
    photos: ['../images/Posts/MastersDone/IMG_9011.jpg'],
    title: { en: 'Closing the Loop: Master\'s Done', cs: 'Uzavírám kruh: magistr hotov', es: 'Cerrando el ciclo: máster terminado' },
    excerpt: {
      en: 'After two years of juggling coursework, Monet+ and daily training, I finished my master\'s in Software Development at UPOL.',
      cs: 'Po dvou letech žonglování mezi studiem, Monet+ a každodenním tréninkem jsem dokončil magisterské studium Vývoje software na UPOL.',
      es: 'Tras dos años compaginando clases, Monet+ y entrenamiento diario, terminé el máster en Desarrollo de Software en UPOL.'
    },
    body: {
      en: `<p>Five years ago I started at Palacký University in Olomouc. Bachelor's first — General Informatics — then straight into the master's in Software Development. Today that chapter closes.</p>
<p>The master's thesis was a web-based <strong>finite automata simulator</strong>. You can build and simulate deterministic automata, non-deterministic automata, epsilon-NFAs and pushdown automata — stepping through each state transition one by one. On top of the core simulation I added NFA-to-DFA conversion, minimization, and a set of teaching features: group management, saved configurations, shareable automaton states. The goal was a tool a lecturer could actually use in class, not just a demo.</p>
<p>What the two years taught me beyond the curriculum: theory and practice running in parallel is the right mode. Algorithms, formal languages and software architecture from the coursework directly sharpened how I think about production code at Monet+. The discipline from training — showing up every day, tracking progress, staying consistent — mapped cleanly onto deadlines and side projects.</p>
<p>I joined Monet+ as an intern in February 2025. By July 2026 it becomes full-time. The gap between student and professional closes. What's next is just work — the good kind.</p>`,
      cs: `<p>Před pěti lety jsem nastoupil na Univerzitu Palackého v Olomouci. Nejdřív bakalář — Obecná informatika — pak rovnou navazující magisterské studium Vývoje software. Dnes se tato kapitola uzavírá.</p>
<p>Diplomová práce byla webový <strong>simulátor konečných automatů</strong>. Můžete sestavovat a simulovat deterministické automaty, nedeterministické automaty, epsilon-NKA a zásobníkové automaty — krok za krokem sledovat každý přechod. Nad rámec základní simulace jsem přidal převod NKA na DKA, minimalizaci a sadu výukových funkcí: správu skupin, uložené konfigurace a sdílitelné stavy automatu. Cílem byl nástroj, který by učitel mohl reálně použít ve výuce, nejen demo.</p>
<p>Co mě ty dva roky naučily nad rámec osnov: teorie a praxe běžící souběžně je ten správný režim. Algoritmy, formální jazyky a softwarová architektura ze studia přímo zostřily mé uvažování o produkčním kódu v Monet+. Disciplína z tréninku — ukázat se každý den, sledovat pokrok, zůstat konzistentní — se čistě promítla do termínů a vedlejších projektů.</p>
<p>Do Monet+ jsem nastoupil jako stážista v únoru 2025. V červenci 2026 přecházím na plný úvazek. Propast mezi studentem a profesionálem se uzavírá. Další na řadě je jen práce — ta dobrá.</p>`,
      es: `<p>Hace cinco años empecé en la Universidad Palacký de Olomouc. Primero el grado en Informática General y luego directamente al máster en Desarrollo de Software. Hoy se cierra ese capítulo.</p>
<p>El trabajo de fin de máster fue un <strong>simulador web de autómatas finitos</strong>. Puedes construir y simular autómatas deterministas, no deterministas, con transiciones épsilon y de pila, observando cada transición paso a paso. Además de la simulación principal, añadí conversión de AFND a AFD, minimización y un conjunto de funciones didácticas: gestión de grupos, configuraciones guardadas y estados de autómatas compartibles. El objetivo era crear una herramienta que un profesor pudiera usar realmente en clase, no solo una demostración.</p>
<p>Lo que me enseñaron estos dos años más allá del plan de estudios: la teoría y la práctica en paralelo es el modo correcto. Algoritmos, lenguajes formales y arquitectura de software de las clases afilaron directamente mi forma de pensar sobre el código de producción en Monet+. La disciplina del entrenamiento —estar presente cada día, hacer seguimiento del progreso, ser constante— se trasladó de forma limpia a las fechas límite y los proyectos paralelos.</p>
<p>Me uní a Monet+ como becario en febrero de 2025. En julio de 2026 paso a tiempo completo. La brecha entre estudiante y profesional se cierra. Lo que sigue es simplemente trabajo, del bueno.</p>`
    }
  },
  {
    id: 'cybercon-2026',
    date: '2026-09-14',
    category: 'Tech',
    coverPhoto: '',
    photos: [],
    title: {
      en: 'CYBER_CON 2026: My First Security Conference',
      cs: 'CYBER_CON 2026 – moje první konference',
      es: 'CYBER_CON 2026: mi primera conferencia'
    },
    excerpt: {
      en: 'My first time at a security conference of this kind — three talks on incident response, AI\'s impact on software resilience, and resilience beyond compliance stuck with me most.',
      cs: 'Moje vůbec první zkušenost s konferencí tohoto typu — nejvíc mě zaujaly tři příspěvky o reakci na incidenty, vlivu AI na odolnost softwaru a odolnosti nad rámec zákonů.',
      es: 'Mi primera vez en una conferencia de este tipo — tres ponencias sobre respuesta a incidentes, el impacto de la IA en la resiliencia del software y la resiliencia más allá del cumplimiento me dejaron pensando.'
    },
    body: {
      en: `<p>This week I attended <strong>CYBER_CON 2026</strong> in Brno — my first time at a conference of this kind, and I left with my horizons seriously expanded.</p>
<p>Three talks stood out to me the most.</p>
<p><strong>The First Hour After an Incident — From Compliance to Real Resilience.</strong> A walkthrough of real-world scenarios (spear phishing, AI vishing, CEO fraud, BEC) covering how organizations react in the first minutes and where they most often fail. The idea that stuck with me: meeting requirements on paper and being genuinely resilient are two very different things.</p>
<p><strong>AI and Its Impact on the Resilience of Software Systems</strong> (Ondřej Vlček, AISLE). A practical look at how AI is changing defenders' work — speeding up threat detection and incident response while opening up new categories of risk. As a developer, I was especially interested in the limits of today's solutions.</p>
<p><strong>Are We Resilient?</strong> (Jan Kolouch, CESNET, and Dominik Marek, Kraj Vysočina). Short but dense — a look at how to strengthen resilience beyond what the law requires, and why it makes sense to treat security as one connected whole.</p>
<p>And one more thing I can't leave out: the coffee and the ice cream were excellent. 🍦☕</p>
<p>Thanks to the organizers.</p>`,
      cs: `<p>Tenhle týden jsem byl na <strong>CYBER_CONu v Brně</strong> a byla to moje vůbec první zkušenost s konferencí tohoto typu. Odcházím s pořádně rozšířenými obzory.</p>
<p>Nejvíc mě zaujaly tři příspěvky.</p>
<p><strong>První hodina po incidentu – od compliance k reálné odolnosti.</strong> Ukázka na reálných scénářích (spear phishing, AI vishing, CEO fraud, BEC), jak organizace reagují v prvních minutách a kde nejčastěji selhávají. Hlavní myšlenka, která mi utkvěla: splnit požadavky na papíře a být skutečně odolný jsou dvě různé věci.</p>
<p><strong>AI a její vliv na odolnost softwarových systémů</strong> (Ondřej Vlček, AISLE). Praktický pohled na to, jak AI mění práci obránců – zrychluje detekci hrozeb i reakci na incidenty, ale zároveň otevírá nové typy rizik. Jako vývojáře mě obzvlášť zajímaly limity dnešních řešení.</p>
<p><strong>Jsme odolní?</strong> (Jan Kolouch, CESNET a Dominik Marek, Kraj Vysočina). Krátký, ale výživný pohled na to, jak posilovat odolnost i mimo rámec zákonů a proč dává smysl brát bezpečnost jako jeden propojený celek.</p>
<p>A ještě jedna věc, kterou nemůžu nezmínit: káva a zmrzlina byly skvělé. 🍦☕</p>
<p>Díky organizátorům.</p>`,
      es: `<p>Esta semana estuve en <strong>CYBER_CON 2026</strong> en Brno — mi primera vez en una conferencia de este tipo, y me voy con los horizontes bastante ampliados.</p>
<p>Tres ponencias me llamaron especialmente la atención.</p>
<p><strong>La primera hora después de un incidente — del cumplimiento normativo a la resiliencia real.</strong> Un recorrido por escenarios reales (spear phishing, vishing con IA, fraude del CEO, BEC) sobre cómo reaccionan las organizaciones en los primeros minutos y dónde suelen fallar más. La idea que se me quedó grabada: cumplir los requisitos sobre el papel y ser realmente resiliente son dos cosas muy distintas.</p>
<p><strong>La IA y su impacto en la resiliencia de los sistemas de software</strong> (Ondřej Vlček, AISLE). Una mirada práctica a cómo la IA está cambiando el trabajo de los defensores — acelera la detección de amenazas y la respuesta a incidentes, pero a la vez abre nuevos tipos de riesgo. Como desarrollador, me interesaron especialmente los límites de las soluciones actuales.</p>
<p><strong>¿Somos resilientes?</strong> (Jan Kolouch, CESNET, y Dominik Marek, Kraj Vysočina). Una charla corta pero densa sobre cómo reforzar la resiliencia más allá de lo que exige la ley, y por qué tiene sentido tratar la seguridad como un todo conectado.</p>
<p>Y una cosa más que no puedo dejar de mencionar: el café y el helado estaban excelentes. 🍦☕</p>
<p>Gracias a los organizadores.</p>`
    }
  },
  {
    id: 'svoc-2026',
    date: '2026-04-25',
    category: 'Academic',
    coverPhoto: '../images/Posts/SVOC/IMG_8964.JPG',
    photos: ['../images/Posts/SVOC/IMG_8964.JPG'],
    title: { en: '2nd at SVOČ — Finite Automata Simulator', cs: '2. místo na SVOČ — Simulátor konečných automatů', es: '2.º en SVOČ — Simulador de autómatas finitos' },
    excerpt: {
      en: 'Presented my master\'s thesis at UPOL\'s SVOČ and finished second in the Didactics of Natural Sciences section.',
      cs: 'Na SVOČ UPOL jsem prezentoval diplomovou práci a obsadil druhé místo v sekci Didaktika přírodovědných oborů.',
      es: 'Presenté mi trabajo de fin de máster en el SVOČ de la UPOL y quedé segundo en la sección de Didáctica de Ciencias Naturales.'
    },
    body: {
      en: `<p>Every year UPOL runs SVOČ — the student scientific and professional activities competition. This year I entered with my master's thesis: <strong>Simulátor konečných automatů</strong> (Finite Automata Simulator), presenting in the Didaktika přírodovědných oborů section, master's category.</p>
<p>The thesis is a web application. You define automata visually, feed in input strings, and watch the machine process them step by step — state by state, transition by transition. It handles deterministic automata (DFA), non-deterministic automata (NFA), epsilon-NFAs, and pushdown automata. Beyond simulation there are operations: NFA-to-DFA conversion, minimization, epsilon-closure computation. The teaching layer adds group management and saved configurations so a lecturer can prepare exercises and share exact automaton states with students.</p>
<p>The presentation itself was a different kind of test from writing the code. You have to explain not just what the tool does but why the architecture decisions make sense — why I modeled transitions the way I did, why the teaching features work the way they do. The jury's questions pushed on edge cases I'd thought carefully about.</p>
<p><strong>2nd place.</strong> The feedback centred on the breadth of automaton types covered and the practical teaching integration. The advisor was doc. RNDr. Miroslav Kolařík, Ph.D.</p>`,
      cs: `<p>Každý rok pořádá UPOL SVOČ — soutěž studentské vědecké a odborné činnosti. Letos jsem se přihlásil se svou diplomovou prací: <strong>Simulátor konečných automatů</strong>, prezentoval jsem v sekci Didaktika přírodovědných oborů v magisterské kategorii.</p>
<p>Práce je webová aplikace. Definetuje automaty vizuálně, zadáváte vstupní řetězce a sledujete, jak je stroj zpracovává krok za krokem — stav po stavu, přechod po přechodu. Zvládá deterministické automaty (DKA), nedeterministické automaty (NKA), epsilon-NKA a zásobníkové automaty. Kromě simulace jsou k dispozici i operace: převod NKA na DKA, minimalizace, výpočet epsilon-uzávěru. Výuková vrstva přidává správu skupin a uložené konfigurace, takže učitel může připravovat cvičení a sdílet se studenty přesné stavy automatu.</p>
<p>Samotná prezentace byla zkouškou jiného druhu než psaní kódu. Musíte vysvětlit nejen to, co nástroj dělá, ale také proč dávají architektonická rozhodnutí smysl — proč jsem modeloval přechody tak, jak jsem je modeloval, proč výukové funkce fungují právě takto. Otázky poroty mířily na okrajové případy, o kterých jsem pečlivě přemýšlel.</p>
<p><strong>2. místo.</strong> Zpětná vazba se soustředila na šíři pokrytých typů automatů a praktickou integraci do výuky. Vedoucím práce byl doc. RNDr. Miroslav Kolařík, Ph.D.</p>`,
      es: `<p>Cada año la UPOL organiza SVOČ, la competición de actividades científicas y profesionales para estudiantes. Este año me presenté con mi trabajo de fin de máster: <strong>Simulador de autómatas finitos</strong>, en la sección de Didáctica de Ciencias Naturales, categoría de máster.</p>
<p>El trabajo es una aplicación web. Defines autómatas visualmente, introduces cadenas y ves cómo la máquina las procesa paso a paso: estado a estado, transición a transición. Maneja autómatas deterministas (AFD), no deterministas (AFND), con transiciones épsilon y de pila. Más allá de la simulación hay operaciones: conversión de AFND a AFD, minimización, cálculo de clausura épsilon. La capa didáctica añade gestión de grupos y configuraciones guardadas para que un profesor pueda preparar ejercicios y compartir estados exactos del autómata con los estudiantes.</p>
<p>La presentación en sí fue un tipo de prueba diferente a escribir código. Tienes que explicar no solo qué hace la herramienta, sino por qué las decisiones de arquitectura tienen sentido: por qué modelé las transiciones de esa manera, por qué las funciones de enseñanza funcionan así. Las preguntas del jurado incidieron en casos extremos sobre los que había reflexionado cuidadosamente.</p>
<p><strong>2.º puesto.</strong> El feedback se centró en la amplitud de tipos de autómatas cubiertos y en la integración práctica en la enseñanza. El tutor fue el doc. RNDr. Miroslav Kolařík, Ph.D.</p>`
    }
  },
  {
    id: 'olomouc-sub3',
    date: '2026-05-13',
    category: 'Running',
    coverPhoto: '../images/events/OlomoucMarathon2026/IMG_8773.jpg',
    photos: [
      '../images/events/OlomoucMarathon2026/IMG_8773.jpg',
      '../images/events/OlomoucMarathon2026/IMG_8776.PNG'
    ],
    stravaUrl: 'https://www.strava.com/activities/18490047395',
    title: { en: 'Sub-3 at Olomouc: 2:57:24', cs: 'Sub-3 v Olomouci: 2:57:24', es: 'Sub-3 en Olomouc: 2:57:24' },
    excerpt: {
      en: 'Finally under three hours — 2:57:24, second place out of 13 at Memoriál Jiřího Hronka.',
      cs: 'Konečně pod tři hodiny — 2:57:24, druhé místo z 13 na Memoriálu Jiřího Hronka.',
      es: 'Por fin bajo las tres horas: 2:57:24, segundo lugar de 13 en el Memoriál Jiřího Hronka.'
    },
    body: {
      en: `<p>Sub-3 was the number I had circled all season. I ran 3:32 in Prague, then 3:25 in Olomouc — the direction was right but the barrier held. This race, Memoriál Jiřího Hronka, is a smaller marathon in Olomouc: tight field, competitive runners, flat loop course. The kind of race where you can't hide in a crowd and pace yourself honestly.</p>
<p>The plan was simple: <strong>4:10/km through 30k, then decide</strong>. I hit 10k in 41:40 and the half in 1:27:45 — exactly on pace, feeling controlled rather than comfortable. At 30k I checked in with myself. The legs were still there. I pushed to 4:05/km for the final stretch.</p>
<p>Crossed the line in <strong>2:57:24</strong>. Second place out of 13 finishers. The win went to someone considerably faster and I was happy to let him have it — I had my own race to run.</p>
<p>A 7-minute PB. The three-hour barrier gone. The next target is sub-2:55, but I'll give it a proper block of training first. Racing the Zlín half two weeks later was already on the calendar and I wasn't going to skip it.</p>`,
      cs: `<p>Sub-3 bylo číslo, které jsem měl v kalendáři zakroužkované celou sezónu. V Praze jsem běžel 3:32, pak 3:25 v Olomouci — směr byl správný, ale bariéra držela. Tento závod, Memoriál Jiřího Hronka, je menší maraton v Olomouci: úzké startovní pole, soutěživí běžci, rovinatá okruhová trať. Typ závodu, kde se nemůžete schovat v davu a musíte si tempo držet poctivě.</p>
<p>Plán byl jednoduchý: <strong>4:10/km do 30. km, pak se uvidí</strong>. Na desítce jsem byl za 41:40 a půlmaraton za 1:27:45 — přesně podle plánu, s pocitem kontroly spíše než komfortu. Na 30. kilometru jsem zhodnotil stav. Nohy pořád fungovaly. Do závěrečného úseku jsem to zrychlil na 4:05/km.</p>
<p>Cílem jsem proběhl za <strong>2:57:24</strong>. Druhé místo z 13 dokončivších. Vítězství si odnesl někdo podstatně rychlejší a já mu ho rád přenechal — běžel jsem si vlastní závod.</p>
<p>Osobák o 7 minut. Tříhodinová bariéra je pryč. Další cíl je pod 2:55, ale nejdřív tomu dám pořádný tréninkový blok. Zlínský půlmaraton o dva týdny později už byl v kalendáři a nehodlal jsem ho vynechat.</p>`,
      es: `<p>Bajar de las 3 horas era el número que tenía marcado toda la temporada. Corrí en 3:32 en Praga, luego 3:25 en Olomouc — la dirección era correcta, pero la barrera resistía. Esta carrera, el Memoriál Jiřího Hronka, es un maratón más pequeño en Olomouc: pocos participantes, corredores competitivos, circuito llano. El tipo de carrera donde no puedes esconderte en la multitud y debes llevar tu propio ritmo con honestidad.</p>
<p>El plan era simple: <strong>4:10/km hasta el km 30, y luego decidir</strong>. Pasé los 10k en 41:40 y el medio maratón en 1:27:45 — exactamente en el ritmo, sintiendo control más que comodidad. En el km 30 evalué cómo me sentía. Las piernas seguían respondiendo. Aceleré a 4:05/km para el tramo final.</p>
<p>Crucé la meta en <strong>2:57:24</strong>. Segundo puesto de 13 finalistas. La victoria fue para alguien bastante más rápido y estuve encantado de dejársela: yo estaba corriendo mi propia carrera.</p>
<p>Récord personal por 7 minutos. La barrera de las tres horas superada. El siguiente objetivo es bajar de 2:55, pero antes haré un buen bloque de entrenamiento. El medio maratón de Zlín dos semanas después ya estaba en el calendario y no pensaba perdérmelo.</p>`
    }
  },
  {
    id: 'zlin-half-pb',
    date: '2026-05-31',
    category: 'Running',
    coverPhoto: '../images/events/zlinHalf2026/_MTK_0077.JPG',
    photos: [
      '../images/events/zlinHalf2026/_MTK_0077.JPG',
      '../images/events/zlinHalf2026/_MTK_2364.JPG',
      '../images/events/zlinHalf2026/LIL_7023.JPG'
    ],
    stravaUrl: 'https://www.strava.com/activities/18728683802',
    title: { en: '1:21:39 in Zlín — Half Marathon PB', cs: '1:21:39 ve Zlíně — osobák na půlmaratonu', es: '1:21:39 en Zlín — récord personal en medio maratón' },
    excerpt: {
      en: 'Two weeks after the sub-3 marathon, I ran a new half marathon PB in Zlín: 1:21:39, 10th overall, 5th in category.',
      cs: 'Dva týdny po sub-3 maratonu jsem zaběhl nový osobák na půlmaratonu ve Zlíně: 1:21:39, 10. celkově, 5. v kategorii.',
      es: 'Dos semanas después del maratón sub-3, corrí un nuevo récord personal de medio maratón en Zlín: 1:21:39, 10.º general, 5.º en categoría.'
    },
    body: {
      en: `<p>The Festivalový půlmaraton Zlín was two weeks after Olomouc. Not ideal recovery time, but the race was on the calendar and I like keeping the legs moving after a marathon block rather than going completely flat.</p>
<p>I went in without a specific time goal — the legs were still carrying marathon fatigue and I wanted to run by feel. The course winds through Zlín's city centre, mostly flat with a few sharp turns that break rhythm. I settled into <strong>3:55/km for the first 10k</strong>, holding back slightly because it felt easier than it should.</p>
<p>At 15k something clicked. The pace dropped without it costing more effort — the kind of thing that happens when a training block compounds correctly. I closed the final 5k averaging 3:48/km. Crossed in <strong>1:21:39</strong>.</p>
<p>10th overall. 5th in age category. And a new half marathon PB by almost four minutes — my previous best was a half split inside a marathon, not a standalone race. Having the distance done clean, on its own, feels different.</p>
<p>There is a sub-1:20 in me when I'm fresh and focused for it specifically. That's a target for autumn.</p>`,
      cs: `<p>Festivalový půlmaraton Zlín se běžel dva týdny po Olomouci. Ne zrovna ideální doba na regeneraci, ale závod byl v kalendáři a po maratonském bloku rád udržuji nohy v pohybu, než abych úplně vypnul.</p>
<p>Šel jsem do toho bez konkrétního časového cíle — v nohách byla stále maratonská únava a chtěl jsem běžet podle pocitu. Trať se kroutí centrem Zlína, převážně po rovině s několika ostrými zatáčkami, které narušují rytmus. Prvních 10 km jsem se usadil na tempu <strong>3:55/km</strong> a trochu se krotil, protože to připadalo snazší, než by mělo.</p>
<p>Na 15. kilometru do sebe něco zapadlo. Tempo kleslo, aniž by to stálo víc úsilí — taková ta věc, co se stane, když se tréninkový blok správně zúročí. Posledních 5 km jsem uzavřel s průměrem 3:48/km. Cíl za <strong>1:21:39</strong>.</p>
<p>10. místo celkově. 5. místo ve věkové kategorii. A nový osobák na půlmaratonu o téměř čtyři minuty — můj předchozí nejlepší čas byl mezičas v maratonu, ne samostatný závod. Zaběhnout tu vzdálenost čistě, sama o sobě, je úplně jiný pocit.</p>
<p>Je ve mně čas pod 1:20, až na to budu odpočatý a cíleně se na to zaměřím. To je cíl na podzim.</p>`,
      es: `<p>El Medio Maratón del Festival de Zlín fue dos semanas después de Olomouc. No era el tiempo de recuperación ideal, pero la carrera estaba en el calendario y me gusta mantener las piernas en movimiento tras un bloque de maratón en lugar de parar por completo.</p>
<p>Fui sin un objetivo de tiempo específico: las piernas aún arrastraban la fatiga del maratón y quería correr por sensaciones. El recorrido serpentea por el centro de Zlín, mayormente llano con algunos giros bruscos que rompen el ritmo. Me instalé en <strong>3:55/km durante los primeros 10k</strong>, conteniéndome ligeramente porque parecía más fácil de lo que debería.</p>
<p>En el km 15 algo hizo clic. El ritmo bajó sin requerir más esfuerzo: el tipo de cosa que ocurre cuando un bloque de entrenamiento se asimila correctamente. Cerré los últimos 5k promediando 3:48/km. Crucé en <strong>1:21:39</strong>.</p>
<p>10.º en la general. 5.º en categoría de edad. Y un nuevo récord personal de medio maratón por casi cuatro minutos: mi anterior mejor marca era un parcial dentro de un maratón, no una carrera independiente. Completar la distancia limpia, por sí sola, se siente diferente.</p>
<p>Tengo un sub-1:20 en mis piernas cuando esté fresco y enfocado específicamente para ello. Ese es el objetivo para otoño.</p>`
    }
  }
];

function escapeHtml(str) {
  if (!str && str !== 0) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

// ── Rendering ───────────────────────────────────────────────────────────────
function getLang() {
  return localStorage.getItem('lang') || 'en';
}

function renderPosts() {
  const lang = getLang();
  const latestContainer = document.getElementById('latest-posts');
  const allList = document.getElementById('all-posts');
  if (!latestContainer || !allList) return;

  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));

  latestContainer.innerHTML = sorted.slice(0, 2).map(p => cardHTML(p, lang)).join('');
  allList.innerHTML = sorted.map(p => `
    <li>
      <a href="#" data-post="${escapeHtml(p.id)}">${escapeHtml(p.title[lang] || p.title.en)}</a>
      <span class="post-date">${escapeHtml(p.date)}</span>
    </li>`).join('');
}

function isHomePage() {
  return !!document.getElementById('home-latest-posts') && !document.getElementById('latest-posts');
}

const CATEGORY_MAP = {
  'Life': { en: 'Life', cs: 'Život', es: 'Vida' },
  'Academic': { en: 'Academic', cs: 'Akademické', es: 'Académico' },
  'Running': { en: 'Running', cs: 'Běh', es: 'Carrera' },
  'Tech': { en: 'Tech', cs: 'Technologie', es: 'Tecnología' },
  'Career': { en: 'Career', cs: 'Kariéra', es: 'Carrera' },
  'Cycling': { en: 'Cycling', cs: 'Cyklistika', es: 'Ciclismo' }
};

function cardHTML(post, lang) {
  const safeId = escapeHtml(post.id);
  const action = isHomePage()
    ? `href="blog.html#${safeId}" class="read-more read-more-link"`
    : `data-read="${safeId}" class="read-more"`;
  const tag = isHomePage() ? 'a' : 'button';
  const readMoreText = { en: 'Read more', cs: 'Číst dál', es: 'Leer más' };
  const catText = CATEGORY_MAP[post.category] ? (CATEGORY_MAP[post.category][lang] || CATEGORY_MAP[post.category].en) : post.category;
  return `<article class="post-card" data-read="${safeId}">
    <div class="post-card-body">
      <div class="post-meta">${escapeHtml(post.date)} &nbsp;·&nbsp; ${escapeHtml(catText)}</div>
      <h3 class="post-title">${escapeHtml(post.title[lang] || post.title.en)}</h3>
      <p class="post-excerpt">${escapeHtml(post.excerpt[lang] || post.excerpt.en)}</p>
      <${tag} ${action}>${escapeHtml(readMoreText[lang] || readMoreText.en)}</${tag}>
    </div>
  </article>`;
}

// ── Post modal ───────────────────────────────────────────────────────────────
function openPost(id) {
  const backdrop = document.getElementById('post-modal-backdrop');
  if (!backdrop) { window.location.href = `blog.html#${id}`; return; }

  const lang = getLang();
  const post = BLOG_POSTS.find(p => p.id === id);
  if (!post) return;

  const photosHtml = post.photos && post.photos.length > 0
    ? `<div class="post-modal-photos">${post.photos.map(src =>
        `<img class="post-modal-photo" src="${escapeHtml(src)}" alt="${escapeHtml(post.title[lang] || post.title.en)}" loading="lazy" onerror="this.style.display='none'">`
      ).join('')}</div>`
    : '';

  const stravaHtml = post.stravaUrl
    ? `<a class="post-modal-strava-btn" href="${escapeHtml(post.stravaUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml({ en: 'View on Strava →', cs: 'Zobrazit na Stravě →', es: 'Ver en Strava →' }[lang] || 'View on Strava →')}</a>`
    : '';

  const catText = CATEGORY_MAP[post.category] ? (CATEGORY_MAP[post.category][lang] || CATEGORY_MAP[post.category].en) : post.category;
  document.getElementById('post-modal-title').textContent = post.title[lang] || post.title.en;
  document.getElementById('post-modal-meta').textContent = `${post.date} · ${catText}`;
  document.getElementById('post-modal-body').innerHTML = photosHtml + (post.body[lang] || post.body.en) + stravaHtml;

  backdrop.classList.add('open');
  document.body.classList.add('modal-open');

  // Keep URL hash in sync so open modal is linkable
  if (window.location.hash !== `#${id}`) {
    history.replaceState(null, '', `#${id}`);
  }

  // Remember what opened the dialog so focus can return there instead of <body>.
  lastFocusedBeforePost = document.activeElement;

  const dialog = backdrop.querySelector('.post-modal');
  const closeBtn = document.getElementById('post-modal-close');
  // Focus the close button, not the dialog box: the box sets outline:none, so
  // focusing it leaves a sighted keyboard user with no indication of where they are.
  (closeBtn || dialog).focus();
  dialog.addEventListener('keydown', trapPostTab);
}

let lastFocusedBeforePost = null;

// aria-modal does not stop Tab walking out of the dialog onto controls hidden
// behind the backdrop, so cycle focus within the dialog by hand.
function trapPostTab(e) {
  if (e.key !== 'Tab') return;
  const focusables = e.currentTarget.querySelectorAll(
    'a[href], button:not([disabled]), input:not([disabled]), select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  if (!focusables.length) return;
  const first = focusables[0];
  const last = focusables[focusables.length - 1];
  if (e.shiftKey && document.activeElement === first) {
    e.preventDefault();
    last.focus();
  } else if (!e.shiftKey && document.activeElement === last) {
    e.preventDefault();
    first.focus();
  }
}

function closePost() {
  const backdrop = document.getElementById('post-modal-backdrop');
  backdrop.classList.remove('open');
  document.body.classList.remove('modal-open');

  const dialog = backdrop.querySelector('.post-modal');
  if (dialog) dialog.removeEventListener('keydown', trapPostTab);

  if (lastFocusedBeforePost && document.contains(lastFocusedBeforePost)) {
    lastFocusedBeforePost.focus();
  }
  lastFocusedBeforePost = null;

  // Clean URL hash without triggering scroll or extra history entry
  if (window.location.hash) {
    history.replaceState(null, '', window.location.pathname + window.location.search);
  }
}

// ── Home page latest ─────────────────────────────────────────────────────────
function renderHomeLatest() {
  const container = document.getElementById('home-latest-posts');
  if (!container) return;
  const lang = getLang();
  const sorted = [...BLOG_POSTS].sort((a, b) => b.date.localeCompare(a.date));
  container.innerHTML = sorted.slice(0, 2).map(p => cardHTML(p, lang)).join('');
}

// ── Init ─────────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderPosts();
  renderHomeLatest();

  document.addEventListener('click', e => {
    // If clicked with non-primary button (e.g. middle click) or modifier keys (ctrl/cmd/shift/alt),
    // let the browser handle native behavior (open in new tab/window)
    if (e.button !== 0 || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;

    // On home page, clicking the "read-more-link" anchor navigates naturally to blog.html#id
    if (e.target.closest('.read-more-link')) return;

    // Prevent double-firing when button inside card is clicked
    const readBtn = e.target.closest('[data-read]');
    if (readBtn) { e.preventDefault(); openPost(readBtn.dataset.read); return; }

    const postLink = e.target.closest('[data-post]');
    if (postLink) { e.preventDefault(); openPost(postLink.dataset.post); return; }
  });

  // Auto-open post when navigated from home page via blog.html#post-id
  if (window.location.hash) {
    const id = window.location.hash.slice(1);
    if (BLOG_POSTS.find(p => p.id === id)) openPost(id);
  }

  // Modal close listeners
  const closeBtn = document.getElementById('post-modal-close');
  if (closeBtn) {
    closeBtn.addEventListener('click', closePost);
  }

  const backdrop = document.getElementById('post-modal-backdrop');
  if (backdrop) {
    backdrop.addEventListener('click', e => {
      if (e.target === e.currentTarget) closePost();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && document.body.classList.contains('modal-open')) {
      closePost();
    }
  });
});

// Re-render on language change
const _origApply = window.applyLanguageAfterNavbar;
window.applyLanguageAfterNavbar = function () {
  if (_origApply) _origApply();
  renderPosts();
  renderHomeLatest();
};

document.addEventListener('languageChanged', () => {
  renderPosts();
  renderHomeLatest();
});
