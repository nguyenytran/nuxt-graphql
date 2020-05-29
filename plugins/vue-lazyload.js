import Vue from 'vue'
import VueLazyLoad from 'vue-lazyload'

Vue.use(VueLazyLoad, {
  preLoad: 2,
  attempt: 1,
  error: '~assets/img/google.png',
  loading: '@/assets/img/team-1-800x800.jpg'
})
