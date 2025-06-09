document.addEventListener('DOMContentLoaded', function() {
    const aboutBlock = document.getElementById('aboutBlock');
    const infoBlocks = document.getElementById('infoBlocks');
    let shown = false;

    aboutBlock.addEventListener('click', function() {
        shown = !shown;
        if (shown) {
            infoBlocks.classList.add('visible');
        } else {
            infoBlocks.classList.remove('visible');
        }
    });
});