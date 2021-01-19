<template>
  <div>
    <div class="title-detail">
      <h2 class="title-right">
        Start Accessing Banking Needs With All Devices and All Platforms With
        30.000+ Users
      </h2>
      <p class="description-right">
        Transfering money is eassier than ever, you can access Zwallet wherever
        you are. Desktop, laptop, mobile phone? we cover all of that for you!
      </p>
    </div>
    <div class="form-input">
      <div class="inputContainer">
        <i class="far fa-user fa-1x icon"> </i>
        <Input className="Field" type="text" placeholder="Enter your username" @input-fill="setUsername"/>
      </div>
      <div class="inputContainer">
        <i class="far fa-envelope fa-1x icon"> </i>
        <Input className="Field" type="text" placeholder="Enter your e-mail" @input-fill="setEmail"/>
      </div>
      <div class="inputContainer">
        <i class="fas fa-lock fa-1x icon"></i>
       <Input className="Field" :type="type" placeholder="Enter your password" @input-fill="setPassword"/>
        <i @click="showPW" v-bind:class="[ icon, 'fa-1x iconEyes' ]"></i>
      </div>
      <div
        v-if="username.length && email.length && password.length"
        class="inputContainer button"
      >
        <button @click="registerData">Sign Up</button>
      </div>
      <div v-else class="inputContainer buttonDisable">
        <button disabled>Sign Up</button>
      </div>
      <div class="login">
        <span>Already have an account? Let’s <router-link to="login">Login</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import showPassoword from '../../mixins/showPassword'
import Input from '../../components/base/Input'
import { mapActions } from 'vuex'
export default {
  name: 'Register',
  title: 'Sign Up',
  mixins: [showPassoword],
  components: {
    Input
  },
  data () {
    return {
      username: '',
      password: '',
      email: '',
      image:
        'https://cdn.icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png'
    }
  },
  methods: {
    ...mapActions(['Register']),
    setUsername: function (value) {
      this.username = value
    },
    setEmail: function (value) {
      this.email = value
    },
    setPassword: function (value) {
      this.password = value
    },
    registerData () {
      const payload = {
        username: this.username,
        password: this.password,
        email: this.email,
        image: this.image,
        link: `http://localhost:8081/emailVerify/${this.email}`
      }
      this.Register(payload)
        .then((res) => {
          this.$swal.fire({
            title: 'account created successfully',
            text: `${res.message2}`,
            icon: 'success',
            confirmButtonText: 'Ok'
          })
          this.$router.push({ path: '/auth/login' })
        })
        .catch((err) => {
          this.$swal.fire({
            title: 'Error!',
            text: `${err.response.data.message}`,
            icon: 'error',
            confirmButtonText: 'Ok'
          })
        })
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
.title-right,
.description-right {
  position: relative;
  margin-left: 10%;
  margin-right: 25%;
  text-align: justify;
}
.title-right {
  margin-top: 5%;
  font-size: 22px;
}
.description-right {
  margin-top: 4%;
  font-size: 16px;
  color: #abb2b9;
}

.inputContainer {
  margin-top: 38px;
  margin-left: 10%;
  margin-right: 30%;
  color: rgba(169, 169, 169, 0.8);
}
.inputContainer i {
  position: absolute;
}
.icon {
  text-align: left;
  margin-left: 1%;
  margin-top: 6px;
}
.iconEyes {
      padding: 6px;
    margin-left: -5%;
}
.inputContainer input {
  width: 100%;
  padding-left: 35px;
  padding-bottom: 8px;
  outline: 0;
  border-width: 0 0 2px;
  border-color: rgba(169, 169, 169, 0.8);
  color: rgba(169, 169, 169, 0.8);
  font-size: 18px;
}
::placeholder {
  color: rgba(169, 169, 169, 0.8);
}
.button button,
.buttonDisable button {
  width: 100%;
  padding: 12px;
  font-weight: bold;
  font-size: 18px;
  border-radius: 12px;
  border: none;
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
.login {
  margin-left: 10%;
  margin-right: 30%;
  margin-top: 20px;
  text-align: center;
  font-size: 14px;
}
.login a {
  color: blue;
}
/* Responsive layout */
@media only screen and (max-width: 1100px) {
  .title-right,
  .description-right,
  .inputContainer,
  .login {
    margin-right: 10%;
  }
  .button {
    text-align: center;
  }
  .button button,
  .buttonDisable button {
    font-size: 14px;
    width: 80%;
    margin-left: 10%;
  }
}
@media only screen and (max-width: 954px) {
  .title-right {
    font-size: 18px;
  }
  .description-right {
    font-size: 14px;
  }
}
</style>
