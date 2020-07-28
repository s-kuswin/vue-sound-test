<template>
  <div>
      <span>
          {{ data || '暂无' }}
      </span>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data:''
        }
    },
    mounted() {
        this.$bus.$on('add', (el) => {
            this.data = el
        })
    }

}
</script>

<style>

</style>