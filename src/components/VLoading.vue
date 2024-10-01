<script lang="ts" setup>
import { computed, StyleValue } from "vue";

const { size } = defineProps<{
  size?: string | number;
}>();

const style = computed<StyleValue>(() => {
  const result: StyleValue = {};
  if (size) {
    result.fontSize = typeof size === "string" ? size : size + "px";
  }
  return result;
});
</script>
<template>
  <div class="flex justify-center items-center py-4" :style="style">
    <span class="loading__spinner">
      <svg class="loading__circular" viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none"></circle>
      </svg>
    </span>
  </div>
</template>
<style lang="scss" scoped>
.loading__spinner {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 1em;
  height: 1em;
  animation: loading-rotate 1.5s linear infinite;
}

.loading__circular circle {
  stroke: currentColor;
  stroke-width: 3px;
  stroke-linecap: round;
  animation: loading-circular 1.5s ease-in-out infinite;
}

@keyframes loading-rotate {
  0% {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes loading-circular {
  0% {
    stroke-dasharray: 1 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -40px;
  }
  to {
    stroke-dasharray: 90 150;
    stroke-dashoffset: -120px;
  }
}
</style>
