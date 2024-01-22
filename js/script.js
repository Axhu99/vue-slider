const {createApp} = Vue

const app = createApp({
    data:() =>({
        destinations,
        currentActiveIndex: 0
    }),
    methods:{
        goBack(){
            if(this.currentActiveIndex === 0){
                this.currentActiveIndex = this.destinations.length - 1
            }else{
                this.currentActiveIndex--;
            }
        },

        goNext(){
            if(this.currentActiveIndex === this.destinations.length - 1){
                this.currentActiveIndex = 0
            }else{
                this.currentActiveIndex++;
            }
        }
    }
});

app.mount('#root');