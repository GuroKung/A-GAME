var Fox = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/fox.png' );
        this.setPosition(new cc.Point( 585, 310 ) );
        this.setVisible(false);     
    },
    handleClick:function( touchLocation ){
        var boxFox = this.getBoundingBox();
    	if(cc.rectContainsPoint( boxFox, touchLocation ) ){
        	console.log( 'Click: Fox' );
            return true;
        }
        else return false;
    },
    handleMouseMove: function( touchLocation ){
        var boxFox = this.getBoundingBox();  
            if( cc.rectContainsPoint ( boxFox, touchLocation ) ){
            console.log( 'Focus: Fox' );
            this.setTexture( cc.TextureCache.getInstance().addImage( 'images/fox_2.png' ) );
        }
        else this.setTexture( cc.TextureCache.getInstance().addImage( 'images/fox.png' ) );
    },
    show: function(){
        this.setVisible(true);
    },
    hide: function(){
        this.setVisible(false);
    }
    });