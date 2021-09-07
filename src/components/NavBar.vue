<template lang="en">
  <nav>
   <div class="content">
      <a href="/" class="logo nav-link"><Logo class="logo-img" />Se Buscan</a>
   <button @click="menuHandler" class="hamburger-menu" ref="hamburgerMenu">
     <HamburgerButton />
   </button>
  <ul :class="['nav-menu', {'hamburger-menu-active': visibleMenu}]">
      <li class="nav-menu-item">
        <router-link to="/" @click="closeMenu" class="nav-menu-link nav-link">Inicio</router-link>
      </li>
      <li class="nav-menu-item">
        <router-link to="/who-we-are" @click="closeMenu" class="nav-menu-link nav-link">Quiénes Somos</router-link>
      </li>
      <li class="nav-menu-item">
        <router-link to="/blog" @click="closeMenu" class="nav-menu-link nav-link">Blog</router-link>
      </li>
      <li class="nav-menu-item">
        <router-link to="/app" @click="closeMenu" class="nav-menu-link nav-link">Nuestra App</router-link>
      </li>
    </ul>
   </div>
  </nav>
</template>

<script>
import Logo from '@/components/Logo.vue'
import HamburgerButton from '@/components/HamburgerButton.vue'
export default {
  name: 'NavBar',
  data () {
    return {
      visibleMenu: false
    }
  },
  methods: {
    menuHandler: function () {
      const hamburger = this.$refs.hamburgerMenu
      this.visibleMenu = !this.visibleMenu;
      (this.visibleMenu)
        ? hamburger.setAttribute('aria-label', 'Cerrar menú')
        : hamburger.setAttribute('aria-label', 'Abrir menú')
    },
    closeMenu: function () {
      if (this.visibleMenu) {
        this.menuHandler()
      }
    }
  },
  components: {
    Logo,
    HamburgerButton
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

nav {
  background-color: #027ba4;
  height: 80px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  z-index: 3;
}

.content {
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0px auto;
  z-index: 4;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
}

.logo {
  font-size: 30px;
  font-weight: bold;
  padding: 0px 20px;
  line-height: 80px;
}

.logo-img {
  vertical-align: middle;
  margin-right: 5px;
}

.nav-menu {
  display: flex;
  margin-right: 40px;
  list-style: none;
}

.nav-menu-item {
  font-size: 14px;
  margin: 0px 10px;
  line-height: 80px;
  text-transform: uppercase;
  width: max-content;
}

.nav-menu-link {
  padding: 8px 12px;
  border-radius: 10px;
}
.nav-menu-link:hover,
.router-link-active {
  background-color: #f0b71a;
  color: #a37a0a;
  transition: 0.5s;
}

.hamburger-menu {
  background: none;
  border: none;
  padding: 0px 20px;
  display: none;
}
@media (max-width: 780px) {
  .logo {
    font-size: 25px;
    font-weight: bold;
    padding: 0px 20px;
  }

  .nav-menu {
    flex-direction: column;
    background-color: #f0b71a;
    position: fixed;
    left: 100%;
    top: 80px;
    align-items: center;
    width: 100%;
    padding: 20px 0px;
    height: calc(100% - 60px);
    overflow-y: auto;
    transition: left 0.5s;
  }

  .logo-img {
    padding-top: 5px;
  }
  .nav-menu-item {
    font-size: 16px;
    line-height: 70px;
  }

  .nav-link {
    text-decoration: none;
  }

  .nav-menu-link {
    color: #000;
  }

  .nav-menu-link:hover,
  .router-link-active {
    background: none;
    color: #fff;
  }

  .hamburger-menu {
    display: block;
  }

  .hamburger-menu-active {
    left: 0%;
  }
}
</style>
