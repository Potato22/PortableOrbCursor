const orbcursor = document.querySelector('.orbcursor');
let animationId = null;

document.querySelector('html').addEventListener('mousemove', function () {
  orbcursor.classList.remove('animoff');
  orbcursor.classList.add('animactive');
  window.cancelAnimationFrame(animationId);
  animationId = window.requestAnimationFrame(() => {
    orbcursor.style.opacity = '1';
  });
});

document.querySelector('html').addEventListener('mouseover', function () {
  orbcursor.classList.remove('animoff');
  orbcursor.classList.add('animactive');
  window.cancelAnimationFrame(animationId);
  animationId = window.requestAnimationFrame(() => {
    orbcursor.style.opacity = '1';
  });
});

document.querySelector('html').addEventListener('mouseleave', function () {
  orbcursor.classList.remove('hoveringattr');
  orbcursor.classList.remove('idle');
  orbcursor.classList.remove('animactive');
  orbcursor.classList.add('animoff');
  window.cancelAnimationFrame(animationId);
  animationId = window.requestAnimationFrame(() => {
    orbcursor.style.opacity = '0';
  });
});

document.querySelector('a').addEventListener('mouseenter', function () {
  orbcursor.classList.remove('idle');
  orbcursor.classList.remove('animactive');
  orbcursor.classList.add('hoveringattr');
})

document.querySelector('a').addEventListener('mouseleave', function () {
  orbcursor.classList.remove('hoveringattr');
  orbcursor.classList.add('animactive');
  orbcursor.classList.add('idle');
})

document.querySelectorAll('[orbReact = true]').forEach(element => {
  element.addEventListener('mouseenter', () => {
    orbcursor.classList.remove('idle');
    orbcursor.classList.remove('animactive');
    orbcursor.classList.add('hoveringattr');
  });

  element.addEventListener('mouseleave', () => {
    orbcursor.classList.remove('hoveringattr');
    orbcursor.classList.add('animactive');
    orbcursor.classList.add('idle');
  });
});

const cursor = document.querySelector('.orbcursor');

let mouseX = 0;
let mouseY = 0;

let cursorX = 0;
let cursorY = 0;

let speed = 1; // change to increase the ease

function animate() {
  let distX = mouseX - cursorX;
  let distY = mouseY - cursorY;

  cursorX = cursorX + (distX * speed);
  cursorY = cursorY + (distY * speed);

  cursor.style.left = cursorX + 'px';
  cursor.style.top = cursorY + 'px';

  requestAnimationFrame(animate);
}


animate();
document.addEventListener('mousemove', (event) => {
  window.cancelAnimationFrame(animationId);
  mouseX = event.clientX;
  mouseY = event.clientY;
})