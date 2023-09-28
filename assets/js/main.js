/* show menu */
const showMenu = (toggleId, navId) => {
	const toggle = document.getElementById(toggleId),
		nav = document.getElementById(navId);

	if (toggle && nav) {
		toggle.addEventListener('click', () => {
			nav.classList.toggle('show-menu');
		});
	}
};
showMenu('nav-toggle', 'nav-menu');

/* swiper js */
let galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 0,
	slidesPerView: 0,
});

let galleryTop = new Swiper('.gallery-top', {
	effect: 'fade',
	loop: true,

	thumbs: {
		swiper: galleryThumbs,
	},
});

/* gsap animation */
const controlImg = document.querySelectorAll('.controls__img');

function scrollAnimation() {
	gsap.from('.boats__subtitle', { opacity: 0, duration: 0.2, delay: 0.2, y: -20 });
	gsap.from('.boats__title', { opacity: 0, duration: 0.3, delay: 0.3, y: -20 });
	gsap.from('.boats__description', { opacity: 0, duration: 0.4, delay: 0.4, y: -20 });
	gsap.from('.boats__button', { opacity: 0, duration: 0.5, delay: 0.5, y: -20 });
}

controlImg.forEach((c) => c.addEventListener('click', scrollAnimation));

// Function to fetch translations from a JSON file
async function loadTranslations(language) {
	try {
		const response = await fetch(`assets/js/translations/${language}.json`);
		const translations = await response.json();
		return translations;
	} catch (error) {
		console.error('Error loading translations:', error);
	}
}

// Function to update content with translations
async function translateContent(language) {
	const translations = await loadTranslations(language);

	// Update content with translations
	document.querySelectorAll('[data-translate]').forEach((element) => {
		const translationKey = element.getAttribute('data-translate');
		if (translations && translations[translationKey]) {
			element.textContent = translations[translationKey];
		}
	});
}

// Attach event listeners to language switch buttons
document.getElementById('english-btn').addEventListener('click', () => translateContent('en'));
document.getElementById('spanish-btn').addEventListener('click', () => translateContent('es'));

// Show English content by default
translateContent('en');
