<style>
                #app {
                    font-family: Avenir, Helvetica, Arial, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    -moz-osx-font-smoothing: grayscale;
                    text-align: center;
                    color: #2c3e50;
                }
</style>

            <template>
                <div id="app">
                    <h2>{{msg}}</h2>
                    <child1 />
                    <child2 />
                </div>
            </template>

            <script>
            import Child1 from "./components/Child1.vue";
            import Child2 from "./components/Child2.vue";

            export default {
                props:[],
                data: function(){
                    return {
                        msg: "Welcome to Your Vue.js App",
                    }
                },
                components: {
                    "child1": Child1,
                    "child2": Child2,
                }
            };
            </script>