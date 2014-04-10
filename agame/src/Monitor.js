var isShow = false;
var Monitor = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/monitor.png' );
        this.setPosition( new cc.Point( (screenWidth/2)+200, screenHeight/2 ) );
        this.setVisible(false); //hide the monitor when first create
    },
    handleClick: function( touchLocation ){
    	var boxMonitor = this.getBoundingBox();
    	if( !cc.rectContainsPoint( boxMonitor, touchLocation ) ){
        	console.log( 'Hide: Monitor' );
            this.setVisible(false);
            isShow = false;
        }
    },
    show: function(){
    	isShow = true;
    	this.setVisible(true);
    	console.log( 'Show: Monitor' );
    },
    isShow: function(){

    }
});