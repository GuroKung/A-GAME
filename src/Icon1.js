var Icon1 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon1.png' );
        this.setPosition(new cc.Point( 970, 626 ) );
        this.setVisible(false);  
    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>579&&touchLocation.y<672){
            console.log( 'Focus: Icon1' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon1_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon1.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });