<script setup>
import { institutions, asset } from "@/data/project";
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-institutions">
        <a
          v-for="institution in institutions"
          :key="institution.id"
          :href="institution.url"
          target="_blank"
          rel="noopener noreferrer"
          ><img
            :src="asset(`images/${institution.logo}.webp`)"
            :alt="`${institution.name} emblem`"
            width="44"
            height="44"
            loading="lazy"
          /><span>{{ institution.name }}</span></a
        >
      </div>
      <div class="footer-bottom">
        <span>RaVF · NeurIPS 2026</span
        ><span
          >Website adapted from
          <a
            href="https://github.com/JunyaoHu/academic-project-page-template-vue"
            target="_blank"
            rel="noopener noreferrer"
            >Academic Project Page Template Vue</a
          >
          ·
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            >CC BY-SA 4.0</a
          ></span
        ><a href="#overview">Back to top ↑</a>
      </div>
    </div>
  </footer>
</template>
