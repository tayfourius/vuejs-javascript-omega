<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Filters & Mixins</h1>
        <!-- Exercise 1) -->
        <!-- Build a local Filter which reverses the Text it is applied on -->
        <div class="input-group">
          <label for="">Enter a text to reverse</label>
          <input type="text" v-model="text">
          <p>{‌{ text | reversed }}</p>
        </div>
        <!-- Exercise 2 -->
        <!-- Build a global Filter which counts the length of a word and it appends it -->
        <!-- Like this: "Test" => Gets Filtered to => "Test (4)" -->
        <p>{‌{ text }} => Gets Filtered to => {‌{ text }} ({‌{ text | lengthOf }})</p>
        <!-- Exercise 3 -->
        <!-- Do the same as in Exercises 1 & 2, now with Computed Properties -->
        <div class="input-group">
          <label for="">Enter a text to reverse</label>
          <input type="text" v-model="text">
          <p>{‌{ reversedComputed }}</p>
        </div>
        <p>{‌{ reversedComputed }} => Gets Filtered to => {‌{ text }} ({‌{ lengthOfComputed }})</p>
        <!-- Exercise 4 -->
        <!-- Share the Computed Property rebuilding Exercise 2 via a Mixin -->
        <div class="input-group">
          <label for="">Enter a text to reverse</label>
          <input type="text" v-model="text">
          <p>{‌{ reversedComputedMixin }}</p>
        </div>
        <p>{‌{ reversedComputedMixin }} => Gets Filtered to => {‌{ text }} ({‌{ lengthOfComputedMixin }})</p>
      </div>
    </div>
  </div>
</template>
<script>
import { computedMixin } from './computedMixin'
export default {
  data () {
    return {
      text: '',
      filteredText: ''
    }
  },
  filters: {
    reversed (val) {
      return val.split('').reverse().join('')
    }
  },
  computed: {
    reversedComputed () {
      return this.text.split('').reverse().join('')
    },
    lengthOfComputed () {
      return this.text.length
    }
  },
  mixins: [computedMixin]
}
</script>