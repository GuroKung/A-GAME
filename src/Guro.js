var Guro = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/guro.png' );
        this.setPosition(new cc.Point( 477, 308 ) );  
        this.schedule ( this.complain , 10, cc.RepeatForever,1);

    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        var boxGuro = this.getBoundingBox();  
            if( cc.rectContainsPoint ( boxGuro, touchLocation ) ){
            console.log( 'Focus: Guro' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro_3.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro.png' ) );
    },
    complain: function(){
        var animation = new cc.Animation.create();
        animation.setDelayPerUnit( 0.1 );
        animation.setLoops(5);
        animation.addSpriteFrameWithFile( 'images/guro.png' );
        animation.addSpriteFrameWithFile( 'images/guro_2.png' );
        animation.addSpriteFrameWithFile( 'images/guro_3.png' );
        animation.addSpriteFrameWithFile( 'images/guro.png' );

        var movingAction = cc.Animate.create( animation );
        return this.runAction( movingAction );
    }
    });