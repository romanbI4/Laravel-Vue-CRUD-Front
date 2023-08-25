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
import {create} from '@/services/api/companyRequest';
import {setFields} from '@/utils/form';

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
            
            this.loading = true;

            const fields = {
              "title": this.title,
              "phone": this.phone,
              "description": this.description
            };

            const data = setFields(fields);

            const response = await create(data);

            if (response.errors) {
              this.errors = response.errors;
              this.loading = response.loading;
              this.submitted = response.submitted;
            }
        }
    },
    components: { InputComponent, ButtonComponent, ErrorComponent }
};

</script>