/**
 * My Projects — data + rendering.
 * Static headings live in main.js `translations`; everything card-level lives here
 * as { en, cs, es } and re-renders on `languageChanged`.
 */

const PROJECTS = [
  {
    id: 'naruzu',
    group: 'featured',
    year: '2026',
    status: 'in-progress',
    kind: { en: 'Indoor cycling app', cs: 'Aplikace pro indoor cycling', es: 'App de ciclismo indoor' },
    details: {
      en: 'NARUZU is still in active development: the core ride loop, Bluetooth, GPX riding, structured workouts and the customisable HUD work today, and the iPhone version comes later. It is a private project, so there is no public repository; the screenshots show the current state of the Windows build.',
      cs: 'NARUZU je stále v aktivním vývoji: základní jízda, Bluetooth, jízda po GPX, strukturované tréninky a nastavitelné HUD už fungují, verze pro iPhone přijde později. Je to soukromý projekt, takže veřejný repozitář neexistuje; snímky ukazují aktuální stav verze pro Windows.',
      es: 'NARUZU sigue en desarrollo activo: el bucle de salida, Bluetooth, rodaje con GPX, entrenamientos estructurados y el HUD personalizable ya funcionan; la versión para iPhone llegará más adelante. Es un proyecto privado, así que no hay repositorio público; las capturas muestran el estado actual de la versión de Windows.'
    },
    title: 'NARUZU',
    subtitle: {
      en: 'A home-trainer cycling app, in the spirit of Zwift',
      cs: 'Aplikace pro domácí trenažér ve stylu Zwiftu',
      es: 'Una app para rodillo de casa, al estilo Zwift'
    },
    summary: {
      en: 'My own indoor-cycling app for Windows, the browser and later iPhone. Connect a smart trainer and a heart-rate strap, then ride famous climbs or your own GPX routes through a stylised 3D world — with nearby riders, structured workouts, a live HUD and a customisable rider and bike. Every ride can be saved and exported.',
      cs: 'Moje vlastní aplikace pro indoor cycling na Windows, v prohlížeči a později na iPhonu. Připojíte chytrý trenažér a hrudní pás a pak jezdíte slavná stoupání nebo vlastní GPX trasy ve stylizovaném 3D světě — s jezdci kolem sebe, strukturovanými tréninky, živým HUD a přizpůsobitelným jezdcem i kolem. Každou jízdu lze uložit a exportovat.',
      es: 'Mi propia app de ciclismo indoor para Windows, el navegador y más adelante iPhone. Conecta un rodillo inteligente y una banda de pulso y recorre ascensos famosos o tus propias rutas GPX en un mundo 3D estilizado, con ciclistas cerca, entrenamientos estructurados, un HUD en vivo y un ciclista y una bici personalizables. Cada salida se puede guardar y exportar.'
    },
    highlights: {
      en: ['Smart trainer and heart-rate sensors, with live power, cadence and heart-rate zones', 'Famous climbs like Alpe d\'Huez, free ride on your own GPX routes and structured workouts', 'Customisable HUD, nearby riders, personal ghosts and local segments', 'XP, levels, challenges and a globe of the countries you have ridden'],
      cs: ['Chytrý trenažér a tepové senzory, živý výkon, kadence a tepové zóny', 'Slavná stoupání jako Alpe d\'Huez, volná jízda po vlastních GPX trasách a strukturované tréninky', 'Nastavitelné HUD, jezdci kolem, osobní ghosti a lokální segmenty', 'XP, levely, výzvy a glóbus projetých zemí'],
      es: ['Rodillo inteligente y sensores de pulso, con potencia, cadencia y zonas de pulso en vivo', 'Ascensos famosos como Alpe d\'Huez, rodaje libre con tus rutas GPX y entrenamientos estructurados', 'HUD personalizable, ciclistas cercanos, ghosts personales y segmentos locales', 'XP, niveles, retos y un globo de los países recorridos']
    },
    images: [
      // TODO(owner): a newer menu screenshot is coming; it replaces the progress shot below.
      { src: '../images/projects/naruzu-ride.jpg', alt: { en: 'NARUZU ride view: a road with live speed, power, cadence and heart-rate HUD, a minimap and ride controls', cs: 'Jízda v NARUZU: silnice s živým HUD (rychlost, výkon, kadence, tep), minimapou a ovládáním jízdy', es: 'Vista de salida en NARUZU: una carretera con HUD en vivo (velocidad, potencia, cadencia, pulso), minimapa y controles' } },
      { src: '../images/projects/naruzu-progress.jpg', alt: { en: 'NARUZU Progress screen: level, XP and recent rides next to the main menu', cs: 'Obrazovka Progress v NARUZU: level, XP a poslední jízdy vedle hlavního menu', es: 'Pantalla Progress de NARUZU: nivel, XP y salidas recientes junto al menú principal' } }
    ]
  },
  {
    id: 'finite-automatons',
    group: 'featured',
    year: '2026',
    status: 'done',
    repos: [{ url: 'https://github.com/mlcousek/FiniteAutomatons' }],
    kind: { en: 'Master thesis · SVOČ 2nd place', cs: 'Diplomová práce · SVOČ 2. místo', es: 'Trabajo de máster · 2.º puesto SVOČ' },
    title: 'Automata Simulator',
    subtitle: {
      en: 'Interactive finite automata simulator',
      cs: 'Interaktivní simulátor konečných automatů',
      es: 'Simulador interactivo de autómatas finitos'
    },
    summary: {
      en: 'A web application for creating, visualising, running and sharing automata — DFA, NFA, ε-NFA and pushdown automata. Built as a teaching tool: draw an automaton on a canvas, feed it input and step through the computation state by state. The thesis placed second in the SVOČ student competition.',
      cs: 'Webová aplikace pro tvorbu, vizualizaci, spouštění a sdílení automatů — DFA, NFA, ε-NFA i zásobníkových automatů. Vznikla jako výukový nástroj: automat nakreslíte na plátno, zadáte vstup a projdete výpočet krok za krokem. Práce získala 2. místo v soutěži SVOČ.',
      es: 'Una aplicación web para crear, visualizar, ejecutar y compartir autómatas: AFD, AFN, AFN-ε y autómatas de pila. Pensada como herramienta docente: dibujas el autómata en un lienzo, le das una entrada y recorres el cálculo estado a estado. El trabajo logró el segundo puesto en el concurso SVOČ.'
    },
    highlights: {
      en: ['Drag-and-drop canvas editor with live validation', 'Step-by-step and full execution of any input', 'Conversions between automaton types, minimisation and regex → automaton', 'Saved and shared workspaces for teams and classes'],
      cs: ['Editor na plátně s drag & drop a průběžnou validací', 'Krokové i celkové spuštění libovolného vstupu', 'Převody mezi typy automatů, minimalizace a regex → automat', 'Uložené a sdílené pracovní prostory pro týmy a třídy'],
      es: ['Editor en lienzo con arrastrar y soltar y validación en vivo', 'Ejecución paso a paso y completa de cualquier entrada', 'Conversiones entre tipos de autómata, minimización y regex → autómata', 'Espacios guardados y compartidos para equipos y clases']
    },
    images: [
      { src: '../images/projects/automata-simulator-home.png', alt: { en: 'Automata Simulator: a DFA on the graph canvas with states, transitions and simulation controls', cs: 'Automata Simulator: DFA na plátně se stavy, přechody a ovládáním simulace', es: 'Automata Simulator: un AFD en el lienzo con estados, transiciones y controles de simulación' } },
      { src: '../images/projects/automata-simulator-edit.png', alt: { en: 'Editing an automaton: adding a transition between states on the canvas', cs: 'Úprava automatu: přidání přechodu mezi stavy na plátně', es: 'Edición de un autómata: añadir una transición entre estados en el lienzo' } }
    ]
  },
  {
    id: 'garmin-food',
    group: 'more',
    year: '2026',
    status: 'in-use',
    kind: { en: 'iOS app · version 2.0', cs: 'iOS aplikace · verze 2.0', es: 'App iOS · versión 2.0' },
    title: 'Jirka\'s Arc',
    subtitle: {
      en: 'Food and training tracking with Garmin Connect as the source of truth',
      cs: 'Sledování jídla a tréninku s Garmin Connect jako zdrojem pravdy',
      es: 'Registro de comida y entrenamiento con Garmin Connect como fuente de verdad'
    },
    summary: {
      en: 'A personal iOS app for fast food logging, streaks, levels and challenges — and, through a connection to my Obsidian vault, a training hub with a plan, morning check-ins and race prep. Food goes straight into Garmin Connect, so there is one place for everything. Formerly called GarminFood.',
      cs: 'Osobní iOS aplikace pro rychlé zapisování jídla, série, levely a výzvy — a přes propojení s mým Obsidian vaultem také tréninkové centrum s plánem, ranními check-iny a přípravou na závody. Jídlo jde rovnou do Garmin Connect, takže je vše na jednom místě. Dříve se jmenovala GarminFood.',
      es: 'Una app iOS personal para registrar comidas rápido, con rachas, niveles y retos — y, mediante una conexión con mi vault de Obsidian, un centro de entrenamiento con plan, chequeos matutinos y preparación de carreras. La comida va directa a Garmin Connect, así que todo queda en un solo lugar. Antes se llamaba GarminFood.'
    },
    highlights: {
      en: ['Works offline and syncs with Garmin when connected', 'Czech-aware food search with barcode scanning', 'Streak, 150 levels, challenges, bingo and drawn badges', 'Five alternate app icons'],
      cs: ['Funguje offline a po připojení se synchronizuje s Garminem', 'České vyhledávání potravin se skenováním čárových kódů', 'Série, 150 levelů, výzvy, bingo a nakreslené odznaky', 'Pět alternativních ikon aplikace'],
      es: ['Funciona sin conexión y se sincroniza con Garmin al conectarse', 'Búsqueda de alimentos adaptada al checo, con escáner de códigos de barras', 'Racha, 150 niveles, retos, bingo e insignias dibujadas', 'Cinco iconos alternativos de la app']
    },
    image: { src: '../images/projects/garminfood-icons.jpg', alt: { en: 'The five alternate app icons: Streak, Midnight, Mint, Macro and Pastel', cs: 'Pět alternativních ikon aplikace: Streak, Midnight, Mint, Macro a Pastel', es: 'Los cinco iconos alternativos de la app: Streak, Midnight, Mint, Macro y Pastel' } }
  },
  {
    id: 'closet',
    group: 'more',
    year: '2026',
    status: 'in-progress',
    kind: { en: 'iOS app', cs: 'iOS aplikace', es: 'App iOS' },
    title: 'Closet',
    subtitle: {
      en: 'A personal digital wardrobe',
      cs: 'Osobní digitální šatník',
      es: 'Un armario digital personal'
    },
    summary: {
      en: 'A wardrobe app for iPhone: photograph your clothes, build layered outfits, plan what to wear and see which pieces you actually wear. Everything stays on the phone; AI features are optional.',
      cs: 'Šatník pro iPhone: vyfotíte oblečení, poskládáte vrstvené outfity, naplánujete, co si vzít, a uvidíte, které kousky opravdu nosíte. Vše zůstává v telefonu; AI funkce jsou volitelné.',
      es: 'Un armario para iPhone: fotografía tu ropa, crea outfits por capas, planifica qué ponerte y comprueba qué prendas usas de verdad. Todo se queda en el móvil; las funciones de IA son opcionales.'
    },
    highlights: {
      en: ['Background removal and optional AI tagging', 'Layered outfit builder, lookbooks and an outfit calendar', 'Weather suggestions, cost per wear and trip packing', 'Backup and restore, English and Czech'],
      cs: ['Odstranění pozadí a volitelné AI tagování', 'Skládání vrstvených outfitů, lookbooky a kalendář outfitů', 'Návrhy podle počasí, cena za nošení a balení na cestu', 'Záloha a obnova, angličtina a čeština'],
      es: ['Eliminación de fondo y etiquetado con IA opcional', 'Creador de outfits por capas, lookbooks y calendario de outfits', 'Sugerencias según el clima, coste por uso y maleta de viaje', 'Copia de seguridad y restauración, inglés y checo']
    }
  },
  {
    id: 'claude-tray',
    group: 'more',
    year: '2026',
    status: 'in-use',
    repos: [
      { label: 'Claude Usage Tray', url: 'https://github.com/mlcousek/claude_trayapp' },
      { label: 'Codex Usage Tray', url: 'https://github.com/mlcousek/codex_trayapp' }
    ],
    kind: { en: 'Windows apps · used across our team', cs: 'Aplikace pro Windows · používá je celý náš tým', es: 'Apps de Windows · las usa todo nuestro equipo' },
    title: 'Claude & Codex Usage Tray',
    subtitle: {
      en: 'AI usage at a glance, right in the taskbar',
      cs: 'Využití AI na první pohled, přímo v liště',
      es: 'El uso de la IA de un vistazo, en la barra de tareas'
    },
    summary: {
      en: 'Minimalist Windows 11 system-tray apps that show how much of your AI quota is left. First I built Claude Usage Tray, then a Codex Usage Tray alongside it. The tray icon shows a live percentage ring; one click opens a dark flyout with every usage window, reset countdowns, burn rate, a projection of when the limit lands, history charts and token/cost analytics. Both are in daily use, through our whole team.',
      cs: 'Minimalistické aplikace do systémové lišty Windows 11, které ukazují, kolik z AI kvóty vám zbývá. Nejdřív jsem postavil Claude Usage Tray a vedle něj i Codex Usage Tray. Ikona ukazuje živý procentuální prstenec; po kliknutí se otevře tmavý panel se všemi limity, odpočtem resetu, tempem spotřeby, odhadem, kdy limit dojde, grafy historie a analýzou tokenů a nákladů. Obě aplikace denně používá celý náš tým.',
      es: 'Apps minimalistas para la bandeja del sistema de Windows 11 que muestran cuánta cuota de IA te queda. Primero hice Claude Usage Tray y después, a su lado, Codex Usage Tray. El icono muestra un anillo de porcentaje en vivo; con un clic se abre un panel oscuro con cada ventana de uso, cuentas atrás de reinicio, ritmo de consumo, una proyección de cuándo se alcanzará el límite, gráficos históricos y análisis de tokens y coste. Ambas se usan a diario en todo nuestro equipo.'
    },
    highlights: {
      en: ['Two apps, one idea: Claude Usage Tray and Codex Usage Tray', 'In daily use by the whole team', 'Tray icon legible at 16 px on light and dark taskbars', 'Optional threshold notifications, starts with Windows; runs on x64 and Arm64'],
      cs: ['Dvě aplikace, jedna myšlenka: Claude Usage Tray a Codex Usage Tray', 'Denně je používá celý tým', 'Ikona čitelná i v 16 px na světlé i tmavé liště', 'Volitelné notifikace při překročení prahu, spuštění s Windows; běží na x64 i Arm64'],
      es: ['Dos apps, una idea: Claude Usage Tray y Codex Usage Tray', 'Las usa a diario todo el equipo', 'Icono legible a 16 px en barras claras y oscuras', 'Notificaciones opcionales por umbral, inicio con Windows; funciona en x64 y Arm64']
    },
    image: { src: '../images/projects/claude-tray-flyout.jpg', alt: { en: 'Claude Usage Tray flyout showing a usage ring and limits', cs: 'Panel Claude Usage Tray s prstencem využití a limity', es: 'Panel de Claude Usage Tray con el anillo de uso y los límites' }, portrait: true }
  },
  {
    id: 'fitness-web-app',
    group: 'more',
    year: '2024',
    status: 'done',
    kind: { en: 'Bachelor thesis', cs: 'Bakalářská práce', es: 'Trabajo de grado' },
    title: 'FitnessWebApp',
    subtitle: {
      en: 'Application for creating training plans',
      cs: 'Aplikace pro vytváření tréninkových plánů',
      es: 'Aplicación para crear planes de entrenamiento'
    },
    summary: {
      en: 'A web app that lets athletes and gym-goers build a training plan tailored to their goal, experience and weekly frequency — then log every session and watch progress turn into charts. Started as my bachelor thesis and kept evolving after the defence.',
      cs: 'Webová aplikace, ve které si sportovci a návštěvníci posilovny sestaví tréninkový plán na míru svému cíli, zkušenostem a počtu tréninků týdně — a pak zapisují každý trénink a sledují, jak se pokrok mění v grafy. Vznikla jako bakalářská práce a vyvíjela se i po obhajobě.',
      es: 'Una aplicación web que permite a deportistas y aficionados al gimnasio crear un plan de entrenamiento adaptado a su objetivo, experiencia y frecuencia semanal, registrar cada sesión y ver su progreso convertido en gráficos. Nació como mi trabajo de grado y siguió evolucionando después de la defensa.'
    },
    highlights: {
      en: ['Plan generator by goal, level and training days', 'Calendar view of the whole plan', 'Workout logging, max lifts and body-weight tracking', 'Progress statistics with charts and PDF export'],
      cs: ['Generátor plánu podle cíle, úrovně a tréninkových dnů', 'Kalendářový přehled celého plánu', 'Zápis tréninků, maximálek a vývoje hmotnosti', 'Statistiky pokroku v grafech a export do PDF'],
      es: ['Generador de planes según objetivo, nivel y días de entrenamiento', 'Vista de calendario de todo el plan', 'Registro de entrenamientos, máximos y peso corporal', 'Estadísticas de progreso con gráficos y exportación a PDF']
    },
    image: { src: '../images/projects/fitnesswebapp-plan.jpg', alt: { en: 'FitnessWebApp training plan in a monthly calendar', cs: 'Tréninkový plán ve FitnessWebApp v měsíčním kalendáři', es: 'Plan de entrenamiento de FitnessWebApp en un calendario mensual' } }
  }
];

// An optional `image` on an entry (a path under ../images/projects/) replaces its
// emoji icon with a 16:9 screenshot.
const VAULT_PLUGINS = [
  {
    icon: '🌍',
    images: ['../images/projects/vault-heatmap-1.jpg', '../images/projects/vault-heatmap-2.jpg', '../images/projects/vault-heatmap-3.jpg'],
    title: { en: 'World Heatmap', cs: 'Heatmapa světa', es: 'Mapa de calor mundial' },
    text: {
      en: 'A filterable 3D globe heatmap of every GPS track I have ever recorded — 3 000+ activities, drawn by an additive WebGL renderer, filterable by sport and year, with seven colour ramps and nine basemaps. Runs on the phone too.',
      cs: 'Filtrovatelná 3D heatmapa na glóbu ze všech GPS stop, které jsem kdy nahrál — přes 3 000 aktivit, vykreslených aditivním WebGL rendererem, s filtry podle sportu a roku, sedmi barevnými škálami a devíti podkladovými mapami. Běží i v telefonu.',
      es: 'Un mapa de calor filtrable sobre un globo 3D con cada track GPS que he grabado: más de 3 000 actividades, dibujadas con un renderizador WebGL aditivo, filtrables por deporte y año, con siete escalas de color y nueve mapas base. Funciona también en el móvil.'
    }
  },
  {
    icon: '📈',
    image: '../images/projects/vault-activity.jpg',
    title: { en: 'Activity Detail', cs: 'Detail aktivity', es: 'Detalle de actividad' },
    text: {
      en: 'Every channel of a single workout in one view: a route coloured by pace or heart rate, synced charts, activity replay, automatic insights, computed personal bests and comparison against published benchmarks. Embedded in every activity note.',
      cs: 'Všechny kanály jednoho tréninku v jednom pohledu: trasa obarvená podle tempa nebo tepu, provázané grafy, přehrávání aktivity, automatické postřehy, spočítané osobní rekordy a srovnání s publikovanými benchmarky. Vložené v každé poznámce aktivity.',
      es: 'Todos los canales de un entrenamiento en una vista: ruta coloreada por ritmo o frecuencia cardiaca, gráficos sincronizados, reproducción de la actividad, observaciones automáticas, mejores marcas calculadas y comparación con referencias publicadas. Incrustado en cada nota de actividad.'
    }
  },
  {
    icon: '📊',
    image: '../images/projects/vault-dashboard.jpg',
    title: { en: 'Training Dashboard', cs: 'Tréninkový dashboard', es: 'Panel de entrenamiento' },
    text: {
      en: 'Volume, training load and consistency over time — weeks, months and years side by side, so trends that would slip by in a single workout become visible.',
      cs: 'Objem, tréninková zátěž a pravidelnost v čase — týdny, měsíce i roky vedle sebe, takže jsou vidět trendy, které by v jednotlivém tréninku zapadly.',
      es: 'Volumen, carga de entrenamiento y constancia a lo largo del tiempo: semanas, meses y años lado a lado, para ver tendencias que pasarían desapercibidas en un solo entrenamiento.'
    }
  },
  {
    icon: '🏔️',
    image: '../images/projects/vault-utmb.jpg',
    title: { en: 'UTMB Runner Index', cs: 'UTMB index běžců', es: 'Índice UTMB de corredores' },
    text: {
      en: 'Tracks UTMB and ITRA performance indexes for me and a roster of runners I follow, with race tables and index history. Deliberately not a leaderboard: the chart opens on my own trajectory and every comparison is opt-in.',
      cs: 'Sleduje UTMB a ITRA indexy výkonnosti — můj i běžců, které sleduji — s tabulkami závodů a historií indexu. Záměrně to není žebříček: graf se otevírá na mé vlastní křivce a každé srovnání je volitelné.',
      es: 'Sigue los índices de rendimiento UTMB e ITRA, los míos y los de un grupo de corredores que sigo, con tablas de carreras e historial del índice. A propósito no es una clasificación: el gráfico se abre con mi propia trayectoria y cada comparación es opcional.'
    }
  }
];

const VAULT_AUTOMATIONS = [
  {
    when: { en: 'Daily', cs: 'Denně', es: 'Diario' },
    text: {
      en: 'Strava + Garmin activity sync — new workouts become notes with FIT/GPX files, HR, power and training effect; aggregate stats and the weekly training diary are rebuilt.',
      cs: 'Synchronizace aktivit ze Stravy a Garminu — z nových tréninků vzniknou poznámky s FIT/GPX soubory, tepem, výkonem a tréninkovým efektem; přepočítají se souhrnné statistiky a týdenní tréninkový deník.',
      es: 'Sincronización de actividades de Strava + Garmin: cada entrenamiento nuevo se convierte en una nota con archivos FIT/GPX, pulso, potencia y efecto de entrenamiento; se recalculan las estadísticas y el diario semanal.'
    }
  },
  {
    when: { en: 'Daily', cs: 'Denně', es: 'Diario' },
    text: {
      en: 'Health & nutrition — sleep, HRV, stress and body battery land in daily notes; logged food is pulled from Garmin Connect.',
      cs: 'Zdraví a výživa — spánek, HRV, stres a body battery se zapisují do denních poznámek; zapsané jídlo se stahuje z Garmin Connect.',
      es: 'Salud y nutrición: sueño, VFC, estrés y body battery llegan a las notas diarias; la comida registrada se descarga de Garmin Connect.'
    }
  },
  {
    when: { en: 'Weekly', cs: 'Týdně', es: 'Semanal' },
    text: {
      en: 'Content sync — the books, podcasts and videos you see on this website flow into the vault, plus race results, UTMB indexes, Garmin badges and shoe-mileage milestones.',
      cs: 'Synchronizace obsahu — knihy, podcasty a videa z tohoto webu se propisují do vaultu, spolu s výsledky závodů, UTMB indexy, odznaky z Garminu a najetými kilometry bot.',
      es: 'Sincronización de contenido: los libros, pódcasts y vídeos de esta web llegan al vault, junto con resultados de carreras, índices UTMB, insignias de Garmin y el kilometraje de las zapatillas.'
    }
  },
  {
    when: { en: 'On demand', cs: 'Na vyžádání', es: 'Bajo demanda' },
    text: {
      en: 'AI agents — Claude Code skills write bilingual race reports from FIT data, build pre-race dossiers and import bank statements into a double-entry ledger.',
      cs: 'AI agenti — skilly pro Claude Code píšou dvojjazyčné reporty ze závodů z FIT dat, připravují dossier před závodem a importují bankovní výpisy do podvojného účetnictví.',
      es: 'Agentes de IA: skills de Claude Code escriben informes bilingües de carreras a partir de datos FIT, preparan dosieres previos a la carrera e importan extractos bancarios a una contabilidad de partida doble.'
    }
  },
  {
    when: { en: 'Every run', cs: 'Pokaždé', es: 'Siempre' },
    text: {
      en: 'Quality gate — every sync runs a check (script syntax, widget lint, 2 400+ plugin regression assertions, vault integrity) and only then commits and pushes.',
      cs: 'Kontrolní brána — každá synchronizace nejdřív spustí kontrolu (syntaxe skriptů, lint widgetů, přes 2 400 regresních asercí pluginu, integrita vaultu) a teprve pak commitne a pushne.',
      es: 'Control de calidad: cada sincronización ejecuta una comprobación (sintaxis de scripts, lint de widgets, más de 2 400 aserciones de regresión del plugin, integridad del vault) y solo entonces hace commit y push.'
    }
  }
];

const PROJECTS_UI = {
  en: {
    vaultPrivate: 'Private vault — it holds personal data',
    details: 'Details', close: 'Close', repo: 'View on GitHub', highlights: 'Highlights', screenshots: 'Screenshots',
    status: { 'in-progress': 'In development', 'in-use': 'In use', done: 'Finished' }
  },
  cs: {
    vaultPrivate: 'Soukromý vault — obsahuje osobní data',
    details: 'Podrobnosti', close: 'Zavřít', repo: 'Zobrazit na GitHubu', highlights: 'Hlavní body', screenshots: 'Snímky obrazovky',
    status: { 'in-progress': 'Ve vývoji', 'in-use': 'V používání', done: 'Dokončeno' }
  },
  es: {
    vaultPrivate: 'Vault privado: contiene datos personales',
    details: 'Detalles', close: 'Cerrar', repo: 'Ver en GitHub', highlights: 'Puntos clave', screenshots: 'Capturas',
    status: { 'in-progress': 'En desarrollo', 'in-use': 'En uso', done: 'Terminado' }
  }
};

const GITHUB_ICON = '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.6 7.6 0 014 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0016 8c0-4.42-3.58-8-8-8z"/></svg>';
const LOCK_ICON ='<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>';

function projectsLang() {
  const lang = localStorage.getItem('lang');
  return PROJECTS_UI[lang] ? lang : 'en';
}

function pick(field, lang) {
  return (field && (field[lang] || field.en)) || '';
}

function projectImages(project) {
  return project.images || (project.image ? [project.image] : []);
}

function statusPill(project, ui) {
  return project.status
    ? `<span class="project-status project-status--${project.status}">${ui.status[project.status]}</span>`
    : '';
}

function renderProjectCard(project, lang) {
  const ui = PROJECTS_UI[lang];
  let media = '';
  if (project.images) {
    // the card preview shows at most two shots; the full set opens in the modal
    media = `<div class="project-card__gallery">${project.images.slice(0, 2).map(img =>
      `<figure class="project-card__media"><img src="${img.src}" alt="${pick(img.alt, lang)}" loading="lazy" decoding="async"></figure>`
    ).join('')}</div>`;
  } else if (project.image) {
    media = `<figure class="project-card__media${project.image.portrait ? ' project-card__media--portrait' : ''}">
         <img src="${project.image.src}" alt="${pick(project.image.alt, lang)}" loading="lazy" decoding="async">
       </figure>`;
  }
  const highlights = (project.highlights[lang] || project.highlights.en)
    .map(h => `<li>${h}</li>`).join('');

  return `
    <article class="project-card${project.group === 'featured' ? ' project-card--featured' : ''}${project.image || project.images ? ' project-card--has-media' : ''}" id="project-${project.id}">
      ${media}
      <div class="project-card__body">
        <div class="project-card__top">
          <span class="project-kind">${pick(project.kind, lang)}</span>
          <span class="project-year">${project.year}</span>
        </div>
        <h3 class="project-card__title">${project.title}</h3>
        <p class="project-card__subtitle">${pick(project.subtitle, lang)}</p>
        <p class="project-card__summary">${pick(project.summary, lang)}</p>
        <ul class="project-card__highlights">${highlights}</ul>
        <div class="project-card__foot">
          ${statusPill(project, ui)}
          <button type="button" class="project-card__open" data-project="${project.id}">${ui.details} <span aria-hidden="true">→</span><span class="visually-hidden"> — ${project.title}</span></button>
        </div>
      </div>
    </article>`;
}

// ── Detail modal: one native <dialog>, filled on open (focus trap + Esc come for free) ──
let projectDialog = null;
let projectOpener = null;

function ensureProjectDialog() {
  if (projectDialog) return projectDialog;
  projectDialog = document.createElement('dialog');
  projectDialog.className = 'project-modal';
  projectDialog.addEventListener('click', e => { if (e.target === projectDialog) projectDialog.close(); });
  projectDialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    if (projectOpener) projectOpener.focus();
  });
  document.body.appendChild(projectDialog);
  return projectDialog;
}

function openProject(id) {
  const project = PROJECTS.find(p => p.id === id);
  if (!project) return;
  const lang = projectsLang();
  const ui = PROJECTS_UI[lang];
  const dialog = ensureProjectDialog();
  const shots = projectImages(project);
  const details = pick(project.details, lang);
  const highlights = (project.highlights[lang] || project.highlights.en).map(h => `<li>${h}</li>`).join('');

  dialog.setAttribute('aria-labelledby', 'project-modal-title');
  dialog.innerHTML = `
    <div class="project-modal__panel">
      <button type="button" class="project-modal__close" aria-label="${ui.close}">×</button>
      <div class="project-modal__head">
        ${statusPill(project, ui)}
        <span class="project-kind">${pick(project.kind, lang)}</span>
        <span class="project-year">${project.year}</span>
      </div>
      <h2 class="project-modal__title" id="project-modal-title">${project.title}</h2>
      <p class="project-card__subtitle">${pick(project.subtitle, lang)}</p>
      <p class="project-modal__text">${pick(project.summary, lang)}</p>
      ${details ? `<p class="project-modal__text">${details}</p>` : ''}
      <h3 class="project-modal__sub">${ui.highlights}</h3>
      <ul class="project-card__highlights">${highlights}</ul>
      ${shots.length ? `<h3 class="project-modal__sub">${ui.screenshots}</h3>
        <div class="project-modal__shots">${shots.map(s =>
          `<figure><img src="${s.src}" alt="${pick(s.alt, lang)}" loading="lazy" decoding="async"></figure>`).join('')}</div>` : ''}
      ${project.repos ? `<div class="project-modal__repos">${project.repos.map(r =>
        `<a class="project-modal__repo" href="${r.url}" target="_blank" rel="noopener noreferrer">${GITHUB_ICON}${r.label || ui.repo} ↗</a>`).join('')}</div>` : ''}
    </div>`;
  dialog.querySelector('.project-modal__close').addEventListener('click', () => dialog.close());
  document.body.classList.add('modal-open');
  dialog.showModal();
}

document.addEventListener('click', e => {
  const btn = e.target.closest('.project-card__open');
  if (!btn) return;
  projectOpener = btn;
  openProject(btn.dataset.project);
});

function renderProjects() {
  const lang = projectsLang();
  const ui = PROJECTS_UI[lang];

  const featured = document.getElementById('featured-grid');
  const more = document.getElementById('more-grid');
  const plugins = document.getElementById('vault-plugins');
  const automations = document.getElementById('vault-automations');
  const vaultBadge = document.getElementById('vault-private');

  if (featured) {
    featured.innerHTML = PROJECTS.filter(p => p.group === 'featured')
      .map(p => renderProjectCard(p, lang)).join('');
  }
  if (more) {
    more.innerHTML = PROJECTS.filter(p => p.group === 'more')
      .map(p => renderProjectCard(p, lang)).join('');
  }
  if (plugins) {
    plugins.innerHTML = VAULT_PLUGINS.map(p => {
      const shots = p.images || (p.image ? [p.image] : []);
      const media = shots.length
        ? `<div class="plugin-card__shots plugin-card__shots--${Math.min(shots.length, 3)}">${shots.map(src =>
            `<figure class="plugin-card__media"><img src="${src}" alt="${pick(p.title, lang)}" loading="lazy" decoding="async"></figure>`).join('')}</div>`
        : `<span class="plugin-card__icon" aria-hidden="true">${p.icon}</span>`;
      return `
      <article class="plugin-card${shots.length ? ' plugin-card--has-media' : ''}">
        ${media}
        <h4 class="plugin-card__title">${pick(p.title, lang)}</h4>
        <p class="plugin-card__text">${pick(p.text, lang)}</p>
      </article>`;
    }).join('');
  }
  if (automations) {
    automations.innerHTML = VAULT_AUTOMATIONS.map(a => `
      <li class="automation-item">
        <span class="automation-when">${pick(a.when, lang)}</span>
        <p>${pick(a.text, lang)}</p>
      </li>`).join('');
  }
  if (vaultBadge) {
    vaultBadge.innerHTML = `${LOCK_ICON}${ui.vaultPrivate}`;
  }
}

document.addEventListener('DOMContentLoaded', renderProjects);
document.addEventListener('languageChanged', renderProjects);
