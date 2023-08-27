<template>
  <CompanyTableComponent :columns=columns :companies="companies"/>
</template>

<script>
import CompanyTableComponent from '@/components/CompanyTableComponent.vue';
import CompanyService from '@/services/api/CompanyService';

export default {
  data() {
    return {
      loading: false,
      errors: "",
      columns: ['ID', 'Title', 'Phone', 'Description', 'Created At', 'Updated At'],
      companies: []
    };
  },
  mounted() {
    this.getList();
  },
  methods: {
    async getList() {
      return this.companies = (await CompanyService.getList()).data.data;
    }
  },
  components: {CompanyTableComponent}
};

</script>