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
            (touchLocation.y>685&&touchLocation.y<697) || !cc.rectContainsPoint( thisIsMoniter.getBoundingBox() , touchLocation ) ){
            this.setVisible(false);
            showScreen = false;
        }
        if( (touchLocation.x>569&&touchLocation.x<676)&&
            (touchLocation.y>534&&touchLocation.y<625) && money >= art[2]){
            money -= art[2];
            art[2] += 50;
            art[1] += 5;
        }
        if( (touchLocation.x>759&&touchLocation.x<852)&&
            (touchLocation.y>530&&touchLocation.y<625) && money >= sound[2] ){
            money -= sound[2];
            sound[2] += 50;
            sound[1] += 5;
        }
        if( (touchLocation.x>914&&touchLocation.x<1029)&&
            (touchLocation.y>531&&touchLocation.y<626) && money >= writing[2] ){
            money -= writing[2];
            writing[2] += 50;
            writing[1] += 5;
        }
        if( (touchLocation.x>1093&&touchLocation.x<1200)&&
            (touchLocation.y>533&&touchLocation.y<617) && money >= code[2] ){
            money -= code[2];
            code[2] += 50;
            code[1] += 5;
        }
        if( (touchLocation.x>821&&touchLocation.x<971)&&
            (touchLocation.y>293&&touchLocation.y<437) && health >= 30){
            cc.AudioEngine.getInstance().playEffect( 'sound/cash.mp3' );
            money += 250;
            health -= 30; 
        }

    },
    handleMouseMove: function( touchLocation ){
        if( (touchLocation.x>569&&touchLocation.x<676)&&
            (touchLocation.y>534&&touchLocation.y<625) ){
            showPrice[0] = true;
        }
        else if( (touchLocation.x>759&&touchLocation.x<852)&&
            (touchLocation.y>530&&touchLocation.y<625) ){
            showPrice[1] = true;
        }
        else if( (touchLocation.x>914&&touchLocation.x<1029)&&
            (touchLocation.y>531&&touchLocation.y<626) ){
            showPrice[2] = true;
        }
        else if( (touchLocation.x>1093&&touchLocation.x<1200)&&
            (touchLocation.y>533&&touchLocation.y<617) ){
            showPrice[3] = true;
        }
        else if( (touchLocation.x>821&&touchLocation.x<971)&&
            (touchLocation.y>293&&touchLocation.y<437) ){
            showPrice[4] = true;
        }
        else {
            showPrice = [ false, false, false, false ,false ];
        }
    },
    show: function(){
    	showScreen = true;
    	this.setVisible( true );
    },
    hide: function(){
        showScreen = false;
        this.setVisible( false );
    }
});