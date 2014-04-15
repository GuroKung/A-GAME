var Icon2 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon2.png' );
        this.setPosition(new cc.Point( 970, 521 ) );
        this.setVisible(false);   
    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>476&&touchLocation.y<567){
            console.log( 'Focus: Icon2' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon2_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon2.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });