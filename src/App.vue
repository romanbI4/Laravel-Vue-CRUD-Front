<template>
  <div id="nav">
    <router-link to="/login">Login </router-link>
    <router-link to="/registration">Registration </router-link>
    <router-link to="/companies">List Companies </router-link>
    <router-link to="/companies/create">Create Company </router-link>
    <router-link to="/logout">Logout </router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
