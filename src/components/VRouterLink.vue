<script lang="ts" setup>
import { RouterLink, RouterLinkProps } from "vue-router";

defineProps<RouterLinkProps>();
</script>
<template>
  <a
    v-if="typeof to === 'string' && to.startsWith('http')"
    :href="to"
    target="_blank"
    class="inline-block bg-sky-50 no-underline px-3 py-1 rounded text-gray-600"
  >
    <slot />
  </a>
  <RouterLink
    v-bind="$props"
    class="inline-block bg-sky-50 no-underline px-3 py-1 rounded text-gray-600 hover:text-black active:text-blue-600 visited:text-purple-600"
  >
    <slot />
  </RouterLink>
</template>
<style lang="scss" scoped></style>
