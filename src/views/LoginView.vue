<template>
  <div>
    <h1>Login</h1>
    <input type="email" placeholder="Eメール" v-model="email" name="email">
    <br />
    <input type="password" placeholder="パスワード" v-model="password" maxlength="20" name="password">
    <button v-on:click="login">Login</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { login } from '@/api/auth';

export default defineComponent({
  data() {
    return {
      email: '',
      password:'',
    }
  },
  methods: {
    login: function() {
      // TODO: Error Handling
      login(this.email, this.password)
        .then(() => this.$router.push('/food/list'))
    }
  }
})
</script>

<style>
</style>
