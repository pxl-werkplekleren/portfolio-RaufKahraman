<script setup>
const roles = [
  {
    title: 'Ontwerper',
    text: 'Ik kan een pagina opdelen in duidelijke onderdelen zoals hero, navigatie, kaarten, tabellen en reflecties.',
    proof: 'Bij mijn portfolio en CV-website werkte ik met grid, flexbox, herbruikbare secties en een consistente visuele stijl.',
  },
  {
    title: 'Programmeur',
    text: 'Ik kan basisopdrachten zelfstandig uitwerken in HTML/CSS, JavaScript, C# en Git/GitHub.',
    proof: 'Ik oefende met Scratch, C# Console, WPF en mijn portfoliowebsite. Vooral duidelijke namen en kleinere stappen hielpen mij vooruit.',
  },
  {
    title: 'Tester',
    text: 'Ik test mijn werk door scenario’s te controleren zoals mobiel, desktop, navigatie, foutieve input en consolefouten.',
    proof: 'Bij webopdrachten controleerde ik responsive gedrag. Bij C# gebruikte ik breakpoints en stap voor stap uitvoeren om bugs te vinden.',
  },
  {
    title: 'Communicator / Teamspeler',
    text: 'Ik kan feedback verwerken en mijn voortgang uitleggen via reflecties, logboeknotities en concrete verbeteringen.',
    proof: 'Door feedback op lay-out, navigatie en structuur kon ik mijn portfolio overzichtelijker en consistenter maken.',
  },
  {
    title: 'Levenslang lerende IT-professional',
    text: 'Ik leer zelfstandig bij via documentatie, voorbeelden, feedback en het opnieuw testen van mijn eigen werk.',
    proof: 'In WPL1 ontdekte ik dat kleine stappen, duidelijke commits en gericht testen mij sneller laten groeien.',
  },
]

const assignments = [
  {
    tag: 'WPF',
    period: 'Week 11-14',
    title: 'C# WPF labo',
    description: 'Ik werkte aan een WPF-labo met basis UI-controls, events en code-behind.',
    result: 'Ik kreeg meer inzicht in hoe een interface reageert op gebruikersacties.',
    challenge: 'De link tussen de UI en de achterliggende code begrijpen en fouten gericht zoeken.',
    lesson: 'UI en code beïnvloeden elkaar sterk, dus structuur blijft belangrijk.',
  },
  {
    tag: 'Debug',
    period: 'Week 10',
    title: 'Documenteren en debuggen',
    description: 'Ik oefende met bugs opsporen via breakpoints, stap voor stap uitvoeren en output controleren.',
    result: 'Ik kon gerichter zoeken naar de plaats waar een fout ontstond.',
    challenge: 'Niet meteen willekeurig aanpassen, maar eerst begrijpen waarom iets fout liep.',
    lesson: 'Een bug eerst reproduceerbaar maken werkt beter dan willekeurig aanpassen.',
  },
  {
    tag: 'Web',
    period: 'Week 9-12',
    title: 'CV-website en portfolio',
    description: 'Ik bouwde een responsieve CV-website en startte daarna mijn portfolio met een consistente stijl.',
    result: 'De website kreeg duidelijke secties, navigatie, kaarten en responsieve layout.',
    challenge: 'De navigatie bruikbaar houden op kleine schermen en de styling overal gelijk houden.',
    lesson: 'Grid, flexbox en herbruikbare CSS-klassen maken het werk overzichtelijker.',
  },
  {
    tag: 'C#',
    period: 'Week 7',
    title: 'C# Console opdracht',
    description: 'Ik werkte aan een console-app waarin inputvalidatie, loops en methodes aan bod kwamen.',
    result: 'De app kon gebruikersinput verwerken en foutieve input beter opvangen.',
    challenge: 'Code leesbaar houden terwijl ik meerdere controles en herhalingen gebruikte.',
    lesson: 'Methodes en duidelijke namen maken code makkelijker aanpasbaar.',
  },
  {
    tag: 'Git',
    period: 'Week 2-4',
    title: 'Git- en GitHub-werkwijze',
    description: 'Ik leerde werken met repositories, commits, branches en push/pull.',
    result: 'Ik kon mijn opdrachten versiebeheer geven en wijzigingen beter opvolgen.',
    challenge: 'Regelmatig committen en duidelijke commitberichten schrijven.',
    lesson: 'Kleine commits maken het makkelijker om fouten terug te vinden.',
  },
  {
    tag: 'Scratch',
    period: 'Week 1-3',
    title: 'Scratch mini-game',
    description: 'Ik maakte een kleine game waarin beweging, score en reset samen moesten werken.',
    result: 'De basis van de game werkte en ik kon verschillende programmeerblokken combineren.',
    challenge: 'Leren hoe Scratch werkt en daarna onze game-logica bouwen.',
    lesson: 'Testen na elke kleine functie helpt om fouten sneller te vinden.',
  },
]

const aimItems = [
  {
    title: 'Actie',
    text: 'Tijdens WPL1 werkte ik aan opdrachten rond Scratch, Git/GitHub, webontwikkeling, C# Console, debuggen en WPF.',
  },
  {
    title: 'Inzicht',
    text: 'Ik leerde dat mijn aanpak minstens even belangrijk is als de technische oplossing. Kleine stappen, duidelijke structuur en regelmatig testen maken mijn werk sterker.',
  },
  {
    title: 'Meenemen',
    text: 'Naar WPL2 neem ik mee dat plannen, snel feedback vragen en regelmatig committen mij helpen om rustiger en consistenter te werken.',
  },
]

const quadrant = {
  quality: 'Doorzettingsvermogen',
  pitfall: 'Te lang blijven hangen in details',
  allergy: 'Onzorgvuldigheid',
  challenge: 'Eerst werkend en volledig, daarna verfijnen',
  reflection:
    'Mijn doorzettingsvermogen hielp mij vooral bij debuggen en lay-outproblemen. De uitdaging is om die kwaliteit goed te sturen: eerst de kern afwerken, daarna pas details verbeteren.',
}

const xFactorItems = [
  {
    title: 'Ondernemend & innovatief',
    text: 'Ik zoek eenvoudige en onderhoudbare oplossingen en durf mijn UI stap voor stap te verbeteren.',
  },
  {
    title: 'Samenwerken & communiceren',
    text: 'Ik verwerk feedback in concrete aanpassingen en leg mijn voortgang uit in mijn logboek en reflecties.',
  },
  {
    title: 'Levenslang leren',
    text: 'Ik leer nieuwe technieken wanneer ik ze nodig heb en gebruik fouten als feedback om mijn aanpak bij te sturen.',
  },
  {
    title: 'Duurzaam & bewust',
    text: 'Ik maak herbruikbare structuren en test op verschillende schermen, zodat ik minder herwerk heb en mijn site langer bruikbaar blijft.',
  },
]
</script>

<template>
  <main id="main">
    <section class="hero">
      <div class="container">
        <div class="hero-card reflection-hero">
          <div class="hero-main">
            <p class="eyebrow">Werkplekleren 1 - Reflectie</p>
            <h1>WPL1 Reflectiemodule</h1>
            <p class="lead">
              Een overzicht van mijn rollen, opdrachten, AIM-reflectie, kernkwadrant en X-factor tijdens WPL1.
            </p>
          </div>

          <div class="reflection-summary">
            <div>
              <span class="summary-kicker">Focus</span>
              <strong>Basis versterken</strong>
              <p>HTML/CSS, JavaScript, C#, WPF en Git/GitHub.</p>
            </div>
            <div>
              <span class="summary-kicker">Aanpak</span>
              <strong>Kleine stappen</strong>
              <p>Structuur brengen, testen en duidelijke commits maken.</p>
            </div>
            <div>
              <span class="summary-kicker">Groei</span>
              <strong>Zelfstandiger werken</strong>
              <p>Gerichter debuggen en bewuster reflecteren.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="rollen" class="section">
      <div class="container">
        <div class="section-head">
          <h2>Vijf Rollen (OLR)</h2>
          <p class="muted">Hoe ik de verschillende rollen tijdens WPL1 heb toegepast.</p>
        </div>

        <div class="grid-2">
          <article v-for="role in roles" :key="role.title" class="card role-card">
            <h3 class="h4">{{ role.title }}</h3>
            <p>{{ role.text }}</p>
            <p class="proof-text">{{ role.proof }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="opdrachten" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>Opdrachten & PE's</h2>
          <p class="muted">Omgekeerd chronologisch: de meest recente opdrachten staan bovenaan.</p>
        </div>

        <div class="timeline card">
          <div v-for="assignment in assignments" :key="assignment.title" class="tl-item">
            <div class="tl-dot" aria-hidden="true"></div>
            <div class="tl-body">
              <div class="tl-meta">
                <span class="pill">{{ assignment.tag }}</span>
                <span class="muted small">{{ assignment.period }}</span>
              </div>
              <h3 class="h4">{{ assignment.title }}</h3>
              <p><strong>Beschrijving:</strong> {{ assignment.description }}</p>
              <p><strong>Resultaat:</strong> {{ assignment.result }}</p>
              <p v-if="assignment.challenge"><strong>Persoonlijke uitdaging:</strong> {{ assignment.challenge }}</p>
              <p><strong>Leerpunt:</strong> {{ assignment.lesson }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="reflectie" class="section">
      <div class="container">
        <div class="section-head">
          <h2>Reflectie - AIM-model</h2>
          <p class="muted">De belangrijkste lijn uit mijn WPL1-reflectie.</p>
        </div>

        <div class="aim-grid">
          <article v-for="item in aimItems" :key="item.title" class="card aim-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="kernkwadrant" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>Kernkwadrant</h2>
          <p class="muted">Wat ik over mijn werkhouding meeneem naar WPL2.</p>
        </div>

        <article class="card quadrant-card">
          <div class="quadrant-grid">
            <div><span>Kernkwaliteit</span><strong>{{ quadrant.quality }}</strong></div>
            <div><span>Valkuil</span><strong>{{ quadrant.pitfall }}</strong></div>
            <div><span>Allergie</span><strong>{{ quadrant.allergy }}</strong></div>
            <div><span>Uitdaging</span><strong>{{ quadrant.challenge }}</strong></div>
          </div>
          <p>{{ quadrant.reflection }}</p>
        </article>
      </div>
    </section>

    <section id="xfactor" class="section">
      <div class="container">
        <div class="section-head">
          <h2>X-factor</h2>
          <p class="muted">De X-factor vertaald naar mijn groei in WPL1.</p>
        </div>

        <div class="grid-2">
          <article v-for="item in xFactorItems" :key="item.title" class="card role-card">
            <h3 class="h4">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
