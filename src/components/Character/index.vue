<script setup>
import Avatar from '@/components/Character/Avatar'
import { mapState } from 'vuex'
</script>



<template> 
  <div class="character">
    <div class="character-colours">
    <button
      v-for="colour in colours"
      type="button"
      @click="handleClick(colour.class)"
      :class="`character-colours-${colour.class} character-colours-selection`" 
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
