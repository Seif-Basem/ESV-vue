<template>
  <!-- start landing -->
  <div class="landing" id="landing-goty">
    <div class="land">
      <img src="../assets/imgs/landing-goty.jpg" alt="game of the year photo" />
    </div>
    <div class="text">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        fill="#00e638"
      >
        <path
          d="M400 0H176c-26.5 0-48.1 21.8-47.1 48.2c.2 5.3 .4 10.6 .7 15.8H24C10.7 64 0 74.7 0 88c0 92.6 33.5 157 78.5 200.7c44.3 43.1 98.3 64.8 138.1 75.8c23.4 6.5 39.4 26 39.4 45.6c0 20.9-17 37.9-37.9 37.9H192c-17.7 0-32 14.3-32 32s14.3 32 32 32H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H357.9C337 448 320 431 320 410.1c0-19.6 15.9-39.2 39.4-45.6c39.9-11 93.9-32.7 138.2-75.8C542.5 245 576 180.6 576 88c0-13.3-10.7-24-24-24H446.4c.3-5.2 .5-10.4 .7-15.8C448.1 21.8 426.5 0 400 0zM48.9 112h84.4c9.1 90.1 29.2 150.3 51.9 190.6c-24.9-11-50.8-26.5-73.2-48.3c-32-31.1-58-76-63-142.3zM464.1 254.3c-22.4 21.8-48.3 37.3-73.2 48.3c22.7-40.3 42.8-100.5 51.9-190.6h84.4c-5.1 66.3-31.1 111.2-63 142.3z"
        />
      </svg>
      <p>Game Of The Year</p>
    </div>
  </div>
  <!-- end landing -->
  <!-- start brief -->
  <div class="brief" style="overflow-x: hidden">
    <h2 class="main-title">What is GOTY</h2>
    <div class="container">
      <div class="box">
        <p data-aos="fade-right">
          The Game Award for Game of the Year is an award presented annually by
          The Game Awards to the video game judged to be the best from that
          calendar year. The process begins with several dozen video game
          publications and websites, chosen by the Game Awards' advisory
          committee, to act as the jury each year.<br />
          Game of the Year (GotY) is an award given by various award events and
          media publications to a video game that they feel represented the
          pinnacle of gaming that year.
        </p>
        <div class="shape" data-aos="fade-left">
          <img
            src="../assets/imgs/brief-goty.png"
            alt="game of the year photo"
          />
        </div>
      </div>
    </div>
  </div>
  <!-- end brief -->
  <!-- start games -->
  <div class="games" style="overflow-x: hidden">
    <h2 class="main-title">Games had Won GOTY</h2>
    <div class="container">
      <div class="cont">
        <div class="text" data-aos="fade-right">
          <p>Game of the Year<br />2022</p>
        </div>
        <div class="card">
          <div class="imgbox">
            <img src="../assets/imgs/goty-game-1.webp" alt="It Takes Two" />
            <div class="back">
              <h2>It Takes Two</h2>
              <p>
                The game is based on solving puzzles and completing challenges
                and controlling two dolls that have been reincarnated by the
                souls of a girl's parents and intend to divorce, and the game
                can only be played cooperatively as it does not support single
                play and the screen is always split to see every other player.
              </p>
            </div>
          </div>
          <div class="details">
            <div class="content">
              <span>Initial release date</span> : March 26, 2021<br />
              <span>Developer</span> : Hazelight Studios<br />
              <span>Publisher</span> : Electronic Arts<br />
              <span>type</span> : Action-adventure, platform<br />
              <span>Platforms</span> : Microsoft Windows, PlayStation 4,
              PlayStation 5, Xbox One, Xbox Series X/S
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- end games -->
</template>

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
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  text-align: center;
  color: white;
  padding: 50px;
}
.landing .text svg {
  margin-bottom: 15px;
  width: 90px;
  fill: white;
}
.landing .text p {
  font-size: 60px;
  font-weight: bold;
}
@media (max-width: 767px) {
  .landing .text svg {
    width: 70px;
  }
  .landing .text p {
    font-size: 45px;
  }
}
/*end landing*/
/* start brief */
.brief {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.brief .box {
  display: flex;
  justify-content: space-between;
}
.brief p {
  color: white;
  font-size: 18px;
  width: 60%;
  line-height: var(--main-line-height);
}
.brief .shape {
  position: relative;
  background-color: rgb(25, 25, 25);
  border-radius: 50px;
  box-shadow: -3px 3px 2px #555;
  width: 25%;
}
.brief img {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 190px;
  transform: translate(-50%, -50%);
  color: white;
}
@media (max-width: 991px) {
  .brief .box {
    flex-direction: column;
    text-align: center;
  }
  .brief p {
    width: 100%;
  }
  .brief .shape {
    display: none;
  }
}
/* end brief */
/* start games */
.games {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.games .container {
  display: flex;
  flex-direction: column;
}
.games .cont {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 60px;
  position: relative;
}
.games .cont::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: 50%;
  transform: translateX(-50%);
  background-color: #555;
  height: 1px;
  width: 80%;
}
.games .text {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.games .text p {
  font-size: 50px;
  color: white;
  font-weight: bold;
  text-shadow: -7px 7px 5px var(--main-color-alt);
}
.games .card {
  position: relative;
  width: 300px;
  height: 400px;
  background-color: #636363;
  transform-style: preserve-3d;
  transform: perspective(1000px);
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  transition: 1s;
}
.games .card:hover {
  transform: translateX(40%) rotate(-2deg);
}
.games .card .imgbox {
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  transform-origin: left;
  transform-style: preserve-3d;
  background-color: #313131;
  box-shadow: 10px 20px 40px rgba(0, 0, 0, 0.25);
  transition: 1s;
}
.games .card:hover .imgbox {
  transform: rotateY(-180deg);
}
.games .card .imgbox img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform-style: preserve-3d;
  backface-visibility: hidden;
}
.games .card .imgbox .back {
  transform: rotateY(180deg);
  backface-visibility: hidden;
  padding: 10px;
}
.games .card .imgbox h2 {
  color: var(--main-color);
  text-align: center;
  padding-bottom: 10px;
}
.games .card .imgbox p {
  color: white;
  line-height: var(--main-line-height);
}
.games .card .details {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.games .card .details .content {
  display: felx;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
}
.games .card .details .content span {
  color: var(--main-color);
  line-height: calc(var(--main-line-height) + 0.5);
  font-weight: bold;
}
@media (max-width: 1400px) {
  .games .card:hover {
    transform: translateX(0%);
  }
}
@media (max-width: 1199px) {
  .games .cont {
    display: block;
  }
  .games .text p {
    padding-bottom: 20px;
  }
  .games .card {
    margin: 0 auto;
  }
  .games .card:hover {
    transform: translateX(50%) rotate(-2deg);
  }
}
@media (max-width: 767px) {
  .games .text p {
    font-size: 30px;
  }
  .games .card {
    width: 200px;
    height: 300px;
  }
  .games .card:hover {
    transform: translateX(50%);
  }
  .games .card .imgbox .back {
    padding: 20px;
    font-size: 11px;
  }
  .games .card .details .content {
    font-size: 11px;
  }
}
/* end games */
</style>
