var texPC = cc.TextureCache.getInstance().addImage( 'images/PC_2.png' );
var PC = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/pc.png' );
        this.setPosition(new cc.Point( 770, 393 ) );    
    },
    handleClick:function( touchLocation ){
        var boxPC = this.getBoundingBox();
    	if( cc.rectContainsPoint( boxPC, touchLocation ) ){
        	console.log( 'Click: PC' );
            return true;
        }
        else return false;
    },
    handleMouseMove:function( touchLocation ){
        var boxPC = this.getBoundingBox();
        if( cc.rectContainsPoint( boxPC, touchLocation ) ){
            console.log( 'Focus: PC' );
            this.setTexture( texPC );
        }
        else this.setTexture(cc.TextureCache.getInstance().addImage( 'images/PC.png' ) );
    }
    });