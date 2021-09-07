<template>
  <section class="card-grid-container">
    <div class="card-grid">
         <a class="card">
        <div
          class="card__background"
          :style="firstImage">
        </div>
        <div class="card__content">
          <p class="card__category">Red Social</p>
          <h3 class="card__heading">Abierta a todas las personas.</h3>
        </div>
      </a>
      <a class="card">
        <div
          class="card__background"
           :style="secondImage">
        </div>
        <div class="card__content">
          <p class="card__category">Gratuita</p>
          <h3 class="card__heading">Disponible en diferentes plataformas.</h3>
        </div>
      </a>
      <a class="card">
        <div
          class="card__background"
            :style="thirdImage">
        </div>
        <div class="card__content">
          <p class="card__category">Cubrimiento Mundial</p>
          <h3 class="card__heading">Totalmente reservado y anónimo.</h3>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CardGrid',
  data () {
    return {
      firstImage: { 'background-image': this.getImageUrl('firstCard') },
      secondImage: { 'background-image': this.getImageUrl('secondCard') },
      thirdImage: { 'background-image': this.getImageUrl('thirdCard') }
    }
  },
  methods: {
    getImageUrl: (image) => `url('${require(`@/assets/img/${image}.jpg`)}')`
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');

.card-grid-container {
  --background-dark: #2d3548;
  --text-light: rgba(255, 255, 255, 0.6);
  --text-lighter: rgba(255, 255, 255, 0.9);
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 64px;
  --width-container: 100%;
}

.card-grid-container {
  background-image: linear-gradient(15deg, #f0b71a 0%, #a37a0a 150%);
  min-height: 100%;
  padding: var(--spacing-xl) var(--spacing-xl);
}

.card-grid {
  display: flex;
  grid-column-gap: var(--spacing-l);
  grid-row-gap: var(--spacing-l);
  max-width: var(--width-container);
  justify-content: space-between;
}
.card {
  list-style: none;
  position: relative;
  width: 25%;
  height: 35vh;
}
.card:before {
  content: '';
  display: block;
  padding-bottom: 100%;
  width: 100%;
}

@media (max-width: 767.98px) {
  .card {
    width: 80%;
  }

  .card-grid {
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }

  .card:before {
    padding-bottom: 0;
  }
}

.card__background {
  background-size: cover;
  background-position: center;
  border-radius: var(--spacing-l);
  bottom: 0;
  filter: brightness(0.75) saturate(1.2) contrast(0.85);
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transform-origin: center;
  transform: scale(1) translateZ(0);
  transition: filter 200ms linear, transform 200ms linear;
}

.card:hover .card__background {
  transform: scale(1.05) translateZ(0);
}

.card-grid:hover > .card:not(:hover) .card__background {
  filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
}

.card__content {
  text-align: justify;
  left: 0;
  padding: var(--spacing-l);
  position: absolute;
  top: 0;
}

.card__category {
  text-align: center;
  color: var(--text-light);
  font-size: 0.9rem;
  margin-bottom: var(--spacing-s);
  text-transform: uppercase;
}

.card__heading {
  text-align: center;
  color: var(--text-lighter);
  font-size: 1.9rem;
  text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.2);
  line-height: 1.4;
}
</style>
