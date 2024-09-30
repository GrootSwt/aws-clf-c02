<script lang="ts" setup>
import { ref } from "vue";
import VSvg from "./VIcon.vue";
import IconUp from "@/assets/images/svgs/up.svg?raw";

type Props = {
  title: string;
  initStatus?: boolean;
};

const { initStatus = true } = defineProps<Props>();

const open = ref(initStatus);
</script>
<template>
  <section class="bg-gray-200 rounded-lg">
    <button
      class="flex justify-between items-center border-none bg-gray-400 w-full p-3 rounded-t-lg text-lg text-gray-700 font-medium"
      @click="open = !open"
    >
      <span>{{ title }}</span>
      <VSvg
        :icon="IconUp"
        :size="18"
        class="transition-all duration-300"
        :class="{ 'rotate-180': !open }"
      />
    </button>
    <section
      class="grid overflow-hidden transition-all duration-300"
      :class="{ 'grid-rows-[1fr]': open, 'grid-rows-[0fr]': !open }"
    >
      <section class="min-h-0">
        <article class="px-3 py-4">
          <slot></slot>
        </article>
      </section>
    </section>
  </section>
</template>
<style lang="scss" scoped></style>
