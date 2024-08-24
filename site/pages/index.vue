<template>
    <div class="w-screen h-screen p-4 bg-white flex flex-col justify-between items-center">
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
            <div class="w-24 h-24 bg-black rounded-[25%] shadow-lg"></div>
            <div class="w-24 h-24 bg-black rounded-[25%] shadow-lg"></div>
            <div class="w-24 h-24 bg-black rounded-[25%] shadow-lg"></div>
            <div class="w-24 h-24 bg-black rounded-[25%] shadow-lg"></div>
            <div class="w-24 h-24 bg-black rounded-[25%] shadow-lg"></div>
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
  };
</script>
