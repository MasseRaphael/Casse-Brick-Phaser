import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene
{
    constructor()
    {
        super('game')
    }

    preload()
    {
        this.load.image('background', 'assets/bg_layer1.png');
        this.load.image('brick', 'assets/tileRed_26.png');
        this.load.image('ball', 'assets/ballYellow_06.png');
        this.load.image('paddle', 'assets/paddle_02.png');
    }

    create()
    {
        this.add.image(500, 400, 'background');

        this.add.image(500, 400, 'ball').setScale(0.1);

        const paddle = this.physics.add.staticImage(500, 770, 'paddle').setScale(0.15).body.updateFromGameObject();
    }

    update()
    {

    }
}
