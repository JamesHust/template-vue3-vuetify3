<template>
  <div class="main-container">
    <div class="content-page">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script setup>
import {RouterView} from 'vue-router'

</script>

<style lang="scss" scoped>
.main-container {
  min-height: 100%;
  position: relative;
}

.content-page {
  height: 100vh;
  z-index: 2;
}

/*For mobiles*/
@media (min-width: 320px) and (max-width: 768px) {
}
</style>