<script lang="ts" setup>
const visible = defineModel<boolean>("visible", { required: true });
</script>
<template>
  <Teleport to="body">
    <section
      v-show="visible"
      class="fixed inset-0 bg-black bg-opacity-30"
    ></section>
  </Teleport>
</template>
<style lang="scss" scoped></style>
