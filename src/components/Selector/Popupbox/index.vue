<template>
<div v-show="modalActive" class="popup"> 
<button class="back-button"> ← </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
  <button class="popup-box">
    <img class="popup-box-pants" src="/images/wardrobe/legs/pants.svg" />
  </button>
</div>
</template>

<script> 
export default {
    props: ["modalActive"],
  };
    
  
</script>

<style lang="scss" scoped>
  @use './styles.scss';
  </style>