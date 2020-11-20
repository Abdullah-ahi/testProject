Vue.component('filter-comp', {
    props: ['damper'],
    data(){
        return{
            filter: {
                filterCount: 0,
                signals: '',
            }
        }
    },

    methods: {
        getFiltersCount(){
            setTimeout(()=> {
                console.log(data);
            }, 3000)
        }
    },

    mounted(){
        this.$root.projectData.push({id: 222, component: this.filter});
    },
    updated(){
        let idx = this.$root.projectData.indexOf(this.filter)
        this.$root.projectData.splice(idx, 1)
        this.$root.projectData.push({id: 222, component: this.filter})
    },

    template: `
        <fieldset class="object-block">
            <legend>Фильтра</legend>
            <div>
                <div class="controlling-block">
                    <label for="">Количество</label>
                    <input class="filter-count" type="number" v-model="filter.filterCount"> шт
                </div>
                <div class="controlling-block">
                    <label class="margin-lbl" for="">Сигналы</label>
                    <div class="controlling filter-controling">
                        <span><input type="radio" name="signals-type" value="Соединены" v-model="filter.signals" />Соединены</span>
                        <span><input type="radio" name="signals-type" value="Разъединены" v-model="filter.signals"/>Разъединены</span>
                    </div>
                </div>
            </div>
        </fieldset>
    `
});