document.addEventListener("DOMContentLoaded", function() {
    const lottiePlayer = document.createElement('lottie-player');

    lottiePlayer.setAttribute('src', 'assets/lotties/airplane.json', 'background', 'transparent', 'speed', '1');
    lottiePlayer.setAttribute('style', 'width: 25%; height: 25%;');
    lottiePlayer.setAttribute('loop', '');
    lottiePlayer.setAttribute('autoplay', '');

    const titleContainer = document.querySelector('.plane');

    titleContainer.appendChild(lottiePlayer);
});

// animatsioon - https://lottiefiles.com

// tavaliselt kirjutatakse html failis.
// kood - https://www.npmjs.com/package/@lottielab/lottie-player  (USAGE)
// https://lottiefiles.github.io/lottie-player/properties.html (attributes)
