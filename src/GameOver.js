var GameOver = cc.LayerColor.extend({
    onEnter: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.room = new Background();
        this.room.isGameOver();
        this.addChild( this.room );//background

        cc.AudioEngine.getInstance().playMusic( 'sound/gameOver.mp3', true );

        this.certificate = new Certificate();
        this.addChild( this.certificate );

        this.createLabel();

        this.setMouseEnabled(true); // use mouse
        

    },
    createLabel: function(){

        this.tryAgian = cc.LabelTTF.create( 'Try Agian', 'Vladimir Script', 54 );
        this.tryAgian.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.tryAgian.setPosition( new cc.Point( 880, 219 ) );
        this.addChild( this.tryAgian );

        this.tryAgian.setOpacity(0);
        var fadeIn = cc.FadeIn.create(10);
        this.tryAgian.runAction(fadeIn);

        this.mainMenu = cc.LabelTTF.create( 'Main Menu', 'Vladimir Script', 54 );
        this.mainMenu.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.mainMenu.setPosition( new cc.Point( 485, 219 ) );
        this.addChild( this.mainMenu );

        this.mainMenu.setOpacity(0);
        var fadeIn = cc.FadeIn.create(10);
        this.mainMenu.runAction(fadeIn);


        this.score = cc.LabelTTF.create( 'Main Menu', 'Vladimir Script', 54 );
        this.score.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.score.setPosition( new cc.Point( 485, 219 ) );
        this.addChild( this.score );

        this.score.setOpacity(0);
        var fadeIn = cc.FadeIn.create(10);
        this.score.runAction(fadeIn);

    },
    checkScore: function(){
        
    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 

     },
    onMouseMoved:function( e ){
        var pos = e.getLocation();
        if( ( pos.x>780.5 && pos.x<982.5 )&&
            ( pos.y>195 && pos.y<252.5 ) ){
            this.tryAgian.setColor( new cc.Color3B( 188, 0, 0 ) );
        }
        else if ( ( pos.x>373 && pos.x<602 )&&
            ( pos.y>211 && pos.y<252 ) ){
            this.mainMenu.setColor( new cc.Color3B( 188, 0, 0 ) );
        }
        else {
            this.tryAgian.setColor( new cc.Color3B( 30, 30, 30 ) );
            this.mainMenu.setColor( new cc.Color3B( 30, 30, 30 ) );
        }
    
    }
});

GameOver.scene = function () {
    var scene = cc.Scene.create();
    var layer = new GameOver();
    scene.addChild(layer);
    return scene;
};