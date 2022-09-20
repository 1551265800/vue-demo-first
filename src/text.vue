<template>
    <div id="textBox">
        <p>这是 {{username}} 的vue界面</p>
        <button @click="changeName">修改用户名</button>
        <br>
        <MyCount :init = 9></MyCount>
        <hr>
        <img alt="Vue logo" src="./assets/logo.png">
        <HelloWorld msg="这是一个欢迎页面" />
    </div>
</template>

<script>
//导入要用到的组件
import HelloWorld from '@/components/HelloWorld.vue'

//默认导出 固定写法
export default {
    //data数据源 组件里的数据源不能指向对象
    //组件中的data必须是一个函数
    data() {
        //这个return出去的对象可以定义数据
        return {
            username: "张三"
        }
    },
    methods: {
        changeName() {
            //在组件中this指向当前组件的实例对象
            this.username = "法外狂徒--张三"
        }
    },
    components: {
        HelloWorld
    }
}
</script>

<style lang="less">
#textBox {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;

    button {
        background-color: aqua;
    }
}
</style>