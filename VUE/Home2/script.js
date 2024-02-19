new Vue({
    el: '#app',
    data: {
        products: [
            { id: 1, name: 'Продукт 1', price: 50 },
            { id: 2, name: 'Продукт 2', price: 30 },
            { id: 3, name: 'Продукт 3', price: 80 }
        ],
        sortOrder: '',
    },
    computed: {
        sortedProducts() {
            if (this.sortOrder === 'asc') {
                return this.products.slice().sort((a, b) => a.price - b.price);
            } else if (this.sortOrder === 'desc') {
                return this.products.slice().sort((a, b) => b.price - a.price);
            } else {
                return this.products;
            }
        }
    },
    methods: {
        sortByPrice(order) {
            this.sortOrder = order;
        }
    }
});
