<template>
  <div
    class="about-us relative flex content-center items-center justify-center"
  >
    <div class="about-us__bg absolute top-0 w-full h-full bg-center bg-cover">
      <span
        id="blackOverlay"
        class="w-full h-full absolute opacity-75 bg-black"
      ></span>
    </div>
    <div class="absolute top-0 right-0 left-0">
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
              class="items-center justify-center p-2 text-gray-400"
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
    <div class="container relative mx-auto">
      <div class="items-center flex flex-wrap">
        <div class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
          <div class="pr-12">
            <h1 class="text-white font-semibold text-5xl">
              Your story starts with us.
            </h1>
            <p class="mt-4 text-lg text-gray-300">
              This is a simple example of a Landing Page you can build using
              Tailwind Starter Kit. It features multiple CSS components based on
              the Tailwindcss design system.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LandingPage',
  data() {
    return {
      title: 'About Us',
      sideMenu: false
    }
  },
  computed: {
    menu() {
      return this.sideMenu ? 'side-menu' : ''
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
.about-us {
  min-height: 100vh;
  &__bg {
    background-image: url('https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1267&amp;q=80');
  }
  .side-menu {
    display: flex;
    position: fixed;
    z-index: 10;
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
}
</style>
