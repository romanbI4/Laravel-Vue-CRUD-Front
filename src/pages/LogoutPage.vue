<template>
  <div>
  </div>
</template>

<script>
import {logout} from '@/services/api/authRequest';

export default {
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      await logout();
    }
  }
}
</script>