<template>
    <div>
        <h5>Count组件(全局)</h5>
        <p>Count的值是{{count}}</p>
        <button @click="add">加1</button>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                count: this.init
            }
        },
        methods: {
            add() {
                this.count++;
            }
        },
        //自定义属性
        props: {
            init: {
                type: Number,
                default: 0
            },
        },
    }
</script>

<style lang="less" scoped>
     
</style>