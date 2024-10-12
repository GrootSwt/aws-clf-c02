<script lang="ts" setup>
import { RouterLinkProps } from "vue-router";
import VRouterLink from "@/components/common/VRouterLink.vue";
import VSvg from "@/components/common/VIcon.vue";
import IconCurrent from "@/assets/images/svgs/current.svg?raw";

const { name } = defineProps<
  RouterLinkProps & {
    name: string;
    isActive?: boolean;
  }
>();
</script>
<template>
  <VRouterLink
    ref="navItemRef"
    v-bind="$props"
    class="relative inline-block no-underline px-3 py-1 rounded text-1c1c1c dark:text-f5f5f5 shadow"
    :class="{
      'bg-green-400 dark:bg-blue-400 bg-opacity-50': isActive,
      'bg-sky-50 dark:bg-stone-800': !isActive
    }"
  >
    <span>{{ name }}</span>
    <VSvg
      v-if="isActive"
      :icon="IconCurrent"
      class="!absolute -top-2 -right-2 text-green-700 dark:text-blue-700"
      :size="24"
    />
  </VRouterLink>
</template>
<style lang="scss" scoped></style>
