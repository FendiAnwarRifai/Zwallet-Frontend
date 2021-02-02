<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white profile">
      <section class="mt-5 text-center">
        <img class="align-self-center" :src="getUserByLogin.image" width="80px" alt="user"/><br />
        <span style="cursor:pointer" data-toggle="modal" data-target="#exampleModalCenter">
          <i class="fas fa-pencil-alt fa-xs"></i> Edit
        </span>
        <!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Change Your Image</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body text-justify">
        <!-- <hr> -->
          <b-form-file id="uploadImage" ref="file-input"></b-form-file>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary">Close</button>
        <button @click="uploadGambar" type="button" data-dismiss="modal" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
        <!-- end modal -->
        <h5>{{ getUserByLogin.name }}</h5>
        <font>{{ getUserByLogin.phone }}</font>
        <form action="" class="input-icons">
          <div class="input-icons">
            <router-link to="personalInfo">
              <input
                class="input-field"
                type="text"
                placeholder="Personal Information"
                disabled
              />
              <i class="fa fa-arrow-right fa-lg icon"> </i>
            </router-link>
          </div>

          <div class="input-icons">
            <a href="changePassword.html">
              <input
                class="input-field"
                type="text"
                placeholder="Change Password"
                disabled
              />
              <i class="fa fa-arrow-right fa-lg icon"> </i>
            </a>
          </div>

          <div class="input-icons">
            <a href="changePIN.html">
              <input
                class="input-field"
                type="text"
                placeholder="Change PIN"
                disabled
              />
              <i class="fa fa-arrow-right fa-lg icon"> </i>
            </a>
          </div>

          <div class="input-icons">
            <a @click="Logout()">
              <input
                class="input-field"
                type="text"
                placeholder="Logout"
                disabled
              />
            </a>
          </div>
        </form>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Profile',
  title: 'Profile',
  mounted: function () {
    this.UserByLogin()
  },
  computed: {
    ...mapGetters(['getUserByLogin'])
  },
  methods: {
    ...mapActions(['UserByLogin']),
    ...mapActions(['Logout']),
    uploadGambar () {
      var data = new FormData()
      var inputGambar = document.getElementById('uploadImage')
      var dataFile = inputGambar.files[0]

      // Tambahkan data ke Form Data
      data.append('image', dataFile)

      // Kirim,
      axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/${this.getUserByLogin.id}`, data, { headers: { 'Content-Type': 'multipart/form-data' } })
        .then(res => {
          this.$swal.fire({
            title: 'Success!',
            text: 'Photo Profile Changed Successfully',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          // .then((result) => {
          //   })
          this.$refs['file-input'].reset()
          return this.$router.push({ path: 'dashboard' })
        })
        .catch(err => {
          this.$swal.fire({
            title: 'Error!',
            text: `${err.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
          this.$refs['file-input'].reset()
        })
    }
  }
}
</script>

<style scoped>
.profile {
  border-radius: 20px;
  padding: 25px;
  padding-bottom: 38px;
}
.profile img {
  margin-bottom: 12px;
}
.profile span {
  margin-right: 18px;
}
.profile h5 {
  margin-top: 24px;
  margin-bottom: 10px;
}
.profile font {
  color: #7a7886;
}
.profile form {
  margin-top: 40px;
}
.input-icons i {
  position: absolute;
  margin-left: -8%;
}

.input-icons {
  margin-bottom: 20px;
}

.icon {
  padding: 22px;
}

.input-field {
  border: none;
  outline: 0;
  width: 60%;
  padding: 16px;
  padding-left: 20px;
  background: #e5e8ed;
  border-radius: 10px;
}
form a i {
  color: #7a7886;
}
</style>
