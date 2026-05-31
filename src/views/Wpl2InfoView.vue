<script setup>
const reflectionPdfUrl = `${import.meta.env.BASE_URL}assets/wpl2-eindreflectie-rauf-kahraman.pdf`

const deliverables = [
  'De POKR-case analyseren vanuit een ontwikkelaarsbeschrijving en zelf afleiden wat er nodig was.',
  'Als team een haalbare aanpak bepalen met duidelijke taakverdeling en overlegmomenten.',
  'Werken met Scrum en daily stand-ups om voortgang, blokkades en hulpvragen zichtbaar te maken.',
  'Technische uitwerking combineren met planning, communicatie, afstemming en kwaliteitscontrole.',
]

const wpl2Roles = [
  {
    title: 'Ontwerper',
    text: 'Ik leerde dat je bij een open case eerst structuur moet brengen: wat is het doel, welke onderdelen zijn nodig en hoe maken we het haalbaar als team?',
    proof: 'Bij POKR moesten we niet gewoon een kant-en-klare opdracht volgen, maar zelf nadenken over de aanpak.',
  },
  {
    title: 'Programmeur',
    text: 'Ik nam mijn taken zorgvuldig op en bleef zoeken naar oplossingen wanneer iets technisch moeilijk liep.',
    proof: 'Mijn nauwkeurigheid hielp om het eindresultaat verzorgd te houden, maar ik merkte ook dat ik soms te lang in details bleef hangen.',
  },
  {
    title: 'Tester',
    text: 'Ik bleef kritisch kijken naar kwaliteit en afwerking. Slordig of half afgewerkt werk stoort mij, waardoor ik sneller controleer of iets echt klopt.',
    proof: 'Een groeipunt is beter inschatten wanneer iets goed genoeg is binnen de beschikbare tijd.',
  },
  {
    title: 'Communicator / Teamspeler',
    text: 'Samenwerken werd een belangrijk leerpunt. Ik merkte dat goede communicatie niet alleen gaat over taken verdelen, maar ook over verwachtingen uitspreken.',
    proof: 'Daily stand-ups hielpen om te zien wie waarmee bezig was en waar iemand vastliep.',
  },
  {
    title: 'Levenslang lerende IT-professional',
    text: 'WPL2 liet mij groeien in omgaan met onduidelijkheid, verschillende ervaringsniveaus en feedbackmomenten binnen een realistisch project.',
    proof: 'Voor een volgende WPL wil ik sneller hulp vragen en mijn visie duidelijker uitleggen.',
  },
]

const wpl2Assignments = [
  {
    tag: 'Case',
    title: 'POKR-case begrijpen',
    description: 'We kregen een beschrijving van een ontwikkelaar en moesten daaruit zelf afleiden wat er gebouwd en uitgewerkt moest worden.',
    insight: 'Dat voelde in het begin onduidelijk, maar het leerde mij om niet te wachten op een volledig uitgewerkte opdracht.',
  },
  {
    tag: 'Team',
    title: 'Samenwerking organiseren',
    description: 'We werkten met verschillende programmeerniveaus binnen dezelfde groep en moesten rekening houden met elkaars sterktes.',
    insight: 'Een goed project draait niet alleen om code, maar ook om vertrouwen, taakopvolging en duidelijke afspraken.',
  },
  {
    tag: 'Scrum',
    title: 'Daily stand-ups',
    description: 'Tijdens de stand-ups bespraken we kort wie waarmee bezig was, welke drempels er waren en waar hulp nodig was.',
    insight: 'Scrum maakte zichtbaar dat communicatie en structuur nodig zijn om vooruitgang te blijven maken.',
  },
  {
    tag: 'Reflectie',
    title: 'Eindreflectie WPL2',
    description: 'Ik werkte mijn AIM-reflectie, twee kernkwadranten en de X-factor uit op basis van mijn ervaring in de groep.',
    insight: 'Mijn belangrijkste groei zit in verwachtingen uitspreken, prioriteiten stellen en sneller feedback vragen.',
  },
]

const aimItems = [
  {
    title: 'Actie',
    text: 'Tijdens WPL2 werkte ik met mijn groep aan de POKR-case. We moesten zelf richting geven aan de opdracht, taken verdelen en omgaan met verschillende niveaus van programmeerervaring.',
  },
  {
    title: 'Inzicht',
    text: 'Samenwerken betekent meer dan elk je eigen taak doen. Je moet duidelijk communiceren wat je doet, waar je vastloopt en wat je van anderen verwacht.',
  },
  {
    title: 'Meenemen',
    text: 'Ik neem mee dat daily stand-ups, duidelijke verwachtingen en sneller hulp vragen helpen om frustratie te vermijden en het project beter te structureren.',
  },
]

const quadrants = [
  {
    title: 'Kernkwadrant 1',
    quality: 'Samenwerken / teamgerichtheid',
    pitfall: 'Te veel afhangen van de inzet van anderen',
    allergy: 'Mensen die hun afspraken niet nakomen',
    challenge: 'Duidelijker verwachtingen uitspreken',
    reflection:
      'Ik werk graag in team wanneer iedereen zijn taak opneemt en we samen vooruitgang maken. Mijn uitdaging is om rustiger en sneller te zeggen wat ik nodig heb, zodat onduidelijkheid niet omslaat in frustratie.',
  },
  {
    title: 'Kernkwadrant 2',
    quality: 'Nauwkeurigheid',
    pitfall: 'Te lang blijven hangen in details',
    allergy: 'Slordigheid of half afgewerkt werk',
    challenge: 'Leren wanneer iets goed genoeg is',
    reflection:
      'Ik wil dat mijn werk klopt en verzorgd is. Die aandacht voor kwaliteit is sterk, maar binnen een deadline moet ik bewuster prioriteiten stellen en sneller feedback vragen.',
  },
]

const xFactorItems = [
  {
    title: '(Em)passie',
    text: 'Ik bleef gemotiveerd om de POKR-case te begrijpen en een resultaat af te leveren waar ik tevreden over kon zijn, ook wanneer de start onduidelijk was.',
  },
  {
    title: 'Ondernemend & innovatief',
    text: 'We moesten als team zelf bepalen hoe we de case zouden aanpakken. Dat vroeg initiatief, probleemoplossend denken en een haalbare taakverdeling.',
  },
  {
    title: '(Internationaal) samen(net)werken',
    text: 'Niet iedereen had dezelfde programmeerervaring. Door daily stand-ups konden we beter afstemmen, hulpvragen sneller zien en rekening houden met elkaar.',
  },
  {
    title: 'Multi- & disciplinariteit',
    text: 'WPL2 bestond niet alleen uit programmeren. Plannen, communiceren, overleggen en taken verdelen waren even belangrijk als de technische uitwerking.',
  },
  {
    title: 'Duurzaamheid',
    text: 'Duurzaam werken betekent voor mij betrouwbaar zijn, taken afwerken en kwaliteit leveren zodat anderen op je kunnen rekenen.',
  },
]
</script>

<template>
  <main id="main">
    <section class="hero">
      <div class="container">
        <div class="hero-card reflection-hero">
          <div class="hero-main">
            <p class="eyebrow">Werkplekleren 2 - Eindreflectie</p>
            <h1>WPL2-info</h1>
            <p class="lead">
              Een afgewerkte reflectie over de POKR-case, samenwerking, Scrum, kernkwadranten en X-factor.
            </p>
            <div class="hero-actions">
              <a class="btn primary" :href="reflectionPdfUrl" target="_blank" rel="noopener">Bekijk PDF</a>
            </div>
          </div>

          <div class="reflection-summary">
            <div>
              <span class="summary-kicker">Case</span>
              <strong>POKR</strong>
            </div>
            <div>
              <span class="summary-kicker">Methode</span>
              <strong>Scrum</strong>
            </div>
            <div>
              <span class="summary-kicker">Groei</span>
              <strong>Communicatie</strong>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="wpl2-case" class="section">
      <div class="container">
        <article class="card prose">
          <p class="eyebrow">Beschrijving van de case</p>
          <h2>POKR als realistische groepsopdracht</h2>

          <p>
            Voor Werkplekleren 2 werkte ik met mijn groep aan de POKR-case. We kregen hiervoor
            geen volledig afgebakende stap-voor-stap opdracht, maar een beschrijving van een
            ontwikkelaar. Vanuit die beschrijving moesten we zelf afleiden wat er precies gebouwd,
            uitgewerkt en georganiseerd moest worden. Dat maakte de start wat onduidelijk, omdat
            we niet gewoon een kant-en-klare opdracht moesten uitvoeren. We moesten eerst begrijpen
            wat de bedoeling van de case was, welke onderdelen belangrijk waren en hoe we het project
            als team haalbaar konden aanpakken.
          </p>

          <p>
            De POKR-app is een toepassing waarmee een bedrijf KPI's en doelen kan bijhouden binnen
            teams. Een KPI is een meetbare eenheid waarmee je prestaties opvolgt, vaak binnen een
            project of een doorlopend doel. In de case kon een bedrijf meerdere teams hebben en
            konden teamleden ook in verschillende teams binnen hetzelfde bedrijf zitten. Daardoor
            werd de structuur snel complex. Het project startte al met een ingewikkelde databank en
            daarna volgde een stevige .NET API met meer dan 110 endpoints. Dat maakte de case
            technisch uitdagend en vroeg om duidelijke afspraken, planning en taakverdeling binnen
            het team.
          </p>
        </article>
      </div>
    </section>

    <section id="wpl2-aandeel" class="section alt">
      <div class="container">
        <article class="card prose">
          <p class="eyebrow">Mijn aandeel</p>
          <h2>Mijn rol binnen de POKR-case</h2>

          <p>
            Mijn aandeel binnen de POKR-case lag vooral in het zorgvuldig opnemen van mijn taken
            en het actief meewerken aan de samenwerking binnen de groep. Ik probeerde mijn werk
            nauwkeurig af te werken en bleef zoeken naar oplossingen wanneer iets technisch of
            inhoudelijk moeilijk liep. Uit mijn eindreflectie blijkt dat ik veel belang hecht aan
            kwaliteit en afwerking. Dat hielp mij om kritisch naar het resultaat te kijken en niet
            zomaar tevreden te zijn met half afgewerkt werk. Tegelijk merkte ik dat dit ook een
            valkuil kan zijn, omdat ik soms te lang blijf hangen in details.
          </p>

          <p>
            Daarnaast probeerde ik rekening te houden met de verschillende niveaus binnen het team.
            Niet iedereen had evenveel programmeerervaring, waardoor duidelijke afspraken en
            communicatie belangrijk waren. De daily stand-ups hielpen mij om beter te begrijpen wie
            waarmee bezig was en waar iemand vastliep. Ik leerde dat samenwerken niet alleen betekent
            dat iedereen zijn eigen taak uitvoert, maar ook dat je verwachtingen uitspreekt en hulp
            vraagt wanneer dat nodig is. Voor een volgende WPL wil ik mijn visie nog duidelijker
            uitleggen, sneller feedback vragen en beter inschatten wanneer iets goed genoeg is binnen
            de beschikbare tijd.
          </p>
        </article>
      </div>
    </section>

    <section id="wpl2-focus" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>Focus Van De Opdracht</h2>
          <p class="muted">Wat WPL2 mij vooral heeft laten oefenen binnen de POKR-case.</p>
        </div>

        <div class="focus-grid">
          <article v-for="item in deliverables" :key="item" class="card focus-card">
            <span aria-hidden="true"></span>
            <p>{{ item }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="wpl2-rollen" class="section">
      <div class="container">
        <div class="section-head">
          <h2>WPL2 - OLR Rollen</h2>
          <p class="muted">De rollen toegepast op mijn ervaring in de POKR-case.</p>
        </div>

        <div class="grid-2">
          <article v-for="role in wpl2Roles" :key="role.title" class="card role-card">
            <h3 class="h4">{{ role.title }}</h3>
            <p>{{ role.text }}</p>
            <p class="proof-text">{{ role.proof }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="wpl2-opdrachten" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>WPL2 - Proces</h2>
          <p class="muted">De belangrijkste stappen en leerpunten uit het WPL2-project.</p>
        </div>

        <div class="timeline card">
          <div v-for="assignment in wpl2Assignments" :key="assignment.title" class="tl-item">
            <div class="tl-dot" aria-hidden="true"></div>
            <div class="tl-body">
              <div class="tl-meta">
                <span class="pill">{{ assignment.tag }}</span>
              </div>
              <h3 class="h4">{{ assignment.title }}</h3>
              <p><strong>Beschrijving:</strong> {{ assignment.description }}</p>
              <p><strong>Inzicht:</strong> {{ assignment.insight }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="wpl2-aim" class="section">
      <div class="container">
        <div class="section-head">
          <h2>WPL2 - AIM-reflectie</h2>
          <p class="muted">Samenvatting van mijn eindreflectie volgens actie, inzicht en meenemen.</p>
        </div>

        <div class="aim-grid">
          <article v-for="item in aimItems" :key="item.title" class="card aim-card">
            <h3>{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="wpl2-kernkwadrant" class="section alt">
      <div class="container">
        <div class="section-head">
          <h2>WPL2 - Kernkwadranten</h2>
          <p class="muted">Twee kernkwadranten uit mijn WPL2-eindreflectie.</p>
        </div>

        <div class="grid-2">
          <article v-for="quadrant in quadrants" :key="quadrant.title" class="card quadrant-card">
            <h3 class="h4">{{ quadrant.title }}</h3>
            <div class="quadrant-grid">
              <div><span>Kernkwaliteit</span><strong>{{ quadrant.quality }}</strong></div>
              <div><span>Valkuil</span><strong>{{ quadrant.pitfall }}</strong></div>
              <div><span>Allergie</span><strong>{{ quadrant.allergy }}</strong></div>
              <div><span>Uitdaging</span><strong>{{ quadrant.challenge }}</strong></div>
            </div>
            <p>{{ quadrant.reflection }}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="wpl2-xfactor" class="section">
      <div class="container">
        <div class="section-head">
          <h2>WPL2 - X-factor</h2>
          <p class="muted">Hoe de X-factor zichtbaar werd tijdens de POKR-case.</p>
        </div>

        <div class="xfactor-grid">
          <article v-for="item in xFactorItems" :key="item.title" class="card">
            <h3 class="h4">{{ item.title }}</h3>
            <p>{{ item.text }}</p>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>
