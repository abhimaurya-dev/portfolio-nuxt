<script setup>
const isVisible = ref(false);

const checkVisibility = () => {
  isVisible.value = window.scrollY > 100;
};

const router = useRouter();

const scrollToTop = () => {
  router.replace("/");
  window.scrollTo({ top: 0, behavior: "smooth" });
};

onMounted(() => {
  window.addEventListener("scroll", checkVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", checkVisibility);
});
</script>

<template>
  <div
    v-if="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 flex items-center justify-center bg-gray-600 p-2 rounded-full cursor-pointer shadow-lg"
  >
    <span class="material-symbols-outlined text-[2rem] text-gray-50">
      arrow_circle_up
    </span>
  </div>
</template>

<style scoped>
.fixed {
  transition: opacity 0.3s;
}
</style>

<script>
export default {
  name: "ScrollTop",
};
</script>
