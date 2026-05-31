import { defineStore } from 'pinia'

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    owner: 'Rauf Kahraman',
    classGroup: '1PROd',
    mainNavLinks: [
      { label: 'Home', routeName: 'home', sectionId: 'main' },
      { label: 'Logboek', routeName: 'home', sectionId: 'logboek' },
      { label: 'Ontwikkeling', routeName: 'home', sectionId: 'ontwikkeling' },
      { label: 'Competenties', routeName: 'home', sectionId: 'competenties' },
    ],
    wplMenus: [
      {
        label: 'WPL1',
        routeName: 'wpl1',
        overviewSectionId: 'rollen',
        links: [
          { label: 'Rollen (OLR)', sectionId: 'rollen' },
          { label: 'Opdrachten', sectionId: 'opdrachten' },
          { label: 'Reflectie (AIM)', sectionId: 'reflectie' },
          { label: 'Kernkwadrant', sectionId: 'kernkwadrant' },
          { label: 'X-factor', sectionId: 'xfactor' },
        ],
      },
      {
        label: 'WPL2',
        routeName: 'wpl2',
        overviewSectionId: 'wpl2-case',
        links: [
          { label: 'Casebeschrijving', sectionId: 'wpl2-case' },
          { label: 'Mijn aandeel', sectionId: 'wpl2-aandeel' },
          { label: 'Focus opdracht', sectionId: 'wpl2-focus' },
          { label: 'OLR rollen', sectionId: 'wpl2-rollen' },
          { label: 'Proces', sectionId: 'wpl2-opdrachten' },
          { label: 'AIM-reflectie', sectionId: 'wpl2-aim' },
          { label: 'Kernkwadranten', sectionId: 'wpl2-kernkwadrant' },
          { label: 'X-factor', sectionId: 'wpl2-xfactor' },
        ],
      },
    ],
  }),
})
