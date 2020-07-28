<template>
  <div>
      <li @click="handleClick">
          我是子组件
      </li>
  </div>
</template>

<script>
export default {
    methods:{
        handleClick() {
            this.$bus.$emit('add','收到，相加')
        }
    }
}
</script>

<style>

</style>