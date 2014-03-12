var score = 0;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.scoreLabel = cc.LabelTTF.create( '0', 'Arial', 40 );
        this.scoreLabel.setPosition( new cc.Point( 750, 550 ) );
        this.addChild( this.scoreLabel );

        this.gold = new Gold();
        this.addChild( this.gold );
        this.gold.randomPosition();

        this.ship = new Ship();
        this.ship.setPosition( new cc.Point( 200, 220 ) );
        this.addChild( this.ship );
        this.ship.scheduleUpdate();
        this.setKeyboardEnabled( true );


        this.scheduleUpdate();
        return true;
    },
    
    onKeyDown: function( e ) {
        if ( e == cc.KEY.space ) {
            this.ship.switchDirection();
        }
    },

    onKeyUp: function( e ) {
        console.log( 'Up: ' + e );
    },

    update: function() {
        if ( this.gold.closeTo( this.ship ) ) {
            this.gold.randomPosition();
            score++;
            speed ++;
            this.scoreLabel.setString(score );
        }
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    },
});

