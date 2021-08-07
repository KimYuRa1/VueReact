<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <todo-header></todo-header>

        <!-- TodoInput -->
        <todo-input v-on:add-todo="addTodo"></todo-input>

        <!-- TodoList -->
        <todo-list
            v-bind:todo-items="todoItems"
            v-on:done-toggle="doneToggle"
            v-on:remove-todo="removeTodo"
        >
        </todo-list>

        <!-- TodoFooter -->
        <todo-footer v-on:clear-all="clearAll"></todo-footer>
    </div>
</template>

<script>
import TodoHeader from "../components/todo/TodoHeader.vue";
import TodoInput from "../components/todo/TodoInput.vue";
import TodoList from "../components/todo/TodoList.vue";
import TodoFooter from "../components/todo/TodoFooter.vue";
// Vuex 인스턴스 만들기
import store from "../store/index.js"; // var store = new Vuex.Store({});
export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {

        };
    },
    //template: `#template1`,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        addTodo(newTodoItem) {
          store.dispatch("addTodo",newTodoItem);

        },
        doneToggle(id) {
          store.dispatch("addTodo", id);

            
        },
        removeTodo(id, index) {
            console.log(event.target);
            // 참조 타입 변수이면 재할당(=== 깊은 복사) 필요.
            // 방법1: array.splice() 을 사용하는 방법
            // 방법2: array.map() 을 사용하는 방법
            this.$data.todoItems.splice(index, 1);
            // 이벤트 취소를 이용하여 click 버블링 막기
            event.stopPropagation();
            event.preventDefault();
        },
        clearAll() {
            console.log(event.target);
            // 전체 삭제
            // this.$data.todoItems = [];
            this.$set(this.$data, "todoItems", []);
        }
    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
        "todo-header": TodoHeader,
        "todo-input": TodoInput,
        "todo-list": TodoList,
        "todo-footer": TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
        todoItems(){
          return store.getters.todoItems;
        }
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log(this.$data.todoItems);
    }
};
</script>