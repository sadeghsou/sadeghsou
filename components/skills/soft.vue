<script setup lang="ts">
const skills = ref<SoftSkill[]>([
    { title: "Problem Solving", description: "Adept at troubleshooting and finding effective solutions to technical challenges." },
    { title: "Team Collaboration", description: "Strong ability to work in diverse teams and communicate effectively." },
    { title: "Leadership", description: "Experienced in mentoring and leading teams towards successful project outcomes." },
    { title: "Adaptability", description: "Quick to learn and implement new technologies and methodologies." },
]);
</script>
<template>
    <div class="flex flex-col gap-3 print:gap-1">
        <h2 class="text-2xl print:text-sm font-bold mb-2"><a href="#soft-skills">Soft Skills</a></h2>
        <div v-for="(skill, index) in skills" :key="`SoftSkillCat${index}`" class="flex items-center gap-2 pl-6">
            <h3 class="font-bold print:text-base">{{ skill.title }}: </h3>
            <span class="text-sm print:text-xs text-justify">{{ skill.description }}</span>
        </div>
    </div>
</template>