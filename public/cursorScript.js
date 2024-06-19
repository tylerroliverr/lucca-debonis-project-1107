const customCursor = document.getElementById('custom-cursor');
const customPointer = document.getElementById('custom-pointer');
const cursorContainer = document.getElementById('cursor-container');

let lastMouseMoveEvent = null;

const updateCursor = () => {
  if (lastMouseMoveEvent) {
    const { clientX: x, clientY: y } = lastMouseMoveEvent;
    customCursor.style.transform = `translate3d(${x - customCursor.clientWidth / 2}px, ${y - customCursor.clientHeight / 2}px, 0)`;
    customPointer.style.transform = `translate3d(${x - customPointer.clientWidth / 2}px, ${y - customPointer.clientHeight / 2}px, 0)`;
    lastMouseMoveEvent = null;
  }

  requestAnimationFrame(updateCursor);
};

// Start the animation loop
requestAnimationFrame(updateCursor);

document.addEventListener('mousemove', (e) => {
  lastMouseMoveEvent = e;
});

document.documentElement.addEventListener('mouseleave', () => {
  customCursor.classList.remove('visible');
  cursorContainer.classList.remove('visible');
  customCursor.classList.add('hidden');
});

document.documentElement.addEventListener('mouseenter', () => {
  customCursor.classList.remove('hidden');
  customCursor.classList.add('visible');
  cursorContainer.classList.add('visible');
});

const handleInitialMouseMove = () => {
  customCursor.classList.remove('hidden');
  customCursor.classList.add('visible');
  cursorContainer.classList.add('visible');
  document.removeEventListener('mousemove', handleInitialMouseMove);
};

document.addEventListener('mousemove', handleInitialMouseMove, { once: true });

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

const buttonClickHandler = (button) => {
  button.classList.add('clicked');
  setTimeout(() => {
    button.classList.remove('clicked');
  }, 100);
};

rewindButton.addEventListener('click', () => buttonClickHandler(rewindButton));
skipButton.addEventListener('click', () => buttonClickHandler(skipButton));
if (playButton) {
  playButton.addEventListener('click', () => buttonClickHandler(playButton));
}
if (pauseButton) {
  pauseButton.addEventListener('click', () => buttonClickHandler(pauseButton));
}
