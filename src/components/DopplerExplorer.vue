<script setup>
import { ref, computed } from "vue";
import Chart from "./Chart.vue";
import Math from "./Math.vue";
import Icon from "./Icon.vue";
import { chartBase, colors, numberAxis } from "@/data/charts";
const forward = ref(8);
const lateral = ref(1);
const vmax = 1.92;
const equation = String.raw`\widetilde{v}_r=\left((v_r+v_{\max})\bmod 2v_{\max}\right)-v_{\max}`;
const samples = computed(() =>
  Array.from({ length: 213 }, (_, i) => {
    const angle = -53 + i * 0.5,
      rad = (angle * globalThis.Math.PI) / 180;
    const radial = -(
      forward.value * globalThis.Math.cos(rad) +
      lateral.value * globalThis.Math.sin(rad)
    );
    const folded =
      ((((radial + vmax) % (2 * vmax)) + 2 * vmax) % (2 * vmax)) - vmax;
    return { angle, radial, folded };
  }),
);
const option = computed(() => ({
  ...chartBase,
  grid: { left: 12, right: 25, top: 38, bottom: 42, containLabel: true },
  legend: {
    right: 0,
    top: 0,
    icon: "roundRect",
    itemWidth: 17,
    itemHeight: 3,
    textStyle: { color: colors.muted, fontSize: 10 },
  },
  xAxis: numberAxis("Azimuth (°)", {
    min: -53,
    max: 53,
    splitNumber: 4,
    nameLocation: "middle",
    nameGap: 30,
    nameTextStyle: { color: colors.muted, fontSize: 10 },
    splitLine: { show: false },
    axisLine: { show: true, lineStyle: { color: colors.grid } },
  }),
  yAxis: numberAxis("m/s", { min: -16, max: 5, interval: 4 }),
  tooltip: {
    ...chartBase.tooltip,
    trigger: "axis",
    formatter: (params) =>
      `${params[0]?.value[0]}° azimuth<br/>${params.map((p) => `${p.marker} ${p.seriesName}: <strong>${p.value[1]?.toFixed(2)} m/s</strong>`).join("<br/>")}`,
  },
  series: [
    {
      name: "Static radial velocity",
      type: "line",
      showSymbol: false,
      data: samples.value.map((s) => [s.angle, s.radial]),
      lineStyle: { color: colors.ours, width: 2.5 },
      itemStyle: { color: colors.ours },
    },
    {
      name: "Folded Doppler",
      type: "line",
      showSymbol: false,
      data: samples.value.flatMap((s, i, a) =>
        i && globalThis.Math.abs(s.folded - a[i - 1].folded) > vmax
          ? [
              [s.angle - 0.01, null],
              [s.angle, s.folded],
            ]
          : [[s.angle, s.folded]],
      ),
      lineStyle: { color: colors.purple, width: 2 },
      itemStyle: { color: colors.purple },
      markLine: {
        silent: true,
        symbol: "none",
        lineStyle: { type: "dashed", color: "#c4ccce", width: 1 },
        label: { show: false },
        data: [{ yAxis: vmax }, { yAxis: -vmax }],
      },
    },
  ],
}));
</script>

<template>
  <details class="doppler-explorer">
    <summary>
      <span
        ><span class="explorer-tag">Doppler geometry</span>Explore velocity
        folding</span
      ><Icon name="down" :size="16" />
    </summary>
    <div class="explorer-body">
      <div class="explorer-controls">
        <h3>One radial measurement.<br />Multiple velocity hypotheses.</h3>
        <p>
          Static Doppler is the negative line-of-sight projection of ego
          velocity. Nyquist folding maps different radial velocities to the same
          measured interval.
        </p>
        <label class="range-label" for="forward-speed"
          ><span>Forward ego velocity</span
          ><output for="forward-speed"
            >{{ Number(forward).toFixed(1) }} m/s</output
          ></label
        ><input
          id="forward-speed"
          v-model.number="forward"
          type="range"
          min="0"
          max="14"
          step="0.1"
        /><label class="range-label" for="lateral-speed"
          ><span>Lateral ego velocity</span
          ><output for="lateral-speed"
            >{{ Number(lateral).toFixed(1) }} m/s</output
          ></label
        ><input
          id="lateral-speed"
          v-model.number="lateral"
          type="range"
          min="-3"
          max="3"
          step="0.1"
        /><button
          class="text-button"
          @click="
            forward = 8;
            lateral = 1;
          "
        >
          Reset velocities
        </button>
      </div>
      <div class="explorer-plot">
        <Chart
          :option="option"
          :height="290"
          label="Analytic line-of-sight projection of ego velocity and its folded Doppler response at zero elevation"
        /><Math :tex="equation" />
        <p>
          Static-scene geometry at zero elevation; v<sub>max</sub> = 1.92 m/s.
          Analytic curves illustrate Doppler ambiguity and are not experimental
          predictions.
        </p>
      </div>
    </div>
  </details>
</template>
