const body = document.body;
const lightSheet = document.getElementById('theme-light');
const darkSheet = document.getElementById('theme-dark');

function toggleMode() {
    body.classList.contains('darkMode')
        ? (() => {
            body.classList.remove('darkMode');
            body.classList.add('lightMode');
            lightSheet.removeAttribute('disabled');
            darkSheet.setAttribute('disabled', 'true');
            document.getElementById('modeImage').src = "docs/assets/images/darkmodeicon.png";
        })()
        : (() => {
            body.classList.add('darkMode');
            body.classList.remove('lightMode');
            lightSheet.setAttribute('disabled', 'true');
            darkSheet.removeAttribute('disabled');
            document.getElementById('modeImage').src = "docs/assets/images/lightmodeicon.png";
        })();
}