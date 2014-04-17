var showPrice = [ false, false, false, false , false];
var showScreen = false;
var Screen = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/screen.png' );
        this.setPosition( new cc.Point( 903, 475 ) );
        this.setVisible(false); 
    },
    handleClick: function( touchLocation ){
    	if( (touchLocation.x>1238.5&&touchLocation.x<1284.5)&&
            (touchLocation.y>685&&touchLocation.y<697) ){
        	console.log( 'Hide: Screen' );
            this.setVisible(false);
            showScreen = false;
        }

    },
    handleMouseMove: function( touchLocation ){
        if( (touchLocation.x>569&&touchLocation.x<676)&&
            (touchLocation.y>534&&touchLocation.y<625) ){
            console.log( 'Focus: Upgrade Icon 1' );
            showPrice[0] = true;
        }
        else if( (touchLocation.x>759&&touchLocation.x<852)&&
            (touchLocation.y>530&&touchLocation.y<625) ){
            console.log( 'Focus: Upgrade Icon 2' );
            showPrice[1] = true;
        }
        else if( (touchLocation.x>914&&touchLocation.x<1029)&&
            (touchLocation.y>531&&touchLocation.y<626) ){
            console.log( 'Focus: Upgrade Icon 3' );
            showPrice[2] = true;
        }
        else if( (touchLocation.x>1093&&touchLocation.x<1200)&&
            (touchLocation.y>533&&touchLocation.y<617) ){
            console.log( 'Focus: Upgrade Icon 4' );
            showPrice[3] = true;
        }
        else if( (touchLocation.x>821&&touchLocation.x<971)&&
            (touchLocation.y>293&&touchLocation.y<437) ){
            console.log( 'Focus: Money Maker' );
            showPrice[4] = true;
        }
        else {
            showPrice = [ false, false, false, false ,false ];
        }
    },
    show: function(){
    	showScreen = true;
    	this.setVisible( true );
    	console.log( 'Show: Screen' );
    },
    hide: function(){
        showScreen = false;
        this.setVisible( false );
    }
});