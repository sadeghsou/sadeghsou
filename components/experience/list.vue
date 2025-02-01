<template>
    <section class="flex flex-col gap-8 print:gap-4">
        <h2 class="text-2xl print:text-xl font-bold mb-2"><a href="#experiences">Professional Experiences</a></h2>
        <Experience key="Datis" company="Datis Int" title="Website Manager" start="2020" end="present"
            :fields='["Lead a team of 3 developers, managing a Laravel-based system with Nuxt3, React, MySQL, and Linux/Nginx.", "Developed and optimized web applications using Vue.js, React, and Node.js.", "Conducted code reviews and mentored junior developers.", "Managed server infrastructure and deployment processes with Nginx and Linux.", "Worked with Firebase for real-time data syncing and push notifications.", "Ensured adherence to clean code principles and best practices.", "Delivered high-quality features with a focus on performance, security, and user experience."]' />
        <Experience key="Mft" company="MFT" title="Website teacher" start="2023" end="2023 (5 months)"
            :fields='["Teaching Web1 (HTML & CSS)", "Teaching Web2 (Bootstrap)", "Teaching Web3 (Javascript & React)"]' />
        <Experience key="3Click" company="3Click (Deltaban)" title="Front-End Developer" start="2019" end="2020"
            :fields='["Developed responsive, user-friendly applications using Vue.js, Nuxt.js, and React.", "Integrated RESTful APIs and third-party services to enhance functionality.", "Optimized web performance and improved load times using modern front-end tools.", "Collaborated with design teams to ensure intuitive UI/UX.", "Implemented unit and E2E testing to ensure code quality and reliability."]' />
        <Experience key="Eposence" company="Eposence" title="Flutter Developer" start="2018" end="2019"
            :fields='["Built high-performance mobile applications with Flutter and Dart.", "Implemented RESTful APIs and Firebase for backend integration and real-time data syncing.", "Optimized mobile app performance for both iOS and Android.", "Focused on state management using Provider and other relevant libraries."]' />
        <Experience key="Maana" company="Maana" title="Network Administrator & Web Developer" start="2015" end="2017"
            :fields='["Managed network infrastructure and developed web solutions using PHP, JavaScript, and WordPress and Joomla.", "Implemented server-side features and improved site performance for clients."]' />
        <Experience key="Freelancer" company="Freelancer" start="2010" end="present"
            :fields='["Approx 10 wordpress website", "Approx 3 backend with js and 5 front with vue and react", "Approx 4 apps with java for android and flutter for cross-platform"]' />
    </section>
</template>