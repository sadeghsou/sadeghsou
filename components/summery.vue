<script setup lang="ts">
const summeries = ref<string[]>([
    "Experienced software engineer with a strong focus on Front-End development, specializing in Vue.js, Nuxt.js, React, and modern UI frameworks. Currently leading a team as a Website Manager, overseeing a Laravel-based system with Nuxt3, React, MySQL, and Linux/Nginx servers.",
    "With over a decade in development, I have a background in mobile (Android/Flutter), backend (Node.js, NestJS, Laravel), and DevOps. Certified in networking (CCNA, CCNP) and skilled in clean code, design patterns, and testing. A problem-solver with strong leadership and mentorship abilities, committed to building high-quality, scalable applications.",
    "Got it! Here's an updated version that focuses on having more bullet points for your recent roles, with more concise descriptions for older positions. This keeps your resume balanced and aligned with best practices"
]);
</script>
<template>
    <section class="flex flex-col gap-3">
        <h2 class="text-2xl print:text-xl font-bold mb-2"><a href="#summary">Summary</a></h2>
        <p v-for="(summery, index) in summeries" :key="`Summery${index}`" class="text-justify text-sm print:text-xs">{{
            summery }}
        </p>
    </section>
</template>