<script setup>
import { asset } from "@/data/project";
import Icon from "../Icon.vue";
function expand() {
  window.dispatchEvent(
    new CustomEvent("ravf:figure", {
      detail: {
        src: asset("images/motivation.webp"),
        title: "Figure 1. Motivation",
        caption:
          "Folded ego-Doppler consistency and ego-conditioned anti-symmetric bi-flow.",
      },
    }),
  );
}
</script>

<template>
  <section id="motivation" class="academic-section">
    <div class="container">
      <h2 class="academic-title">Motivation</h2>
      <p class="section-introduction reading-width">
        Radar motion estimation is affected by range-dependent attenuation,
        angular quantization, and Doppler ambiguity. RaVF draws on two physical
        consistency priors to separate ego-induced static motion from dynamic
        motion and reconcile velocity estimates across consecutive frames.
      </p>
      <figure class="paper-figure motivation-figure">
        <button
          class="paper-figure-button"
          aria-label="Expand motivation figure"
          @click="expand"
        >
          <img
            :src="asset('images/motivation.webp')"
            alt="Figure 1: static returns follow the folded projection of ego motion, moving objects produce local residuals, and forward and backward flow exhibit ego-conditioned anti-symmetry"
            width="2387"
            height="978"
            loading="lazy"
          /><span class="figure-expand"
            ><Icon name="expand" :size="16" />Expand figure</span
          >
        </button>
        <figcaption>
          <span
            ><strong>Figure 1.</strong> The two physical priors underlying RaVF:
            (a) folded ego-Doppler consistency and (b) ego-conditioned
            anti-symmetric bi-flow.</span
          >
        </figcaption>
      </figure>
      <div class="motivation-observations">
        <div>
          <h3>(a) Folded ego-Doppler consistency</h3>
          <p>
            Static radar returns agree with the wrapped line-of-sight projection
            of ego velocity, even under Nyquist-induced velocity folding.
            Dynamic objects appear as localized residual deviations from this
            static explanation.
          </p>
        </div>
        <div>
          <h3>(b) Ego-conditioned anti-symmetric bi-flow</h3>
          <p>
            After transferring backward flow into the forward frame using an
            ego-conditioned operator, forward flow should be consistent with its
            negative counterpart. This relation provides a soft constraint for
            bidirectional motion estimation.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
