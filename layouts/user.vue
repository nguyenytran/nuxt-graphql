<template>
  <div>
    <div class="fixed bg-white z-10 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-gray-100 py-4 space-x-10 sm:space-x-none"
        >
          <div class="lg:w-0 lg:flex-1">
            <n-link to="/" prefetch>
              <img
                class="h-8 w-auto"
                src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
                alt="Workflow"
              />
            </n-link>
          </div>
          <div class="-mr-2 -my-2 lg:hidden md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
              @click="sideMenu = !sideMenu"
            >
              <svg
                v-if="!sideMenu"
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
              <svg
                v-else
                class="fill-current w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z"
                ></path>
              </svg>
            </button>
          </div>
          <nav :class="['hidden lg:flex md:flex space-x-10', menu]">
            <n-link to="/architecture" prefetch>
              <span
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                Architecture
              </span>
            </n-link>
            <n-link to="/" prefetch>
              <span
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                Pricing
              </span>
            </n-link>
            <n-link to="/" prefetch>
              <span
                class="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150 hover:bg-gray-200 rounded-full py-2 px-4"
              >
                About Us
              </span>
            </n-link>
          </nav>
        </div>
      </div>
    </div>
    <nuxt :class="['pt-20 w-full']" />
  </div>
</template>

<script>
export default {
  name: 'UserLayout',
  data() {
    return {
      sideMenu: false
    }
  },
  computed: {
    menu() {
      return this.sideMenu ? 'side-menu' : ''
    }
  }
}
</script>
<style lang="less" scoped>
.side-menu {
  display: flex;
  position: fixed;
  top: 55%;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 16px;
  background-color: #a0aec0;
  flex-direction: column;
  align-items: center;
  border-top-left-radius: 22px;
  border-top-right-radius: 22px;
  a {
    width: 100%;
    border-bottom: solid 1px white;
    margin: 16px;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    span {
      font-weight: bold;
      color: white;
    }
  }
}
</style>
