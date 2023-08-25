<template>
  <CompanyTableComponent :columns=columns :companies="companies"/>
</template>

<script>
import CompanyTableComponent from '@/components/CompanyTableComponent.vue';
import {getList} from'@/services/api/companyRequest';

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
            this.companies = await getList();
        }
    },
    components: { CompanyTableComponent }
};

</script>