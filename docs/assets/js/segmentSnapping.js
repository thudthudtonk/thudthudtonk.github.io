const sections = document.querySelectorAll('.section');

document.addEventListener('wheel', (event) => {
    event.preventDefault();
    const delta = event.deltaY;
    const currentSectionIndex = Array.from(sections).findIndex(section => section.getBoundingClientRect().top >= 0);

    let targetSectionIndex;
    if (delta > 0 && currentSectionIndex < sections.length - 1) {
        targetSectionIndex = currentSectionIndex + 1;
    } else if (delta < 0 && currentSectionIndex > 0) {
        targetSectionIndex = currentSectionIndex - 1;
    } else {
        return;
    }
    sections[targetSectionIndex].scrollIntoView({behavior: 'smooth'});
}, {passive: false});