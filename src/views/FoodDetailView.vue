<template>
  <div>
    <h1>食品詳細</h1>
    <button v-on:click="$router.push('/food/update/' + food.id)">変更</button>

    <button v-on:click="doDelete">削除</button>

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
import { getFoodDetail, deleteFood } from '@/api/food';

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
  methods: {
    doDelete: function() {
      let isOk = window.confirm('削除しますか？')
      if (isOk) {
        deleteFood(this.food.id).then(() => this.$router.push('/food/delete/completed'))
      }
    }
  }
})
</script>

<style>

</style>
