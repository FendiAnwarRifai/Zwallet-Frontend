<template>
    <div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'emailVerify',
  title: 'Email Verify',
  mounted: function () {
    this.verifyEmail()
  },
  methods: {
    verifyEmail () {
    //   this.$route.query.id
      axios.get(`${process.env.VUE_APP_SERVICE_API}/auth/verify/${this.$route.params.id}`)
        .then((res) => {
          this.$swal.fire({
            title: `${res.data.status}`,
            text: `${res.data.message}`,
            icon: `${res.data.status}`,
            confirmButtonText: 'Ok'
          }).then((result) => {
            setTimeout(() => {
              window.close()
            }, 300)
          })
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

<style lang="scss" scoped>

</style>
