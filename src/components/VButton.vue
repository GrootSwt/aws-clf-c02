<script lang="ts" setup>
type Props = {
  disabled?: boolean;
  loading?: boolean;
  outlined?: boolean;
};

const { disabled, loading, outlined } = defineProps<Props>();
defineEmits<{
  (e: "click"): void;
}>();
</script>
<template>
  <button
    class="default"
    :disabled="disabled || loading"
    :class="{ disabled, outlined, loading }"
    @click="$emit('click')"
  >
    <template v-if="!loading">
      <slot></slot>
    </template>
    <template v-else> Loading... </template>
  </button>
</template>
<style lang="scss" scoped>
.default {
  background-color: black;
  color: white;
  padding: 4px 8px;
  border-radius: 999px;
  min-width: 120px;

  &.disabled {
    background-color: gray;
  }

  &.loading {
    background-color: yellowgreen;
  }
}
</style>
