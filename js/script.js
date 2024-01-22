const {createApp} = Vue

const app = createApp({
    data:() =>({
        destinations,
        currentActiveIndex: 0,
        autoPlay: null
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
        },

        startAutoplay(){
            this.autoPlay = setInterval(() => {
                this.goNext();
            },3000)
        },

        stopAutoplay(){
            clearTimeout(this.autoPlay)
        }
    },

    mounted(){
        this.startAutoplay();
    }
});

app.mount('#root');