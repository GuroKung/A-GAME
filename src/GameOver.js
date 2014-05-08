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
    changeToGameScene: function () {
        var scene = GameLayer.scene();
        var gameTransition = cc.TransitionFade.create( 1.75 , scene );
        cc.Director.getInstance().replaceScene( gameTransition );
    },
    changeToMenuScene: function () {
        var scene = GameMenu.scene();
        var gameTransition = cc.TransitionFade.create( 1.75 , scene );
        cc.Director.getInstance().replaceScene( gameTransition );
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
    checkScore: function(){
        if( code[0]+art[0]+sound[0]+writing[0] == 400 ){
            return ' A '
        }
        else if(code[0] >= 90 && art[0] >= 90 && sound[0] >= 90 && writing[0] >= 90){
            return ' B+ '
        }
        else if(code[0] >= 80 && art[0] >= 80 && sound[0] >= 80 && writing[0] >= 80){
            return ' B '
        }
        else if(code[0] >= 70 && art[0] >= 70 && sound[0] >= 70 && writing[0] >= 70){
            return ' C+ '
        }
        else if(code[0] >= 60 && art[0] >= 60 && sound[0] >= 60 && writing[0] >= 60){
            return ' C '
        }
        else if(code[0] >= 50 && art[0] >= 50 && sound[0] >= 50 && writing[0] >= 50){
            return ' D+ '
        }
        else if(code[0] >= 40 && art[0] >= 40 && sound[0] >= 40 && writing[0] >= 40){
            return ' D '
        }
        else {
            return ' F '
        }
    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        //console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 
        if( ( pos.x>780.5 && pos.x<982.5 )&&
            ( pos.y>195 && pos.y<252.5 ) ){
            this.changeToGameScene();
        }
        else if ( ( pos.x>373 && pos.x<602 )&&
            ( pos.y>211 && pos.y<252 ) ){
            this.changeToMenuScene();
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

GameOver.scene = function () {
    var scene = cc.Scene.create();
    var layer = new GameOver();
    scene.addChild(layer);
    return scene;
};