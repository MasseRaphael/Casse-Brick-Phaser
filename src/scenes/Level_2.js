import Phaser from '../lib/phaser.js';

export default class Level_2 extends Phaser.Scene
{
    //Déclaration des variables utiliséé
    paddle;
    cursors;
    redBricks;
    blueBricks;
    ball;
    score;

    constructor()
    {
        super('level_2')
    }

    //initialisation du score
    init(data)
    {
        this.tempoScore = 0//data.score;
    }

    //préchargement des images utilisées pour le niveau
    preload()
    {
        this.load.image('background', 'assets/bg_layer1.png');
        this.load.image('brick1', 'assets/tileRed_26.png');
        this.load.image('brick2', 'assets/tileRed_26.png');
        this.load.image('brick3', 'assets/tileRed_38.png');
        this.load.image('ball', 'assets/ballYellow_06.png');
        this.load.image('paddle', 'assets/paddle_02.png');

        this.cursors = this.input.keyboard.createCursorKeys();
    }

    //Génération du niveau
    create()
    {
        this.add.image(500, 400, 'background');

        //génération du mur de briques---------------------
        this.redBricks = this.physics.add.staticGroup();
        this.blueBricks = this.physics.add.staticGroup();

        for(let i = 1; i < 76; ++i)
        {
            const x = i * 60;
            
            if( x <= 950)
            {
                const brick = this.redBricks.create(x, 30, 'brick1').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 950 && x <= 1850)
            {
                const x = ( i - 15 ) * 60 
                const brick = this.redBricks.create(x, 60, 'brick1').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 1850 && x <= 2750)
            {
                const x = ( i - 30 ) * 60 
                const brick = this.redBricks.create(x, 90, 'brick1').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 2750 && x <= 3650)
            {
                const x = ( i - 45 ) * 60 
                const brick = this.redBricks.create(x, 120, 'brick1').setScale(0.3);
                brick.body.updateFromGameObject();
            }
            else if( x >= 3650 && x <= 4550)
            {
                const x = ( i - 60 ) * 60 
                const brick = this.blueBricks.create(x, 150, 'brick2').setScale(0.3);
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
            this.redBricks,
            this.hitRedBrick,
            undefined,
            this
        );

        this.physics.add.collider(
            this.ball,
            this.blueBricks,
            this.hitBlueBrick,
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
            //paramétrage du rebond avec un paramètre aléatoire sur l'axe x pour éviter le soft-bloc avec un vélocité sur x égale à 0
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
            this.scene.start('game-over', {score: this.tempoScore});
        }
        //-------------------------------------------------
    }

    //Fonction d'impact de la balle contre les briques permettant de détruire et ajouter des points au score
    hitRedBrick(ball, brick)
    {
        brick.destroy();

        this.tempoScore += 10;

        const value = `Score: ${this.tempoScore}`;
        this.scoreText.text = value;
    }

    hitBlueBrick(ball, brick)
    {
        let life = 2;

        for (let i = 0; i < 2; ++i){
            life --;
        }

        if (life === 1){
    
            brick.setTexture('brick3');

        }
        if (life === 0){

            console.log(life);
            brick.destroy();
    
            this.tempoScore += 10;
        }
        

        const value = `Score: ${this.tempoScore}`;
        this.scoreText.text = value;
    }
}
