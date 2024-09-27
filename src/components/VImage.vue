<script lang="ts" setup>
import { useIntersectionObserver } from "@vueuse/core";
import { computed, ref, StyleValue, useTemplateRef } from "vue";

type Props = {
  src: string;
  width?: string | number;
  height?: string | number;
  aspectRatio?: number;
  lazyLoad?: boolean;
  objectFit?: "contain" | "cover" | "fill";
  alt?: string;
};
const {
  width,
  height,
  aspectRatio,
  lazyLoad = true,
  objectFit = "cover"
} = defineProps<Props>();

const imgBoxStyle = computed<StyleValue>(() => {
  const result: StyleValue = {};
  if (width) {
    result["--width"] = typeof width === "string" ? width : width + "px";
  }
  if (height) {
    result["--height"] = typeof height === "string" ? height : height + "px";
  }
  if (aspectRatio) {
    result["--aspect-ratio"] = aspectRatio;
  }
  return result;
});
const imgStyle = computed<StyleValue>(() => {
  const result: StyleValue = {};
  if (objectFit) {
    result["--object-fit"] = objectFit;
  }
  return result;
});

const imageBoxRef = useTemplateRef("imageBoxRef");
const loading = ref(true);
const show = ref(!lazyLoad);

if (lazyLoad) {
  const { stop } = useIntersectionObserver(
    imageBoxRef,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        show.value = true;
        stop();
      }
    }
  );
}
</script>
<template>
  <div
    ref="imageBoxRef"
    v-loading="loading"
    class="img-box"
    :style="imgBoxStyle"
  >
    <img
      v-if="show"
      :draggable="false"
      :src="src"
      :alt="alt"
      :style="imgStyle"
      class="w-full h-full"
      @load="loading = false"
    />
  </div>
</template>
<style lang="scss" scoped>
.img-box {
  --width: initial;
  --height: initial;
  --aspect-ratio: initial;
  display: inline-block;
  overflow: hidden;
  width: var(--width);
  height: var(--height);
  aspect-ratio: var(--aspect-ratio);
  img {
    --object-fit: cover;
    object-fit: var(--object-fit);
  }
}
</style>
