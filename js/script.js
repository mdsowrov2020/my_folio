'use strict';
const slider = document.querySelector('.hero__slider');
const prof__img = document.querySelector('.hero__profile');
const hero__info = document.querySelector('.hero__info');

gsap.from('.header', { duration: 1, y: '100%', ease: Power2.easeInOut });

gsap.to(slider, { duration: 1, x: '100%', ease: Power2.easeIn });
gsap.from(hero__info, { duration: 2, x: '-180%', ease: Power2.easeInOut });
gsap.from(prof__img, { duration: 2, x: '180%', ease: Power2.easeInOut });

//text
