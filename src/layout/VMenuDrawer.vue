<script lang="ts" setup>
import { ref, watch } from "vue";
import VDrawer from "@/components/VDrawer.vue";
import VButton from "@/components/VButton.vue";
import IconMenu from "@/assets/images/svgs/menu.svg?raw";
import VMenu from "./VMenu.vue";
import { useRoute } from "vue-router";
import useActiveMenu from "@/hooks/useActiveMenu";

const { moveActiveMenuToCenter } = useActiveMenu();

const route = useRoute();
const visible = ref(false);

watch(
  () => visible.value,
  (next) => {
    if (next) {
      moveActiveMenuToCenter();
    }
  }
);
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
    class="fixed left-0 top-1/2 !bg-gray-100 !bg-opacity-70 dark:!bg-neutral-800 dark:!bg-opacity-70 !text-1c1c1c !text-opacity-70 dark:!text-f5f5f5 dark:!text-opacity-70 !h-12 rounded-r-lg shadow"
    @click="visible = !visible"
  />
  <VDrawer v-model:visible="visible">
    <VMenu replace />
  </VDrawer>
</template>
<style lang="scss" scoped></style>
