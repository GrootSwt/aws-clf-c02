<script lang="ts" setup>
import { ref, watch } from "vue";
import VDrawer from "@/components/VDrawer.vue";
import VButton from "@/components/VButton.vue";
import IconMenu from "@/assets/images/svgs/menu.svg?raw";
import VMenu from "./VMenu.vue";
import { useRoute } from "vue-router";

const route = useRoute();
const visible = ref(false);

watch(
  () => route.fullPath,
  () => {
    visible.value = false;
  }
);
</script>
<template>
  <VButton
    :icon="IconMenu"
    size="large"
    class="fixed left-0 top-1/4 bg-white dark:bg-black bg-opacity-90 text-opacity-90 !h-12 rounded-r-lg shadow"
    @click="visible = !visible"
  />
  <VDrawer v-model:visible="visible">
    <VMenu />
  </VDrawer>
</template>
<style lang="scss" scoped></style>
