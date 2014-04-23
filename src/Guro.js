var Guro = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/guro.png' );
        this.setPosition(new cc.Point( 475, 308 ) );  

    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        var boxGuro = this.getBoundingBox();  
            if( cc.rectContainsPoint ( boxGuro, touchLocation ) ){
            console.log( 'Focus: Guro' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro_3.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro.png' ) );
    }
    });