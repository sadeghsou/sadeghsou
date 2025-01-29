<script setup lang="ts">
const personSchema = ref(
  {
    "@context": "https://schema.org",
    "@type": "Person",
    // "address": {
    //   "@type": "PostalAddress",
    //   "addressLocality": "Seattle",
    //   "addressRegion": "WA",
    //   "postalCode": "98052",
    //   "streetAddress": "20341 Whitworth Institute 405 N. Whitworth"
    // },
    // "colleague": [
    //   "http://www.xyz.edu/students/alicejones.html",
    //   "http://www.xyz.edu/students/bobsmith.html"
    // ],
    "email": "mailto:thesadeghsou@gmail.com",
    "image": "sadegh.jpg",
    "jobTitle": "Senior Front-End developer",
    "name": "Mohammad Sadegh Sousahabi",
    "telephone": "(+98) 9129439150",
    "url": "sadeghsou.github.io"
  });
useSeoMeta({
  title: "Mohammad Sadegh Sousahabi",
  description: "Experienced software engineer with a strong focus on Front-End development, specializing in Vue.js, Nuxt.js, React, and modern UI frameworks",
  ogTitle: "Mohammad Sadegh Sousahabi",
  ogDescription: "Experienced software engineer with a strong focus on Front-End development, specializing in Vue.js, Nuxt.js, React, and modern UI frameworks",
  ogImage: "sadeghsou.github.io/sadegh.jpg"
});
useHead({
  script: [
    {
      type: "application/ld+json",
      children: JSON.stringify(personSchema.value)
    }
  ]
})
</script>
<template>
  <div class="bg-slate-100 min-h-svh text-gray-900">
    <div class="container mx-auto py-9 flex flex-col gap-6 print:gap-4">
      <Info />
      <hr>
      <Summery />
      <hr>
      <ExperienceList />
      <hr>
      <SkillsKey />
      <hr>
      <SkillsSoft />
    </div>
  </div>
</template>
<style>
* {
  font-family: "Arial"
}
</style>