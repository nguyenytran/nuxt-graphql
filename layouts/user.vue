<template>
  <div>
    <div class="fixed bg-white z-10 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10"
        >
          <div class="lg:w-0 lg:flex-1 flex items-center">
            <n-link
              v-if="routeDetail"
              :to="routeName"
              prefetch
              class="lg:hidden"
            >
              <button class="flex mr-4 text-gray-400">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 24 24"
                  aria-label="Quay lại"
                  role="img"
                >
                  <path
                    d="M17.28 24c-.57 0-1.14-.22-1.58-.66L4.5 12 15.7.66a2.21 2.21 0 0 1 3.15 0c.87.88.87 2.3 0 3.18L10.79 12l8.06 8.16c.87.88.87 2.3 0 3.18-.44.44-1 .66-1.57.66"
                  ></path>
                </svg>
              </button>
            </n-link>
            <n-link to="/" prefetch class="flex">
              <img
                class="h-8 w-auto sm:h-10"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </n-link>
          </div>
          <div class="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
            >
              <svg
                class="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav class="hidden md:flex space-x-10">
            <n-link to="/">
              <a
                href="#"
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                <span>Architecture</span>
              </a>
            </n-link>
            <n-link to="/aboutUs">
              <a
                href="#"
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                Pricing
              </a>
            </n-link>
            <n-link to="/aboutUs">
              <a
                href="#"
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                About Us
              </a>
            </n-link>
          </nav>
        </div>
      </div>
    </div>
    <nuxt class="pt-20 w-full" />
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  computed: {
    routeName() {
      const { $nuxt } = this
      return $nuxt.$route.name === 'architecture-id' ? '/' : '/aboutUs'
    },
    routeDetail() {
      const { $nuxt } = this
      return $nuxt.$route.params && $nuxt.$route.params.id
    }
  }
}
</script>
