new Vue({
    el: '#app',
    data: {
        buttonText: 'Перевернуть',
        list: ['Элемент 1', 'Элемент 2', 'Элемент 3']
    },
    methods: {
        reverseText() {
            this.buttonText = this.buttonText.split('').reverse().join('');
        },
        addItem() {
            this.list.push('Новый элемент списка');
        },
        removeItem(index) {
            this.list.splice(index, 1);
        }
    }
});