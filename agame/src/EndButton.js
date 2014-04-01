var EndButton = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/button.png' );
        this.setPosition(new cc.Point( 1140, 135 ) );
    }});