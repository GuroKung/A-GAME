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
        if ( num >= 1 && num <= 3 ){ // 3%  
            money += 1500;
            return "You just win the Lottery \n   You've got 1,500 ฿";
        } 
        else if ( num >= 4 && num <= 10 ) { // 7%
            health += 50;
            return "Boosted by M150 !!! \n    Your HP 50 ++";
        }
        else if ( num >= 11 && num <= 20 ){ // 10%
            money += 300 ;
            return "Mommy give you money \n     You've got 300 ฿";
        }
        else if ( num >= 21 && num <= 25  ) { // 5%
            if( code[0] >= 90 ) code[0] = 100;
            else  code[0] += 10 ;
            return "Manatsawin Bless you \n      Code 10 ++";
        }
        else if ( num >= 26 && num <= 30 ){ // 5%
            if( art[0] >= 90 ) art[0] = 100;
            else art[0] += 10 ;
            return "You've got new Pen Mouse \n           Art 10 ++";
        }
        else if ( num >= 31 && num <= 35 ){ // 5%
            if( sound[0] >= 90 ) sound[0] = 100; 
            else sound[0] += 10 ;
            return "You just wake up and feel like Freddie Mercury \n                        Sound 10 ++";
        }
        else if ( num >= 36 && num <= 40){ // 5%
            if( writing[0] >= 90 ) writing[0] = 100; 
            else writing[0] += 10 ;
            return "You've got an idea by reading Pantip \n              Writing 10 ++";
        }
        else if ( num >= 41 && num <= 50 ){ // 10 %
            money -= 400 ;
            return "                       You've paid for SKE \n                         You've lost 400 ฿ \n"
            +" Warning: Money can be negative only by this event";
        }
        else if ( num >= 51 && num <= 55  ) { // 5%
            if( code[0] <= 10 ) code[0] = 0;
            else code[0] -= 10 ;
            return "Your RAM is broken \n      Code 10 --";
        }
        else if ( num >= 56 && num <= 60 ){ // 5%
            if( art[0] <= 10 ) art[0] = 0;
            else art[0] -= 10 ;
            return "Your Pen Mouse is gone \n           Art 10 --";
        }
        else if ( num >= 61 && num <= 65 ){ // 5%
            if( sound[0] <= 10 ) sound[0] = 0;  
            else sound[0] -= 10 ; 
            return "Your speaker blow up \n        Sound 10 --";
        }
        else if ( num >= 66 && num <= 70){ // 5%
            if( writing[0] <= 10 ) writing[0] = 0 ;
            else writing[0] -= 10 ;
            return "You accidentally delete the work file \n               Writing 10 --";
        }
        else if ( num >= 71 && num <= 73 ){ // 3%
            var num = 1+Math.floor(Math.random() * 4);
            var dec = 5*( 1+Math.floor( Math.random() * 10 ) );
            if( num == 1 ) code[0] -= dec ;
            else if ( num == 2) art[0] -= dec ;
            else if ( num == 3) sound[0] -= dec ;
            else if ( num == 4 ) writing[0] -= dec ;
            return " JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL JL \n  Your progress is randomly decreased between 5-50 \n"
            +" Warning: Progress can be negative only by this event";
        }
        else return 'Nothing Happened';
    },
    show: function(){
    	Message.isShow = true;
    	this.setVisible( true );
    }
});
Message.isShow = false;