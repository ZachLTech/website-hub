<template>
    <div v-if="show" @click="closeModal" class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div @click.stop class="w-96 bg-white rounded-lg shadow-lg p-6">
        <h2 class="text-2xl mb-4">{{ appTitle }} Details</h2>
        <p>{{ description }}</p>
        <div class="mt-4 flex justify-between">
          <a :href="demoLink" target="_blank" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Demo</a>
          <a :href="githubLink" target="_blank" class="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900">GitHub</a>
        </div>
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
                required: true
            }
        },
        methods: {
            closeModal() {
                this.$emit('close');
            }
        }
    };
</script>