<template>
  <div class="col-lg">
    <div class="shadow-lg balance">
      <div class="row">
        <div class="col">
          <div class="row">
            <div class="col text-opacity textBalance">Balance</div>
            <div class="w-100"></div>
            <div class="col priceBalance">
              <h2 class="font-weight-bold">Rp. {{new Intl.NumberFormat(['ban', 'id']).format(getUserByLogin.saldo)}}</h2>
            </div>
            <div class="w-100"></div>
            <div class="col text-opacity telp">{{getUserByLogin.phone}}</div>
          </div>
        </div>
        <div class="col">
          <div class="row text-right buttons">
            <div class="col mb-2">
              <router-link to="transaction" class="btn">
                <i class="text-opacity fas fa-arrow-up mr-3"></i>
                <span>Transfer</span>
              </router-link>
            </div>
            <div class="w-100"></div>
            <div class="col">
              <router-link to="" class="btn">
                <i class="text-opacity fas fa-plus mr-3"></i>
                <span>Top Up</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-7 mt-4">
        <div class="shadow-lg bg-white chart">
          <div class="row">
            <div class="col income">
              <div class="row">
                <div class="col" style="color: #1EC15F; font-size: 24px;">
                  <i class="fas fa-arrow-down"></i>
                </div>
                <div class="w-100"></div>
                <div class="col text-secondary">Income</div>
                <div class="w-100"></div>
                <div class="col">
                  <h5 class="font-weight-bold">Rp. 2.120.000</h5>
                </div>
              </div>
            </div>
            <div class="col expense">
              <div class="row">
                <div class="col" style="color: #FF5B37; font-size: 24px;">
                  <i class="fas fa-arrow-up"></i>
                </div>
                <div class="w-100"></div>
                <div class="col text-secondary">Expense</div>
                <div class="w-100"></div>
                <div class="col">
                  <h5 class="font-weight-bold">Rp. 1.560.000</h5>
                </div>
              </div>
            </div>
          </div>
          <div class="row graphic">
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph0"></div>
              <span class="day">Sat</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph1"></div>
              <span class="day">Sun</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph2"></div>
              <span class="day">Mon</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="price p-1 shadow-lg bg-white">+Rp65.000</div>
              <img
                class="marker"
                src="../../../assets/img/icon/Ellipse 11.png"
                width="60px;"
                height="60px;"
              />
              <div class="graph-size graph3"></div>
              <span class="day">Tue</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph4"></div>
              <span class="day">Wed</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph5"></div>
              <span class="day">Thu</span>
            </div>
            <div class="col d-flex justify-content-center">
              <div class="graph-size graph6"></div>
              <span class="day">Fri</span>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-5 mt-4">
        <div class="shadow-lg bg-white transaction">
          <div class="row">
            <div class="col-8">
              <span class="texts">Transaction History</span>
            </div>
            <div class="col text-right">
              <router-link to="history" class="text-allTrans">See all</router-link>
            </div>
          </div>

          <div class="media mediaTop">
            <img
              class="align-self-center mr-3"
              src="asset/img/client2.png"
              alt="user"
            />
            <div class="media-body">
              <h6 class="names">Samuel Suhi</h6>
              <span class="info">Transfer</span>
            </div>
            <span class="align-self-center pricesPlus">+Rp50.000</span>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  title: 'Dashboard',
  name: 'Dashboard',
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
.balance {
  background-color: #6379f4;
  border-radius: 20px;
  /*margin-bottom: 20px;*/
  color: white;
  padding: 30px;
}
.textBalance {
  margin-bottom: 8px;
}
.telp {
  margin-top: 5px;
}
.btn  {
  width: 160px;
  height: 50px;
  border: 1px solid white;
  border-radius: 10px;
  color: white;
  background-color: rgba(255, 255, 255, 0.2);
  padding-top: 10px;
}
.btn:hover{
  color: white;
}
.text-opacity {
  color: #e0e0e0;
}
.chart {
  position: relative;
  border-radius: 20px;
  height: max-content !important;
  padding: 40px;
}
.income {
  margin-right: 20%;
}
.graphic {
  margin-top: 25px;
  margin-bottom: 32px;
}
.day {
  position: absolute;
  top: 245px;
  color: #8f8f8f;
}
.graph-size {
  width: 14px;
  border-radius: 15px;
}
.graph0 {
  margin-top: 11px;
  height: 223px;
  background-color: #6379f4;
}
.graph1 {
  height: 97px;
  margin-top: 137px;
  background-color: #6379f4;
}
.graph2 {
  height: 149px;
  margin-top: 85px;
  background-color: #9da6b5;
}
.price {
  position: absolute;
  top: 12px;
  font-weight: bold;
  font-size: 12px;
  color: #1ec15f;
}
.marker {
  position: absolute;
  top: 31px;
}
.graph3 {
  height: 183px;
  margin-top: 51px;
  background-color: #9da6b5;
}
.graph4 {
  height: 138px;
  margin-top: 96px;
  background-color: #9da6b5;
}
.graph5 {
  height: 197px;
  margin-top: 37px;
  background-color: #6379f4;
}
.graph6 {
  height: 155px;
  margin-top: 79px;
  background-color: #9da6b5;
}

.transaction {
  border-radius: 20px;
  padding: 25px;
}
.texts {
  font-weight: bold;
  font-size: 18px;
  color: #3a3d42;
}
.text-allTrans,
.text-allTrans:hover {
  text-decoration: none;
  font-size: 14px;
  line-height: 19px;
  color: #6379f4;
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
.prices {
  font-weight: bold;
  font-size: 16px;
  color: #ff5b37;
}
.pricesPlus {
  font-weight: bold;
  font-size: 16px;
  color: #1ec15f;
}
@media only screen and (max-width: 990px) {
  .balance {
    padding: 20px;
  }
  .priceBalance {
    padding-right: 0px;
  }
  .balance h2 {
    font-size: 22px;
  }
  .telp {
    font-size: 13px;
  }
  .textBalance {
    margin-bottom: 0px;
  }
  .telp {
    margin-top: 0px;
  }
  .btn {
    width: 120px;
    height: 40px;
  }

  .chart {
    /*margin-bottom: 20px;*/
    padding: 25px;
  }
  .income h5,
  .expense h5 {
    font-size: 18px;
  }
  .income {
    margin-right: 5%;
  }
  .graphic {
    margin-top: 10px;
  }
  .graph-size {
    width: 14px;
  }
}
</style>
