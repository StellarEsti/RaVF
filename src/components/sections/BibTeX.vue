<script setup>
import { ref, onUnmounted } from "vue";
import { bibtex, paperUrl, codeUrl } from "@/data/project";
import Icon from "../Icon.vue";
const copied = ref(false);
const failed = ref(false);
const code = ref(null);
let timer;
async function copy() {
  failed.value = false;
  try {
    if (navigator.clipboard?.writeText)
      await navigator.clipboard.writeText(bibtex);
    else {
      const area = document.createElement("textarea");
      area.value = bibtex;
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      area.remove();
      if (!ok) throw new Error("Copy unavailable");
    }
    copied.value = true;
    clearTimeout(timer);
    timer = setTimeout(() => {
      copied.value = false;
    }, 2200);
  } catch {
    failed.value = true;
    const selection = window.getSelection(),
      range = document.createRange();
    range.selectNodeContents(code.value);
    selection.removeAllRanges();
    selection.addRange(range);
  }
}
onUnmounted(() => clearTimeout(timer));
</script>

<template>
  <section id="citation" class="section citation-section">
    <div class="container citation-layout">
      <div>
        <span class="eyebrow">Resources</span>
        <h2>BibTeX</h2>
        <p>If you find this work useful, please consider citing our paper.</p>
        <div class="citation-links">
          <a
            class="text-link"
            :href="paperUrl"
            target="_blank"
            rel="noopener noreferrer"
            ><Icon name="paper" :size="17" />Paper<Icon
              name="arrow"
              :size="14" /></a
          ><a
            class="text-link"
            :href="codeUrl"
            target="_blank"
            rel="noopener noreferrer"
            ><Icon name="code" :size="17" />Source code<Icon
              name="arrow"
              :size="14"
          /></a>
        </div>
      </div>
      <div class="bibtex-block">
        <div class="bibtex-toolbar">
          <span>BibTeX</span
          ><button class="copy-button" @click="copy">
            <Icon :name="copied ? 'check' : 'copy'" :size="15" />{{
              copied ? "Copied" : "Copy citation"
            }}
          </button>
        </div>
        <pre><code ref="code">{{ bibtex }}</code></pre>
        <span class="sr-only" role="status">{{
          copied
            ? "Citation copied to clipboard."
            : failed
              ? "Citation selected. Press Control C or Command C to copy."
              : ""
        }}</span>
        <p v-if="failed" class="copy-fallback">
          Citation selected. Press Ctrl+C or ⌘C to copy.
        </p>
      </div>
    </div>
  </section>
</template>
