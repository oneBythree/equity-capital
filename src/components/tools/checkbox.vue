<template>
  <em :class="['ec-checkbox',myCheck?'checked':'unchecked']"
      @click="handleCheck">
  </em>
</template>

<script>
export default {
  name: 'ec-checkbox',
  props: {
    checked: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      myCheck: this.checked
    }
  },
  methods: {
    handleCheck () {
      this.myCheck = !this.myCheck
      this.$emit('click-check', this.myCheck)
    }
  }
}
</script>

<style lang="" scoped>
</style>
