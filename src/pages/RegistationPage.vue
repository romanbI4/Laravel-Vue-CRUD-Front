<template>
  <div>
    <h2>Registration</h2>
    <form @submit.prevent="handleSubmit">
      <InputComponent field="first_name" v-model:field="first_name" :submitted="submitted" :errors="errors"/>
      <InputComponent field="last_name" v-model:field="last_name"  :submitted="submitted" :errors="errors"/>
      <InputComponent field="email" v-model:field="email" :submitted="submitted" :errors="errors"/>
      <InputComponent field="password" v-model:field="password" :submitted="submitted" :errors="errors"/>
      <InputComponent field="phone" v-model:field="phone" :submitted="submitted" :errors="errors"/>
      <ButtonComponent :loading="loading" textButton="Register"/>
    </form>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import AuthService from '@/services/api/AuthService';
import Form from '@/utils/form';
import router from '@/router';

export default {
  data() {
    return {
      email: "",
      password: "",
      first_name: "",
      last_name: "",
      phone: "",
      submitted: false,
      loading: false,
      returnUrl: "",
      errors: ""
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;

      this.loading = true;

      const fields = {
        'email': this.email,
        'password': this.password,
        "first_name": this.first_name,
        "last_name": this.last_name,
        "phone": this.phone
      };

      const data = Form.setFields(fields);

      try {
        await AuthService.register(data);

        router.push('/login');
      } catch (error) {
        this.errors = error.response.data.errors;
      } finally {
        this.loading = false;
        this.submitted = false;
      }
    }
  },
  components: {InputComponent, ButtonComponent}
}
</script>
