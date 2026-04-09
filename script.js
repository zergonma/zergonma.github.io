const start = document.getElementById("start-screen");
const audio = document.getElementById("audio");

start.onclick = () => {
    start.style.display = "none";
    audio.volume = 0.3;
    audio.play();
};