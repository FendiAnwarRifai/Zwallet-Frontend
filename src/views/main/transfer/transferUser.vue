<template>
  <div class="col-lg">
    <div v-for="data in UsersSelected" :key="data.id" class="shadow-lg bg-white transaction">
      <div class="row mb-4">
        <div class="col">
          <span class="texts">Transfer Money</span>
        </div>
      </div>
      <div class="shadow bg-white media mt-4 TopMedia">
        <img
          class="align-self-center mr-3"
          :src="data.image"
          width="52px"
          alt="user"
        />
        <div class="media-body">
          <h6 class="names">{{data.name}}</h6>
          <span class="info">{{data.phone}}</span>
        </div>
      </div>

      <div class="row mt-4 cutomCol">
        <div class="col mt-2">
          <span class="info">
            Type the amount you want to transfer and then press continue to the
            next steps.
          </span>
        </div>
      </div>
      <div class="text-center">
        <div class="input-amount mb-4">
          <money-input class="input-field" placeholder="0.00" v-model="amount"/>
        </div>

        <div class="texts">
          <span>Rp. {{new Intl.NumberFormat(['ban', 'id']).format(getUserByLogin.saldo)}} Available</span>
        </div>

        <div class="input-icons mt-5">
          <i class="fas fa-pen fa-lg icon"></i>
          <input
          v-model="notes"
            class="input-fields"
            type="text"
            placeholder="Add some notes"
          />
        </div>
      </div>

      <div class="text-right">
        <button v-if="notes.length" class="btn btnCustom" @click="Transaction">
          Continue
        </button>
        <button v-else class="btn btnDisable">
          Continue
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'transferUser',
  title: 'Transfer Money',
  data () {
    return {
      amount: 0,
      receiverId: this.$route.query.id,
      senderId: localStorage.getItem('id'),
      notes: ''
    }
  },
  mounted: function () {
    const parameters = this.$route.query.id
    this.DetailUser(parameters)
    this.UserByLogin()
  },
  computed: {
    ...mapGetters(['UsersSelected']),
    ...mapGetters(['getUserByLogin'])
  },
  methods: {
    // get data user login
    ...mapActions(['UserByLogin']),
    // get data user selected
    ...mapActions(['DetailUser']),
    // PROSES TRANSAKSI
    ...mapActions(['insertTransaction']),
    ...mapActions(['UpdateUserByLogin']),
    Transaction () {
      const payload = {
        senderId: this.senderId,
        receiverId: this.receiverId,
        amount: this.amount,
        notes: this.notes
      }
      this.insertTransaction(payload)
        .then((res) => {
          const payloads = {
            routerPush: '/main/transaction',
            textAlert: `Transfers Kepada ${this.UsersSelected[0].name + ' ' + this.UsersSelected[0].lastName} Sukses, Saldo Anda Berkurang`,
            data: { saldo: this.getUserByLogin.saldo - this.amount }
          }
          this.UpdateUserByLogin(payloads)

          axios.get(`${process.env.VUE_APP_SERVICE_API}/users/${this.receiverId}`)
            .then(res => {
              axios.patch(`${process.env.VUE_APP_SERVICE_API}/users/${this.receiverId}`, {
                saldo: res.data[0].saldo + this.amount
              })
            })
            .catch(err => {
              console.log(err)
            })
        })
    }

  }
}
</script>

<style scoped>
.transaction {
  border-radius: 20px;
  padding: 25px;
  padding-bottom: 38px;
}
.texts {
  font-weight: bold;
  font-size: 18px;
  color: #3a3d42;
}
.TopMedia {
  padding: 20px;
  border-radius: 15px;
}
.names {
  font-weight: bold;
  font-size: 16px;
  color: #4d4b57;
}
.info {
  font-size: 14px;
  color: #7a7886;
}
.cutomCol {
  text-align: justify;
  width: 45%;
}
.input-field {
  margin-top: 25px;
  font-weight: bold;
  font-size: 42px;
  color: #6379f4;
  outline: 0;
  width: 100%;
  text-align: center;
  border: none;
}
::placeholder {
  color: rgba(169, 169, 169, 0.8);
}
.icon {
  padding: 20px;
  padding-left: 8px;
  position: absolute;
  color: rgba(169, 169, 169, 0.8);
}

.input-fields {
  border: none;
  border-bottom: 1.5px solid rgba(169, 169, 169, 0.6);
  outline: 0;
  width: 60%;
  padding: 16px;
  padding-left: 44px;
}
input[type=text].input-fields:focus{
  border-bottom: 1.5px solid #6379F4;
}

.btnCustom, .btnCustom:hover {
  padding: 10px 30px 10px 30px;
  font-size: 14px;
  background-color: #6379f4;
  border-radius: 12px;
  color: white;
  margin-top: 30px;
}
.btnDisable, .btnDisable:hover{
   padding: 10px 30px 10px 30px;
  font-size: 14px;
  border-radius: 12px;
  color: #88888f;
  background: #dadada;
  margin-top: 30px;
}
/*responsive mobile*/
@media only screen and (max-width: 767px) {
  .cutomCol {
    width: 90%;
  }
  .input-field {
    font-size: 32px;
  }
}
</style>
