<script setup>
import Header from '@/components/Header'
import Selector from '@/components/Selector'
import Character from '@/components/Character'
</script>

<template>
  <main role="main" class="home-page">
    <section class="container">
      <Header />
      <div class="content">
      <Selector />
      <Character />
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
@use './styles.scss';
</style>