<script lang="ts" setup>
import VRouterLink from "@/components/VRouterLink.vue";
import { routerInfo } from "@/router";
import VCollapse from "@/components/VCollapse.vue";
import menu from "./menu.json";
</script>
<template>
  <section class="max-w-[1024px] mx-auto flex flex-col gap-4">
    <template v-for="item in menu" :key="item.title">
      <VCollapse v-if="item.links?.length" :title="item.title.substring(3)">
        <div class="flex gap-3 flex-wrap">
          <VRouterLink
            v-for="link in item.links"
            :key="link"
            :to="{
              name: routerInfo.detail.name,
              params: {
                dirname: item.title,
                filename: link
              }
            }"
          >
            {{ link.substring(3, link.length - 3) }}
          </VRouterLink>
        </div>
      </VCollapse>
    </template>
  </section>
</template>
<style lang="scss" scoped></style>
