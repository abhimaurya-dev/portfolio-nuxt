<script setup>
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div
    id="contact"
    class="px-4 py-16 lg:px-20 lg:py-24 flex flex-col items-center"
  >
    <p
      class="px-4 md:px-5 lg:px-6 py-2 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] bg-gray-200 rounded-full mb-6"
    >
      Get in touch
    </p>
    <div
      class="text-center pb-12 text-[2rem] md:text-[2rem] lg:text-[2rem] md:mx-[10rem] lg:mx-[20rem]"
    >
      What’s next? Feel free to reach out to me if you're looking for a
      developer, have a query, or simply want to connect.
    </div>
    <div
      class="text-center pb-2 md:pb-3 lg:pb-4 font-bold text-gray-900 text-[1.2rem] md:text-[2rem] lg:text-[2rem] md:mx-[10rem] lg:mx-[20rem]"
    >
      <p class="flex items-center">
        <span
          class="material-symbols-outlined pr-2 pt-[0.15rem] text-[1.8rem] lg:text-[2rem]"
        >
          mail
        </span>
        abhishekmaurya.official@gmail.com
        <span
          class="material-symbols-outlined pl-4 text-[1.6rem] lg:text-[1.8rem]"
        >
          content_copy
        </span>
      </p>
    </div>
    <div
      class="text-center font-bold text-gray-900 text-[1.2rem] md:text-[2rem] lg:text-[2rem] md:mx-[10rem] lg:mx-[20rem]"
    >
      <p class="flex items-center">
        <span
          class="material-symbols-outlined pr-2 pt-[0.15rem] text-[1.8rem] lg:text-[2rem]"
        >
          call
        </span>
        +919794894933
        <span
          class="material-symbols-outlined pl-4 text-[1.6rem] lg:text-[1.8rem]"
        >
          content_copy
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact",
};
</script>
