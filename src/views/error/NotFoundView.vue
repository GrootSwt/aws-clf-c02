<script lang="ts" setup>
import VRouterLink from "@/components/VRouterLink.vue";
import { routerInfo } from "@/router";
</script>
<template>
  <section class="flex flex-col justify-center items-center h-dvh">
    <h1>Not Found View</h1>
    <VRouterLink :to="{ name: routerInfo.home.name }" replace>Home</VRouterLink>
  </section>
</template>
<style lang="scss" scoped></style>
