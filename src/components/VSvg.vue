<script lang="ts" setup>
import { computed, StyleValue } from "vue";

type Props = {
  raw: string;
  size?: string | number;
  color?: string;
};
const { size, color } = defineProps<Props>();

const style = computed<StyleValue>(() => {
  const result: StyleValue = {};
  if (size) {
    result.fontSize = typeof size === "string" ? size : size + "px";
  }
  if (color) {
    result.color = color;
  }
  return result;
});
</script>
<template>
  <i class="svg-box" :style="style" v-html="raw"></i>
</template>
<style lang="scss" scoped>
.svg-box {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  line-height: 1;
  fill: currentColor;
  :deep(svg) {
    width: 1em;
    height: 1em;
  }
}
</style>
