<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white profile">
      <section>
        <span class="headers">
          <h5 style="color: #3A3D42;">Manage Phone Number</h5>
          <p>
            You can only delete the phone number and then you must add another
            phone number.
          </p>
        </span>
        <div class="shadow bg-white media TopMedia mt-5">
        <router-link to="secondaryPhone" style="position:absolute; top:120px" v-if="getUserByLogin.phone !== '' ">Add Secondary Phone</router-link>
          <div class="media-body relative">
            <span class="title">Primary</span>
            <h6 class="names mt-2" v-if="getUserByLogin.phone == '' ">-</h6>
            <h6 class="names mt-2" v-else>{{getUserByLogin.phone}}</h6>
            <router-link :to="{ path: 'editPhone', query: { id: getUserByLogin.id } }" class="manage"><i class="fas fa-pen"></i></router-link>
          </div>
        </div>
        <div class="shadow bg-white media TopMedia mt-4" v-for="data in getPhoneByLogin" :key="data.id">
          <div class="media-body relative">
            <span class="title">Phone Number</span>
            <h6 class="names mt-2">{{data.phone}}</h6>
            <a @click="DeletePhone(data.id)" class="manage"><i class="fas fa-trash fa-lg"></i></a>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  title: 'Manage Phone',
  name: 'managePhone',
  mounted: function () {
    this.UserByLogin()
    this.PhoneByLogin()
  },
  computed: {
    ...mapGetters(['getUserByLogin']),
    ...mapGetters(['getPhoneByLogin'])
  },
  methods: {
    ...mapActions(['UserByLogin']),
    ...mapActions(['PhoneByLogin']),
    ...mapActions(['DeletePhone'])
  }
}
</script>

<style scoped>
.profile {
  border-radius: 20px;
  padding: 25px;
}
.profile p {
  width: 342px;
}
.headers {
  margin-bottom: 40px;
}
.TopMedia {
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
  top: 22px;
  color: #7a7886;
}
.relative a:hover {
  text-decoration: none;
  color: #7a7886;
}
</style>
