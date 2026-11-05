<script setup>
import { abstract } from "@/data/project";
</script>

<template>
  <section id="abstract" class="academic-section abstract-section">
    <div class="reading-width">
      <h2 class="academic-title">Abstract</h2>
      <p class="abstract-text">{{ abstract }}</p>
    </div>
  </section>
</template>
