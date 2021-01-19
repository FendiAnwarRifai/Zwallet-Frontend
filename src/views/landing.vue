<template>
  <div class="d-flex flex-column">
      <!-- responsive menu -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light navbarContent">
      <a class="navbar-brand" href="#">Zwallet</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div
        class="collapse navbar-collapse"
        id="navbarSupportedContent"
        style="text-align: right;"
      >
        <div class=" my-2 my-lg-0">
          <router-link to="auth/login" class="btn btnLogin">Login</router-link>
          <router-link to="auth/register" class="btn btnSigup">Sign Up</router-link>
        </div>
      </div>
    </nav>
    <!-- end responsive menu -->
    <div class="p-2 slideOne">
      <header class="p-3">
        <div class="headerContent">
          <div class="leftHeader">
            <h4>Zwallet</h4>
          </div>
          <div class="rightHeader">
            <router-link to="auth/login" class="btn btnLogin">Login</router-link>
            <router-link to="auth/register" class="btn btnSigup">Sign Up</router-link>
          </div>
        </div>
      </header>

      <content class="container">
        <div class="text-center">
          <div class="title">
            Awesome App For Saving Time.
          </div>
          <div class="info">
            We bring you a mobile app for banking problems that oftenly wasting
            much of your times.
          </div>
          <router-link to="main/dashboard" class="btn btnTryit">Try It Free</router-link>
        </div>
      </content>
    </div>
    <!-- slide2 -->
    <div class="p-2 slideTwo">
      <div class="row">
        <div class="col-sm text-center">
          <div class="titles">
            <span class="colorText">Why </span>Choose Zwallet?
          </div>
          <div class="description">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
        </div>
      </div>

      <div class="row text-center justContent">
        <div class="col-sm">
          <div class="shadow-lg bg-white wrap">
            <img
              :src="require('@/assets/img/icon1.png')"
              width="75px"
              alt=""
            />
            <h5>24/7 Support</h5>
            <p class="detail">
              We have 24/7 contact support so you can contact us whenever you
              want and we will respond it.
            </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="shadow-lg bg-white wrap">
            <img
              :src="require('@/assets/img/icon2.png')"
              width="75px"
              alt=""
            />
            <h5>Data Privacy</h5>
            <p class="detail">
              We make sure your data is safe in our database and we will encrypt
              any data you submitted to us.
            </p>
          </div>
        </div>
        <div class="col-sm">
          <div class="shadow-lg bg-white wrap">
            <img
              :src="require('@/assets/img/icon3.png')"
              width="75px"
              alt=""
            />
            <h5>Easy Download</h5>
            <p class="detail">
              Zwallet is 100% totally free to use it’s now available on Google
              Play Store and App Store.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- slide3 -->
    <div class="p-2 slideThree">
      <div class="row text-center">
        <div class="col-sm">
          <img :src="require('@/assets/img/logo1.png')" width="162px" />
        </div>
        <div class="col-sm">
          <img :src="require('@/assets/img/logo2.png')" width="162px" />
        </div>
        <div class="col-sm">
          <img :src="require('@/assets/img/logo3.png')" width="162px" />
        </div>
        <div class="col-sm">
          <img :src="require('@/assets/img/logo4.png')" width="162px" />
        </div>
        <div class="col-sm">
          <img :src="require('@/assets/img/logo5.png')" width="162px" />
        </div>
        <div class="col-sm">
          <img :src="require('@/assets/img/logo6.png')" width="162px" />
        </div>
      </div>
    </div>

    <!-- slide4 -->
    <div class="p-2 slide4">
      <div class="row">
        <div class="col-sm text-center">
          <button>
            Rp. 390.736.500
          </button>
          <div class="title4">
            <span class="colorText">Money </span>has Been Transfered.
          </div>
          <div class="description4">
            That amount of money has been transfered from all users. We still
            counting and going strong!
          </div>
        </div>
      </div>
    </div>

    <!-- slide5 -->
    <div class="p-2 slideFive">
      <div class="row">
        <div class="col-sm imagesDemo">
          <img :src="require('@/assets/img/demo.png')" />
        </div>
        <div class="col-sm">
          <div class="title5" style="">
            All The<span class="colorText"> Great </span>Zwallet Features.
          </div>
          <div class="shadow-lg bg-white slideFiveContent">
            <h5><span class="number">1.</span>Small Fee</h5>
            <p class="detail5">
              We only charge 5% of every success transaction done in Zwallet
              app.
            </p>
          </div>

          <div class="shadow-lg bg-white slideFiveContent">
            <h5><span class="number">2.</span>Data Secured</h5>
            <p class="detail5">
              All your data is secured properly in our system and it’s
              encrypted.
            </p>
          </div>

          <div class="shadow-lg bg-white slideFiveContent">
            <h5><span class="number">3.</span>User Friendly</h5>
            <p class="detail5">
              Zwallet come up with modern and sleek design and not complicated.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- slide6 -->
    <div class="p-2 slideSix">
      <div class="row">
        <div class="col-sm text-center">
          <div class="title6">
            What Users are <span class="colorText"> Saying.</span>
          </div>
          <div class="detail6">
            We have some great features from the application and it’s totally
            free to use by all users around the world.
          </div>
        </div>
      </div>

      <div class="row text-center contentUser">
        <div class="col-sm-1">
          <div class="shadow-lg bg-white vcenter">
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
        <div class="col-sm">
          <div class="shadow-lg bg-white userDetail">
            <img :src="require('@/assets/img/user.png')" width="95px" />
            <br /><br />
            <h5>Alex Hansinburg</h5>
            <span>Designer</span>
            <br /><br />
            <p class="detail">
              “This is the most outstanding app that I’ve ever try in my live,
              this app is such an amazing masterpiece and it’s suitable for you
              who is bussy with their bussiness and must transfer money to
              another person aut there. Just try this app and see the power!”
            </p>
          </div>
        </div>
        <div class="col-sm-1">
          <div class="shadow-lg bg-white vcenter">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
      </div>
      <!-- /on responsive -->
      <div class="row responsiveArrow">
        <div class="col">
          <div class="shadow-lg bg-white vcenter2 right">
            <i class="fas fa-arrow-right"></i>
          </div>
        </div>
        <div class="col">
          <div class="shadow-lg bg-white vcenter2 left">
            <i class="fas fa-arrow-left"></i>
          </div>
        </div>
      </div>
    </div>
    <!-- slide7 -->
    <div class="p-2 slideSeven">
      <footer>
        <div class="row">
          <div class="col-sm">
            <h5>Zwallet</h5>
            <br />
            <p>
              Simplify financial needs and saving much time in banking needs
              with one single app.
            </p>
          </div>
        </div>
        <hr style="border: 1px solid rgba(255, 255, 255, 0.6);" />
        <div class="row">
          <div class="col-md copyright">2020 Zwallet. All right reserved.</div>
          <div class="col-md contactFooter">
            <span class="footerNumber">+62 5637 8882 9901</span>
            <span class="footerEmail">contact@zwallet.com</span>
          </div>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  title: 'Landing Page'
}
</script>

<style scoped>
.row {
  margin-left: 0px !important;
  margin-right: 0px !important;
}
.slideOne {
  height: max-content !important;
  background-image: url('../assets/img/img1.png');
  background-size: cover;
}
.navbar.navbarContent {
  display: none;
}
.leftHeader {
  color: white;
  float: left;
  padding-top: 10px;
  margin-top: 3%;
  margin-left: 8%;
}
.leftHeader h4 {
  font-size: 34px;
}

.rightHeader {
  float: right;
  margin-top: 4%;
  margin-right: 6%;
}
.btn.btnLogin {
  border: 2px solid white;
  background-color: #6379f4;
  color: white !important;
  width: 110px;
  border-radius: 12px;
  margin-right: 18px;
  padding: 8px;
}
.btn.btnSigup,
.btn.btnTryit {
  background-color: white;
  color: #6379f4 !important;
  width: 110px;
  border-radius: 12px;
  padding: 8px;
}
.title {
  text-align: center;
  font-size: 58px;
  font-weight: bold;
  color: white;
  width: 35%;
  margin-left: 34%;
  margin-top: 18%;
}
.info {
  color: white;
  width: 30%;
  margin-left: 36%;
  margin-top: 3%;
}
.btn.btnTryit {
  margin-top: 50px;
  margin-bottom: 14%;
  padding: 12px;
  width: 130px;
}

/*slide 2*/
.slideTwo,
.slideSix,
.slide4 {
  background-color: #fafcff;
}
.titles,
.title4,
.title6 {
  color: black;
  font-size: 52px;
  font-weight: bold;
  margin-top: 74px;
}
.colorText {
  color: #6379f4;
}
.justContent {
  margin: 90px;
  margin-top: 52px;
}
.description,
.description4,
.detail6 {
  width: 38%;
  margin-left: 30%;
  margin-top: 20px;
}
.wrap {
  padding-top: 20px;
  padding-bottom: 30px;
  margin-left: 28px;
  margin-right: 28px;
  border-radius: 12px;
}
.detail {
  padding: 20px;
  color: #3a3d42;
}

/*slide3*/
.slideThree,
.slideFive {
  background-color: #eff0fc;
}
.slideThree .text-center {
  margin: 52px 90px;
}

/*slide4*/
.slide4 button {
  margin-top: 74px;
  background: rgba(71, 58, 209, 0.06);
  width: 620px;
  padding: 24px;
  font-size: 48px;
  border-radius: 85px;
  border: none;
  outline: 0;
  color: #6379f4;
  font-weight: bold;
}
.title4 {
  margin-top: 30px;
}
.description4 {
  margin-bottom: 30px;
}

/*slide5*/
.imagesDemo {
  width: 62%;
}
.title5 {
  font-size: 52px;
  font-weight: bold;
  margin-top: 180px;
  width: 80%;
  color: black;
  margin-bottom: 60px;
}
.slideFiveContent {
  padding: 20px;
  border-radius: 12px;
  margin-right: 80px;
  margin-bottom: 30px;
}
.number {
  color: #6379f4;
  margin-right: 18px;
}
.detail5 {
  margin-top: 18px;
}

/*slide6*/
.contentUser {
  margin: 90px;
  margin-top: 52px;
}
.userDetail {
  padding: 68px;
  border-radius: 30px;
}
.vcenter {
  margin-top: 178px;
  padding: 20px;
  border-radius: 100%;
  width: 66px;
}
.vcenter i {
  font-size: 22px;
}
.row.responsiveArrow {
  display: none;
}

.slideSeven {
  background-color: #6379f4;
  color: white;
}
/*foooter*/
footer {
  padding: 50px 80px;
  color: #efefef;
}
footer h5 {
  font-size: 36px;
  color: white;
}
footer p {
  width: 285px;
}
.contactFooter {
  text-align: right;
}
.footerNumber {
  margin-right: 20px;
}
/*responsive mobile*/
@media only screen and (max-width: 990px) {
  .row {
    margin: 0;
  }
  header.p-3 {
    padding: 0 !important;
    margin: 0 !important;
  }
  .headerContent {
    display: none;
  }
  .navbar.navbarContent {
    display: block;
  }
  .navbar-brand {
    color: #6379f4 !important;
    font-weight: bold;
  }
  .navbar-toggler {
    float: right;
  }
  .btn.btnLogin {
    width: 90px;
    margin-right: 0;
    padding: 4px;
  }
  .btn.btnSigup,
  .btn.btnTryit {
    width: 90px;
    padding: 4px;
  }
  .btn.btnSigup {
    border: 2px solid white;
    background-color: #6379f4;
    color: white !important;
  }
  .title {
    font-size: 30px;
    width: 100%;
    margin-left: 0;
    margin-top: 10%;
  }
  .info {
    color: white;
    width: 100%;
    margin-left: 0;
  }
  .titles,
  .title4,
  .title5,
  .title6 {
    font-size: 30px;
  }
  .description,
  .description4,
  .detail6 {
    width: 100%;
    margin-left: 0;
    padding: 0px 20px;
  }
  .justContent {
    margin: 52px 0 0 0;
  }
  .wrap {
    padding-bottom: 0;
    margin-left: 0;
    margin-right: 0;
  }
  .slide4 button {
    margin-top: 54px;
    width: 328px;
    padding: 20px;
    font-size: 30px;
  }
  .imagesDemo {
    display: none;
  }
  .title5 {
    margin-top: 38px;
    width: 100%;
    margin-bottom: 38px;
    text-align: center;
  }
  .contentUser {
    margin: 0;
    margin-top: 52px;
  }
  .slideFiveContent {
    margin-right: 0;
  }
  .userDetail {
    padding: 12px 0px;
  }
  .col-sm-1 .vcenter {
    display: none;
  }
  .row.responsiveArrow {
    display: block;
  }
  .vcenter2 {
    margin-top: 20px;
    text-align: center;
    border-radius: 100%;
    width: 48px;
    padding: 12px;
  }
  .responsiveArrow .col {
    width: 50%;
  }
  .col .left {
    float: right;
    margin-right: -12px;
  }
  .col .right {
    float: right;
    margin-right: -74px;
  }

  footer {
    padding: 0;
  }
  .footerNumber {
    float: left;
  }
}
</style>
