<template>
    <div class="w-screen h-screen p-4 bg-white flex flex-col justify-between items-center">
        <div v-if="showModal" @click="closeModal" :class="{'fade-in': showModal, 'fade-out': !showModal, 'flex': showModal, 'hidden': !showModal}" class="fixed inset-0 bg-black bg-opacity-50 justify-center items-center z-50 transition-opacity duration-500">
            <div @click.stop :class="{'scale-in': showModal, 'scale-out': !showModal}" class="w-96 bg-white rounded-lg shadow-lg p-6 transition-transform duration-500">
                <h2 class="text-2xl mb-4">{{ selectedApp }} Details</h2>
                <p v-if="selectedApp === 'App 1'">This is the content for App 1.</p>
                <p v-if="selectedApp === 'App 2'">This is the content for App 2.</p>
                <p v-if="selectedApp === 'App 3'">This is the content for App 3.</p>
                <!-- Add more content based on the selectedApp value -->
            </div>
        </div>
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
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg" @click="openModal('App 1')"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between">
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
                            <div class="flex flex-col justify-center items-center gap-2">
                                <div class="w-32 h-32 bg-black rounded-[25%] shadow-lg"></div>
                                <p class="text-xl">App 1</p>
                            </div>
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
  // import Swiper core and required modules
  import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

  // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  import 'swiper/css/scrollbar';

  // Import Swiper styles
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
            selectedApp: null
        };
    },
    methods: {
        openModal(app) {
            this.selectedApp = app;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedApp = null;
        }
    }
  };
</script>
