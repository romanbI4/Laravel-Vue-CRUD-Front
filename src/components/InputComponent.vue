<template>
    <div class="form-group">
        <label :for="field">{{ field }}</label>
        <input v-if="this.hasValue" :type="field" @input="this.updateEvent($event.target.value)" :name="field" class="form-control"
          v-bind:class="{ 'is-invalid': this.isInvalid() }" autocomplete="on" :value="value" required/>
        <input v-else :type="field" @input="this.updateEvent($event.target.value)" :name="field" class="form-control"
             v-bind:class="{ 'is-invalid': this.isInvalid() }" autocomplete="on" required/>
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
    ],
    methods: {
      isInvalid() {
        return this.submitted && !this.field;
      },
      updateEvent(value) {
        return this.$emit('update:field', value);
      },
      hasValue() {
        return this.value && this.value.length > 0;
      }
    },
  }
</script>