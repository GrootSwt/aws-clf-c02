<script lang="ts" setup>
import VMenu from "@/layout/VMenu.vue";
import useActiveMenu from "@/hooks/useActiveMenu";
import { onMounted } from "vue";
import VRouterLink from "@/components/common/VRouterLink.vue";

const activeMenu = useActiveMenu();
onMounted(() => {
  activeMenu.moveActiveMenuToCenter();
});
</script>
<template>
  <section>
    <article
      class="flex justify-center items-center py-8 text-blue-400 underline gap-4"
    >
      <VRouterLink to="https://www.aws.training/Certification">
        AWS Certification
      </VRouterLink>
      <VRouterLink
        to="https://d1.awsstatic.com/zh_CN/training-and-certification/docs-cloud-practitioner/AWS-Certified-Cloud-Practitioner_Exam-Guide_C02.pdf"
      >
        AWS CLF C02 Exam Guide
      </VRouterLink>
    </article>
    <VMenu />
  </section>
</template>
<style lang="scss" scoped></style>
