## 添加 Router

### 步骤

1. 安装依赖
   ```bash
   cnpm install vue-router --save
   ```
2. 在 `src` 目录下，添加配置文件 `router.js`
3. 编辑 `router.js` 文件

   ```js
   import Vue from 'vue'
   import Router from 'vue-router'
   import PageOne from 'pages/PageOne'
   import PageTwo from 'pages/PageTwo'

   Vue.use(Router)

   export default new Router({
     routes: [
       {
         path: '/one',
         name: 'PageOne',
         component: PageOne,
       },
       {
         path: '/two',
         name: 'PageTwo',
         component: PageTwo,
       }
     ]
   })
   ```

4. 配置 `main.js`，添加内容如下：
   ```js
   import router from './router.js'
   new Vue({
     // 添加下面这行
     router,
     render: (h) => h(App),
   }).$mount('#app')
   ```
5. 修改 `App.vue`，把 `template` 标签中添加 `<router-view />`，替换后内容如下：
  ```js
  <template>
    <div id="app">
      ...
      // 上面的内容不变，添加下面内容
      <router-view/>
    </div>
  </template>
  ```
6. 测试。新建一个文件夹`pages`，在 `pages` 中添加组件 `PageOne.vue`,内容如下：
   ```js
   <template>
     <div>
       <h1>I'm Page One</h1>
     </div>
   </template>

   <script>
     export default {
       name: 'PageOne'
     }
   </script>

   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>
   ```
7. 测试。在 `pages` 中添加组件 `PageTwo.vue`,内容如下：
   ```js
   <template>
     <div>
       <h1>I'm Page Two</h1>
     </div>
   </template>

   <script>
     export default {
       name: 'PageTwo'
     }
   </script>

   <!-- Add "scoped" attribute to limit CSS to this component only -->
   <style scoped>
   </style>
   ```
8. 运行。查看效果，即分别访问 `/` `/one` `/two` 三个页面。重点关注页面最后一行。
