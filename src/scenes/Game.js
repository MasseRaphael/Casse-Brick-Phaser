import Phaser from '../lib/phaser.js';

export default class Game extends Phaser.Scene
{
    paddle;
    cursors;
    bricks;
    ball;

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
        //this.load.image('ground', 'assets/ground.png');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    create()
    {
        this.add.image(500, 400, 'background');

        this.bricks = this.physics.add.staticGroup();

        for(let i = 1; i < 100; ++i)
        {
            const x = i * 60;
            
            if( x <= 950)
            {
                const brick = this.bricks.create(x, 30, 'brick').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 950 && x <= 1850)
            {
                const x = ( i - 15 ) * 60 
                const brick = this.bricks.create(x, 60, 'brick').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 1850 && x <= 2750)
            {
                const x = ( i - 30 ) * 60 
                const brick = this.bricks.create(x, 90, 'brick').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 2750 && x <= 3650)
            {
                const x = ( i - 45 ) * 60 
                const brick = this.bricks.create(x, 120, 'brick').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 3650 && x <= 4550)
            {
                const x = ( i - 60 ) * 60 
                const brick = this.bricks.create(x, 150, 'brick').setScale(0.3);
                brick.body.updateFromGameObject();
            }
        }

        //const ground = this.physics.add.staticImage(500, 600, 'ground');

        this.paddle = this.physics.add.image(500, 570, 'paddle').setScale(0.15);
        this.paddle.setCollideWorldBounds(true);

        this.ball = this.physics.add.image(500, 300, 'ball').setScale(0.1);
        this.ball.setBounce(1);
        this.ball.setCollideWorldBounds(true);
        this.ball.setVelocity(Phaser.Math.Between(-200, 200), 20)

        this.physics.add.collider(this.ball, this.paddle);

        //this.physics.add.collider(this.paddle, ground);

        this.physics.add.collider(
            this.ball,
            this.bricks,
            this.hitBrick,
            undefined,
            this
            );

    }

    update()
    {
        const touchingDown = this.ball.body.touching.down;

        if(touchingDown)
        {
            this.ball.setVelocityY(-500)
        }

        if(this.cursors.left.isDown)
        {
            this.paddle.setVelocityX(-200);
        }
        else if(this.cursors.right.isDown)
        {
            this.paddle.setVelocityX(200);
        }
        else
        {
            this.paddle.setVelocityX(0);
        }
    }

    hitBrick(ball, brick)
    {
        brick.destroy();
    }

}
