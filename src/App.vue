<template>
  <!-- header -->
  <headerNav />
  <!-- content -->
  <router-view />
  <!-- footer -->
  <footerSection />
  <!-- btn gets you to top of the page -->
  <btnToTop />
  <!-- loading screen -->
  <loadingScreen />
</template>

<script>
import headerNav from "@/components/headerNav";
import footerSection from "@/components/footerSection";
import btnToTop from "@/components/btnToTop";
import loadingScreen from "@/components/loadingScreen";

export default {
  components: {
    headerNav,
    footerSection,
    btnToTop,
    loadingScreen,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --main-color: #00e638;
  --main-color-alt: #00e638b3;
  --anime-color: #ff69b4;
  --anime-color-alt: #ff0080;
  --goty-color: #ffd700;
  --goty-color-alt: #998200;
  --section-background: #010203;
  --section-padding: 60px;
  --main-transition: 0.4s;
  --main-line-height: 1.5;
}
/* start scrollbar */
::-webkit-scrollbar {
  width: 10px;
}
::-webkit-scrollbar-track {
  background-color: #1a1a1a;
}
::-webkit-scrollbar-thumb {
  background-color: var(--main-color);
  border-radius: 70px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: var(--main-color-alt);
}
/* end scrollbar */

#app {
  font-family: "Poppins", sans-serif;
}

/* To Control The Padding ***********************************/

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

/* To Scroll Smoothly ***************************************/

html {
  scroll-behavior: smooth;
}

/* To Make No Decorations To The Links ********************/

a {
  text-decoration: none;
}

/* To Make No Decorations To The Lists ********************/

ul {
  list-style: none;
}

/* To Make The All Content In The Middle Of The Screen  *******/
/* And All The Media To Fit All Screen Sizes ****************/

.container {
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;
}
@media (min-width: 768px) /* small Screen */ {
  .container {
    width: 750px;
  }
}
@media (min-width: 992px) /* medium Screen */ {
  .container {
    width: 970px;
  }
}
@media (min-width: 1200px) /* large Screen */ {
  .container {
    width: 1170px;
  }
}

/*for the alt text***************/
img {
  color: white;
}

/*main title*/

.main-title {
  text-transform: uppercase;
  margin: 0 auto 80px;
  border: 2px solid white;
  color: white;
  padding: 10px 20px;
  font-size: 30px;
  width: fit-content;
  position: relative;
  z-index: 1;
  transition: var(--main-transition);
}
.main-title::before {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: var(--main-color);
  border-radius: 50%;
  left: -30px;
  top: 50%;
  transform: translateY(-50%);
}
.main-title::after {
  content: "";
  position: absolute;
  height: 12px;
  width: 12px;
  background-color: var(--main-color);
  border-radius: 50%;
  right: -30px;
  top: 50%;
  transform: translateY(-50%);
}
.main-title:hover::before {
  z-index: -1;
  animation: left-move 0.5s linear forwards;
}
.main-title:hover::after {
  z-index: -1;
  animation: right-move 0.5s linear forwards;
}
.main-title:hover {
  color: black;
  border: 2px solid black;
  transition-delay: 0.5s;
}
@keyframes left-move {
  50% {
    left: 0;
    width: 12px;
    height: 12px;
  }
  100% {
    left: 0;
    border-radius: 0;
    width: 50%;
    height: 100%;
  }
}
@keyframes right-move {
  50% {
    right: 0;
    width: 12px;
    height: 12px;
  }
  100% {
    right: 0;
    border-radius: 0;
    width: 50%;
    height: 100%;
  }
}
</style>
