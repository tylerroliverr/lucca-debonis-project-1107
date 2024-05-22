const link = document.querySelectorAll('.link');

link.forEach(function (links) {
    links.addEventListener('mouseover', function () {
        customCursor.classList.add('hovering');
        customPointer.classList.add('hovering');
    });

    links.addEventListener('mouseout', function () {
        customCursor.classList.remove('hovering');
        customPointer.classList.remove('hovering');
    });
});