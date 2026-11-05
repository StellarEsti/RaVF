<script setup>
import { asset } from "@/data/project";
import Icon from "../Icon.vue";
import DopplerExplorer from "../DopplerExplorer.vue";
const stages = [
  {
    title: "Physics-aware spectral encoding",
    text: "Range-adaptive reweighting and coordinate-conditioned encoding account for propagation attenuation and non-uniform angular sampling in the native radar grid.",
  },
  {
    title: "Spatial-Doppler factorization",
    text: "Occupancy-guided Doppler queries and ego-conditioned alias inference separate ego-induced static motion from dynamic residuals.",
  },
  {
    title: "Ego-conditioned bidirectional flow",
    text: "A learned ego-conditioned transfer aligns backward flow with the forward frame. Anti-symmetric consistency guides flow fusion and occupancy refinement.",
  },
];
function expand() {
  window.dispatchEvent(
    new CustomEvent("ravf:figure", {
      detail: {
        src: asset("images/method_original.webp"),
        title: "Figure 2. System Overview",
        caption:
          "RaVF combines aliasing-aware spatial-Doppler factorization with ego-conditioned bidirectional flow estimation.",
      },
    }),
  );
}
</script>

<template>
  <section id="method" class="academic-section">
    <div class="container">
      <h2 class="academic-title">System Overview</h2>
      <p class="section-introduction reading-width">
        RaVF takes two consecutive radar power cubes and folded Doppler maps as
        input. A shared spectral representation supports joint estimation of ego
        velocity, scene occupancy, and dynamic velocity fields.
      </p>
      <figure class="paper-figure system-figure">
        <button
          class="paper-figure-button"
          aria-label="Expand RaVF architecture"
          @click="expand"
        >
          <img
            :src="asset('images/method_original.webp')"
            alt="RaVF system: radar spectra enter a shared physics-aware encoder, occupancy-guided Doppler querying, ego-Doppler factorization, bidirectional flow estimation, and occupancy refinement"
            width="3200"
            height="1606"
            loading="lazy"
          /><span class="figure-expand"
            ><Icon name="expand" :size="16" />Expand figure</span
          >
        </button>
        <figcaption>
          <span
            ><strong>Figure 2.</strong> An overview of the RaVF pipeline.
            Spatial-Doppler factorization provides occupancy-supported motion
            cues; ego-conditioned bi-flow estimation reconciles the two temporal
            directions and refines occupancy.</span
          >
        </figcaption>
      </figure>
      <ol class="method-components">
        <li v-for="stage in stages" :key="stage.title">
          <h3>{{ stage.title }}</h3>
          <p>{{ stage.text }}</p>
        </li>
      </ol>
      <DopplerExplorer />
    </div>
  </section>
</template>
