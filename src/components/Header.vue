<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Icon from "./Icon.vue";
import { codeUrl } from "@/data/project";
const active = ref("abstract");
const menuOpen = ref(false);
const links = [
  { id: "abstract", text: "Abstract" },
  { id: "motivation", text: "Motivation" },
  { id: "method", text: "System" },
  { id: "qualitative", text: "Results" },
  { id: "citation", text: "BibTeX" },
];
let observer;
onMounted(() => {
  observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) active.value = entry.target.id;
      }),
    { rootMargin: "-15% 0px -65% 0px" },
  );
  links.forEach(({ id }) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
});
onUnmounted(() => observer?.disconnect());
</script>

<template>
  <a class="skip-link" href="#main-content">Skip to content</a>
  <header class="site-header">
    <div class="header-inner">
      <a class="brand" href="#overview" aria-label="RaVF home">
        <svg
          class="brand-mark"
          width="28"
          height="28"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path
            d="M5 26a23 23 0 0 1 22-22M5 26a16 16 0 0 1 15-15M5 26a9 9 0 0 1 8-8"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          />
          <path d="m5 26 18-8" stroke="currentColor" stroke-width="2" />
          <circle cx="23" cy="18" r="3" fill="currentColor" />
        </svg>
        <span>Ra<span class="accent">VF</span></span
        ><span class="brand-divider"></span
        ><span class="brand-venue">NeurIPS 2026</span>
      </a>
      <nav class="desktop-nav" aria-label="Main navigation">
        <a
          v-for="link in links"
          :key="link.id"
          :href="`#${link.id}`"
          :class="{ active: active === link.id }"
          >{{ link.text }}</a
        >
      </nav>
      <a
        class="header-code"
        :href="codeUrl"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon name="code" :size="17" /><span>Code</span
        ><Icon name="arrow" :size="13"
      /></a>
      <button
        class="menu-toggle"
        :aria-expanded="menuOpen"
        aria-controls="mobile-nav"
        aria-label="Toggle navigation"
        @click="menuOpen = !menuOpen"
      >
        <Icon :name="menuOpen ? 'close' : 'menu'" />
      </button>
    </div>
    <nav
      v-if="menuOpen"
      id="mobile-nav"
      class="mobile-nav"
      aria-label="Mobile navigation"
    >
      <a
        v-for="link in links"
        :key="link.id"
        :href="`#${link.id}`"
        @click="menuOpen = false"
        >{{ link.text }}</a
      >
    </nav>
  </header>
</template>
