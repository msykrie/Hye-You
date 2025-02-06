document.addEventListener("DOMContentLoaded", function () {
    let music = new Audio("komangraimlaode.mp3");  // Pastikan path lagu betul
    music.loop = true;
  
    // Semak jika audio masih berjalan dari page sebelumnya
    if (sessionStorage.getItem("audioPlaying") === "true") {
      music.play().then(() => {
        console.log("Music continues from previous page");
      }).catch(() => {
        console.log("Autoplay blocked");
      });
    }
  
    // Fungsi untuk play music
    function playMusic() {
      music.play().then(() => {
        sessionStorage.setItem("audioPlaying", "true");
        console.log("Music playing automatically");
      }).catch(() => {
        console.log("Autoplay blocked");
        document.addEventListener("click", playMusic, { once: true });
        document.addEventListener("scroll", playMusic, { once: true });
      });
    }
  
    playMusic();
  });
  