<script lang="ts" setup>
import { marked } from "marked";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import menu from "./menu.json";
import { routerInfo } from "@/router";

const route = useRoute();
const router = useRouter();

const dirIndex = route.params.dir_index;
const fileIndex = route.params.file_index;

const markdownContent = ref<string>();
const parsedMarkdown = ref<string>();

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
onMounted(() => {
  const dir = menu.find((item) => item.title.startsWith(dirIndex as string));
  if (!dir) {
    router.replace({ name: routerInfo.home.name });
    return;
  }
  const filename = dir.links.find((item) =>
    item.startsWith(fileIndex as string)
  );
  if (!filename) {
    router.replace({ name: routerInfo.home.name });
    return;
  }
  loadMarkdownFile(`/documents/${dir.title}/${filename}`);
});
</script>
<template>
  <section
    class="max-w-[1024px] mx-auto px-2"
    v-html="parsedMarkdown"
  ></section>
</template>
<style lang="scss" scoped></style>
