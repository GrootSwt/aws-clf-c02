<script lang="ts" setup>
import { RouterLinkProps } from "vue-router";
import VRouterLink from "./VRouterLink.vue";
import { nextTick, useTemplateRef } from "vue";
import VSvg from "./VIcon.vue";
import IconCurrent from "@/assets/images/svgs/current.svg?raw";

const { name } = defineProps<
  RouterLinkProps & {
    name: string;
  }
>();

const navItemRef = useTemplateRef("navItemRef");
const isPrevAccess = localStorage.getItem("prev-menu-item") === name;

if (isPrevAccess) {
  nextTick(() => {
    if (navItemRef.value) {
      (navItemRef.value.$el as HTMLAnchorElement).scrollIntoView({
        block: "center"
      });
    }
  });
}
</script>
<template>
  <VRouterLink
    ref="navItemRef"
    v-bind="$props"
    class="relative inline-block no-underline px-3 py-1 rounded text-gray-600"
    :class="{
      'bg-green-400 bg-opacity-50': isPrevAccess,
      'bg-sky-50': !isPrevAccess
    }"
  >
    <span>{{ name }}</span>
    <VSvg
      v-if="isPrevAccess"
      :icon="IconCurrent"
      class="!absolute -top-2 -right-2 text-green-700"
      :size="24"
    />
  </VRouterLink>
</template>
<style lang="scss" scoped></style>
