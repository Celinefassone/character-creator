<script setup>

</script>

<template>
  <main role="main" class="home-page">
    <section class="container">
      <header class="header">MAKE YOUR CHARACTER!</header>

      <div class="content">
        <div class="selector">
          <div class="selector-box">
            <img class="selector-box-hair" src="static/hair.svg" />
          </div>
          <div class="selector-box">
            <img class="selector-box-hoodie" src="static/hoodie.svg" />
          </div>
          <div class="selector-box">
            <img class="selector-box-pants" src="static/pants.svg" />
          </div>
        </div>

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
          <div class="character-box">
            <div class="character-box-head">
              <img class="character-box-img" src="static/hair.svg" />
            </div>
            <div class="character-box-chest">
              <img class="character-box-img" src="static/hoodie.svg" />
            </div>
            <div class="character-box-legs">
              <img class="character-box-img" src="static/pants.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use './styles.scss';
</style>