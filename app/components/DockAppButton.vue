<template>
    <div class="relative group w-24 h-24 rounded-[25%] flex justify-center items-center shadow-lg bg-cover">
        <img class="scale-x-90" :src="icon" alt="">
        <span class="tooltip-text absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 w-max px-2 py-1 bg-gray-700 text-white text-sm rounded opacity-0 group-hover:opacity-100 transition-opacity">
            {{ title }}
        </span>
    </div>
</template>

<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            icon: {
                type: String,
                required: true
            }
        }
    }
</script>