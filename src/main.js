import Phaser from './lib/phaser.js';
import Level_1 from './scenes/Level_1.js';
import GameOver from './scenes/GameOver.js';

export default new Phaser.Game({
    type: Phaser.AUTO,
    width: 1000,
    height: 600,
    scene: [Level_1, GameOver],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: {
                y: 200
            },
            debug: true
        },
    }
})

console.dir(Phaser);