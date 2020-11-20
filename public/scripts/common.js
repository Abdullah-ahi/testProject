Vue.component('common', {
    data(){
        return {
            common: {
                corpusType: '',
                addOptions: [],
            }
        }
    },
    methods:{

    },

    mounted(){
        this.$root.projectData.push({id: 666, component: this.common});
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.common)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 666, component: this.common})
    },

    template: `
        <fieldset class="object-block">
            <legend>Общие</legend>
            <div>
                <div class="controlling-block">
                    <label class="controling-lbl" for="">Корпус</label>
                    <div class="controlling common-controling">
                        <span><input type="radio" name="corpus-type" value="Пластик" v-model="common.corpusType"/>Пластик</span>
                        <span><input type="radio" name="corpus-type" value="Металл" v-model="common.corpusType"/>Металл</span>
                    </div>
                </div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Доп. опции</label>
                    <div class="controlling common-open-controling">
                        <span><input type="checkbox" value="Сигнал Пожар" v-model="common.addOptions"/>Сигнал Пожар</span>
                        <span><input type="checkbox" value="LED-индикция" v-model="common.addOptions"/>LED-индикция</span>
                        <span><input type="checkbox" value="Диспетчеризация" v-model="common.addOptions"/>Диспетчеризация</span>
                    </div>
                </div>
            </div>
        </fieldset>
    `
});