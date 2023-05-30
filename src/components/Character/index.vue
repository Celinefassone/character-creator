<script setup>
import Avatar from '@/components/Character/Avatar'
import { mapState } from 'vuex'
</script>



<template> 
  <div class="character">
    <div class="character-colours">
      <button 
      type="button"
  @click="handleClick(colours[0].class)"
  :class="`character-colours-${colours[0].class} character-colours-selection`" 
></button>
      <button
      type="button"
  @click="handleClick(colours[1].class)"
  :class="`character-colours-${colours[1].class} character-colours-selection`" 
      ></button>
      <button
      type="button"
  @click="handleClick(colours[2].class)"
  :class="`character-colours-${colours[2].class} character-colours-selection`" 
      ></button>
      <button
      type="button"
  @click="handleClick(colours[3].class)"
  :class="`character-colours-${colours[3].class} character-colours-selection`" 
      ></button>
      <button
      type="button"
  @click="handleClick(colours[4].class)"
  :class="`character-colours-${colours[4].class} character-colours-selection`" 
      ></button>
      <button
      type="button"
  @click="handleClick(colours[5].class)"
  :class="`character-colours-${colours[5].class} character-colours-selection`" 
      ></button>
    </div>
    <Avatar /> 
  </div>
  </template>

<script>

export default {
  computed: mapState({
    colours: (state) => state.character.colours,
  }),
  methods: {
    handleClick(colours) {
      this.$store.commit('character/SET_COLOURS', colours);
    }
  }
}
</script>



<style lang="scss" scoped>
  @use './styles.scss';
  </style>
