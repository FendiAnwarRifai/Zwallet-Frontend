<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white transaction">
      <div class="row mb-4">
        <div class="col">
          <span class="texts">Search Receiver</span>
        </div>
      </div>
      <div class="input-icons mb-4">
        <i class="fas fa-search icon"></i>
        <input
          v-model="searchData"
          class="input-field"
          type="text"
          placeholder="Search receiver here"
        />
      </div>

      <div id="itemList">
        <a v-on:click="getTransfer(data.id)" v-for="data in getAllUsers" :key="data.id">
          <div class="shadow bg-white media mt-3 mediaTop">
            <img
              class="align-self-center mr-3"
              :src="data.image"
              width="52px"
              alt="user"
            />
            <div class="media-body">
              <h6 class="names">{{ data.name+' '+data.lastName }}</h6>
              <span class="info">{{ data.phone }}</span>
            </div>
          </div>
        </a>
          <b-pagination
            v-model="currentPages"
            :per-page="perPage"
            :total-rows="rows"
            aria-controls="itemList"
            class="mt-3 float-right"
          ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { mapGetters, mapActions } from 'vuex'
export default {
  title: 'Transaction',
  name: 'Transaction',
  data () {
    return {
      perPage: 4,
      currentPages: 1,
      rows: 0,
      searchData: ''
    }
  },
  mounted () {
    this.pagination()
  },
  watch: {
    currentPages: function (val) {
      this.pagination()
    },
    searchData: function (val) {
      this.pagination()
    }
  },
  computed: {
    ...mapGetters(['getAllUsers'])
  },
  methods: {
    ...mapActions(['getDataUser']),

    pagination () {
      const payload = {
        limit: this.perPage,
        page: this.currentPages,
        search: this.searchData
      }
      this.getDataUser(payload).then(res => {
        this.rows = res.rows
      })
    },
    getTransfer (value) {
      this.$router.push({ path: 'TransferUser', query: { id: value } })
      // this.$router.push({ path: `transferUser/${value}` })
    }
  }
}
</script>

<style scoped>
.transaction {
  border-radius: 20px;
  padding: 25px;
  padding-bottom: 75px;
}
.transaction a {
  text-decoration: none;
}
.texts {
  font-weight: bold;
  font-size: 18px;
  color: #3a3d42;
}
.input-icons i {
  position: absolute;
}

.input-icons {
  width: 100%;
  margin-bottom: 10px;
  color: rgba(58, 61, 66, 0.4);
}

.icon {
  padding: 14px;
  min-width: 50px;
  text-align: center;
}

.input-field {
  border: none;
  outline: 0;
  width: 100%;
  padding: 10px;
  padding-left: 44px;
  border-radius: 15px;
  display: inline-block;
  background-color: #f0f0f0;
}
.mediaTop {
  margin-top: 10px;
}
.mediaTop {
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
</style>
