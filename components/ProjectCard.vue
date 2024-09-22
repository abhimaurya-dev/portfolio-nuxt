<script setup>
const props = defineProps({
  projectKey: {
    type: Number,
    required: true,
  },
  projectId: {
    type: Number,
    required: true,
  },
  projectImage: {
    type: String,
    required: true,
  },
  projectTitle: {
    type: String,
    required: true,
  },
  projectDescription: {
    type: Array,
    required: true,
  },
  projectLink: {
    type: String,
    required: true,
  },
  projectStack: {
    type: Array,
    required: true,
  },
  isMobile: {
    type: Boolean,
    required: true,
  },
});
</script>

<template>
  <div class="py-6">
    <div
      class="flex bg-white rounded-lg mx-8 shadow-sm"
      :class="{
        'flex-col': isMobile,
        'flex-row-reverse': projectKey % 2 !== 0,
        'justify-between': !isMobile && projectKey % 2 !== 0,
        'flex-start': !isMobile && projectKey % 2 === 0,
      }"
    >
      <div
        class="p-8 lg:p-12 flex items-center justify-center bg-gray-100 rounded-t-lg lg:rounded-t-none"
        :class="{
          'lg:rounded-r-lg': projectKey % 2 !== 0,
          'lg:rounded-l-lg': projectKey % 2 === 0,
        }"
      >
        <img
          class="object-fit h-[192px] w-[279px] lg:w-[480px] lg:h-[384px] rounded-lg shadow-sm shadow-gray-200"
          :src="projectImage"
          :alt="projectTitle"
        />
      </div>
      <div class="p-8 lg:p-12">
        <div
          class="pb-6 text-gray-900 text-[1.1rem] font-bold md:text-[1.5rem] lg:text-[1.8rem]"
        >
          {{ projectTitle }}
        </div>
        <div class="pb-6 text-gray-600 mg:text-[1.1rem] lg:text-[1.3rem]">
          <ul class="list-none">
            <li
              class="py-2"
              v-for="(desc, index) in projectDescription"
              :key="index"
            >
              {{ desc }}
            </li>
          </ul>
        </div>
        <div class="pb-6">
          <ul class="pb-6 list-none flex flex-wrap items-start gap-x-4 gap-y-3">
            <li v-for="(stack, index) in projectStack" :key="index">
              <button
                class="px-4 py-2 text-[0.9rem] text-gray-600 bg-gray-200 rounded-full border-none"
              >
                {{ stack }}
              </button>
            </li>
          </ul>
        </div>
        <div>
          <a
            :href="projectLink"
            class="text-black no-underline"
            title="Open project"
            target="_blank"
          >
            <span
              class="material-symbols-outlined text-[1.6rem] hover:text-blue-700 cursor-pointer"
            >
              ungroup
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectCard",
};
</script>
