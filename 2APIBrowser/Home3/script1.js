const client_id = `uSZlfs71Nt9pUxPdUy-ek7xdc7Ban1lGVQs0iw02NTg`;
const access_token = "DdZuaj2MYhziO9LMBlS-aQRjQfxWcnHpM8B39hh3ex0";
const token_type = "Bearer";
let checkedLikes = false;
let historyPhoto = {
    count: 0,
    history: []
};

if (localStorage.getItem("historyPhoto")) {
    historyPhoto.history = JSON.parse(localStorage.getItem("historyPhoto"));
    historyPhoto.count = historyPhoto.history.length - 1;
}

const photoContentEl = document.getElementById("photo-container");
const btnPrevEl = document.getElementById("prev");
const btnNextEl = document.getElementById("next");

generateDataForRender();

btnPrevEl.addEventListener("click", function () {
    if (historyPhoto.count > 0) {
        historyPhoto.count -= 1;
        render(historyPhoto.history[historyPhoto.count]);
    }
});

btnNextEl.addEventListener("click", async function () {
    if (historyPhoto.count < historyPhoto.history.length - 1) {
        historyPhoto.count += 1;
        render(historyPhoto.history[historyPhoto.count]);
    } else {
        generateDataForRender();
    }
});

async function generateDataForRender() {
    try {
        const photoData = await getImagesFetch();
        checkedLikes = photoData.liked_by_user;
        historyPhoto.history.push(photoData);
        historyPhoto.count += 1;
        localStorage.setItem('historyPhoto', JSON.stringify(historyPhoto.history));
        render(photoData);
    } catch (err) {
        alert(err);
    }
}

async function LikesFetch(id, checkedLikes) {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/${id}/like`, {
            method: `${checkedLikes ? "DELETE" : "POST"}`,
            headers: {
                Authorization: `${token_type} ${access_token}`,
            }
        });
        if (!response.ok) {
            throw new Error("Server failed");
        }
        const res = await response.json();
        return res.photo;
    } catch (err) {
        throw err;
    }
}


async function getImagesFetch() {
    try {
        const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${client_id}`, {
            method: 'GET',
            headers: {
                Authorization: `${token_type} ${access_token}`,
            }
        });
        if (!response.ok) {
            throw new Error("Server failed");
        }
        return await response.json();
    } catch (err) {
        throw err;
    }
}

function render(photo) {
    const html = showPicture(photo);
    photoContentEl.innerHTML = html;
    const likeEl = document.querySelector(".like");
    likeEl.addEventListener("click", async ({ target }) => {
        const fatherEl = target.closest(".photo");
        const likesNumEl = fatherEl.querySelector(".like-number");
        const id = fatherEl.dataset.id;
        const svg = fatherEl.querySelector("svg");
        const photo = await LikesFetch(id, checkedLikes);
        checkedLikes = true;
        likesNumEl.innerText = photo.likes;
        svg.style.fill = photo.liked_by_user ? "red" : "#000";
    });
}

function showPicture(photo) {
    return `
                <figure class="photo" data-id="${photo.id}">
                    <img src="${photo.urls.small}" />
                    <figcaption>Photo by ${photo.user.name}</figcaption>
                    <p>
                        <span class="like">
                            <svg fill="${photo.liked_by_user ? 'red' : '#000'}" height="200px" width="200px" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 471.701 471.701" xml:space="preserve">
                                <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1 c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3 l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4 C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3 s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4 c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3 C444.801,187.101,434.001,213.101,414.401,232.701z"></path>
                            </svg>
                        </span>
                        <span class="like-number">${photo.likes}</span>
                    </p>
                </figure>`;


}