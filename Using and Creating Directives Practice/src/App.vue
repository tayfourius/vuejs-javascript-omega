<template>
  <div id="app">
      <button v-listen:click="clicked" v-if="enabled">Click me</button>
      <button v-listen:mouseover="mouseover" v-if="enabled">Hover me</button>

      <hr>

      <button @click="toggleListenButton">Toggle v-listen Buttons</button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
        enabled: true
    }
  },
  methods: {
      clicked() {
          alert('Simple click triggered!')
      },
      mouseover() {
          alert('Simple mouse over!')
      },
      toggleListenButton() {
          this.enabled = !this.enabled
      }
  }
}
</script>
