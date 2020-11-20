Vue.component('cooler', {
    data(){
        return{
            cooler: {
                coolerType: ''
            }
        }
    },

    methods: {

    },

    mounted(){
        this.$root.projectData.push({id: 444, component: this.cooler});
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.cooler)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 444, component: this.cooler})
    },

    template: `
        <fieldset class="object-block">
            <legend>Охладитель</legend>
            <div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Тип</label>
                    <div class="controlling cooler-controlling">
                        <span><input type="radio" name="cooler-type" value="Нет" v-model="cooler.coolerType" />Нет</span>
                        <span><input type="radio" name="cooler-type" value="Водяной" v-model="cooler.coolerType"/>Водяной</span>
                        <span><input type="radio" name="cooler-type" value="Фреоновый" v-model="cooler.coolerType"/>Фреоновый</span>
                    </div>
                </div>
            </div>
        </fieldset>
    `
});