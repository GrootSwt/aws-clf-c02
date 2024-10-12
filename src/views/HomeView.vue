<script lang="ts" setup>
import VMenu from "@/layout/VMenu.vue";
import useActiveMenu from "@/hooks/useActiveMenu";
import { onMounted } from "vue";

const activeMenu = useActiveMenu();
onMounted(() => {
  activeMenu.moveActiveMenuToCenter();
});
</script>
<template>
  <VMenu />
</template>
<style lang="scss" scoped></style>
