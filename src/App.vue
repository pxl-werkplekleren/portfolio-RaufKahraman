<script setup>
import { nextTick } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import { usePortfolioStore } from './stores/portfolio'

const portfolio = usePortfolioStore()
const router = useRouter()
const mainNavLinks = [
  { label: 'Home', routeName: 'home', sectionId: 'main' },
  { label: 'Logboek', routeName: 'home', sectionId: 'logboek' },
  { label: 'Ontwikkeling', routeName: 'home', sectionId: 'ontwikkeling' },
  { label: 'Competenties', routeName: 'home', sectionId: 'competenties' },
]
const wplMenus = [
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
      { label: 'Focus opdracht', sectionId: 'wpl2-focus' },
      { label: 'OLR rollen', sectionId: 'wpl2-rollen' },
      { label: 'Proces', sectionId: 'wpl2-opdrachten' },
      { label: 'AIM-reflectie', sectionId: 'wpl2-aim' },
      { label: 'Kernkwadranten', sectionId: 'wpl2-kernkwadrant' },
      { label: 'X-factor', sectionId: 'wpl2-xfactor' },
    ],
  },
]

async function navigateToSection(routeName, sectionId) {
  if (router.currentRoute.value.name !== routeName) {
    await router.push({ name: routeName })
    await nextTick()
  }

  requestAnimationFrame(() => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  })

  closeMobileNav()
}

function handleMenuTitleClick(event, menu) {
  const details = event.currentTarget.parentElement

  if (details?.open) {
    event.preventDefault()
    navigateToSection(menu.routeName, menu.overviewSectionId)
  }
}

function scrollToTop() {
  navigateToSection('home', 'main')
}

function closeMobileNav() {
  document.querySelectorAll('.nav-details').forEach((details) => {
    details.open = false
  })
}
</script>

<template>
  <a class="skip-link" href="#main" @click.prevent="navigateToSection(router.currentRoute.value.name, 'main')">Ga naar inhoud</a>

  <header class="site-header">
    <div class="container header-inner">
      <a class="brand" href="#main" aria-label="Naar boven" @click.prevent="scrollToTop">
        <span class="brand-mark" aria-hidden="true">◆</span>
        <span class="brand-text">Portfolio</span>
      </a>

      <nav class="nav" aria-label="Hoofdnavigatie">
        <ul class="nav-menu">
          <li v-for="link in mainNavLinks" :key="link.sectionId">
            <a :href="`#${link.sectionId}`" @click.prevent="navigateToSection(link.routeName, link.sectionId)">{{ link.label }}</a>
          </li>
          <li v-for="menu in wplMenus" :key="menu.label">
            <details class="nav-more nav-details">
              <summary class="nav-summary" @click="handleMenuTitleClick($event, menu)">{{ menu.label }}</summary>
              <div class="nav-panel">
                <a
                  v-for="link in menu.links"
                  :key="link.sectionId"
                  :href="`#${link.sectionId}`"
                  @click.prevent="navigateToSection(menu.routeName, link.sectionId)"
                >
                  {{ link.label }}
                </a>
              </div>
            </details>
          </li>
        </ul>

        <details class="nav-details nav-mobile">
          <summary class="nav-summary">Navigatie</summary>
          <div class="nav-panel">
            <a
              v-for="link in mainNavLinks"
              :key="link.sectionId"
              :href="`#${link.sectionId}`"
              @click.prevent="navigateToSection(link.routeName, link.sectionId)"
            >
              {{ link.label }}
            </a>
            <template v-for="menu in wplMenus" :key="menu.label">
              <a
                class="nav-panel-heading"
                :href="`#${menu.overviewSectionId}`"
                @click.prevent="navigateToSection(menu.routeName, menu.overviewSectionId)"
              >
                {{ menu.label }}
              </a>
              <a
                v-for="link in menu.links"
                :key="`${menu.label}-${link.sectionId}`"
                class="nav-panel-sub"
                :href="`#${link.sectionId}`"
                @click.prevent="navigateToSection(menu.routeName, link.sectionId)"
              >
                {{ link.label }}
              </a>
            </template>
          </div>
        </details>
      </nav>
    </div>
  </header>

  <div class="content-shell">
    <RouterView />

    <footer class="site-footer">
      <div class="container footer-inner">
        <div class="footer-left">
          <p><strong>{{ portfolio.owner }}</strong> - Klas: {{ portfolio.classGroup }}</p>
        </div>
        <div class="footer-mid">
          <p class="muted">Opdracht portfolio</p>
        </div>
        <div class="footer-right">
          <button class="btn small" type="button" @click="scrollToTop">Terug naar boven ↑</button>
        </div>
      </div>
    </footer>
  </div>
</template>
