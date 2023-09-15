<template>
    <table class="table">
      <thead>
        <tr>
          <th v-for="column in columns" :key="column.id">
            {{column}}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr @change="this.updateEvent()" v-for="company in companies" :key="company.id">
          <td>
            {{company.id}}
          </td>
          <td>
            {{company.title}}
          </td>
          <td>
            {{company.phone}}
          </td>
          <td>
            {{company.description}}
          </td>
          <td>
            {{company.created_at}}
          </td>
          <td>
            {{company.updated_at}}
          </td>
          <td>
            <router-link :to="{
                  name: 'EditCompany',
                  params: { 
                    id: company.id
                  },
                }" class="btn">
              <i class="material-icons">edit</i>
            </router-link>
            <router-link to="#" @click="deleteCompany(`${company.id}`);" class="btn">
              <i class="material-icons">delete</i>
            </router-link>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
import CompanyService from '@/services/api/CompanyService';

export default {
  props: [
    'columns',
    'companies'
  ],
  emits: [
    'update:companies'
  ],
  methods: {
    updateEvent() {
      return this.$emit('update:companies', (CompanyService.getList()).data.data);
    },
    deleteCompany(id) {
      try {
        CompanyService.deleteByid(id);

        alert('Deleted');

        location.reload();
      } catch (error) {
        this.errors = error.response.data.errors;
      } finally {
        this.loading = false;
        this.submitted = false;
      }

    }
  }
}
</script>