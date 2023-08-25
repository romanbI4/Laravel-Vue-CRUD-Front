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
import {login} from '@/services/api/authRequest';
import {setFields} from '@/utils/form';

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
              'email' : this.email,
              'password' : this.password,
            };

            const data = setFields(fields);

            const response = await login(data);

            if (response.errors) {
              this.errors = response.errors;
              this.loading = response.loading;
              this.submitted = response.submitted;
            }

        }
    },
    components: { InputComponent, ErrorComponent, ButtonComponent }
}
</script>
