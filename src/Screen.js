var showScreen = false;
var Screen = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/screen.png' );
        this.setPosition( new cc.Point( 903, 475 ) );
        this.setVisible(false); 
    },
    handleClick: function( touchLocation ){
    	if( (touchLocation.x>1238.5&&touchLocation.x<1283.5)&&
            (touchLocation.y>688&&touchLocation.y<697) ){
        	console.log( 'Hide: Screen' );
            this.setVisible(false);
            showScreen = false;
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