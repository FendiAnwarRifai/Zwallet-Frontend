<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white profile">
      <section>
        <span class="headers">
          <h5 style="color: #3A3D42;">Add Phone Number</h5>
          <p>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </p>
        </span>
        <div class="input-icons text-center">
          <div class="input-icons">
            <i class="fas fa-phone-alt fa-lg icon"> </i>
            <span>+62</span>
            <input
            v-model="phoneNumber"
              class="input-field"
              type="number"
              placeholder="Enter your phone number"
            />
          </div>
          <div v-if="phoneNumber.length" class="inputContainer button">
            <button class="mt-5" @click="updatePhone">
              Edit Phone Number
            </button>
          </div>
          <div v-else class="inputContainer buttonDisable">
            <button class="mt-5">Edit Phone Number</button>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'AddPhone',
  title: 'Primary Phone',
  data () {
    return {
      phoneNumber: ''
    }
  },
  mounted: function () {
    this.UserByLogin()
      .then(res => {
        this.phoneNumber = res.phone
      })
  },
  computed: {
    ...mapGetters(['getUserByLogin'])
  },
  methods: {
    ...mapActions(['UserByLogin']),
    ...mapActions(['UpdateUserByLogin']),
    updatePhone () {
      const payload = {
        routerPush: '/main/managePhone',
        sweetAlrt: 'Phone number update successfully',
        data: { phone: this.phoneNumber }
      }
      this.UpdateUserByLogin(payload)
    }
  }
}
</script>

<style scoped>
input[type=number]::-webkit-inner-spin-button,
input[type=number]::-webkit-outer-spin-button{
-webkit-appearance: none !important;
margin: 0;
}
.profile {
  border-radius: 20px;
  padding: 25px;
  padding-bottom: 21%;
}
.profile p {
  width: 342px;
}
.headers {
  margin-bottom: 40px;
}

.profile form {
  margin-top: 14%;
}
.input-icons i {
  position: absolute;
  color: rgba(169, 169, 169, 0.8);
  padding: 22px;
  padding-left: 8px;
}

.input-icons {
  margin-top: 58px;
  margin-bottom: 20px;
}
.input-icons span {
  position: absolute;
  padding: 16px;
  padding-left: 38px;
  color: #3a3d42;
  font-size: 16px;
}

.input-icons button {
  width: 60%;
  padding: 15px;
  border-radius: 18px;
  border: none;
  color: #88888f;
  outline: 0;
}
::placeholder {
  color: rgba(169, 169, 169, 0.8);
}

.input-field {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  outline: 0;
  width: 60%;
  padding: 16px;
  padding-left: 78px;
}
.button button {
  color: #ffffff;
  background: #6379f4;
}
.buttonDisable button {
  color: #88888f;
  background: #dadada;
}

button:focus {
  outline: none;
}
</style>
