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

const auth = require('@/services/api/authRequest');
const form = require('@/utils/form');

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

            const { email, password, last_name, first_name, phone } = this;
            if (!(email || password || last_name || first_name || phone)) {
              return;
            }
            
            this.loading = true;

            const fields = {
              'email': this.email,
              'password': this.password,
              "first_name": this.first_name,
              "last_name": this.last_name,
              "phone": this.phone
            };

            const data = form.set(fields);

            const response = await auth.register(data);

            if (response.errors) {
              this.errors = response.errors;
              this.loading = response.loading;
            }
        }
    },
    components: { InputComponent, ButtonComponent }
}
</script>
