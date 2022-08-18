<<template>
    <div>
        str {{str}}
        count 的值为 {{ count }}
        <button @click="add">+1</button>
    </div>
</template>

<script>
import bus from '@/components/eventBus.js'
import { on } from 'events';
export default {
    name: 'Day03Son2',

    data() {
        return {
            count: 0,
            str: ''
        };
    },

    created() {
        bus.$on('share',(val)=>{
            this.str = val
        })
    },

    methods: {
        add(){
            this.$emit('getCount', this.count +=1 )
        }
    },
};
</script>

<style lang="scss" scoped>

</style>