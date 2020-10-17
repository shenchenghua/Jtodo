<template>
    <section class="real-app">
        <input 
            type="text" 
            class="add-input"
            autofocus="autofocus"
            placeholder="接下来做什么"
            @keyup.enter="addTodo"
        >
        <Item  
            v-for="todo in filterTodos"
            :todo="todo"
            :key="todo.id" 
            @del="deleteTodo"
        />
        <Tabs 
            :filter="filter" 
            :todos="todos"
            @toggle="toggleFilter"
            @clearAll="clearAllCompletedTodo"
        />
    </section>
</template>

<script>
import Item from './item.vue';
import Tabs from './tabs.vue';
let id = 0;
export default {
    data() {
        return {
            todos: [],
            filter: 'all'
        }
    },
    components: {
        Item,
        Tabs
    },
    computed: {
        filterTodos() {
            if(this.filter === 'all') {
                return this.todos;
            }
            const filterCompleted = this.filter === 'completed';
                       //array.filter(function(currentValue,index,arr), thisValue)
                       //filter()把传入的函数依次作用于每个元素，然后根据返回值是true还是false决定保留还是丢弃该元素。
            return this.todos.filter(todo=> todo.completed===filterCompleted);
            //箭头函数等价：function (todo){ return todo.completed===filterCompleted }
        }
    },
    methods: {
        addTodo(e) {
            this.todos.unshift({  //unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度
                id: id++,
                content: e.target.value,
                completed: false   //checkbox 选中之后，v-model绑定的值(item第六行)如果是布尔类型，该值会变成true ，再点击会变成false
            });
            e.target.value = '';  //清空内容
        },
        deleteTodo(id) { //splice()方法向从数组中添加/删除项目,然后返回被删除的项目.splice(index,howmany,item1,.....,itemX)
            this.todos.splice(this.todos.findIndex(todo => id === todo.id), 1);
                                                //function (todo) { return id===todo.id }
        },  //findIndex() 方法返回数组中符合条件的第一个元素位置,测试条件时返回 true 时, findIndex() 返回符合条件的元素的索引位置
        toggleFilter(state) {  //点击事件被触发时，获得点击的内容，赋值给filter
            console.log(state);
            this.filter = state;
        },
        clearAllCompletedTodo() {
            this.todos = this.todos.filter(todo=> todo.completed===false);
        }
    }
}
</script>

<style lang="stylus" scoped>
.real-app    /*根节点section的样式 */
    width 600px
    margin 0 auto
    box-shadow 0 0 5px #666
.add-input   /*input的样式 */
    position relative
    margin 0
    width 100%
    background-color pink
    font-size 24px
    font-family inherit
    font-weight inherit 
    line-height 1.4em
    border none
    outline none 
    color inherit 
    box-sizing border-box
    font-smoothing antialiased
    padding 16px 16px 16px 36px
    border none
    box-shadow inset 0 -2px 1px rgba(0, 0, 0, 0.03)
</style>
