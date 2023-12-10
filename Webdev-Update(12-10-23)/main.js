function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
  }

function openNav() {
    const overlay = document.querySelector('.overlay');
    const navContainer = document.querySelector('.nav-container');
    
    overlay.style.display = 'block';
    navContainer.style.display = 'block';
    setTimeout(() => {
        navContainer.classList.add('active');
    }, 10);
}

function closeNav() {
    const overlay = document.querySelector('.overlay');
    const navContainer = document.querySelector('.nav-container');

    navContainer.classList.remove('active');
    setTimeout(() => {
        overlay.style.display = 'none';
        navContainer.style.display = 'none';
    }, 300);
}

const backgroundImages = [
    'assets/primary-provider-bg-copy(2).jpg',
    'assets/bg2.jpg'
];

let currentBackgroundIndex = 0;

function changeBackground(direction) {
    const mainBgImg = document.querySelector('.main-bgIMG');

    // Set opacity to 0 before changing the background
    mainBgImg.style.transition = 'opacity 0.3s ease-in-out';
    mainBgImg.style.opacity = 0;

    setTimeout(() => {
        if (direction === 'next') {
            currentBackgroundIndex = (currentBackgroundIndex + 1) % backgroundImages.length;
        } else if (direction === 'prev') {
            if (currentBackgroundIndex === 0) {
                currentBackgroundIndex = backgroundImages.length - 1;
            } else {
                currentBackgroundIndex = (currentBackgroundIndex - 1 + backgroundImages.length) % backgroundImages.length;
            }
        }

        // Change the background image and set opacity back to 1
        mainBgImg.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
        mainBgImg.style.opacity = 1;
    }, 300); // Adjust the duration to match your desired transition time
}

function resetBackground() {
    currentBackgroundIndex = 0;
    const mainBgImg = document.querySelector('.main-bgIMG');

    // Set opacity to 0 before changing the background
    mainBgImg.style.transition = 'opacity 0.3s ease-in-out';
    mainBgImg.style.opacity = 0;

    setTimeout(() => {
        // Change the background image and set opacity back to 1
        mainBgImg.style.backgroundImage = `url('${backgroundImages[currentBackgroundIndex]}')`;
        mainBgImg.style.opacity = 1;
    }, 300); // Adjust the duration to match your desired transition time
}

