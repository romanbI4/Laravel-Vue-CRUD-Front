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
import CompanyService from '@/services/api/CompanyService';
import router from '@/router';

export default {
  data() {
    return {
      title: "",
      phone: "",
      submitted: false,
      loading: false,
      description: "",
      errors: "",
      data: [],
      id: this.$route.params.id,
    };
  },
  mounted() {
    this.getCompanyById();
  },
  methods: {
    async getCompanyById() {
      try {
        const response = await CompanyService.getById(this.id);

        this.title = response.data.data.title;
        this.description = response.data.data.description;
        this.phone = response.data.data.phone;
      } catch {
        this.errors = this.response.errors;
      } finally {
        this.loading = false;
        this.submitted = false;
      }
    },
    async handleSubmit() {
      this.submitted = true;

      this.loading = true;

      this.data = {
        'title': this.$data.title,
        'phone': this.$data.phone,
        'description': this.$data.description,
      };

      try {
        const response = await CompanyService.updateById(this.id, this.data);

        alert('Updated');

        router.push('/companies');

        return response.data.data;
      } catch (error) {
        this.errors = error.response.data.errors;
      } finally {
        this.loading = false;
        this.submitted = false;
      }
    }
  },
  components: {InputComponent, ButtonComponent}
};

</script>