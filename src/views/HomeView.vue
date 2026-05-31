<script setup>
const profilePicUrl = `${import.meta.env.BASE_URL}assets/profilePic.jpg`

const logbookRows = [
  {
    week: 14,
    period: '12/01 - 16/01',
    content: ['Introductie Corda', 'Feedback evaluatie C# WPF', 'Inhaalmoment'],
    note: 'Feedback verwerkt, laatste verbeteringen gedaan en portfolio opgekuist.',
    evaluations: ['Inhaalmoment'],
    assignments: ['Geen nieuwe opdracht'],
  },
  {
    week: 13,
    period: '05/01 - 09/01',
    content: ['Infosessie Thalento'],
    note: 'Portfoliosite opgebouwd en inhoudsstructuur ingevuld met voorbeelden.',
    evaluations: ['C# WPF'],
    assignments: ['Portfolio'],
  },
  {
    week: 12,
    period: '15/12 - 19/12',
    content: ['POP kernkwadranten', 'Afwerken curriculum vitae', 'Afwerken labo WPF'],
    note: 'CV afgerond, WPF-labo gefinaliseerd en kernkwadrant gekozen en gemotiveerd.',
    evaluations: ['Curriculum Vitae'],
    assignments: ['Curriculum Vitae'],
  },
  {
    week: 11,
    period: '08/12 - 12/12',
    content: ['Labo: WPF', 'Gastsprekers', "SDG's"],
    note: "WPF UI opgebouwd en events getest. SDG's gekoppeld aan IT en duurzame keuzes.",
    evaluations: ["SDG's"],
    assignments: ['Korte opdracht/presentatie'],
  },
  {
    week: 10,
    period: '01/12 - 05/12',
    content: ['Documenteren en debuggen in C#', 'Labo: debuggen (C#)', 'Feedback evaluatie debuggen'],
    note: 'Breakpoints gebruikt, fouten gereproduceerd en stap voor stap opgelost.',
    evaluations: ['Debuggen'],
    assignments: ['Feedback debuggen'],
  },
  {
    week: 9,
    period: '24/11 - 28/11',
    content: ['Instroombevraging', 'Feedback evaluatie', 'HTML & CSS'],
    note: 'CSS-lay-out met grid en flex, en responsief gedrag getest op mobiel, tablet en desktop.',
    evaluations: ['HTML & CSS'],
    assignments: ['Geen nieuwe opdracht'],
  },
  {
    week: 8,
    period: '17/11 - 21/11',
    content: ['POP personal branding', 'Introductie curriculum vitae', 'Introductie portfolio', 'Feedback evaluatie C# Console'],
    note: 'Start van de CV- en portfoliostructuur, plus feedback uit C# verwerkt rond leesbaarheid en naamgeving.',
    evaluations: ['Geen evaluatie'],
    assignments: ['Feedback C# Console'],
  },
  {
    week: 7,
    period: '10/11 - 14/11',
    content: ['POP carrièrekompas', 'Feedback evaluatie', 'C# Console'],
    note: 'Console-app gemaakt met inputvalidatie, loops en methodes. Carrièrekompas ingevuld.',
    evaluations: ['C# Console'],
    assignments: ['Carrièrekompas'],
  },
  {
    week: 6,
    period: '03/11 - 07/11',
    content: ['POP leren analyseren'],
    note: 'Geoefend met requirements, doelen afbakenen en prioriteiten bepalen.',
    evaluations: ['Geen evaluatie'],
    assignments: ['Geen nieuwe opdracht'],
  },
  {
    week: 5,
    period: '20/10 - 24/10',
    content: ['Gastsprekers', 'EPOS reflectie van oriënteringstraject'],
    note: 'Inzichten uit gastsprekers genoteerd en EPOS-reflectie samengevat.',
    evaluations: ['Gastsprekers'],
    assignments: ['Planning'],
  },
  {
    week: 4,
    period: '13/10 - 17/10',
    content: ['POP planning & studieaanpak', 'Git & GitHub', 'Reflecteren'],
    note: 'Weekplanning gemaakt, Git-werkwijze herhaald met pull en merge, en een reflectie geschreven.',
    evaluations: ['Git & GitHub'],
    assignments: ['Reflecteren'],
  },
  {
    week: 3,
    period: '06/10 - 10/10',
    content: ['POP motivatie, kernkwadranten en reflecteren', 'Labo: Git & GitHub', 'Scratch'],
    note: 'Scratch mini-game gestart en Git geoefend met branches.',
    evaluations: ['Geen evaluatie'],
    assignments: ['Scratch'],
  },
  {
    week: 2,
    period: '29/09 - 03/10',
    content: ['Oriënteringstraject', 'Installatie Git & GitHub', 'Introductie Git & GitHub', 'LockDownBrowser'],
    note: 'Git geïnstalleerd, eerste commits en push uitgevoerd en LockDownBrowser getest.',
    evaluations: ['LockDownBrowser'],
    assignments: ['Korte Git-oefening met add, commit en push'],
  },
  {
    week: 1,
    period: '22/09 - 26/09',
    content: ['Introductie werkplekleren', 'Wat is programmeren', "Introductie POP, X-Factor & SDG's", 'Introductie Scratch'],
    note: 'Repo aangemaakt, doelen genoteerd en eerste Scratch-oefeningen getest.',
    evaluations: ['Geen evaluatie'],
    assignments: ['Kleine oefening basislogica'],
  },
]

const competencies = [
  ['Analyseren', 'Ik kan een opdracht opdelen in kleinere stappen en nadenken over wat eerst nodig is.', 'Scratch, C# Console en webopdrachten.', 'Requirements duidelijker uitschrijven voor ik begin te bouwen.'],
  ['Ontwerpen', 'Ik kan een duidelijke paginastructuur maken met secties, kaarten, tabellen en een responsieve lay-out.', 'Portfolio en CV-website met herbruikbare CSS-klassen.', 'Sneller wireframes of schetsen maken.'],
  ['Programmeren', 'Ik beheers basis HTML/CSS, JavaScript, C# Console/WPF en Git/GitHub.', 'Scratch, C# Console, debuggen, WPF en portfolio.', 'Code beter opdelen in componenten, functies en bestanden.'],
  ['Testen en debuggen', 'Ik test op verschillende schermgroottes en gebruik breakpoints om fouten te vinden.', 'Debugging in C# en controles op de portfoliosite.', 'Werken met vaste testscenario’s.'],
  ['Communiceren en reflecteren', 'Ik kan uitleggen wat ik gedaan heb, wat moeilijk was en wat ik uit feedback leerde.', 'Logboek, AIM-reflectie, kernkwadrant en X-factor.', 'Sneller hulp of feedback vragen wanneer ik vastzit.'],
]

const roles = [
  {
    title: 'Ontwerper',
    status: 'Ik kan een pagina opdelen in duidelijke onderdelen zoals hero, navigatie, kaarten, tabellen en reflecties.',
    success: 'De lay-out plannen, responsief gedrag testen en dezelfde visuele stijl doortrekken.',
    growth: 'Vooraf genoeg schetsen maken, zodat ik minder moet aanpassen tijdens het bouwen.',
    next: 'In WPL2 wil ik vroeger nadenken over structuur en gebruikersflow.',
    examples: ['Hero en secties met grid/flex', 'Mobiele navigatie', 'Consistente kaarten en tabellen'],
    missing: 'Feedback: De student beantwoordt de vragen niet voor elke rol en er ontbreken voorbeelden of motivaties. Actie: voeg indien mogelijk een screenshot of link toe van de eerste en verbeterde versie, en leg kort uit waarom dit bij de rol Ontwerper hoort.',
  },
  {
    title: 'Programmeur',
    status: 'Ik kan basisopdrachten zelfstandig uitwerken in HTML/CSS, JavaScript en C#.',
    success: 'Basislogica, methodes gebruiken, responsieve pagina’s maken en Git toepassen.',
    growth: 'Grotere projecten meteen netjes opdelen in kleine modules of componenten.',
    next: 'In WPL2 wil ik sneller werken met kleinere componenten, duidelijke namen en regelmatige commits.',
    examples: ['CV- en portfoliowebsite', 'C# Console opdracht', 'Git-werkwijze'],
    missing: 'Feedback: Er ontbreken voorbeelden of motivaties waarom een taak bij een bepaalde rol hoort. Actie: voeg de exacte naam van de C# opdracht of een GitHub-link toe, en leg uit waarom dit bij de rol Programmeur hoort.',
  },
  {
    title: 'Tester',
    status: 'Ik test mijn werk met scenario’s zoals desktop, mobiel, navigatie, foutieve input en consolefouten.',
    success: 'Fouten reproduceren en na een wijziging opnieuw testen.',
    growth: 'Vooraf een formeel testplan schrijven met verwachte resultaten.',
    next: 'In WPL2 wil ik testscenario’s noteren voordat ik begin te verbeteren.',
    examples: ['Responsive check op meerdere schermgroottes', 'Navigatie getest', 'Debuggen in C#'],
    missing: 'Feedback: De student geeft voldoende voorbeelden per rol, maar er ontbreken nog enkele voorbeelden of motivaties. Actie: noteer 2 of 3 concrete bugs die je hebt opgelost en beschrijf hoe je ze getest hebt.',
  },
  {
    title: 'Communicator / Teamspeler',
    status: 'Ik kan feedback verwerken en in mijn logboek kort uitleggen wat ik gedaan heb.',
    success: 'Notities bijhouden, reflecteren en verbeterpunten omzetten naar concrete acties.',
    growth: 'Sneller aangeven dat ik vastzit of extra feedback nodig heb.',
    next: 'Ik wil sneller communiceren over blokkades, zodat ik minder tijd verlies.',
    examples: ['Feedback verwerkt in lay-out en navigatie', 'Logboek bijgehouden', 'Reflecties geschreven'],
    missing: 'Feedback: De antwoorden zijn deels persoonlijk, maar soms nog algemeen. Actie: voeg een concrete feedbacksituatie of samenwerkingservaring toe, inclusief wat je ermee gedaan hebt.',
  },
  {
    title: 'Levenslang lerende IT-professional',
    status: 'Ik kan zelfstandig bijleren via documentatie, voorbeelden en feedback.',
    success: 'Nieuwe HTML/CSS-technieken proberen, Git gebruiken en mijn aanpak aanpassen na fouten.',
    growth: 'Bewust tijd reserveren om extra te oefenen naast deadlines.',
    next: 'In WPL2 wil ik per week noteren wat ik nieuw geleerd heb en hoe ik dat toegepast heb.',
    examples: ['CSS-only dropdown via <details>', 'HTML/CSS-first aanpak', 'Goede Git-gewoontes'],
    missing: 'Feedback: De tekst bevat soms vage of algemene zinnen. Actie: vermeld welke bron, documentatie of tutorial je gebruikte en wat je daar concreet uit leerde.',
  },
]

const assignments = [
  {
    tag: 'WPF',
    period: 'Week 11-14',
    title: 'C# WPF labo (basis)',
    description: 'Ik werkte aan een WPF-labo met basis UI-controls, events en code-behind.',
    result: 'Ik kreeg meer inzicht in hoe een interface reageert op gebruikersacties.',
    challenge: 'De link tussen de UI en de achterliggende code begrijpen en fouten gericht zoeken.',
    lesson: 'WPF vraagt een duidelijke structuur, omdat UI en code elkaar snel beïnvloeden.',
    missing: 'Feedback: Meerdere beschrijvingen van taken ontbreken en de uitwerking is onvolledig. Actie: voeg de exacte opdrachtnaam, een screenshot of de belangrijkste functionaliteit van het WPF-labo toe.',
  },
  {
    tag: 'Debug',
    period: 'Week 10',
    title: 'Documenteren en debuggen (C#)',
    description: 'Ik oefende met bugs opsporen via breakpoints, stap voor stap uitvoeren en output controleren.',
    result: 'Ik kon gerichter zoeken naar de plaats waar een fout ontstond.',
    challenge: 'Niet meteen willekeurig aanpassen, maar eerst begrijpen waarom iets fout liep.',
    lesson: 'Een bug reproduceerbaar maken en daarna kleine wijzigingen testen werkt beter dan gokken.',
    missing: 'Feedback: De student motiveert niet voldoende wat zijn persoonlijke uitdagingen waren. Actie: beschrijf een concrete bug, waarom die moeilijk was en hoe je die opgelost hebt.',
  },
  {
    tag: 'Web',
    period: 'Week 9-12',
    title: 'CV-website + start portfolio',
    description: 'Ik bouwde een responsieve CV-website en startte daarna mijn portfolio met een consistente visuele stijl.',
    result: 'De website kreeg een duidelijke structuur met hero, navigatie, secties en kaarten.',
    challenge: 'De navigatie bruikbaar houden op kleine schermen en de styling overal gelijk houden.',
    lesson: 'Grid, flexbox en herbruikbare CSS-klassen helpen om sneller en consistenter te werken.',
    missing: 'Feedback: De opdrachten worden niet altijd overzichtelijk weergegeven en taakbeschrijvingen ontbreken. Actie: voeg de link naar je CV-site en een screenshot van je portfolio toe als bewijs.',
  },
  {
    tag: 'C#',
    period: 'Week 7',
    title: 'C# Console opdracht',
    description: 'Ik werkte aan een console-app waarin inputvalidatie, loops en methodes aan bod kwamen.',
    result: 'De app kon gebruikersinput verwerken en foutieve input beter opvangen.',
    challenge: 'Code leesbaar houden terwijl ik meerdere controles en herhalingen gebruikte.',
    lesson: 'Methodes en duidelijke namen maken code overzichtelijker en makkelijker aanpasbaar.',
    missing: 'Feedback: De uitwerking van opdrachten is onvolledig. Actie: voeg de exacte opdrachtnaam en de belangrijkste functionaliteiten van de C# Console opdracht toe.',
  },
  {
    tag: 'Git',
    period: 'Week 2-4',
    title: 'Git- en GitHub-werkwijze',
    description: 'Ik leerde werken met repositories, commits, branches en push/pull.',
    result: 'Ik kon mijn opdrachten versiebeheer geven en wijzigingen beter opvolgen.',
    challenge: 'Regelmatig committen en duidelijke commitberichten schrijven.',
    lesson: 'Kleine commits maken het makkelijker om fouten terug te vinden.',
    missing: 'Feedback: De student motiveert niet voldoende wat zijn persoonlijke uitdagingen waren. Actie: voeg een GitHub-link of een voorbeeld van een goed commitbericht toe en leg uit waarom versiebeheer voor jou een uitdaging was.',
  },
  {
    tag: 'Scratch',
    period: 'Week 1-3',
    title: 'Scratch mini-game',
    description: 'Ik maakte een kleine game waarin beweging, score en reset samen moesten werken.',
    result: 'De basis van de game werkte en ik kon verschillende programmeerblokken combineren.',
    challenge: 'De logica van de game loop duidelijk houden, zodat de score niet fout opliep.',
    lesson: 'Testen na elke kleine functie helpt om fouten sneller te vinden.',
    missing: 'Feedback: Meerdere beschrijvingen van taken ontbreken. Actie: voeg de exacte naam, een screenshot of een link van de Scratch-opdracht toe.',
  },
]
</script>

<template>
  <main id="main">
    <section class="hero">
      <div class="container hero-grid">
        <div class="hero-card">
          <div class="hero-main">
            <p class="eyebrow">Werkplekleren • Graduaat Programmeren</p>
            <div class="hero-heading">
              <div class="hero-avatar" role="img" aria-label="Profielfoto">
                <img :src="profilePicUrl" alt="Profielfoto" decoding="async" />
              </div>
              <div class="hero-heading-text">
                <h1>Rauf Kahraman — Portfolio</h1>
              </div>
            </div>
            <div class="quick-info">
              <div class="qi"><p class="qi-label">Klas</p><p class="qi-value">1PROd</p></div>
              <div class="qi"><p class="qi-label">Academiejaar</p><p class="qi-value">2025-2026</p></div>
              <div class="qi"><p class="qi-label">CV</p><p class="qi-value"><a href="https://pxl-grpro-wpl1-2526.github.io/curriculum-vitae-RaufKahraman/">website</a></p></div>
            </div>
          </div>

          <div class="profile-meta">
            <h2 class="h3">Snelle samenvatting</h2>
            <dl class="summary-list">
              <div><dt>Student</dt><dd>Rauf Kahraman, Graduaat Programmeren, 1PROd</dd></div>
              <div><dt>Focus</dt><dd>Structuur, duidelijke commits en testen</dd></div>
              <div><dt>Vaardigheden</dt><dd>Python, Git/GitHub, HTML/CSS, JavaScript, Vue, C#, Java</dd></div>
              <div><dt>Inhoud</dt><dd>Logboek, ontwikkeling en competenties</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>

    <section id="intro" class="section">
      <div class="container">
        <div class="section-head"><h2>Persoonlijke introductie</h2></div>
        <div class="card">
          <p>Ik ben Rauf Kahraman, student Graduaat Programmeren in klas 1PROd. In dit portfolio toon ik hoe ik tijdens Werkplekleren 1 gegroeid ben van losse oefeningen naar een meer gestructureerde manier van werken.</p>
          <p>Mijn belangrijkste leerpunt is dat kleine stappen beter werken dan alles in een keer willen oplossen. Wanneer ik na elke wijziging test, duidelijke commits maak en mijn code overzichtelijk houd, vind ik fouten sneller terug.</p>
        </div>
      </div>
    </section>

    <section id="logboek" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>Logboek</h2>
          <p class="muted">Omgekeerd chronologisch: de meest recente week staat bovenaan.</p>
        </div>
        <div class="card">
          <div class="table-wrap" role="region" aria-label="Logboek tabel" tabindex="0">
            <table class="table">
              <thead>
                <tr><th>Week</th><th>Periode</th><th>Inhoud</th><th>Evaluaties</th><th>Opdrachten</th></tr>
              </thead>
              <tbody>
                <tr v-for="row in logbookRows" :key="row.week">
                  <td>{{ row.week }}</td>
                  <td>{{ row.period }}</td>
                  <td>
                    <ul class="bullets"><li v-for="item in row.content" :key="item">{{ item }}</li></ul>
                    <span class="muted small">{{ row.note }}</span>
                  </td>
                  <td><ul class="bullets"><li v-for="item in row.evaluations" :key="item">{{ item }}</li></ul></td>
                  <td><ul class="bullets"><li v-for="item in row.assignments" :key="item">{{ item }}</li></ul></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>

    <section id="ontwikkeling" class="section">
      <div class="container">
        <div class="section-head"><h2>Ontwikkeling</h2></div>
        <div class="grid-2">
          <article class="card">
            <h3>Waarom kies je voor de opleiding programmeren?</h3>
            <p>Ik koos voor Graduaat Programmeren omdat ik graag problemen oplos en het leukste leer door dingen echt te bouwen. Programmeren combineert logisch denken met creativiteit: je start met een idee en eindigt met iets dat effectief werkt.</p>
          </article>
          <article class="card">
            <h3>Waarom denk je dat dit beroep bij jou past?</h3>
            <p>Ik denk dat het beroep developer bij mij past omdat ik graag bijleer en niet opgeef wanneer iets niet meteen lukt. Ik werk graag gestructureerd met kleine stappen, duidelijke commits en een overzichtelijke mappenstructuur.</p>
          </article>
        </div>
      </div>
    </section>

    <section id="competenties" class="section alt">
      <div class="container">
        <div class="section-head"><h2>Competentie-overzicht</h2></div>
        <div class="card">
          <div class="table-wrap" role="region" aria-label="Competentie-overzicht" tabindex="0">
            <table class="table">
              <thead>
                <tr><th>Competentie</th><th>Waar sta ik nu?</th><th>Bewijs uit WPL1</th><th>Groeipunt richting WPL2</th></tr>
              </thead>
              <tbody>
                <tr v-for="item in competencies" :key="item[0]">
                  <td v-for="cell in item" :key="cell">{{ cell }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
