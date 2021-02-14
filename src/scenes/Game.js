import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene
{
    paddle;
    cursors;
    bricks;

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
        this.load.image('ground', 'assets/ground.png');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        this.add.image(500, 400, 'background');

        //const ground = this.physics.add.staticImage(500, 800, 'ground');

        this.paddle = this.physics.add.image(500, 770, 'paddle').setScale(0.15);
        this.paddle.setCollideWorldBounds(true);

        //this.physics.add.collider(this.paddle, ground);
    }

    update()
    {
        if(this.cursors.left.isDown)
        {
            this.paddle.setVelocityX(-200);
        }
        else if(this.cursors.right.isDown)
        {
            this.paddle.setVelocityX(200);
        }
    }
}
