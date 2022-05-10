'use strict';
const slider = document.querySelector('.hero__slider');
const prof__img = document.querySelector('.hero__profile');
const hero__info = document.querySelector('.hero__info');
let cursor = document.querySelector('.cursor'),
  link = document.querySelectorAll('a'),
  img = document.querySelectorAll('img'),
  mouseX = 0,
  mouseY = 0;

gsap.from('.header', { duration: 2.5, y: '-100%', ease: Power2.easeInOut });

gsap.to(slider, { duration: 1, x: '120%', ease: Power2.easeIn });
gsap.from(hero__info, { duration: 2, x: '-180%', ease: Power2.easeInOut });
gsap.from(prof__img, { duration: 2, x: '180%', ease: Power2.easeInOut });

gsap.to({}, 0.0016, {
  repeat: -1,
  onRepeat: function () {
    gsap.set(cursor, {
      css: {
        left: mouseX,
        top: mouseY,
      },
    });
  },
});

window.addEventListener('mousemove', function (e) {
  (mouseX = e.clientX), (mouseY = e.clientY);
});

link.forEach((lin) => {
  lin.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow');
  });
  lin.addEventListener('mousemove', () => {
    cursor.classList.add('grow');
  });
});

img.forEach((image) => {
  image.addEventListener('mouseleave', () => {
    cursor.classList.remove('grow__img');
  });
  image.addEventListener('mousemove', () => {
    cursor.classList.add('grow__img');
  });
});

//text
