<script setup>
import { mapState } from 'vuex'
</script>

<template>
  <button @click="handleClick(item)" v-if="section.type === type" v-for="(item) in section.items" class="popup-box">
    <img class="popup-box-head" :src="`/images/wardrobe/${ section.type }/${ item }.svg`" />
  </button>
</template>

<script>
export default {
  props: ['section'],
  computed: mapState({
    type: (state) => state.character.type
  }),
  methods: {
    handleClick(item) {
      this.$store.commit('character/SET_SELECTED', {
        item,
        type: this.section.type,
      });
    }
  }
}
</script>