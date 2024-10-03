<script lang="ts" setup>
import { marked } from "marked";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import menu from "@/assets/json/menu.json";
import { routerInfo } from "@/router";
import VRouterLink from "@/components/VRouterLink.vue";
import utils from "@/utils";
import { MenuItemInfo } from "@/types/menu";
import VLoading from "@/components/VLoading.vue";
import VMenuDrawer from "@/layout/VMenuDrawer.vue";
import { StorageSerializers, useLocalStorage } from "@vueuse/core";

const menuItemInfoList = utils.business.getMenuItemInfoList(menu);

const activeMenuInfo = useLocalStorage<MenuItemInfo>("active-menu-info", null, {
  serializer: StorageSerializers.object
});

const route = useRoute();
const router = useRouter();

let dirIndex = route.params.dir_index as string;
let fileIndex = route.params.file_index as string;

const markdownContent = ref<string>();
const parsedMarkdown = ref<string>();

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
    const response = await fetch(filePath);
    const markdown = await response.text();
    markdownContent.value = markdown;
    parsedMarkdown.value = await marked.parse(markdown);
  } catch (error) {
    console.error("Failed to load markdown file:", error);
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
  loadMarkdownFile(`/documents/${title}/${filename}`);
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
    nextMenuItem.value = null;
    markdownContent.value = undefined;
    parsedMarkdown.value = undefined;
    window.scrollTo(0, 0);

    init();
  }
);
</script>
<template>
  <section class="max-w-[1024px] mx-auto px-3">
    <template v-if="parsedMarkdown">
      <article v-html="parsedMarkdown"></article>
      <div class="flex justify-between items-center my-4">
        <VRouterLink :to="{ name: routerInfo.home.name }">Home</VRouterLink>
        <VRouterLink
          v-if="nextMenuItem"
          :to="{
            name: routerInfo.detail.name,
            params: {
              dir_index: nextMenuItem.dirIndex,
              file_index: nextMenuItem.fileIndex
            }
          }"
        >
          Next Page
        </VRouterLink>
      </div>
    </template>
    <VLoading v-else :size="48" class="mt-8" />
    <VMenuDrawer />
  </section>
</template>
<style lang="scss" scoped></style>
