<script setup>
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});

const description =
  "I am a full stack developer. I have been bulding application where i am integrating machine learning with full stack applications. I love building application and with that always find some new things to learn about. Although i have been creating web applications for over 3 years, I still love it as if it is something new.";

// const isMobile = ref(false);

// const checkMobile = () => {
//   isMobile.value = window.innerWidth < 768;
// };

// const description =
//   "I am a full stack developer. I have been bulding application where i am integrating machine learning with full stack applications. I love building application and with that always find some new things to learn about. Although i have been creating web applications for over 3 years, I still love it as if it is something new.";

// onMounted(() => {
//   checkMobile();
//   window.addEventListener("resize", checkMobile);
// });

// onBeforeUnmount(() => {
//   window.removeEventListener("resize", checkMobile);
// });
</script>

<template>
  <div class="py-16">
    <div v-if="isMobile" class="px-4">
      <div class="pb-16 flex flex-col items-center">
        <div class="relative inline-block">
          <div
            class="absolute top-4 left-4 w-full h-full bg-gray-200 rounded-lg"
          ></div>
          <div
            class="relative border-4 border-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/public/images/abhishek2.jpg"
              alt="Profile"
              class="w-72 h-auto object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
      <div>
        <p class="text-[2rem] text-gray-900">Hi, I'm Abhishek</p>
        <p class="text-gray-600 text-wrap py-2">{{ description }}</p>
        <p class="flex items-center py-2">
          <span class="material-symbols-outlined pr-2"> location_on </span>
          New Delhi, India
        </p>
        <p class="flex items-center">
          <span class="material-symbols-outlined text-green-500 pr-2">
            fiber_manual_record
          </span>
          Open to work
        </p>
        <div class="flex gap-3 md:gap-4 lg:gap-5 pt-3 md:pt-4 lg:pt-5">
          <a
            href="https://github.com/abhimaurya-dev"
            target="_blank"
            title="Github"
          >
            <img src="/public/images/github.png" alt="github" />
          </a>
          <a
            href="https://www.linkedin.com/in/abhimaurya-dev"
            target="_blank"
            title="Linkedin"
          >
            <img src="/public/images/linkedin.png" alt="linkedin" />
          </a>
          <a
            href="https://www.instagram.com/abhishek.maurya__/"
            target="_blank"
            title="Instagram"
          >
            <img src="/public/images/instagram.png" alt="instagram" />
          </a>
        </div>
      </div>
    </div>
    <div v-else class="w-full">
      <div class="px-8 md:px-12 lg:px-20 py-24">
        <div class="px-8 flex justify-between gap-[5rem]">
          <div>
            <p class="text-[3rem] text-gray-900">Hi, I'm Abhishek</p>
            <p class="text-gray-600 text-[1.5rem] text-wrap py-2">
              {{ description }}
            </p>
            <p class="flex items-center py-2">
              <span class="material-symbols-outlined pr-2"> location_on </span>
              New Delhi, India
            </p>
            <p class="flex items-center">
              <span class="material-symbols-outlined text-green-500 pr-2">
                fiber_manual_record
              </span>
              Open to work
            </p>
            <div class="flex gap-3 md:gap-4 lg:gap-5 pt-3 md:pt-4 lg:pt-5">
              <a
                href="https://github.com/abhimaurya-dev"
                target="_blank"
                title="Github"
              >
                <img src="/public/images/github.png" alt="github" />
              </a>
              <a
                href="https://www.linkedin.com/in/abhimaurya-dev"
                target="_blank"
                title="Linkedin"
              >
                <img src="/public/images/linkedin.png" alt="linkedin" />
              </a>
              <a
                href="https://www.instagram.com/abhishek.maurya__/"
                target="_blank"
                title="Instagram"
              >
                <img src="/public/images/instagram.png" alt="instagram" />
              </a>
            </div>
          </div>
          <div class="relative inline-block">
            <div
              class="absolute top-4 left-4 w-full h-[19.5rem] bg-gray-200 rounded-lg"
            ></div>
            <div
              class="relative border-4 border-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="/public/images/abhishek2.jpg"
                alt="Profile"
                class="w-72 h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>
