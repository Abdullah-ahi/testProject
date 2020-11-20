const app = new Vue({
    el: '.container',
    data: {
        projectData: [],
    },

    methods:{

        postOrders(url, data){
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(response => response.json())
            .catch(error => {
                console.log(error);
            })
        },
        
        buttonClickHandler(){
            document.querySelector('.send-button').addEventListener('click', () => this.addOrder())
        },

        addOrder(){
            this.postOrders(`/api/order/`, {
                "Управление": this.projectData.find(el => el.id === 111).component.controlingType,
                "Контроль открытия": this.projectData.find(el => el.id === 111).component.openControlingType,
                "Количество фильтров": `${this.projectData.find(el => el.id === 222).component.filterCount} шт.`,
                "Сигналы": this.projectData.find(el => el.id === 222).component.signals,
                "Тип нагревателя": this.projectData.find(el => el.id === 333).component.heaterType,
                "Тип охладителя": this.projectData.find(el => el.id === 444).component.coolerType,
                "Мощность вентилятора" : `${this.projectData.find(el => el.id === 555).component.fanPower} кВт`,
                "Тип управления вентилятором": this.projectData.find(el => el.id === 555).component.fanControlingType,
                "Корпус": this.projectData.find(el => el.id === 666).component.corpusType,
                "Доп. опции": this.projectData.find(el => el.id === 666).component.addOptions,

            })
        }
    },

    mounted(){
        console.log(this.$root.$refs);
        this.buttonClickHandler()
    }
})