<script lang="ts" setup>
import { computed, StyleValue, watch } from "vue";
import VButton from "./VButton.vue";
import IconClose from "@/assets/images/svgs/close.svg?raw";

const { width } = defineProps<{
  width?: string | number;
}>();

const visible = defineModel<boolean>("visible", { required: true });

const style = computed<StyleValue>(() => {
  const result: StyleValue = {};
  if (width) {
    result.width = typeof width === "string" ? width : width + "px";
  }
  return result;
});

watch(
  () => visible.value,
  (next) => {
    if (next) {
      document.documentElement.classList.add("overflow-hidden");
    } else {
      document.documentElement.classList.remove("overflow-hidden");
    }
  }
);
</script>
<template>
  <Teleport to="body">
    <section
      class="fixed inset-0 top-0 left-0 bg-f5f5f5 dark:bg-1c1c1c transition-all shadow z-10 overflow-y-auto"
      :class="{ ' -translate-x-full': !visible, 'translate-x-0': visible }"
      :style="style"
    >
      <div
        v-if="$device.isPC"
        class="sticky top-0 flex justify-end px-4 py-2 z-10 bg-gray-200 dark:bg-neutral-800"
      >
        <VButton :icon="IconClose" @click="visible = !visible" />
      </div>
      <div>
        <slot></slot>
      </div>
      <Teleport to="body">
        <VButton
          v-if="$device.isSP && visible"
          :icon="IconClose"
          size="large"
          class="fixed left-0 top-1/2 !bg-gray-200 !bg-opacity-70 dark:!bg-neutral-800 dark:!bg-opacity-70 !text-1c1c1c !text-opacity-70 dark:!text-f5f5f5 dark:!text-opacity-70 !h-12 rounded-r-lg shadow z-20"
          @click="visible = !visible"
        />
      </Teleport>
    </section>
  </Teleport>
</template>
<style lang="scss" scoped></style>
