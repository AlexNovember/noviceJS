const accessKey = 'jzUQUwZ44Jz_eYRGXW7cMpUGEA1SIV2bWSTq7twczFU';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;
let viewingHistory = [];
viewingHistory = JSON.parse(localStorage.getItem('viewingHistory'));


async function getRandomImage() {
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const imageElement = document.getElementById('unsplash-image');
        imageElement.src = data.urls.regular;
        const photographerName = document.getElementById('photographer-name');
        photographerName.textContent = `Photographer: ${data.user.name}`;

        const likeButton = document.getElementById('like-button');
        const likeCount = document.getElementById('like-count');
        likeCount.textContent = localStorage.getItem(data.id) || 0;
        likeButton.addEventListener('click', () => {
            let likes = parseInt(likeCount.textContent);
            if (!localStorage.getItem(data.id)) {
                likes++;
                localStorage.setItem(data.id, 'liked');
                likeCount.textContent = likes;
                likeButton.classList.add('liked');
            } else {
                likes--;
                localStorage.removeItem(data.id);
                likeCount.textContent = likes;
                likeButton.classList.remove('liked');
            }
        });

        viewingHistory.push(data.urls.regular);
        localStorage.setItem('viewingHistory', JSON.stringify(viewingHistory));


    } catch (error) {
        console.log(error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    getRandomImage();

    const prevButton = document.getElementById('prev-button');
    prevButton.addEventListener('click', () => {
        if (viewingHistory.length > 3) {
            viewingHistory.pop();
            const prevImage = viewingHistory.pop();
            if (prevImage) {
                const imageElement = document.getElementById('unsplash-image');
                imageElement.src = prevImage;
            }
            localStorage.setItem('viewingHistory', JSON.stringify(viewingHistory));
        }
    });
});

// localStorage.clear();
