var Chat = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/bubble.png' );
        this.setPosition(new cc.Point( 224, 178 ) );
    }});