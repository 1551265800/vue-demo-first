<template>
    <div class="textBox">
        <p>这是 {{username}} 的vue界面</p>
        <button @click="changeName">修改用户名</button>
        <div>123</div>
    </div>
</template>

<script>
    //默认导出 固定写法
    export default{
        //data数据源 组件里的数据源不能指向对象
        //组件中的data必须是一个函数
        data(){
            //这个return出去的对象可以定义数据
            return {
                username:"张三"
            }
        },
        methods:{
            changeName(){
                //在组件中this指向当前组件的实例对象
                this.username = "法外狂徒--张三"
            }
        }

    }
</script>

<style lang="less">
    .textBox{
        background-color: yellowgreen;
        button{
            background-color: aqua;
        }
    }
</style>