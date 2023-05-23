<script setup>
import { mapState } from 'vuex'
</script>

<template>
  <button class="selector-box" @click="handleClick(section.type)" v-for="(section) in sections">
    <img class="selector-box-hair" :src="`/images/wardrobe/${section.type}/default.svg`" />
  </button>
</template>

<script>

export default {
  computed: mapState({
    sections: (state) => state.character.sections,
  }),
  methods: {
    handleClick(type) {
      this.$store.commit('character/SET_TYPE', type);
      this.$store.commit('global/SHOW_POPUP');
    }
  }
}
</script>


<style lang="scss" scoped>
  @use './styles.scss';
  </style>