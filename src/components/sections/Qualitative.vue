<script setup>
import { ref } from "vue";
import { asset } from "@/data/project";
import Icon from "../Icon.vue";
const mode = ref("flow");
const compare = ref(false);
const position = ref(50);
const columns = [
  { key: "cfar", name: "CFAR", note: "Point-based input" },
  { key: "ravf", name: "RaVF", note: "Ours" },
  { key: "lidar", name: "LiDAR", note: "Reference" },
];
function image(key) {
  return asset(`images/${mode.value}_${key}.webp`);
}
function expand(key) {
  window.dispatchEvent(
    new CustomEvent("ravf:figure", {
      detail: {
        src: image(key),
        title: `${columns.find((c) => c.key === key).name} · ${mode.value === "flow" ? "Dynamic velocity field" : "Scene occupancy"}`,
        caption: "Qualitative result from Figure 3.",
      },
    }),
  );
}
</script>

<template>
  <figure class="qualitative container">
    <div class="figure-toolbar">
      <div class="segmented" role="group" aria-label="Qualitative result type">
        <button
          :class="{ selected: mode === 'flow' }"
          :aria-pressed="mode === 'flow'"
          @click="mode = 'flow'"
        >
          Velocity field</button
        ><button
          :class="{ selected: mode === 'occupancy' }"
          :aria-pressed="mode === 'occupancy'"
          @click="mode = 'occupancy'"
        >
          Occupancy
        </button>
      </div>
      <button
        class="compare-toggle"
        :aria-pressed="compare"
        @click="compare = !compare"
      >
        <span class="compare-glyph" aria-hidden="true">◧</span
        >{{ compare ? "Side by side" : "Compare" }}
      </button>
    </div>
    <div v-if="!compare" class="qualitative-grid">
      <div
        v-for="column in columns"
        :key="column.key"
        class="result-image"
        :class="{ ours: column.key === 'ravf' }"
      >
        <div class="image-label">
          <span>{{ column.name }}</span
          ><span>{{ column.note }}</span>
        </div>
        <button
          class="image-expand"
          :aria-label="`Expand ${column.name} ${mode === 'flow' ? 'velocity field' : 'occupancy'} result`"
          @click="expand(column.key)"
        >
          <img
            :src="image(column.key)"
            :alt="`${column.name} ${mode === 'flow' ? 'dynamic velocity field' : 'occupancy'} from the paper, Figure 3`"
            width="1440"
            :height="mode === 'flow' ? 1401 : 998"
            fetchpriority="high"
          /><span class="expand-icon"><Icon name="expand" :size="16" /></span>
        </button>
      </div>
    </div>
    <div v-else class="comparison-grid">
      <div class="comparison-panel">
        <div class="image-label">
          <span>CFAR <span class="vs">/</span> RaVF</span
          ><span>Drag to compare</span>
        </div>
        <div class="comparison-stage">
          <img :src="image('cfar')" alt="CFAR result" />
          <img
            class="comparison-overlay"
            :src="image('ravf')"
            alt="RaVF result"
            :style="{ clipPath: `inset(0 ${100 - position}% 0 0)` }"
          />
          <span class="comparison-method comparison-left">RaVF</span
          ><span class="comparison-method comparison-right">CFAR</span>
          <div class="comparison-handle" :style="{ left: `${position}%` }">
            <span>‹ ›</span>
          </div>
          <input
            v-model.number="position"
            class="comparison-range"
            type="range"
            min="0"
            max="100"
            aria-label="Reveal RaVF versus CFAR result"
          />
        </div>
      </div>
      <div class="result-image reference-panel">
        <div class="image-label"><span>LiDAR</span><span>Reference</span></div>
        <button
          class="image-expand"
          aria-label="Expand LiDAR reference"
          @click="expand('lidar')"
        >
          <img :src="image('lidar')" alt="LiDAR reference from Figure 3" /><span
            class="expand-icon"
            ><Icon name="expand" :size="16"
          /></span>
        </button>
      </div>
    </div>
    <figcaption>
      <span
        ><strong>Scene-level velocity fields from 4D radar.</strong> RaVF
        recovers object structure and coherent dynamic motion. LiDAR is shown as
        a reference.</span
      ><span class="figure-source">Figure 3</span>
    </figcaption>
  </figure>
</template>
