<script setup lang="ts">
interface SkillCardProps { skill: Skill };
const props = defineProps<SkillCardProps>();
const gradientBg = computed(() => (
    `background-image:linear-gradient(to bottom right, ${props.skill.colors.join(',')})`
));

</script>
<template>
    <div class="skill-card w-full flex flex-col items-center p-5 rounded-lg shadow-lg transition-all"
        :style="gradientBg">
        <div
            class="skill-card__logo rounded-full overflow-hidden bg-white p-2 pt-5 flex items-center justify-center shadow-md w-[80px] h-[80px]">
            <NuxtImg class="drop-shadow-lg w-11/12" :src="skill.image" :alt="skill.name" />
        </div>
    </div>
</template>
<style lang="scss">
.skill-card {
    background-size: 200%;
    background-position: 0% 0%;

    &:hover {
        background-position: 100% 100%;
    }
}
</style>