<template>
  <div>
    <div class="fixed bg-white z-10 w-full">
      <div class="max-w-7xl mx-auto px-4 sm:px-6">
        <div
          class="flex justify-between items-center border-gray-100 py-4 md:justify-start md:space-x-10"
        >
          <div class="lg:w-0 lg:flex-1">
            <n-link to="/" prefetch>
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
    <nuxt class="pt-20 w-full" />
  </div>
</template>

<script>
export default {
  name: 'UserLayout'
}
</script>
