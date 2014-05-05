var talk = false;
var Chat = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/bubble.png' );
        this.setPosition(new cc.Point( 268, 150 ) );
        this.setVisible( false );
    },
    show: function(){
    	this.setVisible( true );
    },
    hide: function(){
    	this.setVisible( false );
    }
});