<script setup lang="ts">
interface ExperienceProps { company: string, title?: string, start: string, end: string, fields: string[], key: string }
defineProps<ExperienceProps>();
</script>
<template>
    <div class="flex flex-col gap-3">
        <h3 class="text-xl print:text-sm"><b>{{ company }}</b> <span class="text-sm">({{ start }} - {{ end }})</span>
        </h3>
        <h4 class="print:text-xs font-bold" v-if="!!title">{{ title }}</h4>
        <h5 v-for="(item, index) in fields" :key="`${key}Item${index}`"
            class="experience-item text-sm print:text-xs relative pl-8">{{ item }}</h5>
    </div>
</template>
<style>
.experience-item::after {
    content: "";
    width: 6px;
    height: 6px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    background-color: #374151;
    border-radius: 50%;
}
</style>