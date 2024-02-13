new Vue({
    el: '#app',
    data: {
        productAddInCart: true,
        message: 'Hello Vue',
        counter: 0,
        x: 0,
        y: 0,
        bigText: '<span>New Text info<a href="#">Info</a></span>'
    },
    // methods: {
    //     sayHello() {
    //         this.message = 'New Message';
    //         // return this.message;
    //     }
    // },
    methods: {
        mouseMove(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        },
        changeText() {
            this.message = 'Do It';
        },
        increase(step, event) {
            this.counter += step;
            console.log(event.target);
        }

    },
})

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//     }
// })