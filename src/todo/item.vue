<template>
    <div :class="['todo-item', todo.completed? 'completed': '']"> 
        <input                 
            type="checkbox"
            class="toggle" 
            v-model="todo.completed" 
        >
        <label for="">{{todo.content}}</label>
        <button class="destory" @click="deleteTodo"></button>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    methods: {
        deleteTodo() {
            this.$emit('del', this.todo.id);
        }
    }
}
</script>

<style lang="stylus" scoped>
.todo-item
        position relative  
        background-color #fff 
        font-size 24px
        border-bottom 1px solid rgba(0,0,0,0.06)
        &:hover      /*鼠标悬在div上时 button中插入内容‘错号’*/
            .destory:after
                content 'x'    /*content属性与:before及:after伪元素配合使用，来插入生成内容。*/
        label
            white-space pre-line
            word-break break-all
            padding 15px 60px 15px 15px
            margin-left 45px
            display block
            line-height 1.2em
            transition color 0.4s
            background-color red
        &.completed
            label
                color #d9d9d9
                text-decoration line-through
    .toggle   /*input样式*/
        text-align center
        width 50px
        height 30px
        position absolute
        top 0
        bottom 0
        margin auto 0
        border none
        appearance none
        outline none
        &:after
            content url('../assets/images/unChecked.svg')  /*空心圆圈*/
        &:checked:after   /*CSS3 :checked 选择器:选中后的元素（仅适用于单选按钮或复选框） 之前的样式不复存在*/
            content url('../assets/images/checked.svg')   /*圆圈中间有对号*/
    .destory /*对button编写样式*/
        position absolute
        top 0
        right 10px
        bottom 0
        width 40px
        height 40px
        margin auto 0
        font-size 30px
        color #cc9a9a
        margin-bottom 11px
        transition color 0.2s ease-out
        background-color transparent
        appearance none
        border-width 0
        cursor pointer
        outline none
</style>