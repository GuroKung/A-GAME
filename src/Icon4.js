var Icon4 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon4.png' );
        this.setPosition(new cc.Point( 970, 306 ) );
        this.setVisible(false);  
    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>266&&touchLocation.y<348){
            console.log( 'Focus: Icon4' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon4_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon4.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }

    });