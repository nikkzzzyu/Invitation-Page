document.addEventListener('DOMContentLoaded', function () {
    const title = document.getElementById('title');
    const welcomeText = document.getElementById('welcome');
    const enterButton = document.querySelector('.enter-button');
    const additionalText = document.querySelector('#additional-text');
    
    // Fade in animation for "Welcome to"
    welcomeText.classList.add('fadeIn');
    
    // Typewriter effect for the title after a delay
    setTimeout(function () {
        typeWriterEffect("Lantern Rite!", title, 200);
    }, 3000); // 3 seconds delay before starting the typewriting effect
    
    // Show the enter button after the typewriter effect is complete
    setTimeout(function () {
        enterButton.style.opacity = '1'; // Set opacity to 1 to trigger the CSS transition
        additionalText.style.opacity = '1'; // Set opacity to 1 for fade-in effect
    }, 3000 + ("Lantern Rite!".length * 200)); // Adjust the delay based on the typewriter speed
    
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

    function enterEvent() {
        window.location.href = 'about.html';
    }

    // Attach click event listener to the Enter button
    enterButton.addEventListener('click', enterEvent);
    
});