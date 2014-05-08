var isShow = false;
var Monitor = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/monitor.png' );
        this.setPosition( new cc.Point( (screenWidth/2)+220, (screenHeight/2)+20 ) );
        thisIsMoniter = this ;
        this.setVisible(false); //hide it when first create
    },
    handleClick: function( touchLocation ){
    	var boxMonitor = this.getBoundingBox();
    	if( !cc.rectContainsPoint( boxMonitor, touchLocation ) ){
            this.setVisible(false);
            isShow = false;
        }
    },
    show: function(){
    	isShow = true;
    	this.setVisible(true);
    }
});
thisIsMoniter = null ;