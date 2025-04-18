<template>
    <div
      class="flex flex-col justify-center items-center gap-2 cursor-pointer hover:scale-105 transition-all"
      @click="openModal"
    >
      <div
        :style="{ backgroundImage: `url(${backgroundImage})`, borderRadius: borderRadius  }"
        class="w-32 h-32 bg-cover bg-center"
      ></div>
      <p class="text-xl">{{ title }}</p>
    </div>
</template>
  
<script>
    export default {
        props: {
            title: {
                type: String,
                required: true
            },
            backgroundImage: {
                type: String,
                required: true
            },
            borderRadius: {
                type: String,
                default: '0px',
                required: false
            }
        },
        methods: {
            openModal() {
                this.$emit('open-modal', this.title);
            }
        }
    };
</script>