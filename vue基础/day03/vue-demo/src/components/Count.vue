<template>
    <div>
        <h5>这是count组件</h5>
        <p>count的值是：{{ count }}</p>
        <button @click="add">点我+1</button>
    </div>
</template>

<script>
export default {
    // props是自定义属性，允许通过自定义属性，为当前组件指定初始值
    // props 中的数值，可以直接在模板结构中被使用
    // 注意：props是只读的，不能直接被修改
    props: {
        init:{
            // 声明自定义属性，default指定一个默认值
            default: 0,
            // type指定属性的值类型
            type: Number,
            // 必选项校验
            require: true
        }
        },
    data() {
        return {
            count: this.init,
        };
    },
    methods: {
        add() {
            this.count += 1
        }
    },
}
</script>

<style lang="less" scoped>
</style>