<template>
    <div>
        <h5>Count组件(全局)</h5>
        <p>Count的值是{{count}}</p>
        <p>从兄弟元素拿来的数据：{{messageFromHelloWorld}}</p>
        <button @click="add">加1</button>
    </div>
</template>

<script>
    import bus from "./eventBus"
    export default {
        data() {
            return {
                count: this.init,
                messageFromHelloWorld:"1"
            }
        },
        methods: {
            add() {
                this.count++;
                this.$emit("sonCount",this.count)
            }
        },
        //自定义属性
        props: {
            init: {
                type: Number,
                default: 0
            },
        },
        created () {
            bus.$on("share",(val)=>{
                console.log(val);
                this.messageFromHelloWorld = val;
            })
        },
    }
</script>

<style lang="less" scoped>
     
</style>