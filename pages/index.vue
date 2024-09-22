<script setup>
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});

const router = useRouter();

onMounted(() => {
  if (window.location.hash) {
    router.replace("/");
  }
});
</script>

<template>
  <div>
    <Hero :isMobile="isMobile" />
    <About :isMobile="isMobile" />
    <Skills :isMobile="isMobile" />
    <Projects :isMobile="isMobile" />
    <Contact :isMobile="isMobile" />
    <FooterSection :isMobile="isMobile" />
  </div>
</template>
