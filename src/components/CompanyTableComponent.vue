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
        <tr v-for="company in companies" :key="company.id">
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
import { deleteByid } from '@/services/api/companyRequest';

export default {
    props: [
        'columns',
        'companies'
    ],
    methods: {
        deleteCompany(id) {
          deleteByid(id);
        }
    }
}
</script>