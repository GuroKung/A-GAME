var Logo = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/logo.png' );
        this.setPosition(new cc.Point( 665, 575 ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });