var texTV = cc.TextureCache.getInstance().addImage( 'images/TV_2.png' );
var TV = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/TV.png' );
        this.setPosition(new cc.Point( 1178, 417 ) );    
    },
    handleClick:function( touchLocation ){
        var boxTV = this.getBoundingBox();
    	if(cc.rectContainsPoint( boxTV, touchLocation ) ){
            health += 10;
            money -= 100;
        }       
    },
    handleMouseMove:function( touchLocation ){
        var boxTV = this.getBoundingBox();
        if(cc.rectContainsPoint( boxTV, touchLocation ) ){
            this.setTexture( texTV );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/TV.png' ) );
    }
    });