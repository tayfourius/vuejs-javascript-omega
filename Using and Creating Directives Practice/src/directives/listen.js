import Vue from 'vue'

Vue.directive('listen', {
  bind (el, binding, vnode) {
    const fn = el[`_listen_${binding.arg}`] = vnode.context[binding.expression].bind(vnode.context)
    el.addEventListener(binding.arg, fn)
  },
  unbind (el, binding) {
    const fn = el[`_listen_${binding.arg}`]
    el.removeEventListener(binding.arg, fn)
  }
})
