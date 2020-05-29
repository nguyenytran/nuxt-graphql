<template>
  <div>
    <sidebar-component></sidebar-component>
    <div class="relative md:ml-64 bg-gray-200">
      <navbar-component></navbar-component>
      <nuxt />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar.vue'
import NavbarComponent from '@/components/Navbar.vue'
export default {
  name: 'Admin',
  middleware: 'isAuth',
  components: {
    NavbarComponent,
    SidebarComponent
  }
}
</script>

<style scoped></style>
