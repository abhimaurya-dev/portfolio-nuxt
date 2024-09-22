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

const { data: projects, error } = await useFetch("/api/fetchProjects");
let projectsList = [];
if (error.value) {
  console.error("Error fetching projects:", error.value);
} else {
  projectsList = projects.value?.body;
}
</script>

<template>
  <div class="px-8 py-16 flex flex-col bg-gray-50 items-center">
    <p
      class="px-4 md:px-5 lg:px-6 py-2 text-[1.1rem] md:text-[1.3rem] lg:text-[1.5rem] bg-gray-200 rounded-full mb-6"
    >
      Projects
    </p>
    <p class="text-[1.3rem] md:text-[2rem] w-[22rem] lg:w-[40rem] text-center">
      Some of the noteworthy projects I have built:
    </p>
    <div class="w-full py-6">
      <ul>
        <li
          class="list-none"
          v-for="(project, index) in projectsList"
          :key="project.id"
        >
          <ProjectCard
            :projectKey="index"
            :projectId="project.id"
            :projectTitle="project.projectTitle"
            :projectDescription="project.projectDescription"
            :projectImage="project.projectImage"
            :projectLink="project.projectLink"
            :projectStack="project.projectStack"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
};
</script>
