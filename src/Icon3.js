var Icon3 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon3.png' );
        this.setPosition(new cc.Point( 970, 416 ) );
        this.setVisible(false);  
    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>368&&touchLocation.y<463){
            console.log( 'Focus: Icon3' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon3_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon3.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }

    });