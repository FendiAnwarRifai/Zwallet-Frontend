<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white profile">
      <section>
        <span class="headers">
          <h5 style="color: #3A3D42;">Personal Information</h5>
          <p>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </p>
        </span>
        <div class="shadow bg-white media TopMedia mt-5">
          <div class="media-body">
            <span class="title">First Name</span>
            <h6 class="names mt-2">{{getUserByLogin.name}}</h6>
          </div>
        </div>
        <div class="shadow bg-white media TopMedia mt-3">
          <div class="media-body">
            <span class="title">Last Name</span>
            <h6 class="names mt-2">{{getUserByLogin.lastName}}</h6>
          </div>
        </div>
        <div class="shadow bg-white media TopMedia mt-3">
          <div class="media-body">
            <span class="title">Email</span>
            <h6 class="names mt-2">{{getUserByLogin.email}}</h6>
          </div>
        </div>
        <div class="shadow bg-white media TopMedia mt-3">
          <div class="media-body relative">
            <span class="title">Phone Number</span>
            <h6 class="names mt-2" v-if="getUserByLogin.phone == '' ">-</h6>
            <h6 class="names mt-2" v-else>{{getUserByLogin.phone}}</h6>
            <router-link to="managePhone" class="manage">Manage</router-link>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  title: 'Personal Information',
  name: 'personalInfo',
  mounted: function () {
    this.UserByLogin()
  },
  computed: {
    ...mapGetters(['getUserByLogin'])
  },
  methods: {
    ...mapActions(['UserByLogin'])
  }
}
</script>

<style scoped>
.profile {
  border-radius: 20px;
  padding: 25px;
  padding-bottom: 38px;
}
.profile p {
  width: 342px;
  color: #7A7886;
}
.headers {
  margin-bottom: 40px;
}
.TopMedia,
.mediaTop {
  padding: 20px;
  border-radius: 15px;
}
.title {
  font-size: 16px;
  color: #7a7886;
}
.names {
  font-weight: bold;
  font-size: 20px;
  color: #4d4b57;
}
a.manage:hover{
  cursor:pointer;
}
.relative {
  position: relative;
}
.relative a {
  position: absolute;
  right: 20px;
  top: 20px;
  color: #6379f4;
}
.relative a:hover {
  text-decoration: none;
  color: #6379f4;
}
</style>
