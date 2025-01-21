<script setup lang="ts">
interface SkillCardListProps { skills: Skill[] };
defineProps<SkillCardListProps>()
</script>
<template>
    <div class="skill-card-list w-full">
        <SkillCard v-for="(skill, index) in skills" :key="`SkillCard${index}`" :skill="skill" />
    </div>
</template>