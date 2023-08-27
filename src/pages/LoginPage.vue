<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleSubmit">
      <InputComponent field="email" v-model:field="email" :submitted="submitted" :errors="errors"/>
      <InputComponent field="password" v-model:field="password" :submitted="submitted" :errors="errors"/>
      <ErrorComponent field="credentials" :errors="errors"/>
      <ButtonComponent :loading="loading" textButton="Login"/>
    </form>
  </div>
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import AuthService from '@/services/api/AuthService';
import LocalStorage from '@/utils/localStorage';
import Form from '@/utils/form';
import router from '@/router';

export default {
  data() {
    return {
      email: "",
      password: "",
      submitted: false,
      loading: false,
      returnUrl: "",
      errors: "",
      token: ""
    };
  },
  methods: {
    async handleSubmit() {
      this.submitted = true;
      this.loading = true;

      const fields = {
        'email': this.email,
        'password': this.password,
      };

      const data = Form.setFields(fields);

      try {
        const response = await AuthService.login(data);

        LocalStorage.setValue("token", response.data.token);

        router.push('/companies');
      } catch (error) {
        this.errors = error.response.data.errors;
      } finally {
        this.loading = false;
        this.submitted = false;
      }
    }
  },
  components: {InputComponent, ErrorComponent, ButtonComponent}
}
</script>
