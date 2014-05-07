var Message = cc.Sprite.extend( {
    ctor: function() {
        this._super();
        this.initWithFile( 'images/message.png' );
        this.setPosition( new cc.Point( (screenWidth/2), (screenHeight/2) ) );
        this.setVisible( false ); //hide it when first create
    },
    handleClick: function( touchLocation ){
    	Message.isShow = false;
        this.setVisible( false );
    },
    randomEvent: function(){
        var num = 1+Math.floor(Math.random() * 100);
        if ( num >= 1 && num <= 3 ){
            money += 1500;
            return "You just win the lottery \n  You've got 1,500 ฿";
        } 
        else if ( num >= 10 && num <= 20 ){
            money += 300
            return "Mommy give you money \n   You've got 300 ฿";
        }
        else if ( num >= 21 && num >= 30 && code[0] >= 10 ) {
            code[0] -= 10 ;
            return "Your RAM is broken \n     Code 10 --";
        }
        else return 'Nothing Happened';
    },
    show: function(){
    	Message.isShow = true;
    	this.setVisible( true );
    }
});
Message.isShow = false;