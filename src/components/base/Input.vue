<template>
  <input
    v-bind:class="{
      Field: className === 'Field'
    }"
    :type="type"
    :placeholder="placeholder"
    @change="sendValue"
    v-model="value"
  />
</template>

<script>
export default {
  name: 'Input',
  props: ['name', 'placeholder', 'className', 'type'],
  data () {
    return {
      value: ''
    }
  },
  methods: {
    sendValue: function () {
      this.$emit('input-fill', this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
