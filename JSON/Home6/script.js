'use strict';

const data = JSON.parse(dataProducts);
console.log(data);

const itemElms = document.querySelector('.goods_section-index');
console.log(itemElms);

function creatItem(data) {
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
        <img class="buy" src="icons/Addtocart.png" alt="Add card"
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


const contentEl = document.createElement("div");
contentEl.classList.add("section_bottom");

creatItem(JSON.parse(dataProducts));

itemElms.append(contentEl);
