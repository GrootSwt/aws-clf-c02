<script lang="ts" setup></script>
<template>
  <span class="loading__spinner">
    <svg class="loading__circular" viewBox="25 25 50 50">
      <circle cx="50" cy="50" r="20" fill="none"></circle>
    </svg>
  </span>
</template>
<style lang="scss" scoped>
.loading__spinner {
  width: 1em;
  height: 1em;
  vertical-align: middle;
  animation: van-rotate 1.5s linear infinite;
  max-width: 100%;
  max-height: 100%;
  display: inline-block;
  position: relative;
}

.loading__circular circle {
  stroke: currentColor;
  stroke-width: 3px;
  stroke-linecap: round;
  animation: van-circular 1.5s ease-in-out infinite;
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
