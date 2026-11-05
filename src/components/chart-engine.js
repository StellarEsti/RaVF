import { use, init } from "echarts/core";
import { SVGRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
import {
  GridComponent,
  TooltipComponent,
  LegendComponent,
  AriaComponent,
  MarkLineComponent,
} from "echarts/components";
use([
  SVGRenderer,
  LineChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  AriaComponent,
  MarkLineComponent,
]);
export const createChart = (element) =>
  init(element, null, { renderer: "svg" });
