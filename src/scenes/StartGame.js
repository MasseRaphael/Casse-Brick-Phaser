import Phaser from '../lib/phaser.js';

export default class StartGame extends Phaser.Scene
{
    constructor()
    {
        super('start-game')
    }

    preload()
    {
        this.load.image('background', 'assets/bg_layer1.png');
        this.load.image('brick1', 'assets/tileRed_26.png');
        this.load.image('brick2', 'assets/tileBlue_26.png');
        this.load.image('brick3', 'assets/tileBlue_38.png');
        this.load.image('brick4', 'assets/tileGreen_26.png');
        this.load.image('brick5', 'assets/tileGreen_38.png');
        this.load.image('brick6', 'assets/tileYellow_26.png');
        this.load.image('brick7', 'assets/tileYellow_38.png');
        this.load.image('ball', 'assets/ballYellow_06.png');
        this.load.image('paddle', 'assets/paddle_02.png');
    }

    create()
    {
        this.add.image(500, 400, 'background');

        //B
        this.add.image(40, 30, 'brick6').setScale(0.2);
        this.add.image(40, 50, 'brick1').setScale(0.2);
        this.add.image(40, 70, 'brick1').setScale(0.2);
        this.add.image(40, 90, 'brick2').setScale(0.2);
        this.add.image(40, 110, 'brick1').setScale(0.2);
        this.add.image(40, 130, 'brick1').setScale(0.2);
        this.add.image(80, 30, 'brick1').setScale(0.2);
        this.add.image(120, 50, 'brick4').setScale(0.2);
        this.add.image(80, 70, 'brick3').setScale(0.2);
        this.add.image(120, 90, 'brick5').setScale(0.2);
        this.add.image(120, 110, 'brick7').setScale(0.2);
        this.add.image(80, 130, 'brick1').setScale(0.2);

        //R
        this.add.image(200, 130, 'brick1').setScale(0.2);
        this.add.image(200, 110, 'brick5').setScale(0.2);
        this.add.image(200, 90, 'brick1').setScale(0.2);
        this.add.image(200, 70, 'brick1').setScale(0.2);
        this.add.image(200, 50, 'brick3').setScale(0.2);
        this.add.image(200, 30, 'brick2').setScale(0.2);
        this.add.image(240, 30, 'brick1').setScale(0.2);
        this.add.image(280, 50, 'brick7').setScale(0.2);
        this.add.image(280, 70, 'brick4').setScale(0.2);
        this.add.image(240, 90, 'brick6').setScale(0.2);
        this.add.image(280, 110, 'brick1').setScale(0.2);
        this.add.image(280, 130, 'brick1').setScale(0.2);

        //I
        this.add.image(400, 130, 'brick1').setScale(0.2);
        this.add.image(400, 110, 'brick1').setScale(0.2);
        this.add.image(400, 90, 'brick1').setScale(0.2);
        this.add.image(400, 70, 'brick5').setScale(0.2);
        this.add.image(400, 50, 'brick4').setScale(0.2);
        this.add.image(400, 30, 'brick7').setScale(0.2);
        this.add.image(360, 130, 'brick3').setScale(0.2);
        this.add.image(440, 130, 'brick1').setScale(0.2);
        this.add.image(360, 30, 'brick2').setScale(0.2);
        this.add.image(440, 30, 'brick6').setScale(0.2);

        //C
        this.add.image(560, 130, 'brick5').setScale(0.2);
        this.add.image(560, 30, 'brick1').setScale(0.2);
        this.add.image(520, 110, 'brick6').setScale(0.2);
        this.add.image(520, 90, 'brick1').setScale(0.2);
        this.add.image(520, 70, 'brick7').setScale(0.2);
        this.add.image(520, 50, 'brick3').setScale(0.2);
        this.add.image(600, 50, 'brick2').setScale(0.2);
        this.add.image(600, 110, 'brick4').setScale(0.2);

        //K
        this.add.image(680, 30, 'brick1').setScale(0.2);
        this.add.image(680, 50, 'brick5').setScale(0.2);
        this.add.image(680, 70, 'brick1').setScale(0.2);
        this.add.image(680, 90, 'brick6').setScale(0.2);
        this.add.image(680, 110, 'brick3').setScale(0.2);
        this.add.image(680, 130, 'brick7').setScale(0.2);
        this.add.image(760, 30, 'brick2').setScale(0.2);
        this.add.image(760, 50, 'brick1').setScale(0.2);
        this.add.image(720, 70, 'brick1').setScale(0.2);
        this.add.image(720, 90, 'brick1').setScale(0.2);
        this.add.image(760, 110, 'brick1').setScale(0.2);
        this.add.image(760, 130, 'brick4').setScale(0.2);

        //S
        this.add.image(880, 10, 'brick1').setScale(0.2);
        this.add.image(840, 30, 'brick4').setScale(0.2);
        this.add.image(920, 30, 'brick1').setScale(0.2);
        this.add.image(840, 50, 'brick5').setScale(0.2);
        this.add.image(880, 70, 'brick1').setScale(0.2);
        this.add.image(920, 90, 'brick3').setScale(0.2);
        this.add.image(920, 110, 'brick7').setScale(0.2);
        this.add.image(880, 130, 'brick2').setScale(0.2);
        this.add.image(840, 110, 'brick6').setScale(0.2);

        //B
        this.add.image(40, 180, 'brick1').setScale(0.2);
        this.add.image(40, 200, 'brick3').setScale(0.2);
        this.add.image(40, 220, 'brick1').setScale(0.2);
        this.add.image(40, 240, 'brick1').setScale(0.2);
        this.add.image(40, 260, 'brick5').setScale(0.2);
        this.add.image(40, 280, 'brick2').setScale(0.2);
        this.add.image(80, 180, 'brick4').setScale(0.2);
        this.add.image(120, 200, 'brick7').setScale(0.2);
        this.add.image(80, 220, 'brick6').setScale(0.2);
        this.add.image(120, 240, 'brick1').setScale(0.2);
        this.add.image(120, 260, 'brick1').setScale(0.2);
        this.add.image(80, 280, 'brick1').setScale(0.2);

        //R
        this.add.image(180, 180, 'brick7').setScale(0.2);
        this.add.image(180, 200, 'brick1').setScale(0.2);
        this.add.image(180, 220, 'brick1').setScale(0.2);
        this.add.image(180, 240, 'brick3').setScale(0.2);
        this.add.image(180, 260, 'brick1').setScale(0.2);
        this.add.image(180, 280, 'brick2').setScale(0.2);
        this.add.image(220, 180, 'brick4').setScale(0.2);
        this.add.image(260, 200, 'brick1').setScale(0.2);
        this.add.image(260, 220, 'brick1').setScale(0.2);
        this.add.image(220, 240, 'brick6').setScale(0.2);
        this.add.image(260, 260, 'brick5').setScale(0.2);
        this.add.image(260, 280, 'brick1').setScale(0.2);

        //E
        this.add.image(320, 180, 'brick7').setScale(0.2);
        this.add.image(320, 200, 'brick1').setScale(0.2);
        this.add.image(320, 220, 'brick2').setScale(0.2);
        this.add.image(320, 240, 'brick1').setScale(0.2);
        this.add.image(320, 260, 'brick3').setScale(0.2);
        this.add.image(320, 280, 'brick4').setScale(0.2);
        this.add.image(360, 180, 'brick6').setScale(0.2);
        this.add.image(400, 180, 'brick1').setScale(0.2);
        this.add.image(360, 220, 'brick1').setScale(0.2);
        this.add.image(360, 280, 'brick5').setScale(0.2);
        this.add.image(400, 280, 'brick1').setScale(0.2);

        //A
        this.add.image(500, 180, 'brick6').setScale(0.2);
        this.add.image(460, 200, 'brick1').setScale(0.2);
        this.add.image(460, 220, 'brick4').setScale(0.2);
        this.add.image(460, 240, 'brick1').setScale(0.2);
        this.add.image(460, 260, 'brick7').setScale(0.2);
        this.add.image(460, 280, 'brick1').setScale(0.2);
        this.add.image(540, 200, 'brick2').setScale(0.2);
        this.add.image(540, 220, 'brick3').setScale(0.2);
        this.add.image(540, 240, 'brick5').setScale(0.2);
        this.add.image(540, 260, 'brick1').setScale(0.2);
        this.add.image(540, 280, 'brick1').setScale(0.2);
        this.add.image(500, 240, 'brick1').setScale(0.2);

        //K
        this.add.image(600, 180, 'brick4').setScale(0.2);
        this.add.image(600, 200, 'brick1').setScale(0.2);
        this.add.image(600, 220, 'brick5').setScale(0.2);
        this.add.image(600, 240, 'brick2').setScale(0.2);
        this.add.image(600, 260, 'brick1').setScale(0.2);
        this.add.image(600, 280, 'brick7').setScale(0.2);
        this.add.image(680, 180, 'brick3').setScale(0.2);
        this.add.image(680, 200, 'brick1').setScale(0.2);
        this.add.image(640, 220, 'brick6').setScale(0.2);
        this.add.image(640, 240, 'brick1').setScale(0.2);
        this.add.image(680, 260, 'brick1').setScale(0.2);
        this.add.image(680, 280, 'brick1').setScale(0.2);

        //E
        this.add.image(740, 180, 'brick1').setScale(0.2);
        this.add.image(740, 200, 'brick7').setScale(0.2);
        this.add.image(740, 220, 'brick1').setScale(0.2);
        this.add.image(740, 240, 'brick1').setScale(0.2);
        this.add.image(740, 260, 'brick4').setScale(0.2);
        this.add.image(740, 280, 'brick5').setScale(0.2);
        this.add.image(780, 180, 'brick3').setScale(0.2);
        this.add.image(820, 180, 'brick2').setScale(0.2);
        this.add.image(780, 220, 'brick6').setScale(0.2);
        this.add.image(780, 280, 'brick1').setScale(0.2);
        this.add.image(820, 280, 'brick1').setScale(0.2);

        //R
        this.add.image(880, 180, 'brick1').setScale(0.2);
        this.add.image(880, 200, 'brick6').setScale(0.2);
        this.add.image(880, 220, 'brick1').setScale(0.2);
        this.add.image(880, 240, 'brick3').setScale(0.2);
        this.add.image(880, 260, 'brick7').setScale(0.2);
        this.add.image(880, 280, 'brick4').setScale(0.2);
        this.add.image(920, 180, 'brick1').setScale(0.2);
        this.add.image(960, 200, 'brick2').setScale(0.2);
        this.add.image(960, 220, 'brick1').setScale(0.2);
        this.add.image(920, 240, 'brick1').setScale(0.2);
        this.add.image(960, 260, 'brick5').setScale(0.2);
        this.add.image(960, 280, 'brick1').setScale(0.2);

        this.add.image(Phaser.Math.Between(200, 800), Phaser.Math.Between(300, 400), 'ball').setScale(0.1);

        this.add.image(Phaser.Math.Between(200, 800), 590, 'paddle').setScale(0.15);

        const style = { fontSize: 32, color: '#000'};
        this.add.text(250, 400, 'Press Space to Start', style);

        this.input.keyboard.once('keydown-SPACE', () => {
            this.scene.start('level_1');
        });
    }
}