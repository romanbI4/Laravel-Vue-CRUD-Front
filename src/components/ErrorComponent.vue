<template>
  <div class="form-group">
      <span v-show="errors[field]" class="alert alert-danger">{{ errors[field] }}</span>
  </div>
</template>
  
<script>
  export default {
    props: [
        'field',
        'errors'
    ]
  }
</script>