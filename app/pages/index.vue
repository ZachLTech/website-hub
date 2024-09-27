<script setup>
    import { ref, reactive, watch } from 'vue'
    
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'
    import { Swiper, SwiperSlide } from 'swiper/vue'
    
    import 'swiper/css'
    import 'swiper/css/navigation'
    import 'swiper/css/pagination'
    import 'swiper/css/scrollbar'

    const viewport = useViewport()

    watch(viewport.breakpoint, (newBreakpoint, oldBreakpoint) => {
        console.log('Breakpoint updated:', oldBreakpoint, '->', newBreakpoint)
    })

    const showModal = ref(false)
    const selectedApp = ref({})

    const appsP1R1 = reactive([
        {
            title: 'SSHfolio',
            backgroundImage: '/icons/sshfolio-icon.png',
            description: `SSHfolio is a modular TUI (Text User Interface) portfolio application based on the Bubble Tea framework. This project allows you to showcase your portfolio in a terminal environment, providing a unique way to present your projects, biography, contact information, and more. It's designed to be easily customizable and self-hostable using Docker. I originally made this for personal use as my own SSH portfolio, but have since made it open source and modular so anyone can recreate their own SSHfolio adding their projects, experience, about me, etc.`,
            demoLink: 'https://github.com/ZachLTech/sshfolio',
            githubLink: 'https://github.com/ZachLTech/sshfolio', 
            sideImage: '/images/sshfolio.png',
            displayDemoButton: 'none'
        },
        {
            title: 'Bentofolio',
            backgroundImage: '/icons/bento-box.svg',
            description: 'Bentofolio is my personal portfolio project that showcases my skills and expertise through a bento grid-style layout. Built using Nuxt.js and TailwindCSS, it offers an interactive and visually appealing interface. The project also includes SwiperJS for smooth navigation and integrates GitHub readme stats for dynamic data visualization.',
            demoLink: 'https://bentofolio.zachl.tech',
            githubLink: 'https://github.com/ZachLTech/bentofolio',
            sideImage: '/images/bentofolio-side.png',
        },
        {
            title: 'AEV-Software',
            backgroundImage: '/icons/alset.png',
            description: 'The Alset Solar Cybersedan Software is a comprehensive full-stack ecosystem developed for the FAUHS AEV solar car, enabling seamless integration and operation of various hardware components such as the Thunderstruck BMS, cameras, GPS module, and custom sound horn. This project was undertaken as part of the Advanced Experimental Vehicles program at FAU High School.',
            demoLink: 'https://aev.zachl.tech/',
            githubLink: 'https://github.com/YamanDevelopment/AEV-Software',
            sideImage: '/images/alset-side.png',
        },
        {
            title: 'Devfolify',
            backgroundImage: '/icons/devfolify.png',
            description: `Devfolify is a full stack application designed to provide personalized coding challenges. Our goal is to move beyond the traditional lists of beginner or advanced projects and offer unique, skill-level tailored challenges that encourage creativity and problem-solving. This approach not only helps you develop new projects and skills but also fosters real-world problem-solving abilities, and perhaps even that idea of a lifetime that could take you to great places! 🌟 
            Now the main premise and idea behind this app, although not fully built yet, is that people will be able to make these challenges or post ones themselves for others to participate in. Somewhat like a mini hackathon but on everyones own time and with a public leaderboard, individual stats, a place to discover other peoples projects, and even maybe a section with coding articles from daily.dev. But not only that, it encourages people to instead of just building a premade project, find a solution to a real world issue with creativity and code.`,
            demoLink: 'https://devfolify.com',
            githubLink: 'https://github.com/YamanDevelopment/Devfolify',
            sideImage: '/images/devfolify-side.png',
        },
        {
            title: 'Schedulix',
            backgroundImage: '/icons/schedulix.png',
            description: 'Schedulix is a program that helps university students develop their course schedules for their upcoming semester. It takes in the user\'s preferences and generates multiple schedules that fit the user\'s preferences. The program is written in JavaScript and uses the Node.js runtime environment.',
            demoLink: 'https://schedulixfedemo.zachl.tech/',
            githubLink: 'https://github.com/YamanDevelopment/Schedulix',
            borderRadius: '25%',
            sideImage: '/images/schedulix-side.png',
        },
        {
            title: 'WebDevDocs',
            backgroundImage: '/icons/webdevdocs.png',
            description: 'Welcome to the no-nonsense web development "course" meant to help guide you to learn web development and coding in JS the right way, with basic instruction and explaination followed by practice/mini project based experimenting on your end. 🌐💻',
            demoLink: 'https://webdev.zachl.tech/',
            githubLink: 'https://github.com/ZachLTech/webdevcourse',
            sideImage: '/images/webdevdocs-side.png',
        },
    ])

    const appsP1R2 = reactive([
        {
            title: 'MemeAPI',
            backgroundImage: '/icons/memes.svg',
            description: `Just a funny API with elysiajs because bun is cool and I had this idea a while ago for fun 😀`,
            demoLink: 'https://memes.zachl.tech/',
            githubLink: 'https://github.com/ZachLTech/RandomMemeRestAPI',
            sideImage: '/images/memeapi-side.png',
        },
        {
            title: 'Fileshare',
            backgroundImage: '/icons/fileshare.png',
            description: 'A service I self host which is used as a replacement to apps like dropbox. The convenience of having my own filesharing service is so nice',
            demoLink: 'https://share.zachl.tech/',
            displaySourceButton: 'none',
            sideImage: '/images/fileshare-side.png',
        },
        {
            title: 'SearXNG',
            backgroundImage: '/icons/searxng.png',
            description: 'A service I self host which is used as a better and more private search engine to replace duckduckgo, google, etc.. Why use Google or DuckDuckGo when you can use a combination of them all, AND keep your data private!!',
            demoLink: 'https://search.zachl.tech',
            displaySourceButton: 'none',
            sideImage: '/images/searxng-side.png',
        },
        {
            title: 'Thandi',
            backgroundImage: '/icons/thandi.jpg',
            description: 'A self-taught full-stack developer who I partner up with for various projects and Hackathons. HIS WEBSITE IS CURRENTLY DOWN',
            demoLink: 'https://str1ke.codes',
            githubLink: 'https://github.com/RealStr1ke',
            borderRadius: '100%',
            displayDemoButton: 'none',
            sideImage: '/images/thandi-side.png',
        },
        {
            title: 'Amarnath',
            backgroundImage: '/icons/amarnath.png',
            description: 'Another close friend of mine who took up programming due to his interest in the science behind computers',
            demoLink: 'https://jeebuscrossaint.github.io/',
            githubLink: 'https://github.com/jeebuscrossaint',
            borderRadius: '100%',
            sideImage: '/images/amarnath-side.png',
        },
        {
            title: 'Resume PDF',
            backgroundImage: '/icons/resume.png',
            description: 'My Resume in PDF format :)',
            demoLink: 'https://resume-pdf.zachl.tech',
            borderRadius: '100%',
            displaySourceButton: 'none',
            sideImage: '/images/resume-side.png',
        },
    ])

    const appsP2R1 = reactive([
        {
            title: 'Makai',
            backgroundImage: '/icons/makai.png',
            description: 'A very enthusiastic friend who, as he says, enjoys coding, making stuff in Blender, playing the piano, and photography',
            demoLink: 'https://makaip.com',
            githubLink: 'https://github.com/makaip',
            borderRadius: '100%',
            sideImage: '/images/makai-side.png',
        },
        {
            title: 'Alex',
            backgroundImage: '/icons/alex.webp',
            description: 'A research partner I have yet to properly befriend who has experience in many CS related fields',
            demoLink: 'https://www.alexcastronovo.com/',
            githubLink: 'https://github.com/AlexanderJCS?',
            borderRadius: '100%',
            sideImage: '/images/alex-side.png',
        },
        {
            title: 'Network Chuck',
            backgroundImage: '/icons/networkchuck.webp',
            description: 'His tutorials and educational videos are so great and he was the reason I tried Linux for the first time',
            demoLink: 'https://www.youtube.com/@NetworkChuck',
            displaySourceButton: 'none',
            sideImage: '/images/networkchuck-side.jpg',
        },
        {
            title: 'Fireship',
            backgroundImage: '/icons/fireship.png',
            description: 'The entertainment & education combo in Fireships videos are simply unmatched and I tend to get a lot of my tech news from him now',
            demoLink: 'https://www.youtube.com/@Fireship',
            displaySourceButton: 'none',
            sideImage: '/images/fireship-side.jpg',
        },
        {
            title: 'Frying Pan',
            backgroundImage: '/icons/fryingpan.jpg',
            description: 'Frying Pans skits and journey helped inspire me to continue in CS alongside attempting a startup',
            demoLink: 'https://www.youtube.com/@FryingPan',
            displaySourceButton: 'none',
            sideImage: '/images/fryingpan-side.png',
        },
        {
            title: 'Raid Owl',
            backgroundImage: '/icons/raidowl.jpg',
            description: 'Without RaidOwl, I probably would not have as secure of a homelab setup as I do now nor would I be using raid redundancy',
            demoLink: 'https://www.youtube.com/@RaidOwl',
            borderRadius: '100%',
            displaySourceButton: 'none',
            sideImage: '/images/raidowl-side.jpg',
        },
    ])
    const appsP2R2 = reactive([
        {
            title: 'Jossaya',
            backgroundImage: '/icons/jossaya.webp',
            description: 'Jossaya is a great guy who\'s typically ready to jump head first into any coding project',
            demoLink: 'https://jcamille.tech',
            githubLink: 'https://github.com/jcamille2023',
            borderRadius: '100%',
            sideImage: '/images/jossaya-side.png',
        },
    ])

    const onSwiper = (swiper) => {
        console.log(swiper)
    }

    const onSlideChange = () => {
        console.log('slide change')
    }

    const openModalP1R1 = (title) => {
        selectedApp.value = appsP1R1.find(app => app.title === title)
        showModal.value = true
    }

    const openModalP1R2 = (title) => {
        selectedApp.value = appsP1R2.find(app => app.title === title)
        showModal.value = true
    }

    const openModalP2R1 = (title) => {
        selectedApp.value = appsP2R1.find(app => app.title === title)
        showModal.value = true
    }

    const openModalP2R2 = (title) => {
        selectedApp.value = appsP2R2.find(app => app.title === title)
        showModal.value = true
    }

    const closeModal = () => {
        showModal.value = false
    }
</script>

<template>
    <div v-if="viewport.isLessThan('tablet')" class="w-full flex justify-center items-center pt-8 overflow-hidden">
        <video autoplay muted loop class="fixed -z-10 right-0 bottom-0 hidden sm:block min-w-screen min-h-screen brightness-75">
            <source src="/background.mp4" type="video/mp4">
        </video>
        <div class="w-[1000px] flex flex-col gap-8 items-center">
            <div class="flex flex-col sm:flex-row justify-center items-center gap-8 bg-[rgba(0,0,0,0.05)] shadow-inner rounded-3xl">
                <img class="w-60 h-60 hidden sm:block" src="/me-drawn.png" alt="me-drawn.png">
                <div class="flex flex-col justify-center gap-5 px-8 sm:px-0">
                    <h1 class="text-3xl sm:text-5xl font-bold">Welcome <span class="text-xl sm:text-3xl font-normal">to my info hub!</span></h1>
                    <p class="sm:text-xl max-w-[800px]">
                        Here is a lobby like place for all my portfolio type websites and personal web!
                        You'll also find some links to projects I've done in the past and continue to develop...
                        and maybe some easter eggs I left here and there riddled across my corner of the internet :D
                    </p>
                </div>
            </div>
            <div class="w-full flex flex-wrap justify-center sm:justify-between sm:max-h-[1800px]">
                <door :icon="'👤'" :title="'Socials'" :location="'https://zachl.tech/'" :description="'My socials and contact info if you want to message me or reach out'" :tag="'Info'" :tagColor="'#1c567a'" />
                <door :icon="'🗃️'" :title="'Portfolio'" :location="'#'" :description="'My portfolio site is currently non-existent and I will soon make it'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🍱'" :title="'Bentofolio'" :location="'https://bentofolio.zachl.tech'" :description="'My bento grid style portfolio - Not my official portfolio site though'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'💼'" :title="'Résumé (Site)'" :location="'https://resume.zachl.tech'" :description="'View my résumé in a nice, less professional, website format'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'📁'" :title="'Résumé (PDF)'" :location="'https://resume-pdf.zachl.tech'" :description="'View my résumé as a professional PDF with some redacted info (May be outdated)'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🔑'" :title="'SSHfolio (SSH)'" :location="'https://github.com/ZachLTech/sshfolio'" :description="'Minimally showing off all your unique talents through a publicly SSHable TUI interface written in Go'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'📚'" :title="'Blog'" :location="'https://blog.zachl.tech'" :description="'Read some of my stories, tutorials, and see my thought process while making projects here'" :tag="'Branding'" :tagColor="'#43b046'" /> 
                <door :icon="'🏎️'" :title="'AEV-Software'" :location="'https://github.com/YamanDevelopment/AEV-Software'" :description="'The Alset Solar Cybersedan Software is a comprehensive full-stack ecosystem developed for the FAUHS AEV solar car'" :tag="'Project'" :tagColor="'#947100'" /> 
                <door :icon="'💻'" :title="'Devfolify'" :location="'https://github.com/YamanDevelopment/Devfolify'" :description="'Giving you real world problems and a chance to solve it using code in your unique way.'" :tag="'WIP Project'" :tagColor="'#947100'" /> 
                <door :icon="'📅'" :title="'Schedulix'" :location="'https://github.com/YamanDevelopment/Schedulix'" :description="'A program that helps university students develop their course schedules for their upcoming semester.'" :tag="'WIP Project'" :tagColor="'#947100'" /> 
                <door :icon="'👩‍💻'" :title="'Matrix'" :location="'https://matrix.yamanon.top/'" :description="'Matrix protocol for use with my friends since other forms of communication are pretty unprivate'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🎥'" :title="'Movie-Web'" :location="'https://movie-web.zachl.tech'" :description="'Movie-Web is a very convenient media streaming tool which I use all the time when watching The Office'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'📄'" :title="'Fileshare'" :location="'https://share.lopezhome.tech'" :description="'The convenience of having my own filesharing service is so nice'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🔍'" :title="'SearXNG'" :location="'https://search.lopezhome.tech'" :description="'Why use Google or DuckDuckGo when you can use a combination of them all, AND keep your data private!!'" :tag="'Homelab'" :tagColor="'#2922ab'" /> 
                <door :icon="'🤠'" :title="'Thandi'" :location="'https://str1ke.codes'" :description="'A self-taught full-stack developer who I partner up with for various projects and Hackathons'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😱'" :title="'Amarnath'" :location="'https://github.com/jeebuscrossaint'" :description="'Another close friend of mine who took up programming due to his interest in the science behind computers'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'🤯'" :title="'Jossaya'" :location="'https://jcamille.tech/'" :description="'Jossaya is a great guy who\'s typically ready to jump head first into any coding project'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😂'" :title="'Makai'" :location="'https://makaip.com'" :description="'A very enthusiastic friend who, as he says, enjoys coding, making stuff in Blender, playing the piano, and photography'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'😎'" :title="'Alex'" :location="'https://www.alexcastronovo.com/'" :description="'A research partner I have yet to properly befriend who has experience in many CS related fields'" :tag="'Friend'" :tagColor="'#276266'" /> 
                <door :icon="'☕'" :title="'Network Chuck'" :location="'https://www.youtube.com/@NetworkChuck'" :description="'His tutorials and educational videos are so great and he was the reason I tried Linux for the first time'" :tag="'Creator'" :tagColor="'#FF0000'" /> 
                <door :icon="'️‍🔥'" :title="'Fireship'" :location="'https://www.youtube.com/@Fireship'" :description="'The entertainment & education combo in Fireships videos are simply unmatched and I tend to get a lot of my tech news from him now'" :tag="'Creator'" :tagColor="'#FF0000'" /> 
                <door :icon="'🍳'" :title="'Frying Pan'" :location="'https://www.youtube.com/@FryingPan'" :description="'Frying Pans skits and journey helped inspire me to continue in CS alongside attempting a startup'" :tag="'Creator'" :tagColor="'#FF0000'" /> 
                <door :icon="'🦉'" :title="'Raid Owl'" :location="'https://www.youtube.com/@RaidOwl'" :description="'Without RaidOwl, I probably would not have as secure of a homelab setup as I do now nor would I be using raid redundancy'" :tag="'Creator'" :tagColor="'#FF0000'" /> 
            </div>
            <div class="flex justify-between items-center w-full">
                <div class="w-[45%] h-[1px] bg-white"></div>
                <div class="w-6 h-6 bg-white rounded-full"></div>
                <div class="w-[45%] h-[1px] bg-white"></div>
            </div> 
            <section class="p-4 bg-black h-[50vh] w-screen flex justify-center sm:justify-start items-end poppins">
                <a href="">
                    <pre class="font-mono text-md leading-none select-none">
_|  _|      _|    _|  _|   
_|  _|    _|  _|  _|  _|   
_|_ _|_|  _|  _|  _|_ _|_| 
    _|    _|  _|      _|   
    _|      _|        _|   
                    </pre>
                </a>
            </section>
        </div>
    </div>
    <div v-else style="background: url(/mountains.jpg); background-size: cover; background-attachment: fixed;" class="w-screen h-screen p-4 flex flex-col justify-between items-center">
        <AppModal
            :show="showModal"
            :appTitle="selectedApp.title"
            :description="selectedApp.description"
            :demoLink="selectedApp.demoLink"
            :githubLink="selectedApp.githubLink"
            :sideImage="selectedApp.sideImage"
            :displayDemoButton="selectedApp.displayDemoButton"
            :displaySourceButton="selectedApp.displaySourceButton"
            @close="closeModal"
        />
        <div class="flex flex-col justify-center items-center m-6">
            <h1 class="text-5xl font-bold">Welcome to my link lobby.</h1>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="w-[65vw] flex justify-between items-center">
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] bg-slate-900 bg-opacity-50 shadow-2xl py-5 px-8 overflow-scroll flex justify-center items-center">
                        <p class="text-xl overflow-scroll">👋🤠 Hi! 
                            Welcome to my website hub! This page is designed like a tablet home screen for quick access to my related links! Tap an icon for details or drag to see more apps.
                        </p>
                    </div>
                    <p class="text-xl">Summary</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] flex justify-center items-center overflow-hidden bg-slate-900 bg-opacity-50 shadow-2xl">
                        <img class="w-full h-[90%]" src="https://spotify-github-profile.kittinanx.com/api/view?uid=playpaco12&cover_image=false&theme=default&show_offline=true&background_color=&interchange=true&bar_color_cover=false" alt="Spotify Status">
                    </div>
                    <p class="text-xl">Spotify Activity</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] flex justify-center items-center overflow-hidden bg-[#202225] shadow-2xl">
                        <img class="w-full h-full" src="https://discord-readme-badge.vercel.app/api?id=829875896864866314" alt="My Discord Status Image">
                    </div>
                    <p class="text-xl">Discord Activity</p>
                </div>
            </div>
            <swiper
                class="w-[70vw] h-[45vh]"
                :modules="modules"
                :slides-per-view="1"
                :space-between="150"
                navigation
                :pagination="{ clickable: true }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide>
                    <div class="h-full flex flex-col justify-between px-16 py-8">
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP1R1"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                :borderRadius="app.borderRadius"
                                @open-modal="openModalP1R1"
                            />
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP1R2"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                :borderRadius="app.borderRadius"
                                @open-modal="openModalP1R2"
                            />
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="h-full flex flex-col justify-between px-16 py-8">
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP2R1"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                :borderRadius="app.borderRadius"
                                @open-modal="openModalP2R1"
                            />
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP2R2"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                :borderRadius="app.borderRadius"
                                @open-modal="openModalP2R2"
                            />
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
        <div class="w-[30vw] h-[12vh] px-3 border-[1px] border-slate-200 border-opacity-5 shadow-2xl rounded-[2rem] flex justify-around items-center">
            <div class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img class="scale-x-90" src="/icons/sitemap-icon.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Sitemap (you are here)
                </span>
            </div>
            <a href="https://zachl.tech" target="_blank" class="relative group w-24 h-24 rounded-[25%]  flex justify-center items-center shadow-lg bg-cover">
                <img class="scale-90" src="/icons/socials.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Socials
                </span>
            </a>
            <a href="https://byeurl.cyou/comingsoon" target="_blank" class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img class="w-full h-full rounded-full"src="/icons/portfolio-neon.jpg" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Portfolio
                </span>
            </a>
            <a href="https://resume.zachl.tech" target="_blank" class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img src="/icons/resume.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Résumé
                </span>
            </a>
            <a href="https://byeurl.cyou/comingsoon" target="_blank" class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img src="/icons/blog.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Blog
                </span>
            </a>
        </div>
    </div>
</template>