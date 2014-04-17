var texAudio = cc.TextureCache.getInstance().addImage( 'images/audio_2.png' );
var Audio = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/audio.png' );
        this.setPosition(new cc.Point( 175, 517 ) );  

    },
    handleClick:function( touchLocation ){
        var boxAudio = this.getBoundingBox();
    	if(cc.rectContainsPoint( boxAudio, touchLocation ) ){
        	console.log( 'Click: Audio' );

        }
    },
    handleMouseMove: function( touchLocation ){
        var boxAudio = this.getBoundingBox();  
            if( cc.rectContainsPoint ( boxAudio, touchLocation ) ){
            console.log( 'Focus: Audio' );
            this.setTexture( texAudio );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/audio.png' ) );
    }
    });