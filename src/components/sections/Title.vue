<script setup>
import Icon from "../Icon.vue";
import {
  authors,
  institutions,
  asset,
  paperUrl,
  codeUrl,
} from "@/data/project";
function openPoster() {
  window.dispatchEvent(
    new CustomEvent("ravf:figure", {
      detail: {
        src: asset("images/poster.webp"),
        title: "RaVF · NeurIPS 2026 poster",
        caption:
          "RaVF: Learning Radar Velocity Fields via Spatial-Doppler Guidance",
      },
    }),
  );
}
</script>

<template>
  <div class="hero container">
    <div class="venue-label">NeurIPS 2026</div>
    <h1>
      <span class="paper-name">Ra<span>VF</span></span
      ><span class="title-colon">:</span> Learning Radar Velocity Fields<br
        class="title-break"
      />
      via Spatial-Doppler Guidance
    </h1>
    <div class="author-list">
      <a
        v-for="author in authors"
        :key="author.name"
        :href="author.url"
        :target="author.url.startsWith('https:') ? '_blank' : undefined"
        rel="noopener noreferrer"
        >{{ author.name }}<sup>{{ author.affiliation }}</sup></a
      >
    </div>
    <div class="institution-list">
      <a
        v-for="institution in institutions"
        :key="institution.id"
        :href="institution.url"
        target="_blank"
        rel="noopener noreferrer"
        ><sup>{{ institution.id }}</sup
        >{{ institution.name }}</a
      >
    </div>
    <p class="author-notes">
      <span>* Equal contribution</span><span>† Corresponding author</span>
    </p>
    <div class="resource-links">
      <a
        class="button button-primary"
        :href="paperUrl"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon name="paper" />Paper<Icon name="arrow" :size="14"
      /></a>
      <a
        class="button"
        :href="codeUrl"
        target="_blank"
        rel="noopener noreferrer"
        ><Icon name="code" />Code<Icon name="arrow" :size="14"
      /></a>
      <button class="button" @click="openPoster">
        <Icon name="image" />Poster
      </button>
      <a class="button" href="#citation"
        ><span class="bib-icon" aria-hidden="true">{ }</span>BibTeX</a
      >
    </div>
  </div>
</template>
