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
import {getById, updateById} from '@/services/api/companyRequest';

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
      const response = await getById(this.id);

      this.title = response.title;
      this.description = response.description;
      this.phone = response.phone;
    },
    async handleSubmit() {
      this.submitted = true;

      this.loading = true;

      this.data = {
        'title': this.$data.title,
        'phone': this.$data.phone,
        'description': this.$data.description,
      };

      const response = await updateById(this.id, this.data);

      if (response.errors) {
        this.errors = response.errors;
        this.loading = response.loading;
        this.submitted = response.submitted;
      }

    }
  },
  components: { InputComponent, ButtonComponent }
};

</script>