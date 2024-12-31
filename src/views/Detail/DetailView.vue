<script lang="ts" setup>
import { marked } from "marked";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import menu from "@/assets/json/menu.json";
import { routerInfo } from "@/router";
import VRouterLink from "@/components/common/VRouterLink.vue";
import utils from "@/utils";
import { MenuItemInfo } from "@/types/menu";
import VMenuDrawer from "@/layout/VMenuDrawer.vue";
import { StorageSerializers, useLocalStorage } from "@vueuse/core";
import SkeletonLoader from "./components/SkeletonLoader.vue";

const menuItemInfoList = utils.business.getMenuItemInfoList(menu);

const activeMenuInfo = useLocalStorage<MenuItemInfo>("active-menu-info", null, {
  serializer: StorageSerializers.object
});

const route = useRoute();
const router = useRouter();

let dirIndex = route.params.dir_index as string;
let fileIndex = route.params.file_index as string;

const content = ref();

const nextMenuItem = ref<MenuItemInfo | null>(null);

function getNextMenuItem() {
  const index = menuItemInfoList.findIndex(
    (item) => item.dirIndex === dirIndex && item.fileIndex === fileIndex
  );
  if (index === -1 || index === menuItemInfoList.length - 1) {
    return null;
  }
  return menuItemInfoList[index + 1];
}

async function loadMarkdownFile(filePath: string) {
  try {
    content.value = undefined;
    const response = await fetch(filePath);
    content.value = await marked.parse(await response.text());
  } catch (error) {
    console.error("Failed to load markdown file:", error);
    router.replace({ name: routerInfo.notFound.name });
  }
}

function init() {
  const currentMenuInfo = menuItemInfoList.find(
    (item) => item.dirIndex === dirIndex && item.fileIndex === fileIndex
  );
  if (!currentMenuInfo) {
    router.replace({ name: routerInfo.home.name });
    return null;
  }
  const { title, filename } = currentMenuInfo;
  activeMenuInfo.value = currentMenuInfo;
  loadMarkdownFile(
    `${import.meta.env.BASE_URL}/documents/${title}/${filename}`
  );
  nextMenuItem.value = getNextMenuItem();
}

onMounted(() => {
  init();
});

watch(
  () => route.fullPath,
  () => {
    dirIndex = route.params.dir_index as string;
    fileIndex = route.params.file_index as string;
    window.scrollTo(0, 0);

    init();
  }
);
</script>
<template>
  <section class="flex flex-col max-w-[1024px] mx-auto px-3">
    <div v-show="content">
      <custom-article :content="content" />
      <div
        class="flex justify-between items-center my-8 text-blue-400 underline"
      >
        <VRouterLink :to="{ name: routerInfo.home.name }">首页</VRouterLink>
        <VRouterLink
          v-if="nextMenuItem"
          :to="{
            name: routerInfo.detail.name,
            params: {
              dir_index: nextMenuItem.dirIndex,
              file_index: nextMenuItem.fileIndex
            }
          }"
          replace
        >
          下一页
        </VRouterLink>
      </div>
    </div>
    <SkeletonLoader v-show="!content" />
    <VMenuDrawer />
  </section>
</template>
<style lang="scss" scoped></style>
