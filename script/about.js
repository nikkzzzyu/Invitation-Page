document.addEventListener("DOMContentLoaded", function () {
    const title = document.querySelector('h1');
    const container = document.querySelector('.container');
    const overlay = document.querySelector('.overlay');
    const textContainer = document.querySelector('.text-container');
    const bullets = document.querySelectorAll('.bullet');
    const naviBullets = document.querySelectorAll('.navi_bullet');
    
    title.style.opacity = '0';

    setTimeout(function () {
        title.style.opacity = '1';
    }, 300);

    // Typewriter effect after the fade-in
    setTimeout(function () {
        typewriterEffect("Event:", title, 500);
    }, 1000);

    function typewriterEffect(text, element, speed) {
        let i = 0;

        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }

        type();
    }

    let mark = 0;
    const images = [
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_one.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_two.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_three.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_four.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_five.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_six.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_seven.png?raw=true",
        "https://github.com/nikkzzzyu/Invitation-Page/blob/main/img/pictures/pic_eight.png?raw=true"
    ];

    const textContent = [
        "Text for Image 1",
        "Text for Image 2",
        "Text for Image 3",
        "Text for Image 4",
        "Text for Image 5",
        "Text for Image 6",
        "Text for Image 7",
        "Text for Image 8"
    ];

    Promise.all([
        Promise.all(images.map(image => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = resolve;
                img.onerror = reject;
                img.src = image;
            });
        })),
        // Load text content
        new Promise((resolve) => {
            resolve(textContent);
        })
    ]).then(([imageLoadResult, textContentResult]) => {
        container.classList.add('images-loaded');
        overlay.classList.add('overlay-fade-in');

        // Update text content
        textContainer.innerHTML = textContentResult[mark];
    }).catch((error) => {
        console.error('Error loading images or text content:', error);
    });

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
        updateTextContent();
    }

    function next() {
        mark = (mark + 1) % images.length;
        updateView();
        updateBulletView();
        updateTextContent();
    }

    function setCount(index) {
        mark = index;
        updateView();
        updateBulletView();
        updateTextContent();
    }

    function updateView() {
        container.innerHTML = images.map((image, index) => {
            const status = setStatus(index);
            return `<div class="slide ${Object.keys(status).filter(key => status[key]).join(' ')}"><img class="img" src="${image}" alt=""></div>`;
        }).join('');
    }

    function updateBulletView() {
        bullets.forEach((bullet, index) => {
            bullet.classList.toggle('pagination-bullet--active', mark === index);
        });

        naviBullets.forEach((naviBullet, index) => {
            const status = setStatus(index);
            naviBullet.classList.toggle('pagination-bullet--active', mark === index);

            if (status['next-1'] || status['next-2'] || status['pre-1'] || status['pre-2'] || status['pre-3']) {
                const transformValue = (mark - index) * 20; // Adjust the multiplier for smoother movement
                naviBullet.style.transform = `translateX(${transformValue}px)`;
            } else {
                naviBullet.style.transform = '';
            }
        });
    }

    function updateTextContent() {
        // Add fade-out class to start fade-out animation
        textContainer.classList.add('fade-out');

        // Listen for the end of the fade-out animation
        textContainer.addEventListener('transitionend', function () {
            // Update text content
            textContainer.innerHTML = textContent[mark];

            // Remove fade-out class to start fade-in animation
            textContainer.classList.remove('fade-out');

            // Add fade-in class to start fade-in animation
            textContainer.classList.add('fade-in');
        }, { once: true }); // { once: true } ensures the event listener is triggered only once

        // Wait for the fade-in animation to complete and remove the class
        textContainer.addEventListener('transitionend', function () {
            textContainer.classList.remove('fade-in');
        }, { once: true }); // { once: true } ensures the event listener is triggered only once
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
