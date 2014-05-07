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
        var num = 1+Math.floor(Math.random() * 8);
        switch (num) {
        case 1:
            return " I'm so tired ";
            break;
        case 2:
            return ' Wanna sleep O<-< ';
            break;
        case 3:
            return ' Final exam is coming!! ';
            break;
        case 4:
            return ' Why I have to do this? ';
            break;
        case 5:
            return " Let's code ";
            break;
        case 6:
            return ' DAMN U PROJECT!! ';
            break;
        case 7:
            return ' Please give me A ';
            break;
        case 8:
            return ' BUG BUG BUG BUG BUG ';
            break;
        }
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