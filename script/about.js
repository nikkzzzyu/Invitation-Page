document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');
    const bullets = document.querySelectorAll('.bullet');
    const naviBullets = document.querySelectorAll('.navi_bullet');

    let mark = 0;
    const images = [
        "img/pictures/pic_one.png",
        "img/pictures/pic_two.png",
        "img/pictures/pic_three.png",
        "img/pictures/pic_four.png",
        "img/pictures/pic_five.png",
        "img/pictures/pic_six.png",
        "img/pictures/pic_seven.png",
        "img/pictures/pic_eight.png"
    ];

    function setStatus(index) {
        return {
            'active': mark === index,
            'next-1': (mark + 1) % images.length === index,
            'next-2': (mark + 2) % images.length === index,
            'pre-1': (mark + images.length - 1) % images.length === index,
            'pre-2': (mark + images.length - 2) % images.length === index,
            'pre-3': (mark + images.length - 3) % images.length === index
        };
    }

    function pre() {
        mark = (mark + images.length - 1) % images.length;
        updateView();
        updateBulletView();
    }

    function next() {
        mark = (mark + 1) % images.length;
        updateView();
        updateBulletView();
    }

    function setCount(index) {
        mark = index;
        updateView();
        updateBulletView();
    }

    function updateView() {
        container.innerHTML = images.map((image, index) => {
            return `<div class="slide ${Object.keys(setStatus(index)).filter(key => setStatus(index)[key]).join(' ')}"><img class="img" src="${image}" alt=""></div>`;
        }).join('');
    }

    function updateBulletView() {
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('pagination-bullet--active', mark === index);
        });

        naviBullets.forEach((naviBullet, index) => {
            const status = setStatus(index);
            naviBullet.classList.toggle('pagination-bullet--active', mark === index);

            if (status['next-1'] || status['next-2']) {
                naviBullet.style.transform = `translateX(${(mark - index) * 20}px)`;
            } else if (status['pre-1'] || status['pre-2'] || status['pre-3']) {
                naviBullet.style.transform = `translateX(${(mark - index) * 20}px)`;
            } else {
                naviBullet.style.transform = '';
            }
        });
    }

    const preButton = document.querySelector('.pre');
    const nextButton = document.querySelector('.next');

    preButton.addEventListener('click', pre);
    nextButton.addEventListener('click', next);

    bullets.forEach((bullet, index) => {
        bullet.addEventListener('click', () => {
            setCount(index);
        });
    });

    // Initial view setup
    updateView();
    updateBulletView();
});
