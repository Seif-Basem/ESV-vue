<template>
  <div v-if="isLoading" class="loading" id="preloader">
    <video class="loadd" loop autoplay muted>
      <source src="../assets/imgs/loading-animation.webm" type="" />
    </video>
    <h4>Loading...</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  mounted() {
    window.addEventListener("load", this.hideLoader);
    if (document.readyState === "complete") {
      this.hideLoader();
    }
  },
  beforeUnmount() {
    window.removeEventListener("load", this.hideLoader);
  },
  methods: {
    hideLoader() {
      this.isLoading = false;
    },
  },
};
</script>

<style scoped>
.loading {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #140429;
  position: fixed;
  z-index: 100;
}
.loading .loadd {
  width: 300px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.loading h4 {
  color: white;
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
