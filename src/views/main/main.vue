<template>
  <content>
    <header class="shadow p-3 mb-4 bg-white">
      <div class="headerContent">
        <div class="leftHeader">
          <h4>Zwallet</h4>
        </div>
        <div class="rightHeader">
          <div class="media">
            <img
              class="align-self-center mr-3"
              :src="getUserByLogin.image"
              alt="user"
              width="52px"
            />
            <div class="media-body">
              <h6 class="name font-weight-bold">{{getUserByLogin.name+' '+getUserByLogin.lastName}}</h6>
              <span class="number">{{getUserByLogin.phone ? getUserByLogin.phone : '+00 000 0000 0000' }}</span>
            </div>
            <div class="nav-item dropdown">
              <a
                class=""
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
              >
                <i class="align-self-center ml-4 mt-3 far fa-bell fa-lg"></i>
              </a>
              <ul class="dropdown-menu dropdown-menu-right shadow p-3 bg-white">
                <li style="color: #7A7886; margin-bottom: 20px;">
                  Today
                </li>
                <li class="notification-box shadow-sm p-4 bg-white">
                  <div class="row">
                    <div class="col-lg-1 col-sm-1 col-1 iconDown">
                      <i class="fas fa-arrow-down"></i>
                    </div>
                    <div class="col-lg-10 col-sm-10 col-10">
                      <div>
                        Transfered from Joshua Lee
                      </div>
                      <strong>Rp220.000</strong>
                    </div>
                  </div>
                </li>
                <li
                  class="notification-box shadow-sm p-4 bg-white mt-2 notifEnd"
                >
                  <div class="row">
                    <div class="col-lg-1 col-sm-1 col-1 mt-2 ml-2 iconUp">
                      <i class="fas fa-arrow-up"></i>
                    </div>
                    <div class="col-lg-10 col-sm-10 col-10">
                      <div>
                        Netflix subscription
                      </div>
                      <strong>Rp149.000</strong>
                    </div>
                  </div>
                </li>

                <li style="color: #7A7886; margin-bottom: 20px;">
                  This Week
                </li>
                <li class="notification-box shadow-sm p-4 bg-white">
                  <div class="row">
                    <div class="col-lg-1 col-sm-1 col-1 iconUp">
                      <i class="fas fa-arrow-up"></i>
                    </div>
                    <div class="col-lg-10 col-sm-10 col-10">
                      <div>
                        Transfer to Jessica Lee
                      </div>
                      <strong>Rp100.000</strong>
                    </div>
                  </div>
                </li>
                <li
                  class="notification-box shadow-sm p-4 bg-white mt-2 notifEnd"
                >
                  <div class="row">
                    <div class="col-lg-1 col-sm-1 col-1 mt-2 ml-2 iconDown">
                      <i class="fas fa-arrow-down"></i>
                    </div>
                    <div class="col-lg-10 col-sm-10 col-10">
                      <div>
                        Top up from BNI E-Banking
                      </div>
                      <strong>Rp300.000</strong>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div class="container mb-4">
      <div class="row content">
      <div class="col-lg-3">
        <!-- tablet navbar -->
        <div class="row">
          <nav class="col" id="navbar">
            <ul class="shadow-lg p-3 bg-white inline">
              <li :class="[currentPage.includes('dashboard') ? activeClass : '']">
                <router-link to="dashboard">
                  <i class="fas fa-th-large mr-2"></i>
                  <span>Dashboard</span>
                </router-link>
              </li>
              <li :class="[currentPage.includes('transaction') ? activeClass : '']">
                <router-link to="transaction">
                  <i class="fas fa-arrow-up mr-2"></i>
                  <span>Transfer</span>
                </router-link>
              </li>
              <li :class="[currentPage.includes('topup') ? activeClass : '']">
                <router-link to="topup">
                  <i class="fas fa-plus mr-2"></i>
                  <span>Top Up</span>
                </router-link>
              </li>

              <li :class="[currentPage.includes('profile') ? activeClass : '']">
                <router-link to="profile">
                  <i class="far fa-user mr-2"></i>
                  <span>Profile</span>
                </router-link>
              </li>

              <li>
                <a @click="Logout()">
                  <i class="fas fa-sign-out-alt mr-2"></i>
                  <span>Logout</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- end tablet navbar -->

        <!-- mobile  navbar -->
        <div class="row">
          <nav id="navbarMobile">
            <ul class="shadow-lg p-3 bg-white inline">
              <li :class="[currentPage.includes('dashboard') ? activeClass : '']">
                <router-link to="dashboard">
                  <i class="fas fa-th-large"></i>
                </router-link>
              </li>
              <li :class="[currentPage.includes('transaction') ? activeClass : '']">
                <router-link to="transaction">
                  <i class="fas fa-arrow-up"></i>
                </router-link>
              </li>
              <li :class="[currentPage.includes('topup') ? activeClass : '']">
                <router-link to="topup">
                  <i class="fas fa-plus"></i>
                </router-link>
              </li>

              <li :class="[currentPage.includes('profile') ? activeClass : '']">
                <router-link to="profile">
                  <i class="far fa-user"></i>
                </router-link>
              </li>

              <li>
                <a @click="Logout()">
                  <i class="fas fa-sign-out-alt"></i>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <!-- end mobile navbar -->

        <nav class="shadow-lg p-3 bg-white navbars">
          <div
            :class="[
              currentPage.includes('dashboard') ? activeClass : '',
              'menu'
            ]"
          >
            <li class=" mb-4 mt-4 pl-4">
              <router-link to="dashboard">
                <i class="fas fa-th-large mr-3"></i>
                <span>Dashboard</span>
              </router-link>
            </li>
          </div>
          <div
            :class="[
              currentPage.includes('transaction') ? activeClass : '',
              'menu'
            ]"
          >
            <li class=" mb-4 mt-4 pl-4">
              <router-link to="transaction">
                <i class="fas fa-arrow-up mr-3"></i>
                <span>Transfer</span>
              </router-link>
            </li>
          </div>
          <div :class="[currentPage.includes('topup') ? activeClass : '','menu']">
            <li class=" mb-4 mt-4 pl-4">
              <router-link to="topup">
                <i class="fas fa-plus mr-3"></i>
                <span>Top Up</span>
              </router-link>
            </li>
          </div>
          <div :class="[currentPage.includes('profile') ? activeClass : '','menu']">
            <li class=" mt-4 pl-4">
              <router-link to="profile">
                <i class="far fa-user mr-3"></i>
                <span>Profile</span>
              </router-link>
            </li>
          </div>
          <div class="menu logout">
            <li class="mt-4 pl-4">
              <a @click="Logout()">
                <i class="fas fa-sign-out-alt mr-3"></i>
                <span>Logout</span>
              </a>
            </li>
          </div>
        </nav>
      </div>
      <router-view />
      </div>
    </div>
    <footer>
      <div class="row">
        <div class="col-md copyright">2020 Zwallet. All right reserved.</div>
        <div class="col-md contactFooter">
          <span class="footerNumber">+62 5637 8882 9901</span>
          <span class="footerEmail">contact@zwallet.com</span>
        </div>
      </div>
    </footer>
  </content>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      activeClass: 'active'
    }
  },
  mounted: function () {
    this.UserByLogin()
  },
  computed: {
    ...mapGetters(['getUserByLogin']),
    currentPage () {
      return this.$route.name
    }
  },
  methods: {
    ...mapActions(['UserByLogin']),
    ...mapActions(['Logout'])
  }
}
</script>

<style scoped>
#navbar,
#navbarMobile {
  display: none;
}
/*class navbar left*/
.navbars {
  position: relative;
  height: max-content !important;
  border-radius: 20px;
}
.navbars i {
  font-size: 22px;
}
.navbars span {
  font-size: 15px;
}
li {
  list-style-type: none;
}
.menu:hover,
.active {
  border-left: 4px solid #6379f4;
  margin-left: -16px;
  padding-left: 12px;
}
.menu:hover a,
.active a{
  text-decoration: none;
  color: #6379f4 !important;
  font-weight: bold;
}

a {
  color: #3a3d42;
  text-decoration: none;
  cursor: pointer;
}
.logout {
  margin-top: 398px;
}
/*end navbar left*/

body {
  font-size: 16px;
  background-color: #fafcff;
}

/*header content*/
.headerContent {
  width: 100%;
  padding-right: 115px;
  padding-left: 115px;
}
content header {
  display: flex;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}
.leftHeader {
  color: #6379f4;
  float: left;
  padding-top: 10px;
}

.rightHeader {
  float: right;
}
.name {
  font-size: 18px;
}
/*end header content*/
.dropdown-menu {
  margin-top: 80px;
  width: 460px;
  border-radius: 15px;
  z-index: 2;
}
.dropdown-menu[x-placement^="bottom"],
.dropdown-menu[x-placement^="top"] {
  right: 1px;
}
.iconDown {
  font-size: 24px;
  color: #4cedb3;
  margin: 8px 8px 0px 8px;
}
.iconUp {
  font-size: 24px;
  color: #ff5b37;
  margin: 8px 8px 0px 8px;
}
.notification-box {
  padding: 10px 0px;
  border-radius: 15px;
}
.notifEnd {
  margin-bottom: 40px;
}

footer {
  padding: 15px 90px 15px 115px;
  color: white;
  background: #6379f4;
}

.contactFooter {
  text-align: right;
}
.footerNumber {
  margin-right: 20px;
}
/*rsesponsive tablet*/
@media only screen and (max-width: 990px) {
  .headerContent {
    padding-right: 0px;
    padding-left: 0px;
  }
  .name {
    font-size: 14px;
    margin-bottom: 5px;
  }
  .number {
    font-size: 12px;
  }

    #navbar {
    display: block;
  }
  .navbars {
    display: none;
  }
  .active {
    border-left: 0px;
  }
  .inline li:hover a,
  .active a {
    text-decoration: none;
    color: #6379f4;
    font-weight: bold;
  }
  .inline {
    position: relative;
    height: max-content !important;
    border-radius: 20px;
    text-align: center;
  }
  .inline li {
    display: inline;
    padding-right: 12px;
    padding-left: 30px;
  }
  .sticky {
    z-index: 1;
    position: fixed;
    left: 0;
    /*width:calc(100% -50px);*/
    top: 0;
    padding: 0;
    text-align: center;
  }
  .sticky .inline {
    border-radius: 0px;
  }
  .sticky li {
    padding-right: 20px;
    padding-left: 40px;
  }
  .sticky + .content {
    padding-top: 60px;
  }

  footer {
    font-size: 12px;
    padding: 20px;
    text-align: center;
  }
  .footerNumber {
    float: left;
  }
}

/*responsive mobile*/
@media only screen and (max-width: 767px) {
    .active {
    margin-left: 0;
  }
  #navbar {
    display: none;
  }
  #navbarMobile {
    position: fixed;
    display: block;
    bottom: -16px;
    z-index: 5;
    left: 0;
    right: 0;
  }
  .inline {
    border-radius: 0;
  }
  .inline li {
    font-size: 18px;
    padding-left: 25px;
  }
  .inline i {
    color: #6c757d;
  }
  .active i,
  .inline i:hover {
    color: #6379f4;
  }
  footer {
    margin-bottom: 62px;
  }
}

@media (max-width: 487px) {
  .dropdown-menu {
    top: 50px;
    width: 420px;
  }
}
@media (max-width: 430px) {
  .dropdown-menu {
    top: 50px;
    width: 340px;
  }
}
</style>
