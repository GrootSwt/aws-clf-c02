<script lang="ts" setup>
import { RouterLink, RouterLinkProps } from "vue-router";

defineProps<RouterLinkProps>();
</script>
<template>
  <a
    v-if="typeof to === 'string' && to.startsWith('http')"
    :href="to"
    target="_blank"
  >
    <slot />
  </a>
  <RouterLink v-else v-bind="$props">
    <slot />
  </RouterLink>
</template>
<style lang="scss" scoped></style>
