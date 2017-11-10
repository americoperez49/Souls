MyGame.Game = function(game) {


};

MyGame.Game.prototype = {

    preload: function(){
        this.load.image('blue', 'assets/gems/blue.png');
        this.load.image('white', 'assets/gems/white.png');
        this.load.image('red', 'assets/gems/red.png');
        this.load.image('yellow', 'assets/gems/yellow.png');

    },

    create: function () {
        //this.add.sprite(500,500,'blue');

        this.tileTypes = [
            ['blue','blue'],
            ['blue','white'],
            ['blue','red'],
            ['blue','yellow'],
            ['white','blue'],
            ['white','white'],
            ['white','red'],
            ['white','yellow'],
            ['red','blue'],
            ['red','white'],
            ['red','red'],
            ['red','yellow'],
            ['yellow','blue'],
            ['yellow','white'],
            ['yellow','red'],
            ['yellow','yellow']
        ];

        this.tileWidth = this.cache.getImage('blue').width;
        this.tileHeight = this.cache.getImage('blue').height;

        this.tiles = this.add.group();

        this.tileGrid = [
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null],
            [null, null, null, null, null, null, null, null]
        ];

        var seed = Date.now();
        this.random = new Phaser.RandomDataGenerator([seed]);

    },

    update: function(){

    }


}