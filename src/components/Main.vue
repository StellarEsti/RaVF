<script setup>
import Title from "./sections/Title.vue";
import Qualitative from "./sections/Qualitative.vue";
import Abstract from "./sections/Abstract.vue";
import Motivation from "./sections/Motivation.vue";
import Method from "./sections/Method.vue";
import BibTeX from "./sections/BibTeX.vue";
import Icon from "./Icon.vue";
import { asset } from "@/data/project";
function openQualitative() {
  window.dispatchEvent(
    new CustomEvent("ravf:figure", {
      detail: {
        src: asset("images/qualitative_original.webp"),
        title: "Figure 3. Qualitative Results",
        caption:
          "Occupancy, static field, and dynamic field. Columns: LiDAR, RaVF, RadarHD, CFAR, and RPDNet.",
      },
    }),
  );
}
</script>

<template>
  <main id="main-content">
    <section id="overview"><Title /></section>
    <Abstract />
    <Motivation />
    <Method />
    <section id="qualitative" class="academic-section">
      <div class="container">
        <h2 class="academic-title">Qualitative Results</h2>
        <p class="section-introduction reading-width">
          Comparison of scene occupancy, static motion, and dynamic velocity
          fields. LiDAR provides the reference; RaVF is compared with RadarHD,
          CFAR, and RPDNet.
        </p>
        <figure class="paper-figure qualitative-paper-figure">
          <div
            class="figure-scroll"
            role="region"
            aria-label="Qualitative comparison figure"
            tabindex="0"
          >
            <button
              class="paper-figure-button"
              aria-label="Expand complete qualitative results"
              @click="openQualitative"
            >
              <img
                :src="asset('images/qualitative_original.webp')"
                alt="Figure 3. Five columns compare LiDAR, RaVF, RadarHD, CFAR, and RPDNet. The three rows show scene occupancy, static Doppler, and dynamic velocity fields."
                width="4800"
                height="2700"
                loading="lazy"
              /><span class="figure-expand"
                ><Icon name="expand" :size="16" />Expand figure</span
              >
            </button>
          </div>
          <figcaption>
            <span
              ><strong>Figure 3.</strong> Qualitative comparison. Columns:
              LiDAR, RaVF, RadarHD, CFAR, and RPDNet. Rows: occupancy, static
              field, and dynamic field. RaVF recovers scene structure and
              coherent object-level motion.</span
            >
          </figcaption>
        </figure>
      </div>
      <details class="comparison-details container">
        <summary>
          Interactive comparison: occupancy and dynamic velocity fields<Icon
            name="down"
            :size="16"
          />
        </summary>
        <Qualitative />
      </details>
    </section>
    <BibTeX />
  </main>
</template>
