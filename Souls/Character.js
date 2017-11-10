






MyGame.Character = function (game) {

    this.characterSprites= [['darkChar','earthChar','fenrirChar','fireChar'],['flowerChar','haloChar','heartChar','sacredChar']];

    this.characterOnScreen;
    this.characterFrame=0;


    this.CoinSprites =['dark','earth','fenrir','fire','flower','halo','heart','sacred'];
    this.emitter;
    this.lastMove=0;
    this.text;


};



MyGame.Character.prototype = {

    SOUL: function() {


        this.sprite;
        this.symbol;
        this.punishBlocks = [];




    },

    preload: function() {

        this.load.image('bgText', 'assets/Layer_4.png');
        this.load.image('dark', 'assets/Dark.png');
        this.load.image('earth', 'assets/Earth.png');
        this.load.image('fenrir', 'assets/Fenrir.png');
        this.load.image('fire', 'assets/Fire.png');
        this.load.image('flower', 'assets/Flower.png');
        this.load.image('halo', 'assets/Halo.png');
        this.load.image('heart', 'assets/Heart.png');
        this.load.image('sacred', 'assets/Sacred.png');
        this.load.image('reflectedGlow', 'assets/Reflected_Glow.png');
        this.load.image('windowGlow', 'assets/Window_Glow.png');
        this.load.image('corona', 'assets/blue.png');
        this.load.image('characterBG', 'assets/textures/black_bg_whole_screen.png');
        this.load.image('characterBGBorders', 'assets/textures/black_bg_whole_screen_borders.png');
        this.load.audio('characterSound','assets/music/FX293.mp3' )

        this.load.audio('Dusk', ['assets/music/Apex_2015_-_This_Is_the_Moment_(MP3_+_Art)/MP3/02 DusK - A Day Like No Other [Ultimate Marvel vs. Capcom 3].ogg'])

        this.load.spritesheet('characters', 'assets/creatures/creatureSpriteSheet.png', 140, 220,8)





    },

    create: function () {
        game.music3 = this.add.audio('Dusk');
        this.characterSound = this.add.audio('characterSound');
        this.bg = this.add.sprite(0, 0, 'characterBG');
        this.bgText = this.add.tileSprite(0,0,1080,1920,'bgText');
        this.bgBorders=this.add.sprite(0,0,'characterBGBorders');


        this.x=286;
        this.y=525.5;
        for (var i =0; i<10; i++){
            this.CoinSprite = this.add.sprite(this.x, this.y, this.CoinSprites[i]);
                this.CoinSprite.anchor.setTo(0.5);
                this.x = this.x + 175;
                if (this.x == 986) {
                    this.x = 286;
                    this.y = this.y + 160;

                }
            }



        this.emitter = this.add.emitter(286, 525.5, 400);

        this.emitter.makeParticles('corona' );


        this.emitter.setScale(0.8, 0, 0.8, 0, 3000);

        this.emitter.start(false, 3000, 5);


        this.characterOnScreen =this.add.sprite(this.world.centerX, 300,'characters')
        this.characterOnScreen.anchor.setTo(0.5);
        this.characterOnScreen.scale.setTo(1.5);



        this.input.keyboard.enabled = true;

       this.rightButton = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
       this.rightButton.onDown.add(this.moveRight, this);

        this.leftButton = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
        this.leftButton.onDown.add(this.moveLeft, this);

        this.upButton = this.input.keyboard.addKey(Phaser.Keyboard.UP);
        this.upButton.onDown.add(this.moveUp, this);

        this.downButton = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
        this.downButton.onDown.add(this.moveDown, this);

        this.selectButton = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        this.selectButton.onDown.add(this.select, this);





    },

    update: function() {

        this.bgText.tilePosition.x += 2;
        this.bgText.tilePosition.y += 2;





    },



    moveLeft: function(){
        this.characterSound.play();
        if (this.emitter.x == 286) {
            this.emitter.x = 811;

        }
       else {
            this.emitter.x = this.emitter.x - 175;

        }

        this.showCharacterOnScreen();

    },

    moveRight: function(){
        this.characterSound.play();
        if (this.emitter.x == 811) {
            this.emitter.x = 286;


        }
        else{
            this.emitter.x = this.emitter.x + 175;

        }

        this.showCharacterOnScreen();

    },

    moveDown: function(){
        this.characterSound.play();
        if (this.emitter.y == 685.5) {
            this.emitter.y = 525.5;

        }
        else{
            this.emitter.y = this.emitter.y + 160;

        }

        this.showCharacterOnScreen();


    },

    moveUp: function(){
        this.characterSound.play();
        if (this.emitter.y == 525.5) {
            this.emitter.y = 685.5;

        }
        else{
            this.emitter.y = this.emitter.y - 160;

        };

        this.showCharacterOnScreen();

    },

    showCharacterOnScreen: function(){
        if (this.emitter.x == 286 && this.emitter.y == 525.5) {
            this.characterOnScreen.scale.setTo(1.25);
            this.characterOnScreen.loadTexture('characters', 0);
        }

        if (this.emitter.x == 461 && this.emitter.y == 525.5) {
            this.characterOnScreen.scale.setTo(1);
            this.characterOnScreen.loadTexture('characters', 1);
        }

        if (this.emitter.x == 636 && this.emitter.y == 525.5) {
            this.characterOnScreen.scale.setTo(.75);
            this.characterOnScreen.loadTexture('characters', 2);
        }

        if (this.emitter.x == 811 && this.emitter.y == 525.5) {
            this.characterOnScreen.scale.setTo(1);
            this.characterOnScreen.loadTexture('characters', 3);
        }

        if (this.emitter.x == 286 && this.emitter.y == 685.5) {
            this.characterOnScreen.scale.setTo(1);
            this.characterOnScreen.loadTexture('characters', 4);
        }

       if (this.emitter.x == 461 && this.emitter.y == 685.5) {
           this.characterOnScreen.scale.setTo(1);
            this.characterOnScreen.loadTexture('characters', 5);
        }

        if (this.emitter.x == 636 && this.emitter.y == 685.5) {
            this.characterOnScreen.scale.setTo(1.25);
            this.characterOnScreen.loadTexture('characters', 6);
        }

        if (this.emitter.x == 811 && this.emitter.y == 685.5) {
            this.characterOnScreen.scale.setTo(1);
            this.characterOnScreen.loadTexture('characters', 7);
        }

    },

    select: function () {
        game.music2.stop();
        game.music3.play();
        this.state.start('Game');
    }


};
