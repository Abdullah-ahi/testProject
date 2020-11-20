Vue.component('damper', {
    data(){
        return {
            damper: {
                controlingType: '',
                openControlingType: '',
            }
        }
    },

    methods: {
        getControlingType(){
            setTimeout(()=> {
                console.log(this.damper);
            }, 3000)
        }
    },

    mounted(){
        this.$root.projectData.push({id: 111, component: this.damper});
        console.log(this.$root.projectData);
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.damper)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 111, component: this.damper})
    },

    template: `
        <fieldset class="object-block">
            <legend>Заслонка</legend>
            <div>
                <div class="controlling-block">
                    <label class="controling-lbl" for="">Управление</label>
                    <div class="controlling damper-controling">
                        <span ><input type="radio" name="controling-type" value="Дискретное" v-model="damper.controlingType"/>Дискретное</span>
                        <span ><input type="radio" name="controling-type" value="Аналоговое" v-model="damper.controlingType"/>Аналоговое</span>
                    </div>
                </div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Контроль <br>открытия</label>
                    <div class="controlling damper-open-controling">
                        <span><input type="radio" name="open-controling-type" value="Нет" v-model="damper.openControlingType" />Нет</span>
                        <span><input type="radio" name="open-controling-type" value="Есть" v-model="damper.openControlingType"/>Есть</span>
                    </div>
                </div>
            </div>
        </fieldset>
    `
});