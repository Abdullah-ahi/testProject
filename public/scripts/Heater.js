Vue.component('heater', {
    data(){
        return{
            heater: {
                heaterType: '',
            }
        }
    },

    methods: {
        getHeaterType(){
            setTimeout(()=> {
                console.log(this.heater);
            }, 5000)
        }
    },

    mounted(){
        this.$root.projectData.push({id: 333, component: this.heater});
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.heater)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 333, component: this.heater})
    },



    template:  `
        <fieldset class="object-block">
            <legend>Нагреватель</legend>
            <div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Тип</label>
                    <div class="controlling heater-controlling">
                        <span><input type="radio" name="heater-type" value="Водяной" v-model="heater.heaterType"/>Водяной</span>
                        <span><input type="radio" name="heater-type" value="Электрический" v-model="heater.heaterType"/>Электрический</span>
                    </div>
                </div>
            </div>
        </fieldset>
    `
});