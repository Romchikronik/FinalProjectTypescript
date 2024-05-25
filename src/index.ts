import Template from './Template';
import '../node_modules/@fortawesome/fontawesome-free/js/all';

const level1Button = document.getElementById('level1Button');
if (level1Button) {
    level1Button.addEventListener('click', () => {
        startGame(1);
    });
}

const level2Button = document.getElementById('level2Button');
if (level2Button) {
    level2Button.addEventListener('click', () => {
        startGame(2);
    });
}

function startGame(level: number) {
    const gameContainer = document.getElementById('gameContainer');
    if (gameContainer) {
        new Template(level, gameContainer); 
    }
}


