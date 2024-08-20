<template>
    <div class="w-screen h-screen bg-black flex flex-col justify-center items-center">
        <swiper
            class="w-[70vw] h-[45vh] bg-slate-900"
            :modules="modules"
            :slides-per-view="1"
            :space-between="150"
            navigation
            :pagination="{ clickable: true }"
            :scrollbar="{ draggable: true }"
            @swiper="onSwiper"
            @slideChange="onSlideChange"
        >
            <swiper-slide>
                <div class="h-full flex flex-col justify-between p-16">
                    <div class="flex flex-wrap justify-between">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap justify-between">
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
                            <p class="text-xl">App 1</p>
                        </div>
                        <div class="flex flex-col justify-center items-center gap-2">
                            <div class="w-40 h-40 bg-black rounded-[25%] shadow-lg"></div>
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
