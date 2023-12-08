'use strict';

document.addEventListener("DOMContentLoaded", function () {

    const data = JSON.parse(dataProducts);

    const itemElms = document.querySelector('.goods_section-index');
    const regElm = document.querySelector('.register');

    const cardBox = document.createElement('section');
    cardBox.classList.add('card-box');
    cardBox.classList.add('center');
    document.body.insertBefore(cardBox, regElm);
    const cardBoxTitle = document.createElement('h2');
    cardBoxTitle.classList.add('card-title');
    cardBoxTitle.textContent = 'Cart Items';
    cardBox.append(cardBoxTitle);
    cardBox.classList.add('hidden');

    const card = document.querySelector('.card-box');


    function createItem(data) {
        data.forEach((item) => {
            contentEl.insertAdjacentHTML('beforeend', getCart(item.id, item.img, item.title, item.description, item.price));
        })
    }

    function getCart(id, img, title, description, price) {
        return `
    <div class="items_up" data-id="${id}">
    <a
        class="items_scr" "
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


    function getShopingItem(img, title, price, color, size) {
        return `
        <div class="goods_in_cart-box">
            <div class="goods_in_cart-left-block">
                <div class="goods_in_cart-left-block-items">
                    <img class="goods_in_cart-left-block-img" src="${img}" alt="man">
                    <div class="goods_in_cart-left-block-item">
                        <h3 class="goods_in_cart-left-block-item-name">${title}</h3><br>
                        <p class="goods_in_cart-left-block-item-price">Price: <span>${price}</span></p>
                        <p class="goods_in_cart-left-block-item-color">Color: ${color}</p>
                        <p class="goods_in_cart-left-block-item-color">Size: ${size}</p>
                        <p class="goods_in_cart-left-block-item-quantity	">Quantity:<input
                                class="goods_in_cart-left-block-item-quantity-input" type="number" step="1"
                                placeholder="1" min="1">
                        </p>
                        <div class="closeModal"></div>
                    </div>
                </div>`
    }

    function createCart(item) {
        cardBox.classList.remove('hidden');
        const shoppingItem = getShopingItem(item.img, item.title, item.price, item.color, item.size);
        card.insertAdjacentHTML('beforeend', shoppingItem);
    }

    const contentEl = document.createElement("div");
    contentEl.classList.add("section_bottom");
    createItem(JSON.parse(dataProducts));
    itemElms.append(contentEl);

    const cardElms = document.querySelectorAll('.items_up');

    card.addEventListener('click', function (e) {
        if (e.target.classList.value === 'closeModal') {
            const deleteItem = e.target.closest('.goods_in_cart-box');
            deleteItem.remove();
            if (document.querySelectorAll(".goods_in_cart-box").length === 0) {
                cardBox.classList.add('hidden');
            }
        }
    });

    cardElms.forEach((item) => {
        item.addEventListener("click", (event) => {
            event.preventDefault();
            const id = event.currentTarget.dataset["id"];
            const item = data.filter((item) => item["id"] === id)[0];
            createCart(item);
        })
    })
})

