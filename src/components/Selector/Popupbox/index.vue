<script setup>
import { mapState } from 'vuex'
</script>

<template>
  <h1>{{selection}}</h1>
<div v-show="isVisible" class="popup">
  <button class="back-button" @click="handleClose"> ← </button>
  <div v-if="false">
    Legs here
  </div>
  <div v-else-if="false">
    Legs here
  </div>
  <div v-else-if="false">
    Legs here
  </div>
  <!-- <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button> -->
</div>
</template>

<script>
export default {
  computed: mapState({
    isVisible: (state) => state.global.isVisible,
    selection: (state) => state.global.selection
  }),
  methods: {
    handleClose() {
      this.$store.commit('global/HIDE_POPUP')
    }
  }
};
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>