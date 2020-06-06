<template>
  <div id="container" class="w-full lg:max-w-full">
    <n-link
      to="/architecture"
      prefetch
      class="fixed rounded-full sm:p-2 p-4 hover:bg-gray-200 sm:bg-gray-200 md:bg-gray-200 sm:m-4 md:mt-6 md:ml-12 z-10 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
    >
      <svg
        class="Hn_ gUZ pBj"
        height="20"
        width="20"
        viewBox="0 0 24 24"
        aria-label="Nút quay lại"
        role="img"
      >
        <path
          d="M8.415 4.586a2 2 0 1 1 2.828 2.828L8.657 10H21a2 2 0 0 1 0 4H8.657l2.586 2.586a2 2 0 1 1-2.828 2.828L1 12l7.415-7.414z"
        ></path>
      </svg>
    </n-link>
    <section class="text-gray-700 body-font overflow-hidden bg-white pb-16">
      <div class="container sm:px-0 px-5 mx-auto">
        <div
          class="lg:w-4/5 mx-auto flex flex-wrap shadow-2xl sm:shadow-none sm:rounded-none sm:p-0 p-4 rounded-lg"
        >
          <app-image
            v-viewer="{
              scalable: false,
              rotatable: false,
              navbar: false,
              title: false,
              movable: false,
              toolbar: false,
              zoomable: false
            }"
            :data-src="`https://source.unsplash.com/random/${id}`"
            class="sm:w-full md:w-full md:rounded-l-none object-cover object-center rounded-l-lg sm:rounded-l-none w-1/2"
          ></app-image>
          <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 px-5">
            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
              The Catcher in the Rye
            </h1>
            <p class="leading-relaxed">
              Fam locavore kickstarter distillery. Mixtape chillwave tumeric
              sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
              juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
              seitan poutine tumeric. Gastropub blue bottle austin listicle
              pour-over, neutra jean shorts keytar banjo tattooed umami
              cardigan.
            </p>
            <div class="flex border-t-2 border-gray-200 mt-4 py-4">
              <swiper
                v-viewer="{
                  scalable: false,
                  rotatable: false,
                  navbar: false,
                  title: false,
                  movable: false
                }"
                class="swiper rounded-lg h-24 w-auto"
                :options="{
                  slidesPerView: 4,
                  spaceBetween: 2,
                  navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev'
                  }
                }"
              >
                <swiper-slide v-for="i in 7" :key="i">
                  <img
                    :src="`https://source.unsplash.com/random/${i}`"
                    alt=""
                    class="w-full h-full"
                  />
                </swiper-slide>
                <div slot="button-prev" class="swiper-button-prev"></div>
                <div slot="button-next" class="swiper-button-next"></div>
              </swiper>
            </div>
            <div class="flex mt-4 py-4">
              <button
                class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
              >
                Contact
              </button>
              <button
                class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"
              >
                <svg
                  fill="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  class="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <p class="text-center text-lg font-bold capitalize py-4">
      People also love these ideas
    </p>
    <div class="masonry max-w-screen-xl m-auto px-4">
      <div v-for="i in 10" :key="i" class="grid relative mb-4">
        <n-link :to="`/architecture/${i}`" prefetch>
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
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import AppImage from '~/components/AppImage'

export default {
  name: 'Id',
  layout: 'user',
  components: {
    AppImage,
    Swiper,
    SwiperSlide
  },
  asyncData({ params }) {
    return {
      id: params.id
    }
  },
  data() {
    return {
      title: 'The Catcher in the Rye'
    }
  },
  head() {
    return {
      title: this.title
    }
  }
}
</script>

<style scoped lang="less">
#container {
  margin: auto;
  .masonry {
    column-gap: 16px;
    column-count: 5;
    @media (max-width: 1200px) {
      columns: 3;
    }
    @media (max-width: 992px) {
      columns: 2;
    }
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
      }
    }
  }
}
</style>
