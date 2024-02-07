// main track music:
let play = false;
const mainAudio = new Audio();
mainAudio.src = "mainTrack.mp3";
mainAudio.loop = true;
mainAudio.volume = 0.5;

function playMainSound() {
  if (play) {
      mainAudio.pause();
    } else {
      mainAudio.play();
    }
    play = !play;
    
    // remove focus from the button
    document.activeElement.blur();
}


