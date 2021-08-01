<template>
  <div class="">
    <no-ssr>
      <file-pond
        ref="pond"
        name="test"
        label-idle="Drop files here..."
        :allow-multiple="true"
        accepted-file-types="image/jpeg, image/png"
        server="/api"
        :files="myFiles"
        @init="handleFilePondInit"
      />
    </no-ssr>
  </div>
</template>
<script>
export default {
  name: 'Index',
  layout: 'admin',
  data() {
    return {
      myFiles: []
    }
  },
  methods: {
    handleFilePondInit() {}
  }
}
</script>
