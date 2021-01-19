<template>
  <div class="col-lg">
    <div class="shadow-lg bg-white transaction">

      <div class="row TopMedia">
        <div class="col">
          <span class="texts">How To Top Up</span>
        </div>
      </div>

      <div class="shadow bg-white mediaTop">
        <span class="listNumber">1</span>
        <span class="info"
          >Go to the nearest ATM or you can use E-Banking.</span
        >
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">2</span>
        <span class="info"
          >Type your security number on the ATM or E-Banking.</span
        >
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">3</span>
        <span class="info">Select “Transfer” in the menu</span>
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">4</span>
        <span class="info"
          >Type the virtual account number that we provide you at the top.</span
        >
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">5</span>
        <span class="info"
          >Type the amount of the money you want to top up.</span
        >
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">6</span>
        <span class="info">Read the summary details</span>
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">7</span>
        <span class="info">Press transfer / top up</span>
      </div>
      <div class="shadow bg-white mediaTop">
        <span class="listNumber">8</span>
        <span class="info"
          >You can see your money in Zwallet within 3 hours.</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
/*content css*/
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
.mediaTop {
  margin-top: 10px;
}
.TopMedia,
.mediaTop {
  padding: 25px;
  border-radius: 15px;
}
.listNumber {
  font-weight: bold;
  font-size: 16px;
  color: #6379f4;
  margin-right: 18px;
}
.info {
  font-size: 14px;
  color: #7a7886;
}
/*end content*/
</style>
