<script lang="ts" setup>
import { RouterLink, RouterLinkProps } from "vue-router";

defineProps<RouterLinkProps>();
</script>
<template>
  <a
    v-if="typeof to === 'string' && to.startsWith('http')"
    :href="to"
    target="_blank"
    class="text-1c1c1c dark:text-f5f5f5"
  >
    <slot />
  </a>
  <RouterLink v-else v-bind="$props" class="text-1c1c1c dark:text-f5f5f5">
    <slot />
  </RouterLink>
</template>
<style lang="scss" scoped></style>
