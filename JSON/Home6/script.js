'use strict';

const data = JSON.parse(dataProducts);

const itemElms = document.querySelector('.goods_section-index');
const regElm = document.querySelector('.why');

const removeEl = document.querySelector('.register');

removeEl.classList.add('hidden');


const cardBox = document.createElement('section');
cardBox.classList.add('card-box');
document.body.insertBefore(cardBox, regElm);

const card = document.querySelector('.card-box');



function createItem(data) {
    data.forEach((item) => {
        contentEl.insertAdjacentHTML('beforeend', getCart(item.img, item.title, item.description, item.price))
    })
}

function getCart(img, title, description, price) {
    return `
    <div class="items_up">
    <a
        class="items_scr"
        href="#"
        style="background-image: url(${img})"
    >
        <img class="buy" src="icons/Addtocart.png" alt="Add card"</
    /></a>
    <div class="items_about">
        <p class="items_name">${title}</p>
        <p class="items_description">
        ${description}
        </p>
        <p class="items_price">${price}</p>
    </div>
</div>
`
}


const shoppingItem = `
        <div class="goods_in_cart-box">
            <div class="goods_in_cart-left-block">
                <div class="goods_in_cart-left-block-items">
                    <img class="goods_in_cart-left-block-img" src="img/bottom3.jpg" alt="man">
                    <div class="goods_in_cart-left-block-item">
                        <h3 class="goods_in_cart-left-block-item-name">MANGO PEOPLE T-SHIRT</h3><br>
                        <p class="goods_in_cart-left-block-item-price">Price: <span>$300</span></p>
                        <p class="goods_in_cart-left-block-item-color">Color: Red</p>
                        <p class="goods_in_cart-left-block-item-color">Size: XL</p>
                        <p class="goods_in_cart-left-block-item-quantity	">Quantity:<input
                                class="goods_in_cart-left-block-item-quantity-input" type="number" step="1"
                                placeholder="1" min="1">
                        </p>
                        <div class="closeModal"></div>
                    </div>
                </div>`









const contentEl = document.createElement("div");
contentEl.classList.add("section_bottom");

createItem(JSON.parse(dataProducts));

itemElms.append(contentEl);


const cardElms = document.querySelectorAll('.items_scr');
// cardElms.forEach(element => {
//     let a = {};
//     console.log(element.tagName);
//     a = JSON.stringify(element);
//     console.log(a);

// });



for (const element of cardElms) {
    element.addEventListener('click', function (e) {
        e.preventDefault();

        // element.classList.add('in-card')
        const addGood = element.parentElement;

        createCartBlock();
    });
};


function createCartBlock() {
    card.insertAdjacentHTML('afterbegin', shoppingItem);
}

