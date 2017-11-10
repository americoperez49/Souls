/**
 * Created by Americo on 4/19/2016.
 */
var MyGame = {};

MyGame.Splash = function(game) {
   this.SplashText;
   this. music;
   this.background;
   this.filter=null;
   this.customUniforms;
   this.fragmentSrc;
   this.lightning;
   this.lightningAnimation;
   this.Tween;
   this.worldTween;
   this.Text;
   this.textStyle;
   this.textTween;

};

MyGame.Splash.prototype = {

    preload: function(){


        this.load.spritesheet('lightning', 'assets/lightning/Lightning_Text.png',600,300,16);

        this.load.bitmapFont('myFont', 'assets/font/font1.png', 'assets/font/font1.fnt');
        this.load.audio('SplashAudio', ['assets/music/I_Killed_The_Prom_Queen-Thirty_One_&_Sevens.ogg']);
        this.load.audio('Sixto', ['assets/music/Sixto Sounds - Falcon DREAM.ogg']);
        this.load.image('cyberglow', 'assets/textures/cyberglow.png');

       // console.log('things preloaded');
    },

    create: function() {
       // console.log('entered create');

        this.music = this.add.audio('SplashAudio');

        this.music.onDecoded.add(this.playMusic,this);

        game.music2 = this.add.audio('Sixto');



        this.fragmentSrc = [

            "precision mediump float;",

            "uniform float     time;",
            "uniform vec2      resolution;",
            "uniform sampler2D iChannel0;",

            "void main( void ) {",

            "float t = time;",

            "vec2 uv = gl_FragCoord.xy / resolution.xy;",
            "vec2 texcoord = gl_FragCoord.xy / vec2(resolution.y);",

            "texcoord.y -= t*0.2;",

            "float zz = 1.0/(1.0-uv.y*1.7);",
            "texcoord.y -= zz * sign(zz);",

            "vec2 maa = texcoord.xy * vec2(zz, 1.0) - vec2(zz, 0.0) ;",
            "vec2 maa2 = (texcoord.xy * vec2(zz, 1.0) - vec2(zz, 0.0))*0.3 ;",
            "vec4 stone = texture2D(iChannel0, maa);",
            "vec4 blips = texture2D(iChannel0, maa);",
            "vec4 mixer = texture2D(iChannel0, maa2);",

            "float shade = abs(1.0/zz);",

            "vec3 outp = mix(shade*stone.rgb, mix(1.0, shade, abs(sin(t+maa.y-sin(maa.x))))*blips.rgb, min(1.0, pow(mixer.g*2.1, 2.0)));",
            "gl_FragColor = vec4(outp,1.0);",

            "}"
        ];

        this.background = this.add.sprite(0,0,'cyberglow');
        this.background.width = 1080;
        this.background.height = 900;

        this.customUniforms = {
            iChannel0: { type: 'sampler2D', value: this.background.texture, textureData: { repeat: true } }
        };

        this.filter = new Phaser.Filter(this, this.customUniforms, this.fragmentSrc);
        this.filter.setResolution(1080, 900);

        this.background.filters = [ this.filter ];

        this.lightning=this.add.sprite(this.world.centerX, this.world.centerY - 50,'lightning',17);
        this.lightning.anchor.setTo(0.5);
        this.lightningAnimation = this.lightning.animations.add('do');
        this.lightning.alpha=0;
        this.lightningAnimation.play(12,true);

        this.SplashText = this.add.bitmapText(this.world.centerX, this.world.centerY - 50, 'myFont', 'S.O.U.L.S', 50);
        this.SplashText.anchor.setTo(0.5);
        this.SplashText.alpha = 0.1;
        this.SplashText.scale.setTo(.1);
        this.add.tween(this.SplashText).to( { alpha: 1 }, 9000, "Linear", true, 1000);
        this.Tween= this.add.tween(this.SplashText.scale).to( { x:1.5, y:1.5 }, 9000, "Linear", true, 1000);
        this.add.tween(this.SplashText).to();
        this.Tween.onComplete.add(this.startLightning,this);
        this.add.tween(this.SplashText.scale).to();

        this.textStyle = { font: "15px Arial", fill: "#ffffff", align: "center" };
        this.text = this.add.text(this.world.centerX, this.world.centerY+50,"CLICK TO START", this.textStyle);
        this.text.anchor.setTo(0.5);
        this.text.alpha=0;




        this.input.onDown.addOnce(this.clicked, this);

    },

    update: function (){

        this.filter.update();



    },

    playMusic: function(){

      this.music.fadeIn(2000);
    },

    clicked: function(){
        this.text.alpha=0;
        this.textTween.yoyo(false);
        this.music.fadeOut(3000);
        this.worldTween = this.add.tween(this.world).to({alpha:0},3000,"Linear",true);
        this.worldTween.onComplete.add(this.startCharacterSelect, this);

    },

    startLightning: function(){
       this.lightning.alpha=1;
       this.textTween = this.add.tween(this.text).to({alpha: 1}, 1000, "Linear",true,0,-1);
       this.textTween.yoyo(true);
    },

    startCharacterSelect: function(){
        this.music.stop();
        this.world.alpha=1;
        game.music2.play();
        this.state.start('Character');

    }
};


