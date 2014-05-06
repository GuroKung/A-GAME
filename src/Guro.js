var isComplain = false;
var Guro = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/guro.png' );
        this.setPosition(new cc.Point( 477, 308 ) );  
        this.schedule ( this.complain , 10, cc.RepeatForever,0);

    },
    handleClick:function( touchLocation ){

    },
    handleMouseMove: function( touchLocation ){
        var boxGuro = this.getBoundingBox();  
            if( cc.rectContainsPoint ( boxGuro, touchLocation ) ){
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro_3.png' ) );
            talk = true;
        }
        else {
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/guro.png' ) );
            talk = false;
        }
    },
    chatting: function(){
        var num = 1+Math.floor(Math.random() * 5);
        if( num == 1 ) return " I'm so tried ";
        else if ( num == 2 ) return ' Wanna sleep O<-< ';
        else if ( num == 3) return ' Final exam is coming!! ';
        else if ( num == 4 ) return ' Why I have to do this? ';
        else return " Let's code ";
    },
    complain: function(){
        var animation = new cc.Animation.create();
        animation.setDelayPerUnit( 0.1 );
        animation.setLoops(5);
        animation.addSpriteFrameWithFile( 'images/guro.png' );
        animation.addSpriteFrameWithFile( 'images/guro_2.png' );
        animation.addSpriteFrameWithFile( 'images/guro_3.png' );
        animation.addSpriteFrameWithFile( 'images/guro.png' );
        
        isComplain = true;

        var movingAction = cc.Animate.create( animation );
        return this.runAction( movingAction );
    }
    });