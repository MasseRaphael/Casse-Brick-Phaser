import Phaser from '../lib/phaser.js';

export default class Level_1 extends Phaser.Scene
{
    //Déclaration des variables utiliséé
    paddle;
    cursors;
    bricks;
    ball;
    score;

    constructor()
    {
        super('level_1')
    }

    //initialisation du score
    init()
    {
        this.score = 0;
    }

    //préchargement des images utilisées pour le niveau
    preload()
    {
        this.load.image('background', 'assets/bg_layer1.png');
        this.load.image('brick', 'assets/tileRed_26.png');
        this.load.image('ball', 'assets/ballYellow_06.png');
        this.load.image('paddle', 'assets/paddle_02.png');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    //Génération du niveau
    create()
    {
        this.add.image(500, 400, 'background');

        //génération du mur de briques---------------------
        this.bricks = this.physics.add.staticGroup();

        for(let i = 1; i < 76; ++i)
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
        //-------------------------------------------------

        //génération de la raquette------------------------
        this.paddle = this.physics.add.image(500, 570, 'paddle').setScale(0.15);
        //permet d'empêcher la raquette de sortir de l'écran
        this.paddle.setCollideWorldBounds(true);
        //-------------------------------------------------

        //génération de la balle---------------------------
        this.ball = this.physics.add.image(500, 300, 'ball').setScale(0.1);
        this.ball.setBounce(1);
        //permet d'empêcher la balle de sortir de l'écran
        this.ball.setCollideWorldBounds(true);
        //-------------------------------------------------

        //paramétrage des collisons------------------------
        this.physics.add.collider(this.ball, this.paddle);

        this.physics.add.collider(
            this.ball,
            this.bricks,
            this.hitBrick,
            undefined,
            this
            );
        //-------------------------------------------------

        const style = { fontSize: 32, color: '#000'};
        this.scoreText = this.add.text(400, 300, 'Score: 0', style);
    }

    //Eléments mis à jour selon certaines conditions
    update()
    {
        //paramétrage du rebond de la balle----------------
        const touchingDown = this.ball.body.touching.down;

        if(touchingDown)
        {
            //paramétrage du rebond avec un paramètre aléatoire sur l'axe x pour éviter le soft-block avec un vélocité sur x égale à 0
            this.ball.setVelocity(Phaser.Math.Between(-200, 200), -500)
        }
        //-------------------------------------------------

        //paramétrage du movement de la raquette-----------
        if(this.cursors.left.isDown)
        {
            this.paddle.setVelocityX(-300);
        }
        else if(this.cursors.right.isDown)
        {
            this.paddle.setVelocityX(300);
        }
        else
        {
            this.paddle.setVelocityX(0);
        }
        //-------------------------------------------------

        //paramétrage du Game Over-------------------------
        if(this.ball.y > 592)
        {
            this.scene.start('game-over', {score: this.score});
        }
        //-------------------------------------------------
    }

    //Fonction d'impact de la balle contre les briques permettant de détruire et ajouter des points au score
    hitBrick(ball, brick)
    {
        brick.destroy();

        this.score += 10;

        const value = `Score: ${this.score}`;
        this.scoreText.text = value;
    }
}
