var focusIcon2 = false;
var Icon2 = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/icon2.png' );
        this.setPosition(new cc.Point( 970, 521 ) );
        this.setVisible(false);   
    },
    handleClick:function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>476&&touchLocation.y<567){
            if( sound[0]+sound[1] >= 100 ){
                if( sound[0]!=100 ) health -= 40;
                sound[0] = 100;
            }
            else {
                health -= 40;
                sound[0] += sound[1];
            }
            cc.AudioEngine.getInstance().playEffect( 'sound/typingKeyboard.mp3' );
        }
    },
    handleMouseMove: function( touchLocation ){
        if((touchLocation.x>1145.5&&touchLocation.x<1235.5)&&
            touchLocation.y>476&&touchLocation.y<567){
            focusIcon2 = true;
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon2_2.png' ) );
        }
        else {
            focusIcon2 = false;
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/icon2.png' ) );
        }
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });