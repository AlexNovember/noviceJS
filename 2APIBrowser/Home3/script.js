const accessKey = 'jzUQUwZ44Jz_eYRGXW7cMpUGEA1SIV2bWSTq7twczFU';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${accessKey}`;

const photo = document.getElementById('photo');
const photographerName = document.getElementById('photographerName');
const likeButton = document.getElementById('likeButton');
const likeCount = document.getElementById('likeCount');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let likes = 0;
let liked = false;
let history = [];
let currentIndex = -1;

async function getRandomPhoto() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    photo.src = data.urls.regular;
    photographerName.textContent = `Photographer: ${data.user.name}`;
    currentIndex++;
    history[currentIndex] = data;
    likes = 0;
    liked = false;
    updateLikes();
    saveLikesToLocalStorage();
  } catch (error) {
    console.log('Error fetching data:', error);
  }
}

function updateLikes() {
  likeCount.textContent = likes;
}

likeButton.addEventListener('click', () => {
  if (!liked) {
    likes += 1;
    liked = true;
    saveLikesToLocalStorage();
  } else {
    likes -= 1;
    liked = false;
    saveLikesToLocalStorage();
  }
  updateLikes();
});

prevButton.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    const data = history[currentIndex];
    photo.src = data.urls.regular;
    photographerName.textContent = `Photographer: ${data.user.name}`;
    likes = localStorage.getItem(`likes-${currentIndex}`) || 0;
    liked = (localStorage.getItem(`liked-${currentIndex}`) === 'true');
    updateLikes();
  }
});

nextButton.addEventListener('click', () => {
  getRandomPhoto();
});

function saveLikesToLocalStorage() {
  localStorage.setItem(`likes-${currentIndex}`, likes);
  localStorage.setItem(`liked-${currentIndex}`, liked);
}

getRandomPhoto();