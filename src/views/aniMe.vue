<template>
  <!-- start landing -->
  <div class="landing" id="landing-anime">
    <div class="land">
      <img src="../assets/imgs/landing-anime.gif" alt="background img" />
    </div>
    <div class="text">
      <img src="../assets/imgs/anime-logo.png" alt="unreal engin logo" />
      <p>ANIMATION<br />And How It Work</p>
    </div>
  </div>
  <!-- end landing -->
  <!-- start content -->
  <div class="content" style="overflow-x: hidden">
    <div class="container">
      <div
        class="box"
        v-for="anime in animations"
        :key="anime.id"
        :style="`flex-direction: ${anime.direction}`"
      >
        <div class="text" data-aos="slide-right">
          <h2>{{ anime.head }}</h2>
          <p>{{ anime.content }}</p>
        </div>
        <div class="shape" data-aos="slide-left">
          <img :src="require(`../assets/${anime.img}`)" alt="animation icon" />
        </div>
      </div>
    </div>
  </div>
  <!-- end content -->
  <!-- start section -->
  <div class="section" style="overflow-x: hidden">
    <h2 class="main-title">3D modeling softwares</h2>
    <div class="container">
      <div
        class="cont"
        data-aos="flip-right"
        v-for="app in animeapps"
        :key="app.id"
      >
        <div class="flip-card">
          <div class="front">
            <img :src="require(`../assets/${app.img}`)" :alt="app.head" />
          </div>
          <div class="back">
            <h2>{{ app.head }}</h2>
            <p>{{ app.p }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end section -->
</template>

<script>
import animationsData from "../json/animations.json";
import animeappsData from "../json/animeapps.json";

export default {
  data() {
    return {
      animations: animationsData,
      animeapps: animeappsData,
    };
  },
};
</script>

<style scoped>
/* start landing */
.landing {
  position: relative;
}
.landing::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 50%);
}
.landing .land img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
.landing .text {
  position: absolute;
  top: 60%;
  transform: translateY(-60%);
  width: 100%;
  text-align: center;
  color: white;
  padding: 50px;
}
.landing .text p {
  font-size: 60px;
  font-weight: bold;
  line-height: 1.1;
}
.landing .text img {
  width: 120px;
  margin-bottom: 20px;
}
@media (max-width: 767px) {
  .landing .text {
    top: 70%;
  }
  .landing .text img {
    width: 100px;
  }
  .landing .text p {
    font-size: 40px;
  }
}
/*end landing*/
/* start content */
.content {
  padding-bottom: var(--section-padding);
  background-image: url(../assets/imgs/www.jpg);
  background-size: cover;
  position: relative;
}
.content::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 55%);
}
.content .box {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 40px 0 90px;
  position: relative;
}
.content .box .text {
  text-align: center;
  width: 40%;
}
.content .box .text h2 {
  color: var(--anime-color);
  margin-bottom: 15px;
  font-size: 35px;
  text-transform: uppercase;
}
.content .box .text p {
  color: white;
  font-size: 21px;
  line-height: var(--main-line-height);
}
.content .box .shape {
  border-radius: 70% 30% 30% 70% / 60% 40% 60% 40%;
  background-color: #1c1c1c;
  padding: 150px;
  width: 28%;
  position: relative;
}
.content .box .shape img {
  position: absolute;
  top: 50px;
  left: 70px;
  width: 200px;
}
@media (max-width: 991px) {
  .content .box {
    flex-direction: column;
  }
  .content .box .text {
    width: 100%;
    margin-bottom: 70px;
  }
}
/* end content */
/* start section */
.section {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.section .container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 20px;
}
.section .cont {
  perspective: 1000px;
}
.section .flip-card {
  width: 250px;
  height: 250px;
  margin-top: 20px;
  position: relative;
  transform-style: preserve-3d;
  transition: all 0.8s ease-in-out;
}
.section .flip-card:hover {
  transform: rotateY(180deg);
}
.section .flip-card .front,
.section .flip-card .back {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #313131;
  padding: 10px;
  border-radius: 30px;
  text-align: center;
}
.section .flip-card .front {
  z-index: 2;
  backface-visibility: hidden;
}
.section .flip-card .front img {
  position: relative;
  top: 20px;
  width: 80%;
  height: 80%;
}
.section .flip-card .back {
  z-index: 1;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  background: linear-gradient(135deg, #313131, #191919);
  padding: 30px;
}
.section .flip-card .back h2 {
  color: var(--anime-color);
  margin-bottom: 10px;
}
.section .flip-card .back p {
  color: white;
}
/* end section */
</style>
