<script setup>
const props = defineProps({
  isMobile: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="px-8 py-16 flex flex-col items-center">
    <p
      class="px-4 md:px-5 lg:px-6 py-2 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] bg-gray-200 rounded-full mb-6"
    >
      Skills
    </p>
    <p class="text-[1.3rem] md:text-[2rem] w-[22rem] lg:w-[40rem] text-center">
      The skills, tools and technologies I am really good at:
    </p>
    <div class="mt-8">
      <ul
        class="grid"
        :class="{
          'grid-cols-3': isMobile,
          'grid-cols-6': !isMobile,
          'gap-x-12': isMobile,
          'gap-y-4': isMobile,
          'gap-x-20': !isMobile,
          'gap-y-12': !isMobile,
        }"
      >
        <li class="flex flex-col items-center">
          <img
            src="/public/images/javascript.png"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Javascript</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/reactjs.png"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">ReactJS</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/nextjs-icon.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">NextJS</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/express.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">ExpressJS</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/mongodb-icon.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">MongoDB</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/mysql-icon.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">MySQL</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/c-plusplus.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Cpp</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/python.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Python</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/numpy.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Numpy</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/pandas-icon.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Pandas</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/tensorflow.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Tensorflow</p>
        </li>
        <li class="flex flex-col items-center">
          <img
            src="/public/images/pytorch-icon.svg"
            height="64"
            width="64"
            alt="javascript"
          />
          <p class="text-[1rem]">Pytorch</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skills",
};
</script>
