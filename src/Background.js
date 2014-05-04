var Background = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/room.jpg' );
        this.setPosition( new cc.Point( screenWidth/2, screenHeight/2 ) );
    },
    isGameOver: function(){
    	this.setTexture( cc.TextureCache.getInstance().addImage( 'images/gameover.png' ) );
    }
});