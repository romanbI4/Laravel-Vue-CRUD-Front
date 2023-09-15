<template>
  <div>
  </div>
</template>

<script>
import router from '@/router';
import AuthService from '@/services/api/AuthService';
import LocalStorage from '@/utils/localStorage';

export default {
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      try {
        await AuthService.logout();

        LocalStorage.removeValue('token');

        router.push('/login');
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