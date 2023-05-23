<script setup>
import { mapState } from 'vuex'
import List from './List.vue'
</script>

<template>
<div v-show="isVisible" class="popup" @click="handleClick">
  <button class="back-button" @click.stop="handleClose"> ← </button>
  <List v-for="(section) in sections" :section="section" />
</div>
</template>

<script>
export default {
  computed: mapState({
    isVisible: (state) => state.global.isVisible,
    sections: (state) => state.character.sections
  }),
  methods: {
    handleClose() {
      this.$store.commit('global/HIDE_POPUP')
    },
  }
};
</script>

<style lang="scss">
@use './styles.scss';
</style>