<template>
  <div>
    <h1>食品情報登録</h1>
    <table border="1" align="center">
      <tbody> 
        <tr>
          <th>name</th>
          <td><input type="text" v-model="food.name"></td>
        </tr>
        <tr>
          <th>calories</th>
          <td><input type="number" v-model="food.calories"></td>
        </tr>
        <tr>
          <th>protein</th>
          <td><input type="number" v-model="food.protein"></td>
        </tr>
        <tr>
          <th>fat</th>
          <td><input type="number" v-model="food.fat"></td>
        </tr>
        <tr>
          <th>carbohydrate</th>
          <td><input type="number" v-model="food.carbohydrate"></td>
        </tr>
        <tr>
          <th>perGrams</th>
          <td><input type="number" v-model="food.perGrams"></td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="register">登録</button>
    <router-link to="/food/list">一覧へ戻る</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { registerFood } from '@/api/food';

export default defineComponent({
  data() {
    return {
      food: {
        'name': '',
        'calories': 0,
        'protein': 0,
        'fat': 0,
        'carbohydrate': 0,
        'perGrams': 0 
      },
    }
  },
  mounted() {
  },
  methods: {
    register: function() {
      // TODO: validation
      registerFood(this.food).then(() => this.$router.push('/food/register/completed'))
    }
  }
})
</script>

<style>

</style>
