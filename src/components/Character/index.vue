<script setup>
import Avatar from '@/components/Character/Avatar'
</script>

<template> 
<div class="character">
  <div class="character-colours">
    <button
      type="button"
      class="character-colours-selection character-colours-pink"
    ></button>
    <button
      type="button"
      class="character-colours-selection character-colours-orange"
    ></button>
    <button
      type="button"
      class="character-colours-selection character-colours-lilac"
    ></button>
    <button
      type="button"
      class="character-colours-selection character-colours-turquoise"
    ></button>
    <button
      type="button"
      class="character-colours-selection character-colours-yellow"
    ></button>
    <button
      type="button"
      class="character-colours-selection character-colours-mint"
    ></button>
  </div>
  <Avatar /> 
</div>
</template>

<style lang="scss" scoped>
  @use './styles.scss';
  </style>