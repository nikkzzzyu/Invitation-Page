document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const welcomeText = document.getElementById('welcome');
    const glowingDiamond = document.querySelector('.glowing-diamond');

    // Fade in animation for "Welcome to"
    welcomeText.classList.add('fadeIn');

    // Typewriter effect for the title after a delay
    setTimeout(function () {
        typeWriterEffect("Lantern Rite!", title, 200);
    }, 3000); // 3 seconds delay before starting the typewriting effect

    // Click event listener for glowing diamond
    document.addEventListener('click', function () {
        glowingDiamond.classList.add('clicked');
    });

    function typeWriterEffect(text, element, speed) {
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
});

document.addEventListener('DOMContentLoaded', function () {
    const glowingDiamond = document.querySelector('.glowing-diamond');

    document.addEventListener('click', function () {
        glowingDiamond.classList.add('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const glowingDiamond = document.querySelector('.glowing-diamond');

    document.addEventListener('click', function () {
        glowingDiamond.classList.add('clicked');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const glowingDiamond = document.querySelector('.glowing-diamond');

    document.addEventListener('click', function () {
        glowingDiamond.classList.add('clicked');
    });
});
