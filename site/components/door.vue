<template>
    <a :style="{ background: background }" :href="location" class="w-[300px] mb-12 p-2 flex flex-col items-center gap-8 shadow-inner rounded-lg">
        <div class="flex w-full justify-between">
            <p class="text-xl">{{ icon }} {{ title }}</p>
            <div :style="{ backgroundColor: tagColor }" class="px-1 text-lg rounded-lg"> {{ tag }} </div>
        </div>
        <p>{{ description }}</p>
    </a>
</template>

<script>
    export default {
        props: {
            icon: {
                required: true
            },
            title: {
                required: true
            },
            location: {
                required: true
            },
            description: {
                required: true
            },
            tag: {
                required: true
            },
            tagColor: {
                required: true
            },
            background: {
                required: false
            }
        }
    }
</script>