const showPassoword = {
  data () {
    return {
      type: 'password',
      icon: 'far fa-eye-slash'
    }
  },
  methods: {
    showPW () {
      if (this.type === 'password') {
        this.type = 'text'
        this.icon = 'far fa-eye'
      } else {
        this.type = 'password'
        this.icon = 'far fa-eye-slash'
      }
    }
  }
}
export default showPassoword
