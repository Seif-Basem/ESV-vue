<template>
  <div class="header">
    <div class="container">
      <svg
        class="toggle-menu"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        @click="actionToggle()"
      >
        <path
          d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
        />
      </svg>
      <ul class="links1">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Team Members</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
      <div class="logo">
        <div class="logo2">
          <router-link to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 512"
              class="logo3"
            >
              <path
                d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"
              />
            </svg>
          </router-link>
        </div>
      </div>
      <ul class="links2">
        <li>
          <a href="#"
            >Types
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="arrow"
            >
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              /></svg
          ></a>
          <div class="mega-menu mega-typs-menu">
            <ul class="sec-menu">
              <li><router-link to="/platform">Platform</router-link></li>
              <li><router-link to="/fps">Fps</router-link></li>
              <li><router-link to="/action">Action Adventure</router-link></li>
              <li><router-link to="/rpg">RPG</router-link></li>
              <li><router-link to="/Horror">Horror</router-link></li>
              <li><router-link to="/racing">Racing</router-link></li>
              <li><router-link to="/sports">sports</router-link></li>
              <li><router-link to="/online">Online</router-link></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="#"
            >platforms
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              class="arrow"
            >
              <path
                d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
              /></svg
          ></a>
          <div class="mega-menu mega-platform-menu">
            <ul class="sec-menu">
              <li>
                <router-link to="/playstation">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                    <path
                      d="M570.9 372.3c-11.3 14.2-38.8 24.3-38.8 24.3L327 470.2v-54.3l150.9-53.8c17.1-6.1 19.8-14.8 5.8-19.4-13.9-4.6-39.1-3.3-56.2 2.9L327 381.1v-56.4c23.2-7.8 47.1-13.6 75.7-16.8 40.9-4.5 90.9 .6 130.2 15.5 44.2 14 49.2 34.7 38 48.9zm-224.4-92.5v-139c0-16.3-3-31.3-18.3-35.6-11.7-3.8-19 7.1-19 23.4v347.9l-93.8-29.8V32c39.9 7.4 98 24.9 129.2 35.4C424.1 94.7 451 128.7 451 205.2c0 74.5-46 102.8-104.5 74.6zM43.2 410.2c-45.4-12.8-53-39.5-32.3-54.8 19.1-14.2 51.7-24.9 51.7-24.9l134.5-47.8v54.5l-96.8 34.6c-17.1 6.1-19.7 14.8-5.8 19.4 13.9 4.6 39.1 3.3 56.2-2.9l46.4-16.9v48.8c-51.6 9.3-101.4 7.3-153.9-10z"
                    />
                  </svg>
                  PlayStation</router-link
                >
              </li>
              <li>
                <router-link to="/xbox">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                      d="M369.9 318.2c44.3 54.3 64.7 98.8 54.4 118.7-7.9 15.1-56.7 44.6-92.6 55.9-29.6 9.3-68.4 13.3-100.4 10.2-38.2-3.7-76.9-17.4-110.1-39C93.3 445.8 87 438.3 87 423.4c0-29.9 32.9-82.3 89.2-142.1 32-33.9 76.5-73.7 81.4-72.6 9.4 2.1 84.3 75.1 112.3 109.5zM188.6 143.8c-29.7-26.9-58.1-53.9-86.4-63.4-15.2-5.1-16.3-4.8-28.7 8.1-29.2 30.4-53.5 79.7-60.3 122.4-5.4 34.2-6.1 43.8-4.2 60.5 5.6 50.5 17.3 85.4 40.5 120.9 9.5 14.6 12.1 17.3 9.3 9.9-4.2-11-.3-37.5 9.5-64 14.3-39 53.9-112.9 120.3-194.4zm311.6 63.5C483.3 127.3 432.7 77 425.6 77c-7.3 0-24.2 6.5-36 13.9-23.3 14.5-41 31.4-64.3 52.8C367.7 197 427.5 283.1 448.2 346c6.8 20.7 9.7 41.1 7.4 52.3-1.7 8.5-1.7 8.5 1.4 4.6 6.1-7.7 19.9-31.3 25.4-43.5 7.4-16.2 15-40.2 18.6-58.7 4.3-22.5 3.9-70.8-.8-93.4zM141.3 43C189 40.5 251 77.5 255.6 78.4c.7 .1 10.4-4.2 21.6-9.7 63.9-31.1 94-25.8 107.4-25.2-63.9-39.3-152.7-50-233.9-11.7-23.4 11.1-24 11.9-9.4 11.2z"
                    />
                  </svg>
                  Xbox</router-link
                >
              </li>
              <li>
                <router-link to="/nintendo">
                  <img
                    src="../assets/imgs/Nintendo-Logo.png"
                    alt="nintendo logo"
                  />
                  Nintendo</router-link
                >
              </li>
              <li>
                <router-link to="/pc">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path
                      d="M128 32C92.7 32 64 60.7 64 96V352h64V96H512V352h64V96c0-35.3-28.7-64-64-64H128zM19.2 384C8.6 384 0 392.6 0 403.2C0 445.6 34.4 480 76.8 480H563.2c42.4 0 76.8-34.4 76.8-76.8c0-10.6-8.6-19.2-19.2-19.2H19.2z"
                    />
                  </svg>
                  PC</router-link
                >
              </li>
            </ul>
          </div>
        </li>
        <li><router-link to="/goty">Game Of The Year</router-link></li>
        <li><router-link to="/anime">Anime</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "headerNav",
  methods: {
    actionToggle() {
      var action = document.querySelector(".toggle-menu");
      action.classList.toggle("active");
    },
  },
};
</script>

<style scoped>
.header {
  background: rgba(0, 0, 0, 85%);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.5);
  position: relative;
  border-bottom: 2px solid white;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
}
.header .toggle-menu {
  width: 30px;
  fill: white;
  padding: 20px 0;
  cursor: pointer;
  transition: var(--main-transition);
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}
.header .logo {
  position: absolute;
  top: 77%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 95px;
  width: 90px;
  background-color: white;
  cursor: pointer;
  clip-path: polygon(50% 10%, 90% 30%, 90% 70%, 50% 90%, 10% 70%, 10% 30%);
}
.header .logo2 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 90px;
  width: 85px;
  background-color: black;
  clip-path: polygon(50% 10%, 90% 30%, 90% 70%, 50% 90%, 10% 70%, 10% 30%);
}
.header .logo3 {
  fill: white;
  width: 35px;
  position: absolute;
  top: 33%;
  left: 28%;
  transform: translate(-50%, -50%);
  animation: rotate 1.5s ease-out infinite;
}
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  30% {
    transform: rotate(-45deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.header .links1,
.header .links2 {
  display: flex;
  padding: 10px 0;
}

.header .links1 li,
.header .links2 li {
  transition: var(--main-transition);
  position: relative;
}
.header .links2 li:hover .mega-menu {
  visibility: visible;
  opacity: 1;
  z-index: 100;
  top: 100%;
}
.header .links1 > li > a:hover,
.header .links2 > li > a:hover {
  background-color: #383838;
  color: var(--main-color);
}
.header .links2 > li > a:hover svg.arrow {
  fill: var(--main-color);
}
.header .links1 li a,
.header .links2 li a {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
  font-size: 15px;
  font-weight: 500;
  padding: 20px;
  overflow: hidden;
  transition: var(--main-transition);
}
.header ul li a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  background-color: var(--main-color);
  top: 0;
  left: -100%;
  transition: var(--main-transition);
}
.header .links1 > li > a:hover::before,
.header .links2 > li > a:hover::before {
  left: 0;
}
.header .links2 li svg {
  width: 15px;
  fill: white;
  margin-left: 5px;
  transition: var(--main-transition);
}
.header .links2 .mega-menu {
  position: absolute;
  background-color: #383838;
  border-bottom: 3px solid var(--main-color);
  top: calc(100% + 50px);
  z-index: -1;
  opacity: 0;
  visibility: hidden;
  transition: var(--main-transition);
}
.header .links2 .mega-menu .sec-menu {
  padding: 10px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 190px;
}
.header .links2 .mega-menu .sec-menu li {
  position: relative;
  min-width: 170px;
}
.header .links2 .mega-menu .sec-menu li:not(:last-child) {
  border-bottom: 1px solid rgb(90, 90, 90);
}
.header .links2 .mega-menu .sec-menu li svg {
  padding: 0;
  margin: 0 5px 0 0;
}
.header .links2 .mega-menu .sec-menu li img {
  width: 15px;
  padding: 0;
  margin: 0 5px 0 0;
}
.header .links2 .mega-menu .sec-menu a {
  color: white;
  display: block;
  font-size: 14px;
  transition: 0.3s;
}
.header .links2 .mega-menu .sec-menu a:hover {
  margin-left: 8px;
}

@media (min-width: 1200px) {
  .header .toggle-menu {
    display: none;
  }
}
@media (max-width: 1199px) {
  .header .links1,
  .header .links2 {
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    background-color: rgb(0, 0, 0, 95%);
    width: 50%;
    padding-left: 10px;
    padding-right: 10px;
  }
  .header .links1 {
    top: 73px;
  }
  .header .links2 {
    top: 340px;
    padding-top: 0;
    border-bottom: 3px solid var(--main-color);
  }
  .header .links1 li,
  .header .links2 li:not(:last-child) {
    border-bottom: 1px solid rgb(90, 90, 90);
  }
  .header .links1 > li > a:hover::before,
  .header .links2 > li > a:hover::before {
    display: none;
  }
  .header .links2 .mega-menu {
    left: 100%;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    width: 190px;
    background: rgba(0, 0, 0, 99%);
  }
  .header .links2 .mega-typs-menu {
    left: 100%;
  }
  .header .links2 li:hover .mega-platform-menu {
    top: 0%;
  }
  .header .links2 li:hover .mega-typs-menu {
    top: -300%;
  }
  .header .links2 li:hover .icon {
    transform: rotate(-90deg);
  }
  .header .toggle-menu.active {
    color: var(--main-color);
  }
  .header .toggle-menu ~ ul {
    display: none;
  }
  .header .toggle-menu.active ~ ul {
    display: flex;
  }
}
</style>
