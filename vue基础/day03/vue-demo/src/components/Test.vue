<<template>
    <div class="box">
        <h1>这是test组件</h1>
        <div>{{ book.length }} 本图书</div>
        <div>
            <h1 class="msg">{{ message }}</h1>
            <button @click="modify">更改</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Test',
    data() {
        return {
            book: [],
            message: 'vue.js'
        };
    },
    beforeCreate() {
        // 初始化事件和生命周期函数，组件的props,data,methods尚未被创建，都无法使用
        console.log(this.book);
        // this.initBooks()
    },
    created() {
        // 初始化prop,data,methods,组件的props,data,methods可用，但是模板尚未生成
        this.initBooks()
        console.log(this.book)
        // 模板尚未生成，无法操作dom
        // const box = document.querySelector('.box')
        // console.log(box)
    },
    beforeMount() {
        // 将内存中编译好的himl结构渲染在浏览器中，此时浏览器中还没有当前组价的DOM结构
        // const box = document.querySelector('.box')
        // console.log(box)
    },
    mounted() {
        // 把内存的DOM结构渲染到浏览器中，浏览器包含DOM结构
        const box = document.querySelector('.box')
        console.log(box)
    },
    beforeUpdate() {
        // 根据最新的数据重新渲染组件结构，但未渲染成最新的dom结构
        console.log('beforeUpdate')
        console.log(this.message);
        const msg = document.querySelector('.msg')
        console.log(msg.innerText);
    },
    updated() {
        // 根据最新的数据，完成DOM的渲染
        console.log('beforeUpdate')
        console.log(this.message);
        const msg = document.querySelector('.msg')
        console.log(msg.innerText);
    },
    methods: {
        initBooks() {
            const xhr = new XMLHttpRequest()
            xhr.addEventListener('load', () => {
                const result = JSON.parse(xhr.responseText)
                this.book = result.data
            })
            xhr.open('get', 'http://www.liulongbin.top:3006/api/getbooks')
            xhr.send()
        },
        modify() {
            this.message = 'hello'
        }
    },
};
</script>

<style lang="scss" scoped>
</style>