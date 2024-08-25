<template>
    <div style="background: url(/mountains.jpg); background-size: cover; background-attachment: fixed;" class="w-screen h-screen p-4 flex flex-col justify-between items-center">
        <AppModal
            :show="showModal"
            :appTitle="selectedApp.title"
            :description="selectedApp.description"
            :demoLink="selectedApp.demoLink"
            :githubLink="selectedApp.githubLink"
            :sideImage="selectedApp.sideImage"
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
                        <img class="w-full h-full" src="https://discord-readme-badge.vercel.app/api?id=829875896864866314" alt="Discord Status">
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
                                @open-modal="openModalP1R1"
                            />
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP1R2"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                @open-modal="openModalP1R2"
                            />
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="h-full flex flex-col justify-between px-16 py-8">
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP1R1"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                @open-modal="openModalP1R1"
                            />
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <AppButton
                                v-for="(app, index) in appsP1R2"
                                :key="index"
                                :title="app.title"
                                :backgroundImage="app.backgroundImage"
                                @open-modal="openModalP1R2"
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
            <div class="relative group w-24 h-24 rounded-[25%]  flex justify-center items-center shadow-lg bg-cover">
                <img class="scale-90" src="/icons/socials.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Socials
                </span>
            </div>
            <div class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img class="w-full h-full rounded-full"src="/icons/portfolio-neon.jpg" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Portfolio
                </span>
            </div>
            <div class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img src="/icons/resume.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Résumé
                </span>
            </div>
            <div class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
                <img src="/icons/blog.png" alt="">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    Blog
                </span>
            </div>
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
                        title: 'App 1',
                        backgroundImage: 'https://example.com/image1.jpg',
                        description: 'This is the description for App 1.',
                        demoLink: 'https://example.com/demo1',
                        githubLink: 'https://github.com/user/repo1', 
                        sideImage: '/beachbg.jpg'
                    },
                    {
                        title: 'App 2',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 3',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 4',
                        backgroundImage: 'https://example.com/image1.jpg',
                        description: 'This is the description for App 1.',
                        demoLink: 'https://example.com/demo1',
                        githubLink: 'https://github.com/user/repo1'
                    },
                    {
                        title: 'App 5',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 6',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                ],
                appsP1R2: [
                    {
                        title: 'App 7',
                        backgroundImage: 'https://example.com/image1.jpg',
                        description: 'This is the description for App 1.',
                        demoLink: 'https://example.com/demo1',
                        githubLink: 'https://github.com/user/repo1'
                    },
                    {
                        title: 'App 8',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 9',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 10',
                        backgroundImage: 'https://example.com/image1.jpg',
                        description: 'This is the description for App 1.',
                        demoLink: 'https://example.com/demo1',
                        githubLink: 'https://github.com/user/repo1'
                    },
                    {
                        title: 'App 11',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
                    {
                        title: 'App 12',
                        backgroundImage: 'https://example.com/image2.jpg',
                        description: 'This is the description for App 2.',
                        demoLink: 'https://example.com/demo2',
                        githubLink: 'https://github.com/user/repo2'
                    },
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
            closeModal() {
                this.showModal = false;
            }
        }
    };
</script>
