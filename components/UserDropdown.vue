<template>
  <div>
    <a
      ref="btnDropdownRef"
      class="text-gray-600 block"
      href="#pablo"
      @click="toggleDropdown($event)"
    >
      <div class="items-center flex">
        <span
          class="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full"
        >
          <img
            alt="..."
            class="w-full rounded-full align-middle border-none shadow-lg"
            src="../assets/img/team-1-800x800.jpg"
          />
        </span>
      </div>
    </a>
    <div
      ref="popoverDropdownRef"
      class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1"
      :class="{
        hidden: !dropdownPopoverShow,
        block: dropdownPopoverShow
      }"
      style="min-width: 12rem"
    >
      <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 cursor-pointer"
      >
        Profile
      </a>
      <a
        class="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800 cursor-pointer"
        @click.prevent="logout"
      >
        Logout
      </a>
    </div>
  </div>
</template>
<script>
import Popper from 'popper.js'

export default {
  data() {
    return {
      dropdownPopoverShow: false
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault()
      if (this.dropdownPopoverShow) {
        this.dropdownPopoverShow = false
      } else {
        this.dropdownPopoverShow = true
        // eslint-disable-next-line no-new
        new Popper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
          placement: 'bottom-end'
        })
      }
    },
    async logout() {
      await this.$auth.logout()

      this.$auth.redirect('login', true)
    }
  }
}
</script>
