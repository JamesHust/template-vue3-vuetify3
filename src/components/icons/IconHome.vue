<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" :width="props.size" :height="props.size">
    <path fill="none" d="M0 0h24v24H0z"/>
    <path
        v-if="props.isActive"
        d="M21 20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786V20zM7 12a5 5 0 0 0 10 0h-2a3 3 0 0 1-6 0H7z"
        class="pink-red"
    />
    <path
        v-else
        d="M19 19V9.799l-7-5.522-7 5.522V19h14zm2 1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.314a1 1 0 0 1 .38-.785l8-6.311a1 1 0 0 1 1.24 0l8 6.31a1 1 0 0 1 .38.786V20zM7 12h2a3 3 0 0 0 6 0h2a5 5 0 0 1-10 0z"
        class="grey"
    />
  </svg>

</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    required: true
  },
  size: {
    type: Number,
    default: 24
  }
})
</script>

<style lang="scss" scoped>
.grey {
  fill: rgb(var(--v-theme-grey));
}

.pink-red {
  fill: rgb(var(--v-theme-pink-red));
}
</style>
