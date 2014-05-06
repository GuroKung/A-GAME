var texEnd = cc.TextureCache.getInstance().addImage( 'images/button_2.png' );
var EndButton = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/button.png' );
        this.setPosition(new cc.Point( 1140, 135 ) );  

    },
    handleClick:function( touchLocation ){
        var boxEnd = this.getBoundingBox();
    	if( cc.rectContainsPoint( boxEnd, touchLocation ) ){
        	day++;
            health = 100;
        }
    },
    handleMouseMove: function( touchLocation ){
        var boxEnd = this.getBoundingBox();  
            if( cc.rectContainsPoint( boxEnd, touchLocation ) ){
            this.setTexture( texEnd );
        }
        else this.setTexture(cc.TextureCache.getInstance().addImage( 'images/button.png' ) );
    }
    });