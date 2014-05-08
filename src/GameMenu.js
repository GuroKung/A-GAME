var GameMenu = cc.LayerColor.extend({
    onEnter: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.room = new Background();
        this.addChild( this.room );//background

        this.createObjects();
        this.direction = GameMenu.DIR.UP;

        
        
        cc.AudioEngine.getInstance().playMusic( 'sound/menu.mp3', true );

        this.scheduleUpdate();
        this.setMouseEnabled(true); // use mouse
        

    },
    update: function(){
        var pos = this.logo.getPosition();
        if( this.direction == 1 && pos.y < 620  ) this.logo.setPosition( new cc.Point( pos.x, pos.y + 1.5 ) );
        else if( this.direction == 0 && pos.y > 585 ) this.logo.setPosition( new cc.Point( pos.x, pos.y - 1.5 ) );
        else if ( pos.y >= 620 ) this.direction = 0;
        else if( pos.y <= 585 )  this.direction = 1; 
    },
    createObjects: function(){

        this.guro = new Guro();
        this.guro.isMenuScene();
        this.addChild( this.guro );

        this.chat = new Chat();
        this.chat.show();
        this.addChild ( this.chat );

        this.dialog = cc.LabelTTF.create( ' Hello World(); ' , 'Viner Hand ITC', 34 );
        this.dialog.setColor( new cc.Color3B( 30, 30, 30 ) );
        this.dialog.setPosition( new cc.Point( 265, 115 ) );
        this.addChild( this.dialog );

        this.Mbutton1 = new Mbutton1();
        this.addChild( this.Mbutton1 );

        this.Mbutton2 = new Mbutton2();
        this.addChild( this.Mbutton2 );

        this.logo = new Logo();
        this.addChild( this.logo );

        this.note = new Note();
        this.addChild( this.note );

    },
    changeToGameScene: function () {
        var scene = GameLayer.scene();
        var gameTransition = cc.TransitionFade.create( 1, scene );
        cc.Director.getInstance().replaceScene( gameTransition );
    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 
        if( !this.note.isVisible() ) {
            if ( this.Mbutton1.handleClick( pos )) {
                cc.AudioEngine.end();
                this.changeToGameScene(); 
            }
            if ( this.Mbutton2.handleClick( pos )) {
                this.note.show();
            }
        }
        this.note.handleClick( pos );
     },
    onMouseMoved:function( e ){
        var pos = e.getLocation();
        if( !this.note.isVisible() ) {
            this.guro.handleMouseMove( pos );
            this.Mbutton1.handleMouseMove( pos );
            this.Mbutton2.handleMouseMove( pos );
        }
        if( talk == true ) this.dialog.setString( " That's Hurt !! " );
        else this.dialog.setString( ' Hello World(); ' );
    }
});
var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameMenu();
        layer.init();
        this.addChild( layer );
    }
});
GameMenu.scene = function () {
    var scene = cc.Scene.create();
    var layer = new GameMenu();
    scene.addChild(layer);
    return scene;
};

GameMenu.DIR = {
    UP: 1,
    DOWN: 0
};