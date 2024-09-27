<script lang="ts" setup>
import { marked } from "marked";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const dirname = route.params.dirname;
const filename = route.params.filename;

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
  loadMarkdownFile(`/${dirname}/${filename}`);
});
</script>
<template>
  <section
    class="max-w-[1024px] mx-auto px-2"
    v-html="parsedMarkdown"
  ></section>
</template>
<style lang="scss" scoped></style>
