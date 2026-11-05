export const colors = {
  ours: "#2558a3",
  text: "#172c37",
  muted: "#5d6c73",
  grid: "#e8eeed",
  purple: "#9288af",
};
export const chartBase = {
  animation:
    typeof window === "undefined" ||
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  animationDuration: 500,
  animationDurationUpdate: 350,
  textStyle: {
    fontFamily: "Arial, sans-serif",
    color: colors.text,
    fontSize: 12,
  },
  tooltip: {
    trigger: "axis",
    backgroundColor: "#fff",
    borderColor: "#dde5e2",
    padding: [12, 16],
    textStyle: { color: colors.text, fontSize: 12 },
    extraCssText: "border-radius:8px;box-shadow:0 6px 20px #152d3510;",
    confine: true,
  },
  aria: { enabled: true },
};
export const numberAxis = (name, extra = {}) => ({
  type: "value",
  name,
  nameTextStyle: { color: colors.muted, align: "right", padding: [0, 0, 6, 0] },
  nameLocation: "end",
  splitLine: { lineStyle: { color: colors.grid } },
  axisLabel: { color: colors.muted },
  ...extra,
});
