<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const isMobile = ref(false);
const showMenu = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const handleShowMenu = () => {
  showMenu.value = !showMenu.value;
};

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>

<template>
  <div class="">
    <div v-if="isMobile" class="relative">
      <main
        class="flex items-center pt-3 px-4"
        :class="{ 'justify-between': !showMenu, 'justify-end': showMenu }"
      >
        <div v-if="!showMenu" class="text-[1.3rem] text-gray-900 font-bold">
          {{ "@ abhimaurya-dev" }}
        </div>
        <div @click="handleShowMenu" class="cursor-pointer">
          <span class="material-symbols-outlined text-[1.8rem] text-gray-600">
            menu
          </span>
        </div>
      </main>
      <transition name="slide">
        <div
          v-if="showMenu"
          class="fixed top-0 right-0 h-full w-4/5 bg-white shadow-lg z-50 transition-transform transform translate-x-0"
        >
          <div class="flex justify-between pl-4 pr-6 pt-3">
            <div class="text-[1.3rem] text-gray-900 font-bold">
              {{ "@ abhimaurya-dev" }}
            </div>
            <div @click="handleShowMenu" class="cursor-pointer">
              <span
                v-if="showMenu"
                class="material-symbols-outlined text-[1.8rem] text-gray-600"
              >
                close
              </span>
            </div>
          </div>
          <hr class="mt-2 opacity-50" />
          <ul
            class="text-[1.3rem] text-gray-600 list-none py-4 px-6 flex flex-col gap-5"
          >
            <li class="cursor-pointer hover:text-gray-900">
              <a
                class="no-underline text-gray-600 hover:text-gray-900"
                href="#about"
                >About</a
              >
            </li>
            <li class="cursor-pointer hover:text-gray-900">
              <a
                class="no-underline text-gray-600 hover:text-gray-900"
                href="#skills"
                >Skills</a
              >
            </li>
            <li class="cursor-pointer hover:text-gray-900">
              <a
                class="no-underline text-gray-600 hover:text-gray-900"
                href="#projects"
                >Projects</a
              >
            </li>
            <li class="cursor-pointer hover:text-gray-900">
              <a
                class="no-underline text-gray-600 hover:text-gray-900"
                href="#contact"
                >Contact</a
              >
            </li>
          </ul>
          <hr class="opacity-50" />
          <div class="px-6 py-4">
            <a
              href="https://drive.google.com/uc?export=download&id=16nMgzEJxzy4ilqg4Azi4NpuV-siTuvcN"
              download
            >
              <button
                class="bg-gray-900 w-full cursor-pointer text-gray-50 border-none text-[1.1rem] px-6 py-2 rounded-xl"
              >
                Download CV
              </button>
            </a>
          </div>
        </div>
      </transition>
    </div>

    <div v-else>
      <main class="flex justify-between pt-5 md:px-12 lg:px-20">
        <div class="text-[1.3rem] text-gray-900 font-bold">
          <NuxtLink
            class="no-underline text-gray-900 hover:text-gray-600"
            to="/"
          >
            {{ "@ abhimaurya-dev" }}
          </NuxtLink>
        </div>
        <ul
          class="text-[1.1rem] text-gray-600 list-none flex items-center justify-center gap-3 md:gap-5 lg:gap-8"
        >
          <li class="cursor-pointer hover:text-gray-900">
            <NuxtLink
              class="no-underline text-gray-600 hover:text-gray-900"
              to="#about"
              >About</NuxtLink
            >
          </li>
          <li class="cursor-pointer hover:text-gray-900">
            <NuxtLink
              class="no-underline text-gray-600 hover:text-gray-900"
              href="#skills"
              >Skills</NuxtLink
            >
          </li>
          <li class="cursor-pointer hover:text-gray-900">
            <NuxtLink
              class="no-underline text-gray-600 hover:text-gray-900"
              href="#projects"
              >Projects</NuxtLink
            >
          </li>
          <li class="cursor-pointer hover:text-gray-900">
            <NuxtLink
              class="no-underline text-gray-600 hover:text-gray-900"
              href="#contact"
              >Contact</NuxtLink
            >
          </li>
          <NuxtLink
            href="https://drive.google.com/uc?export=download&id=16nMgzEJxzy4ilqg4Azi4NpuV-siTuvcN"
            download
          >
            <button
              class="bg-gray-900 cursor-pointer text-gray-50 border-none text-[1.1rem] px-6 py-2 rounded-xl"
            >
              Download CV
            </button>
          </NuxtLink>
        </ul>
      </main>
    </div>

    <NuxtPage />

    <ScrollTop />
  </div>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transform: translateX(100%);
  transition: transform 0.1s ease-in;
}
.slide-enter,
.slide-leave-to {
  transition: transform 0.1s ease-in;
}
</style>
