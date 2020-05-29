<template>
  <div class="masonry max-w-screen-xl m-auto">
    <div v-for="i in 20" :key="i" class="grid relative mb-4">
      <n-link :to="`/pin/${i}`" prefetch>
        <app-image
          :data-src="`https://source.unsplash.com/random/${i}`"
          class="w-full rounded-lg"
        ></app-image>

        <div class="flex flex-col absolute inset-0 px-4 py-4 text-white">
          <div class="relative">
            <a class="absolute inset-0" target="_blank" href="/"></a>
            <h1 class="text-2xl font-bold">Title {{ i }}</h1>
          </div>
          <div class="mt-auto">
            <span class="bg-gray-100 rounded py-1 px-3 mb-1 text-gray-700">
              # tag{{ i }}
            </span>
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
    return {}
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
  flex-flow: column wrap;
  .grid {
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
