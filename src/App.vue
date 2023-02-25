<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script setup>
import {RouterView} from 'vue-router'
</script>

<style lang="scss" scoped>
// Style for lightbox
:deep(.vel-modal) {
  background: #3e4041 !important;
}
:deep(.vel-img) {
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px !important;
}
</style>