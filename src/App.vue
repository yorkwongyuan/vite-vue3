<script lang="ts">
export default {
  mounted () {
    console.log('mounted -> this.$http', this.$api)
    this.$http.get(this.$api.notifyOrderBiz + 'ED30A583553B40F59519331DAD202081/YY000005').then(res => {
      console.log(res, 'res')
    })
  }
}
</script>


<template>
  <div>
    <router-view></router-view>
  </div>
</template>
