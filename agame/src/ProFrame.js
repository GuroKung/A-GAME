var ProFrame = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/proframe.png' );
        this.setPosition(new cc.Point( 1060, 625 ) );
    }});