<script setup>
import { mapState } from 'vuex'
</script>

<template>
<div v-show="isVisible" class="popup" @click="handleClick">
  <button class="back-button" @click.stop="handleClose"> ← </button>
  <div class="popup-inside" v-if="selection === 'head'">
  <button class="popup-box">
    <img class="popup-box-head" src="/images/wardrobe/head/diva.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-head" src="/images/wardrobe/head/hair.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-head" src="/images/wardrobe/head/shaggy.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-head" src="/images/wardrobe/head/braids.svg" />
  </button>
  </div>
  <div class="popup-inside" v-else-if="selection === 'chest'">
    <button class="popup-box">
    <img class="popup-box-chest" src="/images/wardrobe/chest/dolly.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-chest" src="/images/wardrobe/chest/hoodie.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-chest" src="/images/wardrobe/chest/sleeveless.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-chest" src="/images/wardrobe/chest/sweater.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-chest" src="/images/wardrobe/chest/top.svg" />
  </button>
  </div>
  <div class="popup-inside" v-else-if="selection === 'legs'">
    <button class="popup-box">
    <img class="popup-box-legs" src="/images/wardrobe/legs/ballerina.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-legs" src="/images/wardrobe/legs/cuteskirt.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-legs" src="/images/wardrobe/legs/jeans.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-legs" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-legs" src="/images/wardrobe/legs/shorts.svg" />
  </button>
  </div>

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
    },
    handleClick(event) {
      console.log(event.target.src)
    }
  }
};
</script>

<style lang="scss" scoped>
@use './styles.scss';
</style>