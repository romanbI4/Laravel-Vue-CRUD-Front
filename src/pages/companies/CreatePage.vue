<template>
  <div>
    <h2>Create company</h2>
    <form @submit.prevent="handleSubmit">
      <InputComponent field="title" v-model:field="title" :submitted="submitted" :errors="errors"/>
      <InputComponent field="phone" v-model:field="phone" :submitted="submitted" :errors="errors"/>
      <InputComponent field="description" v-model:field="description" :submitted="submitted" :errors="errors"/>
      <ErrorComponent field="credentials" :errors="errors"/>
      <ButtonComponent :loading="loading" textButton="Create"/>
    </form>
  </div>
</template>

<script>
import ErrorComponent from '@/components/ErrorComponent.vue';
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const company = require('@/services/api/companyRequest');
const form = require('@/utils/form');

export default {
    data() {
        return {
            title: "",
            phone: "",
            submitted: false,
            loading: false,
            description: "",
            errors: "",
        };
    },
    methods: {
        async handleSubmit() {
            this.submitted = true;

            const { title, phone, description } = this;
            if (!(title || phone || description)) {
                return;
            }
            
            this.loading = true;

            const fields = {
              "title": this.title,
              "phone": this.phone,
              "description": this.description
            };

            const data = form.set(fields);

            const response = await company.create(data);

            if (response.errors) {
              this.errors = response.errors;
              this.loading = response.loading;
            }
        }
    },
    components: { InputComponent, ButtonComponent, ErrorComponent }
};

</script>