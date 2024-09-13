<template>
    <div v-if="show" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div @click.stop class="w-[55vw] h-[65vh] bg-slate-700 rounded-3xl shadow-lg flex overflow-hidden">
            <div class="w-[55%] h-full flex flex-col justify-between p-6">
                <div class="flex flex-col gap-2">
                    <h1 class="text-5xl font-bold mb-4">{{ appTitle }}</h1>
                    <div class="w-full h-[2px] bg-slate-600 bg-opacity-50 mb-3"></div>
                    <p>{{ description }}</p>
                </div>
                <div class="flex flex-col gap-5">
                    <div class="w-full h-[2px] bg-slate-600 bg-opacity-50"></div>
                    <div class="flex gap-4">
                        <a :href="demoLink" :style="{ display: displayDemoButton }" target="_blank" class="px-4 py-2 text-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white rounded-xl">Take a look</a>
                        <a :href="githubLink" :style="{ display: displaySourceButton }" target="_blank" class="px-4 py-2 text-xl bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-xl">Source</a>
                    </div>
                </div>
            </div>
            <div class="w-[45%] h-full bg-cover" :style="{ backgroundImage: `url(${sideImage})` }"></div>
        </div>
    </div>
</template>
  
<script>
    export default {
        props: {
            show: {
                type: Boolean,
                required: true
            },
            appTitle: {
                type: String,
                required: true
            },
            description: {
                type: String,
                required: true
            },
            demoLink: {
                type: String,
                required: true
            },
            githubLink: {
                type: String,
                required: false
            },
            sideImage: {
                type: String,
                required: true
            },
            displayDemoButton: {
                type: String,
                required: false,
            },
            displaySourceButton: {
                type: String,
                required: false
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            }
        }
    };
</script>