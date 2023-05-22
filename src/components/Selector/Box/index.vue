<template>
 <div class="selector"> 
<button class="selector-box" @click="handleClick('/src/assets/wardrobe/head/hair.svg')" ref="button">
    <img class="selector-box-hair" src="/src/assets/wardrobe/head/hair.svg" />
  </button>
  <button class="selector-box" @click="handleClick('/src/assets/wardrobe/chest/hoodie.svg')">
    <img class="selector-box-hoodie" src="/src/assets/wardrobe/chest/hoodie.svg" />
  </button>
  <button class="selector-box"  @click="handleClick('/src/assets/wardrobe/legs/pants.svg')">
    <img class="selector-box-pants" src="/src/assets/wardrobe/legs/pants.svg" />
  </button>
</div>
</template>

<script>

export default {
  methods: {
    handleClick(item) {
      this.$store.commit('character/SET_HEAD', item);
    }
  }
}
</script>


<style lang="scss" scoped>
  @use './styles.scss';
  </style>