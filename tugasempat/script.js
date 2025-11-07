const tombolMusik = document.getElementById("tombolMusik");
const musik = document.getElementById("musik");

tombolMusik.addEventListener("click", () => {
    if (musik.paused) {
        musik.play();
        tombolMusik.textContent = "Pause Famous";
    } else {
        musik.pause();
        tombolMusik.textContent = "Play Famous";
    }
});