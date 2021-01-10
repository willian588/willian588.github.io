import DPlayer from 'dplayer';

const dp = new DPlayer(options);
const dp = new DPlayer({
    container: document.getElementById('dplayer'),
    video: {
        url: 'demo.mp4',
    },
});