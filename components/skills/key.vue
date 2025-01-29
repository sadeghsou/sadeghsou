<script setup lang="ts">
const skills = ref<KeySkill[]>([
    { title: "CMS", fields: ["Wordpress", "Joomla", "Strapi"] },
    { title: "Mobile", fields: ["Android", "Flutter"] },
    { title: "Server configuration and SysAdmin", fields: ["Linux", "Nginx", "Docker"] },
    { title: "Database Administration", fields: ["Mysql", "SQL Server", "MongoDB", "Oracle"] },
    { title: "Bakend development", fields: ["NodeJs", "ExpressJs", "NestJs", "PHP", "Laravel", "Go"] },
    { title: "Front development", fields: ["VueJs", "ReactJs", "NuxtJs", "NextJs}"] }
]);
</script>
<template>
    <div class="flex flex-col gap-3 print:gap-1">
        <h2 class="text-2xl print:text-sm font-bold mb-2"><a href="#key-skills">Key Skills</a></h2>
        <div v-for="(skill, index) in skills" :key="`KeySkillCat${index}`"
            class="flex flex-col md:flex-row items-start md:items-center gap-2 pl-6">
            <h3 class="font-bold print:text-base">{{ skill.title }}: </h3>
            <h6 class="text-sm print:text-xs">{{ skill.fields.join(', ') }}</h6>
        </div>
    </div>
</template>