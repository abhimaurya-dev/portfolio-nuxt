<script setup>
const isMobile = ref(false);

const checkMobile = () => {
  isMobile.value = window.innerWidth < 768;
};

const description =
  "I am a full stack developer. I have been bulding application where i am integrating machine learning with full stack applications. I love building application and with that always find some new things to learn about. Although i have been creating web applications for over 3 years, I still love it as if it is something new.";

onMounted(() => {
  checkMobile();
  window.addEventListener("resize", checkMobile);
});

onBeforeUnmount(() => {
  window.removeEventListener("resize", checkMobile);
});
</script>
<template>
  <div class="bg-gray-50 px-8">
    <div v-if="isMobile" class="py-16 flex flex-col items-center">
      <p class="px-4 py-2 bg-gray-200 rounded-full mb-6">About me</p>
      <div class="relative inline-block">
        <div
          class="absolute top-4 left-4 w-full h-full bg-gray-200 rounded-lg"
        ></div>
        <div
          class="relative border-4 border-white rounded-lg shadow-lg overflow-hidden"
        >
          <img
            src="/public/images/abhishek.jpg"
            alt="Profile"
            class="w-[24rem] h-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <div class="mt-12">
        <p class="text-gray-900 text-[2.2rem] text-wrap">
          Curious about me? Here you have it:
        </p>
        <p class="pt-6 text-[1.2rem]">
          I'm a passionate, full stack developer and data scientist enthusiast.
          I am very enthusiastic about integrating machine learning with full
          stack applications. Writing clear and readable code matters to me.
        </p>
        <p class="pt-4 text-[1.2rem]">
          I began my journey as a web developer in 2021, and since then, I've
          continued to grow and evolve as a developer, taking on new challenges
          and learning the latest technologies along the way. I started diving
          into machine learning and AI in 2023, since then learning different
          machine learning algorithms and integrating it to full stack
          development. I'm building cutting-edge web applications using modern
          technologies such as Next.js, TypeScript, Tailwindcss, Python,
          Tensorflow and much more.
        </p>
        <p class="pt-4 text-[1.2rem]">
          When I'm not in full-on developer mode, you can find me playing
          badminton or watching anime in my free time.
        </p>
        <p class="pt-4 text-[1.2rem]">Finally some bits about me.</p>
        <ul class="grid grid-cols-2 gap-3 pt-4 px-6 text-[1.2rem]">
          <li>B.Tech in Computer Science and Engineering</li>
          <li>M.Tech in Artificial Intelligence</li>
          <li>Contributor @Kaggle</li>
          <li>3 Star(max) @Codechef</li>
        </ul>
        <p class="text-[1.2rem] pt-4">
          One last thing, I'm open to work. So feel free to reach out and say
          hello!
        </p>
      </div>
    </div>
    <div v-else class="py-16 md:px-12 lg:px-20 flex flex-col items-center">
      <p class="px-4 py-2 bg-gray-200 rounded-full mb-6">About me</p>
      <div class="flex justify-between items-start md:gap-20 lg:gap-40">
        <div class="relative inline-block mt-12">
          <div
            class="absolute top-4 right-4 w-full h-full bg-gray-200 rounded-lg"
          ></div>
          <div
            class="relative border-4 border-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="/public/images/abhishek.jpg"
              alt="Profile"
              class="lg:max-w-[30rem] md:max-w-[20rem] h-auto object-cover rounded-lg"
            />
          </div>
        </div>
        <div class="mt-12 md:max-w-[30rem] lg:max-w-[40rem]">
          <p class="text-gray-900 text-[2.2rem] text-wrap">
            Curious about me? Here you have it:
          </p>
          <p class="pt-6 text-[1.2rem]">
            I'm a passionate, full stack developer and data scientist
            enthusiast. I am very enthusiastic about integrating machine
            learning with full stack applications. Writing clear and readable
            code matters to me.
          </p>
          <p class="pt-4 text-[1.2rem]">
            I began my journey as a web developer in 2021, and since then, I've
            continued to grow and evolve as a developer, taking on new
            challenges and learning the latest technologies along the way. I
            started diving into machine learning and AI in 2023, since then
            learning different machine learning algorithms and integrating it to
            full stack development. I'm building cutting-edge web applications
            using modern technologies such as Next.js, TypeScript, Tailwindcss,
            Python, Tensorflow and much more.
          </p>
          <p class="pt-4 text-[1.2rem]">
            When I'm not in full-on developer mode, you can find me playing
            badminton or watching anime in my free time.
          </p>
          <p class="pt-4 text-[1.2rem]">Finally some bits about me.</p>
          <ul class="grid grid-cols-2 gap-3 pt-4 px-6 text-[1.2rem]">
            <li>B.Tech in Computer Science and Engineering</li>
            <li>M.Tech in Artificial Intelligence</li>
            <li>Contributor @Kaggle</li>
            <li>3 Star(max) @Codechef</li>
          </ul>
          <p class="text-[1.2rem] pt-4">
            One last thing, I'm open to work. So feel free to reach out and say
            hello!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About",
};
</script>
