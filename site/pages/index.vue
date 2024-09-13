<template>
    <div style="background: url(/mountains.jpg); background-size: cover; background-attachment: fixed;" class="w-screen h-screen p-4 flex flex-col justify-between items-center">
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
                            Welcome to my website hub! This page is designed like a mobile home screen, offering quick access to my other websites & more! Tap an icon for more info.
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

<script>
    import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    import 'swiper/css/navigation';
    import 'swiper/css/pagination';
    import 'swiper/css/scrollbar';

    export default {
        components: {
            Swiper,
            SwiperSlide,
        },
        setup() {
            const onSwiper = (swiper) => {
                console.log(swiper);
            };
            const onSlideChange = () => {
                console.log('slide change');
            };
            return {
                onSwiper,
                onSlideChange,
                modules: [Navigation, Pagination, Scrollbar, A11y],
            };
        },
        data() {
            return {
                showModal: false,
                selectedApp: {},
                appsP1R1: [
                    {
                        title: 'SSHfolio',
                        backgroundImage: '/icons/sshfolio-icon.png',
                        description: `SSHfolio is a modular TUI (Text User Interface) portfolio application based on the Bubble Tea framework. This project allows you to showcase your portfolio in a terminal environment, providing a unique way to present your projects, biography, contact information, and more. It's designed to be easily customizable and self-hostable using Docker. I originally made this for personal use as my own SSH portfolio, but have since made it open source and modular so anyone can recreate their own SSHfolio adding their projects, experience, about me, etc.`,
                        demoLink: 'https://github.com/ZachLTech/sshfolio',
                        githubLink: 'https://github.com/ZachLTech/sshfolio', 
                        sideImage: '/aside_pictures/sshfolio.png',
                        displayDemoButton: 'none'
                    },
                    {
                        title: 'Bentofolio',
                        backgroundImage: '/icons/bento-box.svg',
                        description: 'Bentofolio is my personal portfolio project that showcases my skills and expertise through a bento grid-style layout. Built using Nuxt.js and TailwindCSS, it offers an interactive and visually appealing interface. The project also includes SwiperJS for smooth navigation and integrates GitHub readme stats for dynamic data visualization.',
                        demoLink: 'https://bentofolio.zachl.tech',
                        githubLink: 'https://github.com/ZachLTech/bentofolio',
                        sideImage: '/aside_pictures/bentofolio-side.png',
                    },
                    {
                        title: 'AEV-Software',
                        backgroundImage: '/icons/alset.png',
                        description: 'The Alset Solar Cybersedan Software is a comprehensive full-stack ecosystem developed for the FAUHS AEV solar car, enabling seamless integration and operation of various hardware components such as the Thunderstruck BMS, cameras, GPS module, and custom sound horn. This project was undertaken as part of the Advanced Experimental Vehicles program at FAU High School.',
                        demoLink: 'https://aev.zachl.tech/',
                        githubLink: 'https://github.com/YamanDevelopment/AEV-Software',
                        sideImage: '/aside_pictures/alset-side.png',
                    },
                    {
                        title: 'Devfolify',
                        backgroundImage: '/icons/devfolify.png',
                        description: `Devfolify is a full stack application designed to provide personalized coding challenges. Our goal is to move beyond the traditional lists of beginner or advanced projects and offer unique, skill-level tailored challenges that encourage creativity and problem-solving. This approach not only helps you develop new projects and skills but also fosters real-world problem-solving abilities, and perhaps even that idea of a lifetime that could take you to great places! 🌟 
                        Now the main premise and idea behind this app, although not fully built yet, is that people will be able to make these challenges or post ones themselves for others to participate in. Somewhat like a mini hackathon but on everyones own time and with a public leaderboard, individual stats, a place to discover other peoples projects, and even maybe a section with coding articles from daily.dev. But not only that, it encourages people to instead of just building a premade project, find a solution to a real world issue with creativity and code.`,
                        demoLink: 'https://devfolify.com',
                        githubLink: 'https://github.com/YamanDevelopment/Devfolify',
                        sideImage: '/aside_pictures/devfolify-side.png',
                    },
                    {
                        title: 'Schedulix',
                        backgroundImage: '/icons/schedulix.png',
                        description: 'Schedulix is a program that helps university students develop their course schedules for their upcoming semester. It takes in the user\'s preferences and generates multiple schedules that fit the user\'s preferences. The program is written in JavaScript and uses the Node.js runtime environment.',
                        demoLink: 'https://schedulixfedemo.zachl.tech/',
                        githubLink: 'https://github.com/YamanDevelopment/Schedulix',
                        borderRadius: '25%',
                        sideImage: '/aside_pictures/schedulix-side.png',
                    },
                    {
                        title: 'WebDevDocs',
                        backgroundImage: '/icons/webdevdocs.png',
                        description: 'Welcome to the no-nonsense web development "course" meant to help guide you to learn web development and coding in JS the right way, with basic instruction and explaination followed by practice/mini project based experimenting on your end. 🌐💻',
                        demoLink: 'https://webdev.zachl.tech/',
                        githubLink: 'https://github.com/ZachLTech/webdevcourse',
                        sideImage: '/aside_pictures/webdevdocs-side.png',
                    },
                ],
                appsP1R2: [
                    {
                        title: 'MemeAPI',
                        backgroundImage: '/icons/memes.svg',
                        description: `Just a funny API with elysiajs because bun is cool and I had this idea a while ago for fun 😀`,
                        demoLink: 'https://memes.zachl.tech/',
                        githubLink: 'https://github.com/ZachLTech/RandomMemeRestAPI',
                        sideImage: '/aside_pictures/memeapi-side.png',
                    },
                    {
                        title: 'Fileshare',
                        backgroundImage: '/icons/fileshare.png',
                        description: 'A service I self host which is used as a replacement to apps like dropbox. The convenience of having my own filesharing service is so nice',
                        demoLink: 'https://share.zachl.tech/',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/fileshare-side.png',
                    },
                    {
                        title: 'SearXNG',
                        backgroundImage: '/icons/searxng.png',
                        description: 'A service I self host which is used as a better and more private search engine to replace duckduckgo, google, etc.. Why use Google or DuckDuckGo when you can use a combination of them all, AND keep your data private!!',
                        demoLink: 'https://search.zachl.tech',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/searxng-side.png',
                    },
                    {
                        title: 'Thandi',
                        backgroundImage: '/icons/thandi.jpg',
                        description: 'A self-taught full-stack developer who I partner up with for various projects and Hackathons',
                        demoLink: 'https://str1ke.codes',
                        githubLink: 'https://github.com/RealStr1ke',
                        borderRadius: '100%',
                        sideImage: '/aside_pictures/thandi-side.png',
                    },
                    {
                        title: 'Amarnath',
                        backgroundImage: '/icons/amarnath.png',
                        description: 'Another close friend of mine who took up programming due to his interest in the science behind computers',
                        demoLink: 'https://jeebuscrossaint.github.io/',
                        githubLink: 'https://github.com/jeebuscrossaint',
                        borderRadius: '100%',
                        sideImage: '/aside_pictures/amarnath-side.png',
                    },
                    {
                        title: 'Jossaya',
                        backgroundImage: '/icons/jossaya.webp',
                        description: 'Jossaya is a great guy who\'s typically ready to jump head first into any coding project',
                        demoLink: 'https://jcamille.tech',
                        githubLink: 'https://github.com/jcamille2023',
                        borderRadius: '100%',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/jossaya-side.png',
                    },
                ],
                appsP2R1: [
                    {
                        title: 'Makai',
                        backgroundImage: '/icons/makai.png',
                        description: 'A very enthusiastic friend who, as he says, enjoys coding, making stuff in Blender, playing the piano, and photography',
                        demoLink: 'https://makaip.com',
                        githubLink: 'https://github.com/makaip',
                        borderRadius: '100%',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/makai-side.png',
                    },
                    {
                        title: 'Alex',
                        backgroundImage: '/icons/alex.webp',
                        description: 'A research partner I have yet to properly befriend who has experience in many CS related fields',
                        demoLink: 'https://www.alexcastronovo.com/',
                        githubLink: 'https://github.com/AlexanderJCS?',
                        borderRadius: '100%',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/alex-side.png',
                    },
                    {
                        title: 'Network Chuck',
                        backgroundImage: '/icons/networkchuck.webp',
                        description: 'His tutorials and educational videos are so great and he was the reason I tried Linux for the first time',
                        demoLink: 'https://www.youtube.com/@NetworkChuck',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/networkchuck-side.jpg',
                    },
                    {
                        title: 'Fireship',
                        backgroundImage: '/icons/fireship.png',
                        description: 'The entertainment & education combo in Fireships videos are simply unmatched and I tend to get a lot of my tech news from him now',
                        demoLink: 'https://www.youtube.com/@Fireship',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/fireship-side.jpg',
                    },
                    {
                        title: 'Frying Pan',
                        backgroundImage: '/icons/fryingpan.jpg',
                        description: 'Frying Pans skits and journey helped inspire me to continue in CS alongside attempting a startup',
                        demoLink: 'https://www.youtube.com/@FryingPan',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/fryingpan-side.png',
                    },
                    {
                        title: 'Raid Owl',
                        backgroundImage: '/icons/raidowl.jpg',
                        description: 'Without RaidOwl, I probably would not have as secure of a homelab setup as I do now nor would I be using raid redundancy',
                        demoLink: 'https://www.youtube.com/@RaidOwl',
                        borderRadius: '100%',
                        displaySourceButton: 'none',
                        sideImage: '/aside_pictures/raidowl-side.jpg',
                    },
                ],
                appsP2R2: [
                    {
                        
                    }
                ]
            };
        },
        methods: {
            openModalP1R1(title) {
                this.selectedApp = this.appsP1R1.find(app => app.title === title);
                this.showModal = true;
            },
            openModalP1R2(title) {
                this.selectedApp = this.appsP1R2.find(app => app.title === title);
                this.showModal = true;
            },
            openModalP2R1(title) {
                this.selectedApp = this.appsP2R1.find(app => app.title === title);
                this.showModal = true;
            },
            closeModal() {
                this.showModal = false;
            }
        }
    };
</script>
