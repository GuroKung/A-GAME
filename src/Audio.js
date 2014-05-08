var play = true;
var texAudio = cc.TextureCache.getInstance().addImage( 'images/audio_2.png' );
var Audio = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/audio.png' );
        this.setPosition(new cc.Point( 255, 467 ) );  

    },
    handleClick:function( touchLocation ){
        if( ( touchLocation.x>117.5 && touchLocation.x<228.5 )&&
            ( touchLocation.y>482 && touchLocation.y<546 ) ){
            if(play) {
                cc.AudioEngine.end();
                play = false;
            }
            else {
                cc.AudioEngine.end();
                cc.AudioEngine.getInstance().playMusic( 'sound/theme.mp3', true );
                play = true;
            }
        }
    },
    handleMouseMove: function( touchLocation ){
        if( ( touchLocation.x>117.5 && touchLocation.x<228.5 )&&
            ( touchLocation.y>482 && touchLocation.y<546 ) ){
            this.setTexture( texAudio );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/audio.png' ) );
    }
    });