<template>
  <div>
    <cart @add="handleAdd" />
    <span>{{ data }}</span>
    <child/>
  </div>
</template>

<script>
import cart from './cart'
import child from './child'
export default {
  data() {
    return {
      data: 0

    }
  },
  components:{cart, child},
  methods:{
    handleAdd() {
      console.log();
    }
  },
  mounted() {
    this.$bus.$on('add',() => {
      this.data += 1
    })
  }

}
</script>

<style>

</style>