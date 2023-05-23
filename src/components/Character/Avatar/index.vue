<script setup>
import { mapState } from 'vuex'
</script>

<template> 

<div class="character-box">
    <div class="character-box-head">
      <img class="character-box-img" src="/images/head.svg" />
      <img class="character-box-hair"  v-if="selection === 'head'" :src="headSelected" /> 
    </div>
    <div class="character-box-chest">
      <img class="character-box-img" src="/images/chest.svg" />
      <img class="character-box-shirt" v-if="selection === 'chest'" :src="chestSelected" /> 
    </div>
    <div class="character-box-legs">
      <img class="character-box-img" src="/images/legs.svg" />
      <img class="character-box-pants" v-if="selection === 'legs'" :src="legsSelected" /> 
    </div>
  </div> 

</template>

<script>
export default {
  computed: mapState({
    headSelected: (state) => state.global.headSelected,
    chestSelected: (state) => state.global.chestSelected,
    legsSelected: (state) => state.global.legsSelected,
    selection: (state) => state.global.selection
  }),
  methods: {
    handleClick(event) {
      this.$store.commit('global/SET_HEADSELECTED', this.headSelected);
      this.$store.commit('global/SET_CHESTSELECTED', this.chestSelected);
      this.$store.commit('global/SET_LEGSSELECTED', this.legsSelected);
    }
  }
}
</script>


<style lang="scss" scoped>
  @use './styles.scss';
</style>