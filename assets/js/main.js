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
