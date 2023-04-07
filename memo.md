# memo
- 公式サイトを参考に実装
  - https://ja.vuejs.org/guide/quick-start.html#creating-a-vue-application

- 初期設定
```
(base) imazeki@imazekishouseinoMacBook-Pro search-food-ingredients-frontend % npm init vue@latest
Need to install the following packages:
  create-vue@3.6.1
Ok to proceed? (y) y

Vue.js - The Progressive JavaScript Framework

✔ Project name: … search-food-ingredients-frontend
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add an End-to-End Testing Solution? › Cypress
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in /Users/imazeki/WorkSpace/search-food-ingredients/search-food-ingredients-frontend/search-food-ingredients-frontend...

Done. Now run:

  cd search-food-ingredients-frontend
  npm install
  npm run format
  npm run dev

npm notice 
npm notice New major version of npm available! 8.19.3 -> 9.6.3
npm notice Changelog: https://github.com/npm/cli/releases/tag/v9.6.3
npm notice Run npm install -g npm@9.6.3 to update!
npm notice

(base) imazeki@imazekishouseinoMacBook-Pro search-food-ingredients-frontend % cd search-food-ingredients-frontend 
(base) imazeki@imazekishouseinoMacBook-Pro search-food-ingredients-frontend % npm install
```

- vue-router Navigation Guards
  - https://router.vuejs.org/guide/advanced/navigation-guards.html