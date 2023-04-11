<template>
  <div>
    <h1>食品情報登録</h1>
    <table border="1" align="center">
      <tbody>
        <tr>
          <th>id</th>
          <td>{{ food.id }}</td>
        </tr> 
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
    <button v-on:click="update">更新</button>
    <br>
    <router-link to="/food/list">一覧へ戻る</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getFoodDetail, updateFood } from '@/api/food';

export default defineComponent({
  data() {
    return {
      food: {},
    }
  },
  mounted() {
    const foodId = this.$route.path.split('/').pop()
    if (!foodId) return
    getFoodDetail(foodId).then((res: object) => {this.food = res.data})
  },
  methods: {
    update: function() {
      // TODO: validation
      const param = {
        'foodId': this.food.id,
        'name': this.food.name,
        'calories': this.food.calories,
        'protein': this.food.protein,
        'fat': this.food.fat,
        'carbohydrate': this.food.carbohydrate,
        'perGrams': this.food.perGrams
      }
      updateFood(param).then(() => this.$router.push('/food/update/completed'))
    }
  }
})
</script>

<style>

</style>
