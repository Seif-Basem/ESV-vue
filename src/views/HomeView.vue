<template>
  <!-- start landing -->
  <div class="landing" id="home">
    <video autoplay muted loop>
      <source src="../assets/imgs/landing-video.mp4" type="video/mp4" />
    </video>
    <div class="text">
      <h2>
        E
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            d="M192 64C86 64 0 150 0 256S86 448 192 448H448c106 0 192-86 192-192s-86-192-192-192H192zM496 168a40 40 0 1 1 0 80 40 40 0 1 1 0-80zM392 304a40 40 0 1 1 80 0 40 40 0 1 1 -80 0zM168 200c0-13.3 10.7-24 24-24s24 10.7 24 24v32h32c13.3 0 24 10.7 24 24s-10.7 24-24 24H216v32c0 13.3-10.7 24-24 24s-24-10.7-24-24V280H136c-13.3 0-24-10.7-24-24s10.7-24 24-24h32V200z"
          />
        </svg>
        sports
        <span>News</span>
      </h2>
      <p>
        ADDING FUN TO <br />
        YOUR LIFE
      </p>
    </div>
  </div>
  <!-- end landing -->
  <!--start features-->
  <div class="features" style="overflow-x: hidden; overflow-y: hidden">
    <div class="container">
      <div class="feat" v-for="feature in features" :key="feature.id">
        <img :src="require(`@/assets/${feature.img}`)" alt="" />
        <h3>{{ feature.head }}</h3>
        <p>{{ feature.paragraph }}</p>
      </div>
    </div>
  </div>
  <!--end features-->
  <!-- start about -->
  <div class="about" id="about" style="overflow-x: hidden">
    <h2 class="main-title">About</h2>
    <div class="container">
      <p data-aos="zoom-in">
        Welcome to your site, here we got all u need about gaming and video
        games we will introduce you all the platforms that enables you to play
        games and their consoles, studios and some of their exclusive games. And
        you can visit these studios sites by pressing on any one of them. Then
        getting learn about all kinds of games so you can reach your favorite
        type of games. We also cover the most important events and "game of the
        year award". So our goal is to publicize the community of gaming and
        also develops your knowledge of the world of gaming
      </p>
      <img src="../assets/imgs/about.png" alt="pc" />
    </div>
  </div>
  <!-- end about -->
  <!-- start quote -->
  <div class="quote" style="overflow-x: hidden">
    <div class="container">
      <q data-aos="fade-left"
        >Failure doesn't mean GAME OVER, It means try again with EXPERIENCE</q
      >
    </div>
  </div>
  <!-- end quote -->
  <!-- start events -->
  <div class="events" id="events">
    <h2 class="main-title">Events</h2>
    <div class="container">
      <div class="card" v-for="event in events" :key="event.id">
        <div class="imgbox">
          <img :src="require(`@/assets/${event.img}`)" :alt="event.alt" />
        </div>
        <div class="content">
          <h2>{{ event.head }}</h2>
          <p>{{ event.paragraph }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- end events -->
  <!-- start team -->
  <div class="team" id="team" style="overflow-x: hidden">
    <div class="text text-top">
      <h2>
        E <img src="../assets/svg/gamepad.svg" alt="gamepad" /> sports
        <span>News</span>
      </h2>
    </div>
    <h2 class="main-title">Team Members</h2>
    <div class="container">
      <div class="box" v-for="member in team" :key="member.id">
        <img :src="require(`@/assets/${member.img}`)" alt="" />
        <h3>{{ member.name }}</h3>
        <span class="title">{{ member.title }}</span>
        <p>{{ member.about }}</p>
      </div>
    </div>
    <div class="text text-bottom">
      <h2>
        E <img src="../assets/svg/gamepad.svg" alt="gamepad" /> sports
        <span>News</span>
      </h2>
    </div>
  </div>
  <!-- end team -->
  <!-- start contact -->
  <div class="contact" id="contact" style="overflow-x: hidden">
    <h2 class="main-title">Contact Us</h2>
    <div class="container">
      <div class="content" data-aos="fade-right">
        <form
          action="https://formsubmit.co/seifelshreef13@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Email From ES-News" />
          <input
            type="hidden"
            name="_next"
            value="https://e-sports-news.netlify.app/pages/thank.html"
          />
          <input
            class="main-input"
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />
          <input
            class="main-input"
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />
          <textarea
            class="main-input"
            name="message"
            placeholder="Your Message"
          ></textarea>
          <div class="rating">
            <h2 class="text">Rate your Experience :</h2>
            <input type="radio" name="star" id="star1" value="very bad" />
            <label for="star1">
              <img src="../assets/imgs/very bad.png" alt="Very Bad emoji" />
              <h4>Very Bad</h4>
            </label>
            <input type="radio" name="star" id="star2" value="bad" />
            <label for="star2">
              <img src="../assets/imgs/bad.png" alt="Bad emoji" />
              <h4>Bad</h4>
            </label>
            <input type="radio" name="star" id="star3" value="good" />
            <label for="star3">
              <img src="../assets/imgs/good.png" alt="good emoji" />
              <h4>Good</h4>
            </label>
            <input type="radio" name="star" id="star4" value="very good" />
            <label for="star4">
              <img src="../assets/imgs/very good.png" alt="Very good emoji" />
              <h4>Very Good</h4>
            </label>
            <input type="radio" name="star" id="star5" value="awesome" />
            <label for="star5">
              <img src="../assets/imgs/awesome.png" alt="awesome emoji" />
              <h4>awesome</h4>
            </label>
          </div>
          <input type="submit" value="Send Message" onclick="sendEmail()" />
        </form>
        <div class="info" data-aos="fade-left">
          <h4>GET IN TOUCH</h4>
          <span class="phone">+011 452 956 56</span>
          <span class="phone">+010 611 313 79</span>
          <h4>WHERE WE ARE</h4>
          <address>
            Helwan university<br />Cairo, Helwan<br />010 611 313 79<br />EGY
          </address>
        </div>
      </div>
    </div>
  </div>
  <!-- end contact -->
</template>

<script>
import featuresData from "../json/features.json";
import eventsData from "../json/events.json";
import teamData from "../json/team.json";

export default {
  data() {
    return {
      features: featuresData,
      events: eventsData,
      team: teamData,
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
  background-color: rgb(0 0 0 / 75%);
}
.landing video {
  width: 100%;
  height: 100vh;
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
.landing .text h2 {
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 40px;
  letter-spacing: -3px;
}
.landing .text h2 svg {
  padding: 0 5px;
  transform: translate(2px, 3px);
  fill: var(--main-color);
  width: 50px;
}
.landing .text h2 span {
  color: var(--main-color);
}
.landing .text p {
  font-size: 60px;
  font-weight: bold;
  line-height: 0.9;
}
@media (max-width: 767px) {
  .landing .text h2 {
    font-size: 25px;
  }
  .landing .text h2 svg {
    width: 30px;
    transform: translate(1px, 1px);
  }
  .landing .text p {
    font-size: 35px;
  }
}
/*end landing*/
/*start features*/
.features {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.features .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}
.features .feat {
  padding: 20px;
  text-align: center;
}
.features .feat img {
  width: 55px;
}
.features .feat h3 {
  font-weight: 800px;
  margin: 30px;
  color: white;
}
.features .feat p {
  line-height: var(--main-line-height);
  color: #999;
  font-size: 17px;
}
/*end features*/
/* start about */
.about {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
  overflow: hidden;
  text-align: center;
}
.about .abooout {
  display: flex;
}
.about p {
  color: white;
  text-align: center;
  line-height: var(--main-line-height);
  font-size: 18px;
}
.about img {
  position: relative;
  bottom: -155px;
  margin-top: -100px;
  max-width: 100%;
  width: 650px;
}
@media (max-width: 767px) {
  .about img {
    bottom: -100px;
    margin-top: -70px;
    /* margin-left: 0; */
  }
}
/* end about */
/* start quote */
.quote {
  padding-top: calc(var(--section-padding) + 30px);
  padding-bottom: calc(var(--section-padding) + 30px);
  background-image: url(../assets/imgs/qoute.webp);
  background-size: cover;
  text-align: center;
  position: relative;
}
.quote::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 70%);
}
.quote .container {
  position: relative;
}
.quote q {
  color: white;
  font-size: 45px;
  font-weight: 500;
  margin-bottom: 20px;
}
.quote q::before {
  font-family: "Font Awesome 5 Free";
  content: "''";
  font-weight: 900;
  position: relative;
  top: -8px;
  padding-right: 10px;
}
.quote q::after {
  font-family: "Font Awesome 5 Free";
  content: "''";
  font-weight: 900;
  position: relative;
  top: -8px;
  padding-left: 10px;
}
/* end quote */
/* start events */
.events {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.events .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 20px;
}
.events .card {
  position: relative;
  max-width: 300px;
  height: 215px;
  background-color: #1a1a1a;
  margin: 30px 10px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0 3px 5px #b8b8b866;
  transition: calc(var(--main-transition) - 0.2s) ease-in-out;
}
.events .card:hover {
  height: 430px;
}
.events .card .imgbox {
  position: relative;
  width: 260px;
  height: 260px;
  top: -50px;
  left: 50%;
  transform: translate(-50%, 0%);
  z-index: 1;
  transition: calc(var(--main-transition) - 0.2s);
}
.events .card .imgbox img {
  width: 100%;
  height: 200px;
  border-radius: 5px;
}
.events .card .content {
  position: relative;
  margin-top: -140px;
  padding: 10px 15px;
  text-align: center;
  visibility: hidden;
  opacity: 0;
  transition: calc(var(--main-transition) - 0.1s) ease-in-out;
}
.events .card:hover .content {
  visibility: visible;
  opacity: 1;
  margin-top: -40px;
  transition-delay: 0.3s;
}
.events .card .content h2 {
  color: white;
  padding-bottom: 5px;
}
.events .card .content p {
  color: #bbb;
  font-size: 13px;
}
@media (max-width: 767px) {
  .events .card {
    margin: 30px auto;
  }
}
/* end events */
/* start team */
.team {
  padding-top: var(--section-padding);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
  position: relative;
}
/*start decoration in team */
.team .text {
  position: absolute;
  opacity: 0.5;
}
.team .text h2 {
  font-weight: bold;
  font-size: 70px;
  letter-spacing: -3px;
  color: white;
}
.team .text img {
  width: 25px;
  transform: translate(0px, -13px);
  color: var(--main-color);
}
.team .text span {
  color: var(--main-color);
}
.team .text-top {
  top: 30%;
  right: -77px;
  transform: rotate(90deg);
}
.team .text-bottom {
  bottom: 20%;
  left: -80px;
  transform: rotate(-90deg);
}
@media (max-width: 1500px) {
  .team .text {
    display: none;
  }
}
/* end decoration in team */
.team .container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 60px;
}
.team .box {
  padding: 20px;
  background-color: #242424e6;
  box-shadow: -3px 3px 5px rgb(255, 255, 255, 70%);
  border-radius: 10px;
  position: relative;
  counter-increment: team;
  transition: var(--main-transition);
  z-index: 1;
}
.team .box::before {
  content: "0" counter(team);
  position: absolute;
  background-color: #333;
  color: var(--main-color);
  right: 0;
  bottom: 0;
  height: 20%;
  width: 50px;
  font-size: 30px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-bottom-right-radius: 10px;
  border-top-left-radius: 5px;
}
.team .box:hover {
  transform: translateY(-10px);
  box-shadow: -4px 4px 8px rgb(255, 255, 255, 90%);
}
.team .box img {
  position: absolute;
  right: -10px;
  top: -40px;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 15px solid black;
}
.team .box h3 {
  margin: 0 0 10px;
  color: var(--main-color-alt);
}
.team .box .title {
  color: white;
  margin-bottom: 10px;
  display: block;
}
.team .box p {
  line-height: var(--main-line-height);
  color: #bbb;
  margin-top: 10px;
  margin-bottom: 10px;
}
/* end team */
/* start contact */
.contact {
  padding-top: calc(var(--section-padding) + 60px);
  padding-bottom: var(--section-padding);
  background-color: var(--section-background);
}
.contact .content {
  display: flex;
  justify-content: space-between;
}
@media (max-width: 767px) {
  .contact .content {
    flex-direction: column;
  }
}
.contact .content form {
  flex-basis: 70%;
}
.contact .content form .main-input {
  padding: 20px;
  display: block;
  border: 1px solid black;
  width: 100%;
  margin-bottom: 30px;
  caret-color: var(--main-color);
  background-color: #b4b4b4;
  font-weight: bold;
}
.contact .content form .main-input:focus {
  outline: none;
}
.contact .content form .main-input::placeholder {
  color: #202020;
}
.contact .content form textarea.main-input {
  height: 200px;
}
.contact .content form input[type="submit"] {
  background-color: var(--main-color);
  color: white;
  padding: 20px;
  text-transform: uppercase;
  border: none;
  display: flex;
  margin-left: auto;
  cursor: pointer;
}
.contact .content form input[type="submit"]:hover {
  background-color: var(--main-color-alt);
}

.rating {
  position: relative;
  display: flex;
  flex-direction: row;
}
.rating .text {
  position: absolute;
  top: 7px;
  left: 0%;
  color: white;
  font-weight: 500;
  white-space: nowrap;
  font-size: 18px;
  text-transform: uppercase;
}
.rating input {
  display: none;
}
.rating label {
  position: relative;
  height: 80px;
  cursor: pointer;
  transition: var(--main-transition);
  filter: grayscale(1);
  text-align: center;
  opacity: 0.5;
  margin-top: 30px;
  left: 35%;
  top: -50px;
  width: 90px;
}
.rating label img {
  width: 80px;
}
.rating input:hover + label,
.rating input:checked + label {
  filter: grayscale(0);
  opacity: 1;
}
.rating label h4 {
  color: white;
  font-size: 22px;
  padding-top: 10px;
  font-weight: 500;
  white-space: nowrap;
  opacity: 0;
  transform: translateY(-50px) scale(0);
  transition: var(--main-transition);
}
.rating input:hover + label h4,
.rating input:checked + label h4 {
  opacity: 1;
  transform: translateY(0) scale(1);
}
@media (max-width: 991px) {
  .rating label {
    margin-top: 80px;
    left: 10%;
  }
}
@media (max-width: 767px) {
  .rating label {
    left: 0;
    margin-top: 100px;
  }
  .rating label img {
    width: 50px;
  }
  .rating label h4 {
    font-size: 10px;
  }
}

.contact .content .info {
  flex-basis: 25%;
}
@media (max-width: 767px) {
  .contact .content .info {
    order: -1;
    text-align: center;
  }
}
.contact .content .info h4 {
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 18px;
  color: white;
}
.contact .content .info .phone {
  display: block;
  color: #777;
  margin-bottom: 10px;
}
.contact .content .info h4:nth-of-type(2) {
  margin-top: 90px;
}
@media (max-width: 767px) {
  .contact .content .info h4:nth-of-type(2) {
    margin-top: 30px;
  }
}
.contact .content .info address {
  color: #777;
  line-height: 2;
}
@media (max-width: 767px) {
  .contact .content .info address {
    margin-bottom: 30px;
  }
}
/* end contact */
</style>
