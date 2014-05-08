var Mbutton2 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/mainButton2.png' );
        this.setPosition(new cc.Point( 928, 162 ) );
    },
    handleClick:function( touchLocation ){
        var box = this.getBoundingBox();  
        if( cc.rectContainsPoint ( box, touchLocation ) ){
            return true;
        }
        return false;
    },
    handleMouseMove: function( touchLocation ){
        var box = this.getBoundingBox();  
        if( cc.rectContainsPoint ( box, touchLocation ) ){
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/mainButton2_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/mainButton2.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });