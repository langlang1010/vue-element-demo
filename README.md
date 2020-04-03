# vue-element-demo

### 目标
使用 vue-cli 3.+ 创建vue项目，并整合 element UI框架

### 基本步骤
> element-ui 官方文档 [https://element.eleme.cn/#/zh-CN/component/installation](https://element.eleme.cn/#/zh-CN/component/installation) [https://element.eleme.cn/#/zh-CN/component/quickstart](https://element.eleme.cn/#/zh-CN/component/quickstart)

1. 在某个文件夹下打开命令行，输入命令如下，创建vue项目
    ```bash
    vue create vue-element-demo
    ```
2. 使用 VSCode 打开刚刚新建的项目目录，然后打开命令行，输入如下：
    ```bash
    # 安装依赖
    cnpm install element-ui --save
    ```
3. 修改 `main.js`，添加以下内容：
    ```js
    import ElementUI from 'element-ui'
    import 'element-ui/lib/theme-chalk/index.css'

    Vue.use(ElementUI)
    ```    
4. 添加element-ui中的组件，进行测试，比如说在 `App.vue` 中\<img> 标签后面添加内容如下：
    ```html
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    ```
5. 运行项目
    ```bash
    npm run serve
    ```    

### 使用element-ui
1. 根据事先的设计，在官网中选择相应的组件
2. 复制官网中对应组件的代码，比如说上面例子中的button也是这样复制过来的，然后粘贴到目标地址。
3. 查看效果，并根据实际情况修改样式满足条件。


