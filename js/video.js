var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.addEventListener("DOMContentLoaded", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.autoplay = false;
    videoElement.loop = false;
});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
});

document.querySelector("#play").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.play();
    document.querySelector("#volume").textContent = videoElement.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.playbackRate *= 0.9;
    console.log("Speed:", videoElement.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.playbackRate += 0.1;
    console.log("Speed:", videoElement.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.currentTime = (videoElement.currentTime + 10) % videoElement.duration;
    console.log("Current time:", videoElement.currentTime);
});

document.querySelector("#mute").addEventListener("click", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.muted = !videoElement.muted;
    this.textContent = videoElement.muted ? "Unmute" : "Mute";
});

document.querySelector("#slider").addEventListener("input", function() {
    const videoElement = document.querySelector("#player1");
    videoElement.volume = this.value / 100;
    document.querySelector("#volume").textContent = this.value + "%";
});

document.querySelector("#vintage").addEventListener("click", function() {
    document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function() {
    document.querySelector("#player1").classList.remove("oldSchool");
});