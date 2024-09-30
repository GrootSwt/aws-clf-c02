<script lang="ts" setup>
import VNavRouterLink from "@/components/VNavRouterLink.vue";
import { routerInfo } from "@/router";
import VCollapse from "@/components/VCollapse.vue";
import menu from "@/assets/json/menu.json";
</script>
<template>
  <section class="max-w-[1024px] mx-auto flex flex-col gap-4 p-3">
    <template v-for="item in menu" :key="item.title">
      <VCollapse v-if="item.links?.length" :title="item.title.substring(3)">
        <div class="flex gap-3 flex-wrap">
          <VNavRouterLink
            v-for="link in item.links"
            :key="link"
            :to="{
              name: routerInfo.detail.name,
              params: {
                dir_index: item.title.substring(0, 2),
                file_index: link.substring(0, 2)
              }
            }"
            :name="link"
          />
        </div>
      </VCollapse>
    </template>
  </section>
</template>
<style lang="scss" scoped></style>
