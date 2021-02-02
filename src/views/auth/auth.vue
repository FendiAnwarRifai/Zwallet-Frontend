<template>
  <div>
    <div class="row" style="margin:0;">
      <div class="col-lg-6 left">
          <img class="vector" src="@/assets/img/vector.png" />
        <div class="row text-title">
          <div class="col">
            <span>
              Zwallet
            </span>
          </div>
        </div>
        <div class="row images">
          <div class="col">
              <img class="png_phone1" src="@/assets/img/png_phone1.png" />
              <img class="png_phone2" src="@/assets/img/png_phone2.png" />
          </div>
        </div>
        <div class="row information">
          <div class="col">
            <h2 class="content-title">App that Covering Banking Needs.</h2>
            <p class="description">
              Zwallet is an application that focussing in banking needs for all
              users in the world. Always updated and always following world
              trends. 5000+ users registered in Zwallet everyday with worldwide
              users coverage.
            </p>
          </div>
        </div>
      </div>

      <div class="col-lg-6">
         <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
a {
  text-decoration: none;
}
/*flex item left*/
.left {
  overflow: hidden;
  color: white;
  background-color: #6379f4;
}
.text-title ,.images,.information{
    margin-left: 52px;
}
.text-title {
  font-weight: bold;
  font-size: 20px;
  margin-left: 16%;
}
.vector {
  position: absolute;
  top: 5%;
  width: 51vw;
  left: -1px;
}
.png_phone1 {
  position: absolute;
  z-index: 1;
  width: 21vw;
  left: 22%;
}
.png_phone2 {
  position: absolute;
  width: 20vw;
}
.information{
    margin-top: 68%;
    margin-bottom: 12px;
    width: 80%;
}
.content-title {
  font-size: 20px;
}
.description {
  top: 78%;
  left: 15%;
  right: 12%;
  font-size: 16px;
  text-align: justify;
  margin-bottom: 50px;
}

/*flex item rifht*/
.flex-item-right {
  position: relative;
  background-color: white;
  padding: 10px;
  flex: 50%;
}
@media (max-width: 990px) {
  /*flex item left*/
  .left {
    display: none;
  }
}
</style>
