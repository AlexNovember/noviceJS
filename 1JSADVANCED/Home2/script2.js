// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы, но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва, кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами. Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];


// загрузка начальных отзывов
const reviewsContainer = document.getElementById('reviews-container');

initialData.forEach(item => {
    item.reviews.forEach(review => {
        const reviewDiv = document.createElement('div');
        reviewDiv.classList.add('rewiew');
        reviewDiv.textContent = review.text;
        reviewsContainer.appendChild(reviewDiv);
    });
});

function addReview() {
    const reviewText = document.getElementById('review-input').value;
    if (reviewText.length < 50 || reviewText.length > 500) {
        throw new Error("Длина отзыва должна быть от 50 до 500 символов");
    }

    const reviewsContainer = document.getElementById('reviews-container');
    const newReview = document.createElement('div');
    newReview.classList.add('rewiew');
    newReview.textContent = reviewText;
    reviewsContainer.appendChild(newReview);
    document.getElementById('review-input').value = '';
}

