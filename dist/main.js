/*********** SELECTORS & VARIABLES ****************/
const topBar = document.getElementById('top-bar')
const exteriorColorSelection = document.querySelector('#exterior-buttons')
const interiorColorSelection = document.querySelector('#interior-buttons')
const exteriorImage = document.querySelector('#exterior-image')
const interiorImage = document.querySelector('#interior-image')
const wheelButtonsSection = document.querySelector('#wheel-buttons')

/*************** FUNCTIONS ***********************/

// Handle Top Bar on Scroll
const handleScroll = () => {
    const atTop = window.scrollY === 0;
    topBar.classList.toggle('visible-bar', atTop);
    topBar.classList.toggle('hidden-bar', !atTop);
}

// Image Mapping
const exteriorImages = {
    'Stealth Grey': './images/model-y-stealth-grey.jpg',
    'Pearl White': './images/model-y-pearl-white.jpg',
    'Deep Blue': './images/model-y-deep-blue-metallic.jpg',
    'Solid Black': './images/model-y-solid-black.jpg',
    'Ultra Red': './images/model-y-ultra-red-performance.jpg',
    'Quicksilver': './images/model-y-quicksilver.jpg',
}

const interiorImages = {
    'Dark': './images/model-y-interior-dark.jpg',
    'Light': './images/model-y-interior-light.jpg'
}

// Handle Color Selection
const handleColorButtonClick = (event) => {
    let button;

    if (event.target.tagName === 'IMG') {
        button = event.target.closest('button');
    } else if (event.target.tagName === 'BUTTON') {
        button = event.target;
    }
    
    if (button) {
        const buttons = event.currentTarget.querySelectorAll('button');
        buttons.forEach((btn) => btn.classList.remove('btn-selected'));
        button.classList.add('btn-selected');

        // Change Exterior Image
        if (event.currentTarget === exteriorColorSelection) {
            const color = button.querySelector('img').alt;
            exteriorImage.src = exteriorImages[color];
        }

        // Change Interior Image
        if (event.currentTarget === interiorColorSelection) {
            const color = button.querySelector('img').alt;
            interiorImage.src = interiorImages[color];
        }
    }
}

// Wheel Selection





/************ EVENT LISTENERS *******************/
window.addEventListener('scroll', () => requestAnimationFrame(handleScroll))
exteriorColorSelection.addEventListener('click', handleColorButtonClick);
interiorColorSelection.addEventListener('click', handleColorButtonClick);