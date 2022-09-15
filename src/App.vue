<template>
  <h1 @click="increase">
    {{count}}
  </h1>
  <div>
    4보다 큽니다!
  </div>
</template>

<script>
export default {

  data() {
    return {
      count : 0
    }
  },
  methods : {
    increase() {
      this.count += 1
    }
  }
}

</script>

<style >
  h1 {
    font-size: 50px;
    color: royalblue
  }

</style>