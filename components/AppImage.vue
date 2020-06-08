<template>
  <img
    :data-src="lazySrc"
    :data-srcset="lazySrcset"
    :background-color="backgroundColor"
    class="w-auto h-auto"
  />
</template>

<script>
import lozad from 'lozad'

export default {
  name: 'AppImage',
  props: {
    backgroundColor: {
      type: String,
      default: '#e2adad'
    },
    height: {
      type: Number,
      default: null
    },
    lazySrc: {
      type: String,
      default: null
    },
    lazySrcset: {
      type: String,
      default: null
    },
    width: {
      type: Number,
      default: null
    }
  },
  data() {
    return {
      loading: true
    }
  },
  computed: {
    aspectRatio() {
      if (!this.width || !this.height) return null

      return (this.height / this.width) * 100
    },
    style() {
      const style = { backgroundColor: this.backgroundColor }
      if (this.width) style.width = `${this.width}px`
      const applyAspectRatio = this.loading && this.aspectRatio
      if (applyAspectRatio) {
        style.height = 0
        style.paddingTop = `${this.aspectRatio}%`
      }

      return style
    }
  },
  mounted() {
    const setLoadingState = () => {
      this.loading = false
    }
    this.$el.addEventListener('load', setLoadingState)
    this.$once('hook:destroyed', () => {
      this.$el.removeEventListener('load', setLoadingState)
    })
    const observer = lozad(this.$el)
    observer.observe()
  }
}
</script>
