const emojis = [
    "😺",
    "😺",
    "🦝",
    "🦝",
    "🦊",
    "🦊",
    "🐶",
    "🐶",
    "🐵",
    "🐵",
    "🦁",
    "🦁",
    "🐯",
    "🐯",
    "🐮",
    "🐮",
    "😍",
    "😍",
    "🦇",
    "🦇",
    "🦖",
    "🦖",
    "🐠",
    "🐠",
];
let openCards = [];

let shuffleEmojis = emojis.sort(() => (Math.random() > 0.5 ? 2 : -1));
for (let i = 0; i < emojis.length; i++) {
    let box = document.createElement('div');
    box.className = 'item';
    box.innerHTML = shuffleEmojis[i];
    box.onclick = handleClick;
    document.querySelector(".game").appendChild(box);
}
function playSound(musicName, volume,autoplay) {
    var audio = new Audio(`./src/assets/music/${musicName}`);
    audio.volume = volume;
    audio.autoplay = autoplay === null || undefined ? false : autoplay;
    audio.play();
}

function handleClick() {
    playSound('boxingPunch.wav', 0.2);
    if (openCards.length < 2) {
        this.classList.add('boxOpen');
        openCards.push(this);
    };
    if (openCards.length === 2) {
        setTimeout(checkMatch, 500);
    }
}
new playSound('infectedVibes157.mp3', 0.1,true);
function checkMatch() {
    if (openCards[0].innerHTML === openCards[1].innerHTML) {
        openCards[0].classList.add('boxMatch');
        openCards[1].classList.add('boxMatch');
        new playSound('aceptpair.wav', 0.2);

    } else {
        openCards[0].classList.remove('boxOpen');
        openCards[1].classList.remove('boxOpen');
        new playSound('error.wav', 0.2);
    }
    openCards = [];

    if (document.querySelectorAll('.boxMatch').length === emojis.length) {
        new playSound('gameLevelCompleted.wav', 1);
        let tryAgain;
        setTimeout(function () {
            tryagain = confirm('Parabens! Você venceu! \nDeseja continuar?');
            if (tryagain === true) {
                location.reload();
            };
        }, 2000);

    }
}