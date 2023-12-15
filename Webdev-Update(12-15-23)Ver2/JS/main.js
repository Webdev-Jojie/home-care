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

