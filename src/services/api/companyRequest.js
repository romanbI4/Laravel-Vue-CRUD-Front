import client from '@/services/axios';
import router from "@/router";

export function getList(){
    this.loading = true;
    
    return client({ requiresAuth: true })
        .get('/user/companies')
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.loading = false;
        });
}

export function getById(id){
    return client({requiresAuth: true})
        .get(`/user/companies/${id}`)
        .then(response => {
            return response.data.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.loading = false;
        });
}

export function deleteByid(id){
    return client({requiresAuth: true})
        .delete(`/user/companies/${id}`)
        .then(response => {
            alert('Deleted');
            location.reload();
            return response.data.data;
        })
        .catch(error => {
            return error.response.data;
        })
        .finally(() => {
            this.loading = false;
        });
}

export function updateById(id, data){
      return client({requiresAuth: true})
          .put(`/user/companies/${id}`, data)
          .then(response => {
              alert('Updated');
              router.push('/companies');
              return response.data.data;
          })
          .catch(error => {
              return error.response.data;
          })
          .finally(() => {
              this.loading = false;
          });
}

export function create(data){
      return client({ requiresAuth: true })
          .post('/user/companies', data)
          .then(response => {
              alert('Created');
              router.push('/companies');
              return response.data.data;
          })
          .catch(error => {
              return error.response.data;
          })
          .finally(() => {
              this.loading = false;
          });
}