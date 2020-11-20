Vue.component('fan', {
    data(){
        return{
            fan: {
                fanPower: 0,
                fanControlingType: '',
            }
        }
    },

    methods: {

    },
    mounted(){
        this.$root.projectData.push({id: 555, component: this.fan});
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.fan)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 555, component: this.fan})
    },

    template: `
        <fieldset class="object-block">
            <legend>Вентилятор</legend>
            <div>
                <div class="controlling-block">
                    <label for="">Мощность</label>
                    <input class="fan-power" type="number" v-model="fan.fanPower"> кВт
                </div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Управление</label>
                    <div class="controlling fan-controling">
                        <span><input type="radio" name="fan-controling-type" value="Прямой пуск" v-model="fan.fanControlingType"/>Прямой пуск</span>
                        <span><input type="radio" name="fan-controling-type" value="Преобразователь частоты" v-model="fan.fanControlingType"/>Преобразователь <span class="fan-margin" >частоты</span></span>
                    </div>
                </div>
            </div>
        </fieldset> 
    `
});