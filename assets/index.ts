import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'

const video = document.querySelector("video")

const button = document.getElementById("play")

const buttonMuted = document.getElementById("muted")



const player = new MediaPlayer({ el: video, plugins: 
  [
    new AutoPlay(),
    new AutoPause(),
  ]
 });
button.onclick = () => player.togglePlay();
buttonMuted.onclick = () => player.mute();


