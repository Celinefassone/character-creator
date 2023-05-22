<template>
  <button class="selector-box" @click="handleClick('head')">
      <img class="selector-box-hair" src="/images/wardrobe/head/hair.svg" />
    </button>
    <button class="selector-box" @click="handleClick('chest')">
      <img class="selector-box-hoodie" src="/images/wardrobe/chest/hoodie.svg" />
    </button>
    <button class="selector-box"  @click="handleClick('legs')">
      <img class="selector-box-pants" src="/images/wardrobe/legs/pants.svg" />
    </button>
</template>

<script>

export default {
  methods: {
    handleClick(selection) {
      this.$store.commit('global/SET_SELECTION', selection);
      this.$store.commit('global/SHOW_POPUP');
    }
  }
}
</script>


<style lang="scss" scoped>
  @use './styles.scss';
  </style>