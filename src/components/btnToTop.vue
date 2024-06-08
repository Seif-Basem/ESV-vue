<template>
  <a href="" class="up-btn" :class="{ show: showButton }" @click="scrollToTop">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path
        d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
      />
    </svg>
  </a>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY >= 1000;
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavier: "smooth" });
    },
  },
};
</script>

<style scoped>
/* start up-btn */
.up-btn {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: var(--main-color);
  color: white;
  position: fixed;
  bottom: 50px;
  right: -50px;
  z-index: 1;
  transition: calc(var(--main-transition) - 0.2s);
  /* opacity: 0; */
}
.up-btn svg {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20px;
}
.up-btn:hover {
  background-color: var(--main-color-alt);
}
@media (max-width: 767px) {
  .up-btn {
    right: -50px;
    border: 0.5px solid white;
  }
}
.up-btn.show {
  right: 50px;
}
@media (max-width: 767px) {
  .up-btn.show {
    right: 30px;
  }
}
/* end up-btn */
</style>
