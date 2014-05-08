var GameMenu = cc.LayerColor.extend({
    onEnter: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.room = new Background();
        this.addChild( this.room );//background

        cc.AudioEngine.getInstance().playMusic( 'sound/menu.mp3', true );

        this.createLabel();

        this.setMouseEnabled(true); // use mouse
        

    },
    fadeIn: function(){
        this.mainMenu.setOpacity(0);
        var fadeIn = cc.FadeIn.create(7);
        this.mainMenu.runAction(fadeIn);

        this.tryAgian.setOpacity(0);
        var fadeIn = cc.FadeIn.create(7);
        this.tryAgian.runAction(fadeIn);

        this.score.setOpacity(0);
        var fadeIn = cc.FadeIn.create(9);
        this.score.runAction(fadeIn);
    },
    createLabel: function(){

        this.mainMenu = cc.LabelTTF.create( 'Main Menu', 'Vladimir Script', 54 );
        this.mainMenu.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.mainMenu.setPosition( new cc.Point( 485, 219 ) );
        this.addChild( this.mainMenu );

        this.tryAgian = cc.LabelTTF.create( 'Try Agian', 'Vladimir Script', 54 );
        this.tryAgian.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.tryAgian.setPosition( new cc.Point( 880, 219 ) );
        this.addChild( this.tryAgian );

        this.score = cc.LabelTTF.create( this.checkScore() , 'Brush Script MT', 200 );
        this.score.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.score.setPosition( new cc.Point( 665, 350 ) );
        this.addChild( this.score );

        this.fadeIn();

    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 

        if( ( pos.x>780.5 && pos.x<982.5 )&&
            ( pos.y>195 && pos.y<252.5 ) ){
            var scene = GameLayer.scene();
            var gameTransition = cc.TransitionFade.create( 1.75, scene );
            cc.Director.getInstance().replaceScene(gameTransition);
        }

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

GameMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = new GameMenu();
    scene.addChild(layer);
    return scene;
};