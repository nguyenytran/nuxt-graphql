<template>
  <div class="max-w-screen-xl m-auto px-5 xl:px-0">
    <masonry
      :cols="{ default: 5, 1000: 3, 400: 2 }"
      :gutter="{ default: '16px', 700: '8px' }"
    >
      <div
        v-for="i in 35"
        :key="i"
        class="relative sm:mb-2 mb-4"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        <n-link :to="`/architecture/${i}`">
          <app-image
            :lazy-src="`https://source.unsplash.com/random/${i}`"
            :lazy-srcset="`https://source.unsplash.com/random/${i} 2x`"
            class="w-full rounded-lg"
          ></app-image>

          <div class="flex flex-col absolute inset-0 px-4 py-4 text-white">
            <div class="relative">
              <h1 class="text-xl font-bold" data-aos="fade-down">
                Title {{ i }}
              </h1>
            </div>
          </div>
        </n-link>
      </div>
    </masonry>
  </div>
</template>
<script>
import AppImage from '~/components/AppImage'
import aos from '@/mixins/aos'
export default {
  name: 'Index',
  layout: 'user',
  components: { AppImage },
  mixins: [aos],
  data() {
    return {
      title: 'Architecture'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>
