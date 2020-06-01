<template>
  <div class="masonry max-w-screen-xl m-auto px-5 xl:px-0">
    <div v-for="i in 20" :key="i" class="masonry-item relative mb-4">
      <n-link :to="`/architecture/${i}`">
        <app-image
          :data-src="`https://source.unsplash.com/random/${i}`"
          class="w-full rounded-lg"
        ></app-image>

        <div class="flex flex-col absolute inset-0 px-4 py-4 text-white">
          <div class="relative">
            <h1 class="text-xl font-bold">Title {{ i }}</h1>
          </div>
        </div>
      </n-link>
    </div>
  </div>
</template>
<script>
import AppImage from '~/components/AppImage'
export default {
  name: 'Index',
  layout: 'user',
  components: { AppImage },
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

<style lang="less" scoped>
.masonry {
  column-gap: 16px;
  column-count: 5;
  @media (max-width: 1200px) {
    columns: 3;
  }
  @media (max-width: 992px) {
    columns: 2;
  }
  .masonry-item {
    display: inline-block;
    &:before {
      border-radius: 0.5rem;
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(0, 0, 0, 0.2);
    }
  }
}
</style>
