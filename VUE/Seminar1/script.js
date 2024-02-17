// 1. Создать параграф, внутри которого будет отображаться текст “Товаров в корзине 0” 
// 2. Создать кнопку “Купить”, при клике на которую, значение внутри параграфа будет увеличиваться на 1, при повторном нажатии на эту кнопку, счетчик не становится больше, добавить 4 таких кнопки 
// 3. При нажатии на кнопку купить, необходимо чтобы текст внутри кнопки поменялся на “Товар в Корзине”



new Vue({
    el: '#app',
    data: {
        counter: 0,
        buttons: [
            { id: 1, text: 'Купить', inCart: false },
            { id: 2, text: 'Купить', inCart: false },
            { id: 3, text: 'Купить', inCart: false },
            { id: 4, text: 'Купить', inCart: false }
        ],
    },
    methods: {
        buyItem(button) {
            if (!button.inCart) {
                this.counter += 1;
                button.inCart = true;
                button.text = "В корзине"
            }
        }
    }




    // el: '#app',
    // data: {
    //     productAddInCart: true,
    //     message: 'Hello Vue',
    //     counter: 0,
    //     x: 0,
    //     y: 0,
    //     bigText: '<span>New Text info<a href="#">Info</a></span>'
    // },
    // methods: {
    //     sayHello() {
    //         this.message = 'New Message';
    //         // return this.message;
    //     }
    // },
    // methods: {
    //     mouseMove(e) {
    //         this.x = e.clientX;
    //         this.y = e.clientY;
    //     },
    //     changeText() {
    //         this.message = 'Do It';
    //     },
    //     increase(step, event) {
    //         this.counter += step;
    //         console.log(event.target);
    //     }

    // },
})

// var app2 = new Vue({
//     el: '#app-2',
//     data: {
//         message: 'Вы загрузили эту страницу: ' + new Date().toLocaleString()
//     }
// })
new Vue({
    el: '#demo',
    data: {
        show: true
    }
});


new Vue({
    el: '#app2',
    data: {
        canOrder: false
    },
    methods: {
        allowOrder() {
            this.canOrder = true;
            this.status = 'Можете заказать товар';
        },
        disallowOrder() {
            this.canOrder = false;
            this.status = 'Доступ закрыт';
        }
    }
});

new Vue({
    el: '#random',
    data: {
        number: 10
    },
    methods: {
        random() {
            this.number = Math.floor(Math.random() * 10) + 1;
        }
    }
});
/* <button data-mode="pass" v-on:click="checkAge">Мне исполнилось 14 лет!</button>
        <button data-mode="nopass" @click="checkAge">А мне пока не исполнилось</button>

 checkAge({target}) {
                    target.dataset.mode === "pass" ? this.checktext = "Можно заказать товар" : this.checktext = "Доступ закрыт"
                }, */