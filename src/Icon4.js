var focusIcon4 = false;
var Icon4 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon4.png' );
        this.setPosition(new cc.Point( 970, 306 ) );
        this.setVisible(false);  
    },
    handleClick:function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>266&&touchLocation.y<348){
            console.log( 'Click: Icon4' );
            health -= 40;
            code[0] += code[1];
        }
    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>266&&touchLocation.y<348){
            console.log( 'Focus: Icon4' );
            focusIcon4 = true;
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon4_2.png' ) );
        }
        else {
            focusIcon4 = false;
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon4.png' ) );
        }
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }

    });