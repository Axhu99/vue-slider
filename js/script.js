const {createApp} = Vue

const app = createApp({
    data:() =>({
        destinations,
        currentActiveIndex: 0
    })
});

app.mount('#root');