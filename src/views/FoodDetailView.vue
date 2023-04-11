<template>
  <div>
    <h1>食品詳細</h1>
    <button v-on:click="$router.push('/food/update/' + food.id)">変更</button>
    <table border="1" align="center">
      <tbody> 
        <tr v-for="key, index in foodObjKey">
          <th>{{ key }}</th>
          <td>{{ food[key] }}</td>
        </tr>
      </tbody>
    </table>
    <router-link to="/food/list">一覧へ戻る</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { getFoodDetail } from '@/api/food';

export default defineComponent({
  data() {
    return {
      food: {},
      foodObjKey: ['id', 'userId', 'name', 'calories',	'protein',	'fat',	'carbohydrate',	'perGrams']
    }
  },
  mounted() {
    const foodId = this.$route.path.split('/').pop()
    if (!foodId) return
    getFoodDetail(foodId).then((res: object) => {this.food = res.data})
  },
})
</script>

<style>

</style>
