<template>
    <div class="w-screen h-screen p-4 bg-white flex flex-col justify-between items-center">
        <AppModal
            :show="showModal"
            :appTitle="selectedApp.title"
            :description="selectedApp.description"
            :demoLink="selectedApp.demoLink"
            :githubLink="selectedApp.githubLink"
            @close="closeModal"
        />
        <div class="flex flex-col justify-center items-center m-6">
            <h1 class="text-5xl font-bold">Welcome to my link lobby.</h1>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="w-[65vw] flex justify-between items-center">
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] bg-slate-400 "></div>
                    <p class="text-xl">Tile 1</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] bg-slate-400 "></div>
                    <p class="text-xl">Tile 1</p>
                </div>
                <div class="flex flex-col justify-center items-center gap-2">
                    <div class="w-[20.5vw] h-[20vh] rounded-[2rem] bg-slate-400 "></div>
                    <p class="text-xl">Tile 1</p>
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
                <swiper-slide>Slide 2</swiper-slide>
                <swiper-slide>Slide 3</swiper-slide>
                ...
            </swiper>
        </div>
        <div class="w-[30vw] h-[12vh] px-3 bg-slate-300 rounded-[2rem] flex justify-around items-center">
            <div class="relative group w-24 h-24 bg-black rounded-[25%] shadow-lg">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    App 1
                </span>
            </div>
            <div class="relative group w-24 h-24 bg-black rounded-[25%] shadow-lg">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    App 1
                </span>
            </div>
            <div class="relative group w-24 h-24 bg-black rounded-[25%] shadow-lg">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    App 1
                </span>
            </div>
            <div class="relative group w-24 h-24 bg-black rounded-[25%] shadow-lg">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    App 1
                </span>
            </div>
            <div class="relative group w-24 h-24 bg-black rounded-[25%] shadow-lg">
                <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    App 1
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
                        githubLink: 'https://github.com/user/repo1'
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
