<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white transaction">
      <div class="row">
        <div class="col">
          <span class="texts">Transaction History</span>
        </div>
        <div class="col">
          <div class="btn-group float-right">
            <button
            style="width:92px;"
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i class="fas fa-filter"></i> sort
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button v-on:click="sortData('DESC')" class="btn dropdown-item">Latest</button>
              <button v-on:click="sortData('ASC')" class="btn dropdown-item">Longest</button>
            </div>
          </div>
        </div>
      </div>
      <div v-for="data in sortTransaction" :key="data.id">
        <div v-if="data.senderId === idUser" class="media mediaTop">
          <img
            class="align-self-center mr-3"
            :src="data.image_receiver"
            width="52px"
            alt="user"
          />
          <div class="media-body">
            <h6 class="names">{{ data.nama_penerima }}</h6>
            <span class="info">{{ data.notes }}</span>
          </div>
          <span class="align-self-center pricesMin">-Rp{{ data.amount }}</span>
        </div>

        <div v-else class="media mediaTop">
          <img
            class="align-self-center mr-3"
            :src="data.image_sender"
            width="52px"
            alt="user"
          />
          <div class="media-body">
            <h6 class="names">{{ data.nama_pengirim }}</h6>
            <span class="info">{{ data.notes }}</span>
          </div>
          <span class="align-self-center pricesPlus">+Rp{{ data.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'History',
  title: 'History Transaction',
  data () {
    return {
      idUser: localStorage.getItem('id'),
      sort: 'DESC'
    }
  },
  mounted: function () {
    const payload = this.sort
    this.sortData(payload)
  },
  computed: {
    ...mapGetters(['sortTransaction'])
  },
  methods: {
    ...mapActions(['sortData'])
  }
}
</script>

<style scoped>
.transaction {
  border-radius: 20px;
  padding: 38px;
}
.texts {
  font-weight: bold;
  font-size: 18px;
  color: #3a3d42;
}
.mediaTop {
  margin-top: 36.5px;
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
.pricesMin {
  font-weight: bold;
  font-size: 16px;
  color: #ff5b37;
}
.pricesPlus {
  font-weight: bold;
  font-size: 16px;
  color: #1ec15f;
}
</style>
