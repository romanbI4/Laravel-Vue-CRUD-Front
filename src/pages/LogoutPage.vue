<template>
  <div>
  </div>
</template>

<script>

const auth = require('@/services/api/authRequest');

export default {
  mounted() {
    this.logout();
  },
  methods: {
    async logout() {
      await auth.logout();
    }
  }
}
</script>