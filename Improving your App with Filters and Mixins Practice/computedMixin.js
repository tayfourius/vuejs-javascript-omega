export const computedMixin = {
    computed: {
      reversedComputedMixin () {
        return this.text.split('').reverse().join('')
      },
      lengthOfComputedMixin () {
        return this.text.length
      }
    }
  }