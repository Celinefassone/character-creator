<template>
 <div class="selector"> 
  <button class="selector-box" @click="handleClick('/images/wardrobe/head/hair.svg')" ref="button">
      <img class="selector-box-hair" src="/images/wardrobe/head/hair.svg" />
    </button>
    <button class="selector-box" @click="handleClick('/images/wardrobe/chest/hoodie.svg')">
      <img class="selector-box-hoodie" src="/images/wardrobe/chest/hoodie.svg" />
    </button>
    <button class="selector-box"  @click="handleClick('/images/wardrobe/legs/pants.svg')">
      <img class="selector-box-pants" src="/images/wardrobe/legs/pants.svg" />
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