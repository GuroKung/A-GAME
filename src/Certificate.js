var Certificate = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/certificate.png' );
        this.setPosition( new cc.Point( screenWidth/2, screenHeight/2 ) );

        this.setOpacity( 0 );
        var fadeIn = cc.FadeIn.create( 5.5 );
        this.runAction(fadeIn);
    }
});