const product = {
    name: 'Стол',
    price: 200
}

const productNew = {
    productImg: 'photo.jpg',
    productText: 'Great table'
}

console.log(product);

productNew.productLink = 'html'
console.log(productNew);

productNew.productLink = 'aabbbb'
console.log(productNew);

let text = productNew.productLink;
console.log(text);

delete productNew.productLink;
console.log(productNew);


