<template>
  <CompanyTableComponent :columns=columns :companies="companies"/>
</template>

<script>
import CompanyTableComponent from '@/components/CompanyTableComponent.vue';

const company = require('@/services/api/companyRequest');

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
            this.companies = await company.getList();
        }
    },
    components: { CompanyTableComponent }
};

</script>