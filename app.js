let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let thmbnails = document.querySelectorAll('.thumbnail .item');

//confit progrm 
let countItem = items.length;
let itemActive = 0;
//event next click
next.onclick = function () {
    itemActive = itemActive + 1;
    if (itemActive >= countItem) {
        itemActive = 0;
    }
    showSlider();

}

//event prev click
prev.onclick = function () {
    itemActive = itemActive - 1;
    if (itemActive < 0) {
        itemActive = countItem - 1;

    }
    showSlider();

}

//auto run slider
let refreshInterval = setInterval(() => {
    next.chick();

}, 5000)

function showSlider() {
    //remove itme active old
    let itemActiveOld = document.querySelector('.slider .list .item .active');
    let thumbnailActiveOld = document.querySelector('.thumbnail .item .active ');
    itemActiveOld.classList.remove('active');
    thumbnailActiveOld.classList.remove('active');

    //active new item 
    items[itemActive].classList.add('active');
    thumbnails[itemActive].classList.add('active');
    setpositionThumbnail();

    // clear auto time ru slider 
    clearInterval(refreshInterval);
    refreshInterval = setInterval(() => {
        next.click();
    }, 5000)
}

function setpositionThumbnail() {
    let thumbnailActive = document.querySelector('.thumbnail .item .active ');
    let rect = thumbnailActive.getBoundingClientRect();
    if (rect.left < 0 || rect.right > window.innerWidth) {
        thumbnailActive.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
    }
}

//chick thunbnail
thumbnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        itemActive = index;
        showSlider();

    })
})



