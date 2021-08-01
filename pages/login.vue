<template>
  <main>
    <section class="absolute w-full h-full">
      <div
        class="absolute top-0 w-full h-full bg-gray-900"
        style="background-size: 100%; background-repeat: no-repeat;"
        :style="{
          'background-image':
            'url(' + require('../assets/img/register_bg_2.png') + ')'
        }"
      ></div>
      <div class="container mx-auto px-4 h-full">
        <div class="flex content-center items-center justify-center h-full">
          <div class="w-full lg:w-4/12 px-4">
            <div
              class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300 border-0"
            >
              <div class="flex-auto px-4 lg:px-10 py-10">
                <form @submit.prevent="userLogin">
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Email
                    </label>
                    <input
                      v-model="formLogin.username"
                      type="email"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Email"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="relative w-full mb-3">
                    <label
                      class="block uppercase text-gray-700 text-xs font-bold mb-2"
                    >
                      Password
                    </label>
                    <input
                      v-model="formLogin.password"
                      type="password"
                      class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                      placeholder="Password"
                      style="transition: all 0.15s ease 0s;"
                    />
                  </div>
                  <div class="text-center mt-6">
                    <button
                      class="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                      type="submit"
                      style="transition: all 0.15s ease 0s;"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  name: 'LoginPage',
  middleware: ['isAuth'],
  data() {
    return {
      formLogin: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async userLogin() {
      try {
        await this.$auth.loginWith('local', {
          data: this.formLogin
        })

        this.$auth.redirect('home', true)
      } catch (err) {}
    }
  }
}
</script>
