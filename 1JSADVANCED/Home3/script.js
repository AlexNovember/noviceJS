// Cоздайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).



function addReview() {
    const productName = document.getElementById('productName').value;
    const review = document.getElementById('review').value;

    // Сохранение отзыва в localStorage
    if (localStorage.getItem(productName) === null) {
        localStorage.setItem(productName, JSON.stringify([review]));
    } else {
        const reviews = JSON.parse(localStorage.getItem(productName));
        reviews.push(review);
        localStorage.setItem(productName, JSON.stringify(reviews));
    }

    updateReviewsList();
}

function updateReviewsList() {
    const productList = document.getElementById('productList');
    productList.innerHTML = '';
    for (let i = 0; i < localStorage.length; i++) {
        const productName = localStorage.key(i);
        const reviews = JSON.parse(localStorage.getItem(productName));
        if (reviews.length > 0) {
            const listItem = document.createElement('li');
            listItem.textContent = productName;
            listItem.onclick = function () {
                showReviews(this.textContent);
            };
            productList.appendChild(listItem);
        }
    }
}

function showReviews(productName) {
    const reviewsDiv = document.getElementById('reviews');
    reviewsDiv.innerHTML = '';
    const reviews = JSON.parse(localStorage.getItem(productName));
    for (let i = 0; i < reviews.length; i++) {
        const reviewItem = document.createElement('p');
        reviewItem.classList.add('review-text')
        reviewItem.textContent = reviews[i];
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Удалить';
        deleteButton.onclick = function () {
            deleteReview(productName, i);
        };
        reviewItem.appendChild(deleteButton);
        reviewsDiv.appendChild(reviewItem);
    }
}

function deleteReview(productName, index) {
    const reviews = JSON.parse(localStorage.getItem(productName));
    reviews.splice(index, 1);
    localStorage.setItem(productName, JSON.stringify(reviews));
    showReviews(productName);
}

// localStorage.clear();
updateReviewsList();
