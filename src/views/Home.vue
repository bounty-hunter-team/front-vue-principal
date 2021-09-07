<template>
  <div class="home">
    <SliderShow class="slider-show" />
    <KidNappedSlider />
    <CardGrid />
    <PartnersSlider />
  </div>
</template>

<script>
import SliderShow from '@/components/SliderShow.vue'
import KidNappedSlider from '@/components/KidNappedSlider.vue'
import PartnersSlider from '@/components/PartnersSlider.vue'
import CardGrid from '@/components/CardGrid.vue'
export default {
  name: 'Home',
  title: 'Inicio - Se Buscan',
  components: {
    SliderShow,
    KidNappedSlider,
    CardGrid,
    PartnersSlider
  }
}
</script>

<style>
.slider-show {
  width: 100vw;
  height: 60vh;
  overflow: hidden;
}
</style>
