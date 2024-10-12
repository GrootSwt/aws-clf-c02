<script lang="ts" setup></script>
<template>
  <section>
    <div class="skeleton-loader w-52 h-4 my-5 rounded-full"></div>
    <article class="flex flex-col gap-3">
      <div
        v-for="i in 2"
        :key="i"
        class="skeleton-loader h-3 rounded-full"
      ></div>
      <div class="skeleton-loader w-1/3 h-3 rounded-full"></div>
    </article>
  </section>
</template>
<style lang="scss" scoped></style>
