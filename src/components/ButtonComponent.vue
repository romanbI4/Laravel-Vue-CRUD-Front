<template>
  <div class="form-group">
        <button class="btn btn-primary" v-bind:disabled="loading">{{textButton}}</button>
        <img v-if="loading"
             :src="image" alt=""/>
      </div>
</template>
  
<script>
  export default {
    data: function () {
      return {
        image: require('/public/images/loading.gif')
      }
    },
    props: [
      'loading',
      'textButton'
    ]
  }
</script>