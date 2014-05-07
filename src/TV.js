var texTV = cc.TextureCache.getInstance().addImage( 'images/TV_2.png' );
var TV = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/TV.png' );
        this.setPosition(new cc.Point( 1080, 355 ) );    
    },
    handleClick:function( touchLocation ){
        if( (touchLocation.x>1084.5&&touchLocation.x<1257.5)&&
            (touchLocation.y>309&&touchLocation.y<494) ){
            health += 10;
            money -= 100;
        }       
    },
    handleMouseMove:function( touchLocation ){
        if( (touchLocation.x>1084.5&&touchLocation.x<1257.5)&&
            (touchLocation.y>309&&touchLocation.y<494) ){
            this.setTexture( texTV );
        }  
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/TV.png' ) );
    }
    });