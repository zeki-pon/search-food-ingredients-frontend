<template>
  <div>
    <h1>食品一覧</h1>
    <table border="1" align="center">
      <thead>
        <tr>
          <th v-for="key in foodObjKey">{{key}}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="food in foods">
          <td><router-link v-bind:to="{ path: '/food/detail/' + food[foodObjKey[0]]}">{{ food[foodObjKey[0]] }}</router-link></td>
          <td>{{ food[foodObjKey[1]] }}</td>
          <td>{{ food[foodObjKey[2]] }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getFoods } from '@/api/food';

export default defineComponent({
  data() {
    return {
      foods: [],
      foodObjKey: ['id', 'userId', 'name']
    }
  },
  mounted() {
    getFoods().then((res: object) => this.foods = res.data.foods)
  },
  methods: {
    login: function() {
    }
  }
})
</script>

<style>

</style>
