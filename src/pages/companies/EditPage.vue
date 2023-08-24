<template>
  <div>
    <h2>Edit company</h2>
    <form @submit.prevent="handleSubmit">
      <InputComponent :value="title" field="title" v-model:field="title" :submitted="submitted" :errors="errors"/>
      <InputComponent :value="phone" field="phone" v-model:field="phone" :submitted="submitted" :errors="errors"/>
      <InputComponent :value="description" field="description" v-model:field="description" :submitted="submitted" :errors="errors"/>
      <ButtonComponent :loading="loading" textButton="Edit"/>
    </form>
  </div>
</template>

<script>
import InputComponent from '@/components/InputComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';

const company = require('@/services/api/companyRequest');

export default {
  data() {
    return {
      title: "",
      phone: "",
      submitted: false,
      loading: false,
      description: "",
      errors: "",
      data: []
    };
  },
  mounted() {
    this.getCompanyById();
  },
  methods: {
    async getCompanyById() {
      const response = await company.getById(this.$route.params.id);

      this.title = response.title;
      this.description = response.description;
      this.phone = response.phone;
    },
    async handleSubmit() {
      this.submitted = true;
      
      const {title, phone, description} = this;

      if (!(title || phone || description)) {
        return;
      }

      this.loading = true;

      this.data = {
        'title': this.$data.title,
        'phone': this.$data.phone,
        'description': this.$data.description,
      };

      const response = await company.updateById(this.$route.params.id, this.data);

      if (response.errors) {
        this.errors = response.errors;
        this.loading = response.loading;
      }

    }
  },
  components: { InputComponent, ButtonComponent }
};

</script>