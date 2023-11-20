import { defineConfig } from "unocss/vite";
import {
  presetAttributify,
  presetIcons,
  presetUno,
  transformerDirectives,
} from "unocss";
import presetWind from "@unocss/preset-wind";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons(), presetWind()],
  transformers: [transformerDirectives()],
});
