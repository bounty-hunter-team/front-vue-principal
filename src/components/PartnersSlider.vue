<template>
  <div class="slider">
    <div class="slide-track">
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('findeter')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('mintic')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('todos')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('vive_digital')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('emprende_con_datos')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('findeter')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('mintic')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('todos')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('vive_digital')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('emprende_con_datos')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('findeter')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('mintic')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
           :src="getImageUrl('todos')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('vive_digital')"
        />
      </div>
      <div class="slide">
        <img
          class="slide-image"
          :src="getImageUrl('emprende_con_datos')"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'partnerSlider',
  methods: {
    getImageUrl: (image) => require(`@/assets/img/${image}.png`)
  }
}
</script>

<style scoped>
body {
  align-items: center;
  background: #e3e3e3;
  display: flex;
  height: 100%;
  justify-content: center;
}

.slide-image {
  width: 200px;
  height: 100px;
}
.slider {
  background: white;
  box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
  margin: auto;
  overflow: hidden;
  position: relative;
  width: 100%;
}
.slider::before,
.slider::after {
  background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
  content: '';
  height: 150px;
  position: absolute;
  width: 200px;
  z-index: 2;
}
.slider::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}
.slider::before {
  left: 0;
  top: 0;
}
.slider .slide-track {
  -webkit-animation: scroll 50s linear infinite;
  animation: scroll 50s linear infinite;
  display: flex;
  width: calc(250px * 14);
}
.slider .slide {
  height: 100px;
  width: 250px;
}
.slide {
  margin: 30px 100px;
}

@-webkit-keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-250px * 7));
  }
}
</style>
