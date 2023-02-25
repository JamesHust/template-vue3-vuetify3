<template>
  <div class="content-page centerXY">
    <div class="title-content">
      <div>Vue 3 + Vuetify 3 Template</div>
      <div class="child-title">
        Let's design your website!
      </div>
    </div>
  </div>
  <!-- Image dynamic -->
  <img
      :src="srcImg(`/img/logo.svg`)"
      alt="img_test"
      style="display:none;"
  >
</template>

<script setup lang="ts">
import {getCurrentInstance} from "vue";

const { proxy } = getCurrentInstance()
const srcImg = proxy.$image
</script>

<style lang="scss" scoped>
.content-page {
  height: 100%;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background-image: url("@/assets/img/banner.jpg");
  background-repeat: no-repeat;
  background-size: cover;

  .title-content {
    position: absolute;
    top: 200px;
    font-family: 'Dancing Script', cursive;
    color: #ffffff;
    font-weight: 400;
    font-size: 3rem;
    text-align: center;

    .child-title {
      font-family: 'Be Vietnam Pro', sans-serif;
      font-size: 1.75rem;
    }
  }
}
</style>
