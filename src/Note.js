var Note = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/note.png' );
        this.setPosition( new cc.Point( (screenWidth/2), (screenHeight/2) ) );
        this.setVisible( false );
    },
    handleClick:function( touchLocation ){
        if( ( touchLocation.x>857 && touchLocation.x<928 )&&
            ( touchLocation.y>595 && touchLocation.y<662 ) ){
            this.hide();
        }
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });