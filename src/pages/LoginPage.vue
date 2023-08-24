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

const auth = require('@/services/api/authRequest');
const form = require('@/utils/form');

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

            const { email, password } = this;

            if (!(email && password)) {
              return;
            }

            this.loading = true;
            
            const fields = {
              'email' : this.email,
              'password' : this.password,
            };

            const data = form.set(fields);

            const response = await auth.login(data);

            if (response.errors) {
              this.errors = response.errors;
              this.loading = response.loading;
            }

        }
    },
    components: { InputComponent, ErrorComponent, ButtonComponent }
}
</script>
