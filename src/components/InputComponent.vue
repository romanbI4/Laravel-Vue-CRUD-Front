<template>
    <div class="form-group">
        <label :for="field">{{ field }}</label>
        <input v-if="value && value.length > 0" :type="field" @input="$emit('update:field', $event.target.value)" :name="field" class="form-control"
          v-bind:class="{ 'is-invalid': submitted && !field }" autocomplete="on" :value="value" required/>
        <input v-else :type="field" @input="$emit('update:field', $event.target.value)" :name="field" class="form-control"
             v-bind:class="{ 'is-invalid': submitted && !field }" autocomplete="on" required/>
        <span v-if="errors[field]" class="alert alert-danger"> {{ errors[field][0] }} </span>
    </div>
</template>
  
<script>
  export default {
    props: [
        'field',
        'value',
        'submitted',
        'errors'
    ],
    emits: [
      'update:field'
    ]
  }
</script>