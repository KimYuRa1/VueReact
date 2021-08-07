<style scoped>
ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
}
li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
}
li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
}
.checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
}
.removeBtn {
    margin-left: auto;
    color: #de4343;
}
.list-enter-active,
.list-leave-active {
    transition: all 1s;
}
.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}
</style>

<template>
    <section>
        <transition-group name="list" tag="ul">
            <li
                v-for="(todoItem, index) in todoItems"
                v-bind:key="todoItem.id"
                v-bind:class="checked(todoItem.done)"
                v-on:click="doneToggle(todoItem.id, index)"
            >
                <i class="checkBtn fas fa-check" aria-hidden="true"></i>
                {{ todoItem.todo }}
                <span
                    class="removeBtn"
                    type="button"
                    v-on:click="removeTodo(todoItem.id, index)"
                >
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>

<script>
export default {
    /* pdtmc^2w */
    props: ["todoItems"],
    data: function () {
        /* 컴포넌트 안에서 사용되는 변수 등록. 개별 변수 */
        return {
            //todoItems:null,
        };
    },
    //template: ``,
    methods: {
        /* 이벤트 핸들러 등록 + 일반 함수 */
        checked(done) {
            // "checked(todoItem.done)"  <==> todoItem.done ? 'checked': null
            if (done) {
                return "checked"; // 또는 {checked: true}
            } else {
                return null; // 또는 {checked: false}
            }
        },
        doneToggle(id, index) {
            console.log(event.target);
            // 부모에게 값을 보내기
            // this.$emit("이벤트명", 값)
            this.$emit("done-toggle", id, index);
        },
        removeTodo(id, index) {
            console.log(event.target);
            // 부모에게 값을 보내기
            // this.$emit("이벤트명", 값)
            this.$emit("remove-todo", id, index);
        }
    },
    components: {
        /* 전역 컴포넌트는 등록하지 않는다. */
        /* 지역 컴포넌트나 파일 컴포넌트이면 등록해야 한다 . 예시) "태그명" : 컴포넌트명 */
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티(변수) 모니터링. 메서드로 작성. 매개변수 필수. 외부 api 호출을 위해서 사용  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>
