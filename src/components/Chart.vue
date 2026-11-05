<script setup>
import { ref, watch, onMounted, onUnmounted } from "vue";
const props = defineProps({
  option: Object,
  label: String,
  height: { type: [String, Number], default: 340 },
});
const container = ref(null);
let chart,
  observer,
  resizeObserver,
  disposed = false;
onMounted(() => {
  observer = new IntersectionObserver(
    async ([entry]) => {
      if (!entry.isIntersecting || chart) return;
      observer.disconnect();
      const { createChart } = await import("./chart-engine.js");
      if (disposed) return;
      chart = createChart(container.value);
      chart.setOption(props.option, true);
      resizeObserver = new ResizeObserver(() => chart?.resize());
      resizeObserver.observe(container.value);
    },
    { rootMargin: "450px" },
  );
  observer.observe(container.value);
});
watch(
  () => props.option,
  (option) => chart?.setOption(option, true),
  { deep: true },
);
onUnmounted(() => {
  disposed = true;
  observer?.disconnect();
  resizeObserver?.disconnect();
  chart?.dispose();
});
</script>

<template>
  <div
    ref="container"
    class="research-chart"
    :style="{ height: `${height}px` }"
    role="img"
    :aria-label="label"
  ></div>
</template>
