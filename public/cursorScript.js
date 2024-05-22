const customCursor = document.getElementById('custom-cursor');
const customPointer = document.getElementById('custom-pointer');
const cursorContainer = document.getElementById('cursor-container');

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    customCursor.style.transform = `translate(${x - customCursor.clientWidth / 2}px, ${y - customCursor.clientHeight / 2}px)`;
    customPointer.style.transform = `translate(${x - customPointer.clientWidth / 2}px, ${y - customPointer.clientHeight / 2}px)`;
});

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    customPointer.style.transform = `translate(${x - customPointer.clientWidth / 2}px, ${y - customPointer.clientHeight / 2}px)`;
});

document.documentElement.addEventListener('mouseleave', function () {
    customCursor.classList.remove('visible');
    cursorContainer.classList.remove('visible');
    customCursor.classList.add('hidden');
});

document.documentElement.addEventListener('mouseenter', function () {
    customCursor.classList.remove('hidden');
    customCursor.classList.add('visible');
    cursorContainer.classList.add('visible');
});

document.documentElement.addEventListener('mousemove', function handleMouseMove() {
    document.documentElement.removeEventListener('mousemove', handleMouseMove);

    customCursor.classList.remove('hidden');
    customCursor.classList.add('visible');
    cursorContainer.classList.add('visible');
}, { once: true });

const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const rewindButton = document.querySelector('.rewind');
const skipButton = document.querySelector('.skip');

rewindButton.addEventListener('click', function () {
    rewindButton.classList.add('clicked');
    setTimeout(function () {
        rewindButton.classList.remove('clicked');
    }, 100);
});

skipButton.addEventListener('click', function () {
    skipButton.classList.add('clicked');
    setTimeout(function () {
        skipButton.classList.remove('clicked');
    }, 100);
});

if (playButton) {
    playButton.addEventListener('click', function () {
        playButton.classList.add('clicked');
        setTimeout(function () {
            playButton.classList.remove('clicked');
        }, 100);
    });
}

if (pauseButton) {
    pauseButton.addEventListener('click', function () {
        pauseButton.classList.add('clicked');
        setTimeout(function () {
            pauseButton.classList.remove('clicked');
        }, 100);
    });
}