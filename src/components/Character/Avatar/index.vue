<script setup>
import { mapState } from 'vuex'
</script>

<template> 
<div class="character-box">
  <div :class="`character-box-${section.type}`" v-for="(section) in sections">
    <img v-if="selected[section.type]" :src="`/images/wardrobe/${section.type}/${selected[section.type]}.svg`" />
  </div>
</div>
</template>

<script>
export default {
  computed: mapState({
    sections: (state) => state.character.sections,
    selected: (state) => state.character.selected,
  }),
}
</script>

<style lang="scss" scoped>
  @use './styles.scss';
</style>