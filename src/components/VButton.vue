<script lang="ts" setup>
import VLoading from "./VLoading.vue";
import VIcon from "./VIcon.vue";
type Props = {
  type?: "primary" | "success" | "warning" | "danger";
  size?: "small" | "default" | "large";
  icon?: string;
  circle?: boolean;
  outlined?: boolean;
  loading?: boolean;
  disabled?: boolean;
};

const {
  type = "primary",
  size = "default",
  outlined,
  loading,
  disabled
} = defineProps<Props>();
defineEmits<{
  (e: "click"): void;
}>();
</script>
<template>
  <button
    :disabled="disabled || loading"
    :class="[type, size, { icon, circle, outlined, loading, disabled }]"
    @click="$emit('click')"
  >
    <template v-if="loading">
      <VLoading />
    </template>
    <template v-else-if="icon">
      <VIcon :icon="icon" />
    </template>
    <template v-else>
      <span></span>
    </template>
  </button>
</template>
<style lang="scss" scoped>
button {
  cursor: pointer;
  border-width: 0;
}
// type
.primary {
  background-color: var(--clr-primary);
}
.success {
  background-color: var(--clr-success);
}
// size
.default {
  font-size: 16px;
  height: 24px;
}
.small {
  font-size: 14px;
  height: 21px;
}
.large {
  font-size: 24px;
  height: 48px;
}
// icon
.icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 4px;
  height: calc(1em + 8px);
}
// circle
.circle {
  border-radius: 999px;
}
</style>
