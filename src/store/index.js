import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

Vue.use(VueSweetalert2)
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    idUser: null || localStorage.getItem('id'),
    token: null || localStorage.getItem('token'),
    getUserByLogin: {},
    detailUsers: [],
    dataPhoneByLogin: [],
    dataAllUsers: [],
    sortDataTransaction: []
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload
      state.token = payload.token
      state.idUser = payload.id
    },
    SORT_DATA (state, payload) {
      state.sortDataTransaction = payload
    },
    SET_ALL_USERS (state, payload) {
      state.dataAllUsers = payload
    },
    SET_USER_BYLOGIN (state, payload) {
      state.getUserByLogin = payload
    },
    SET_DETAIL_USER (state, payload) {
      state.detailUsers = payload
    },
    SET_PHONE_BYLOGIN (state, payload) {
      state.dataPhoneByLogin = payload
    },
    REMOVE_TOKEN (state) {
      state.token = null
    }
  },
  actions: {
    expiredTokenProses (context, payload) {
      const miliSecond = parseInt(payload)
      setTimeout(() => {
        localStorage.removeItem('token')
        localStorage.removeItem('id')
        context.commit('REMOVE_TOKEN')
        Vue.swal.fire({
          title: 'Error!',
          text: 'Token Expired',
          icon: 'error',
          confirmButtonText: 'Relogin'
        })
        router.push('/auth/login')
      }, miliSecond)
    },
    interceptorRequest (context) {
      axios.interceptors.request.use(function (config) {
        config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
        return config
      }, function (error) {
        return Promise.reject(error)
      })
    },
    interceptorResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        if (error.response.status === 401) {
          if (error.response.data.message === 'Invalid Token') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_TOKEN')
            Vue.swal.fire({
              title: 'Error!',
              text: `${error.response.data.message}`,
              icon: 'error',
              confirmButtonText: 'Relogin'
            })
            router.push('/auth/login')
          } else if (error.response.data.message === 'Token Expired') {
            localStorage.removeItem('token')
            localStorage.removeItem('id')
            context.commit('REMOVE_TOKEN')
            Vue.swal.fire({
              title: 'Error!',
              text: `${error.response.data.message}`,
              icon: 'error',
              confirmButtonText: 'Relogin'
            })
            router.push('/auth/login')
          }
        }
        return Promise.reject(error)
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/auth/login/', payload)
          .then(res => {
            const result = res.data.result
            localStorage.setItem('token', result.token)
            localStorage.setItem('id', result.id)
            context.commit('SET_USER', result)
            context.dispatch('interceptorRequest')
            context.dispatch('expiredTokenProses', result.expiredToken)
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    Register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:8080/users/', payload)
          .then(res => {
            const result = res.data
            resolve(result)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    Logout (context, payload) {
      localStorage.removeItem('token')
      localStorage.removeItem('id')
      context.commit('REMOVE_TOKEN')
      router.push('/auth/login')
    },
    UserByLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/users/${context.state.idUser}`)
          .then(res => {
            context.commit('SET_USER_BYLOGIN', res.data[0])
            resolve(res.data[0])
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    insertTransaction (context, payload) {
      return new Promise((resolve, reject) => {
        if (payload.amount >= 12000000) {
          return Vue.swal.fire({
            title: 'Warning',
            text: 'Maksimal Transfer Rp. 12.000.000',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        } else if (payload.amount < 10000) {
          return Vue.swal.fire({
            title: 'Warning',
            text: 'Minimal Transfer Rp. 10.000',
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        }
        axios.post(`${process.env.VUE_APP_SERVICE_API}/transaction/`, payload)
          .then(res => {
            if (res.data.status === 401) {
              Vue.swal.fire({
                title: `${res.data.title}`,
                text: `${res.data.message}`,
                icon: `${res.data.statusText}`,
                confirmButtonText: 'Ok'
              })
            } else {
              resolve(res)
            }
          })
          .catch((err) => {
            reject(err)
          })
      })
    },
    sortData (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/transaction?id=${context.state.idUser}&sort=${payload}`)
          .then(res => {
            context.commit('SORT_DATA', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getDataUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_SERVICE_API}/users?page=${payload.page}&limit=${payload.limit}&search=${payload.search}`)
          .then(res => {
            context.commit('SET_ALL_USERS', res.data.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    DetailUser (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/users/${payload}`)
          .then(res => {
            context.commit('SET_DETAIL_USER', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    PhoneByLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/managePhone?id=${context.state.idUser}`)
          .then(res => {
            context.commit('SET_PHONE_BYLOGIN', res.data)
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    insertSecondaryPhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios.get(`http://localhost:8080/managePhone?id=${context.state.idUser}`)
          .then(res => {
            if (res.data.length >= 3) {
              Vue.swal.fire({
                title: 'Error!',
                text: 'Secondary phone number cannot be more than three',
                icon: 'error',
                confirmButtonText: 'Ok'
              })
              return router.push('/main/managePhone')
            } else {
              axios.post(`${process.env.VUE_APP_SERVICE_API}/managePhone/`, {
                id_user: context.state.idUser,
                phone: payload
              })
                .then(res => {
                  Vue.swal.fire({
                    title: 'Success!',
                    text: 'Secondary phone number add successfully',
                    icon: 'success',
                    confirmButtonText: 'Ok'
                  })
                  router.push('/main/managePhone')
                })
                .catch((err) => {
                  reject(err)
                })
            }
          })
      })
    },
    UpdateUserByLogin (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/${context.state.idUser}`, payload.data)
          .then(res => {
            Vue.swal.fire({
              title: 'Success!',
              text: `${payload.textAlert}`,
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            router.push(payload.routerPush)
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    DeletePhone (context, payload) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`${process.env.VUE_APP_SERVICE_API}/managePhone/${payload}`)
          .then(res => {
            Vue.swal.fire({
              title: 'Success!',
              text: 'Phone number deleted successfully',
              icon: 'success',
              confirmButtonText: 'Ok'
            })
            context.dispatch('PhoneByLogin')
            resolve(res.data)
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },
  getters: {
    isLogin (state) {
      return state.token !== null
    },
    getAllUsers (state) {
      return state.dataAllUsers
    },
    sortTransaction (state) {
      return state.sortDataTransaction
    },
    getUserByLogin (state) {
      return state.getUserByLogin
    },
    getPhoneByLogin (state) {
      return state.dataPhoneByLogin
    },

    UsersSelected (state) {
      return state.detailUsers
    }
  },
  modules: {
  }
})
