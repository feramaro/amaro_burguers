window.addEventListener('load', (evt) => {
    let footerText = document.getElementById("footerText");
    footerText.innerHTML = footerText.textContent.replace("$year", new Date().getFullYear());
})