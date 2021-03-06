var day = 1;
var health = 100;
var money = 500;
var code = [0,5,500];
var art = [0,5,500];
var sound = [0,5,500];
var writing = [0,5,500];
// [ current progress , update per click , upgrade money ]
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.room = new Background();
        this.addChild( this.room );//background

        this.drawParameter = cc.DrawNode.create();
        this.addChild( this.drawParameter , 1 ); 

        this.createObjects(); // add objects
        this.createStatLabel(); //add status label
        this.createParameter();//add parameter
        this.createIcons();// add icons
        this.createStatIcon();// add status icon

        this.guro = new Guro();
        this.addChild( this.guro );

        this.dialog =  this.createLabel( 'Say  Ahhhhhh!!','Viner Hand ITC', 34, false, 265 , 115 );
        this.addChild(  this.dialog );

        this.setMouseEnabled(true); // use mouse
        this.updateMoney();
        
        cc.AudioEngine.getInstance().playMusic( 'sound/theme.mp3', true );
        this.schedule ( this.updateChat , 10, cc.RepeatForever , 0);

        return true;
    },
    createObjects: function(){
        this.proframe = new ProFrame();
        this.addChild( this.proframe );

        this.endButton = new EndButton();
        this.addChild( this.endButton );

        this.PC = new PC();
        this.addChild( this.PC );

        this.TV = new TV();
        this.addChild( this.TV );

        this.audio = new Audio();
        this.addChild( this.audio );

        this.chat = new Chat();
        this.addChild( this.chat );

        this.message = new Message();
        this.addChild( this.message , 1 );

        this.monitor = new Monitor();
        this.addChild( this.monitor , 1 );

        this.updateScreen = new Screen();
        this.addChild( this.updateScreen ,2 );

    },
    createStatIcon: function(){      
        this.StatIcon1 = this.createLabel( 'Art: '+art[1] +'++  Health: 40--', 'Viner Hand ITC', 25 , false ,895, 618 );
        this.addChild( this.StatIcon1 , 1 );

        this.StatIcon2 = this.createLabel( 'Sound: '+sound[1] +'++  Health: 40--', 'Viner Hand ITC', 25 , false ,895, 520 );
        this.addChild( this.StatIcon2 , 1 );

        this.StatIcon3 =  this.createLabel( 'Writing: '+writing[1] +'++  Health: 40--', 'Viner Hand ITC', 25 , false ,895, 408 );
        this.addChild( this.StatIcon3 , 1 );

        this.StatIcon4 = this.createLabel( 'Code: '+code[1] +'++  Health: 40--', 'Viner Hand ITC', 25 , false ,895, 300 );
        this.addChild( this.StatIcon4 , 1 );

        this.price1 = this.createLabel( 'Upgrade Art : '+art[2]+' ฿ ', 'Gungsuh', 25 , false ,650, 488 );
        this.addChild( this.price1 , 2 );

        this.price2 = this.createLabel( 'Upgrade Sound : '+sound[2]+' ฿ ', 'Gungsuh', 25 , false ,819, 488 );
        this.addChild( this.price2 , 2 );

        this.price3 = this.createLabel( 'Upgrade Writing : '+writing[2]+' ฿ ', 'Gungsuh', 25 , false ,997, 488 );
        this.addChild( this.price3 , 2 );

        this.price4 = this.createLabel( 'Upgrade Code : '+code[2]+' ฿ ', 'Gungsuh', 25 , false ,1150, 488 );
        this.addChild( this.price4 , 2 );

        this.price5 = this.createLabel( 'Money 250 ฿ ++  Health 30 --', 'Gungsuh', 22 , false ,1128, 373 );
        this.addChild( this.price5 , 2 );
    },
    createIcons: function(){
        this.icon1 = new Icon1();
        this.addChild( this.icon1 , 1);

        this.icon2 = new Icon2();
        this.addChild( this.icon2 , 1);

        this.icon3 = new Icon3();
        this.addChild( this.icon3 , 1);

        this.icon4 = new Icon4();
        this.addChild( this.icon4 , 1);

        this.fox = new Fox();
        this.addChild( this.fox , 1);
    },
    hideIcons: function(){
        this.StatIcon1.setVisible(false);
        this.StatIcon2.setVisible(false);
        this.StatIcon3.setVisible(false); 
        this.StatIcon4.setVisible(false);   

        this.price1.setVisible(false);
        this.price2.setVisible(false);
        this.price3.setVisible(false);
        this.price4.setVisible(false);
        this.price5.setVisible(false);
    },
    createParameter: function(){ 
        this.drawParameter.clear();      
        this.drawParameter.drawSegment( new cc.Point(1000,657), new cc.Point(1003+(3*code[0]),657),10, new cc.Color4F(0.133,0.69,0.298,1)); // code
        this.drawParameter.drawSegment( new cc.Point(1000,621), new cc.Point(1003+(3*art[0]),621),10, new cc.Color4F(0.894,0.035,0.314,1)); // art
        this.drawParameter.drawSegment( new cc.Point(1000,584), new cc.Point(1003+(3*sound[0]),584),10, new cc.Color4F(0,0.635,0.909,1)); // sound 
        this.drawParameter.drawSegment( new cc.Point(1000,545), new cc.Point(1003+(3*writing[0]),545),10, new cc.Color4F(0.423,0.184,0.517,1)); // writing    
    },
    createStatLabel: function(){
        this.dayLabel = this.createLabel( 'DAY: ', 'Stencil', 60 , true ,118, 715 , 'white');
        this.addChild( this.dayLabel ); //day:

        this.dayNum = this.createLabel( day, 'Stencil', 60 , true ,215, 715 , 'white');
        this.addChild( this.dayNum );

        this.healthLabel = this.createLabel( 'HEALTH: ', 'Stencil', 60 , true ,175, 650 , 'white');
        this.addChild( this.healthLabel );//health:
        
        this.healthNum = this.createLabel( health, 'Stencil', 60 , true ,350, 650 , 'white');
        this.addChild( this.healthNum );

        this.moneyLabel = this.createLabel( 'MONEY: ', 'Stencil', 60 , true ,160, 585 , 'white');
        this.addChild( this.moneyLabel );//money:

        this.moneyNum = this.createLabel( money+' ฿', 'Stencil', 60 , true ,315, 585 , 'white');
        this.addChild( this.moneyNum );

        this.messageLabel = this.createLabel( 'Nothing Happened ' , 'Tahoma', 25 , false ,680, 380 );
        this.addChild( this.messageLabel , 1 );

    },
    createLabel: function( str, font, size, show, posx , posy , c){

        this.Temp = cc.LabelTTF.create( str, font, size );
        if( c != 'white' ) this.Temp.setColor( new cc.Color3B( 50, 50, 50 ) );
        this.Temp.setVisible( show );
        this.Temp.setPosition( new cc.Point( posx, posy ) );

        return this.Temp;
    },
    updateMoney: function() {      
        var pos = new cc.Point( 330, 585 );
        // when money is increase change the position
        var temp =  money;   
        for( var i = 0; i<temp ; i++ ){
            temp /= 10;
             this.moneyNum.setPosition( new cc.Point( pos.x+55, pos.y ) );
        }
    },
    update: function() {
        this.createParameter();
        this.dayNum.setString( day );
        if( health > 0 ) {
            this.healthNum.setString( health );
            this.healthNum.setFontName( 'Stencil' );
            this.healthNum.setColor( new cc.Color3B( 255, 255, 255 ) );
            this.healthNum.setPosition( new cc.Point( 350, 650 ) );
        }
        else {
            this.healthNum.setString( 'RUN OUT' );
            this.healthNum.setFontName( 'Viner Hand ITC' );
            this.healthNum.setColor( new cc.Color3B( 255, 0, 0 ) );
            this.healthNum.setPosition( new cc.Point( 430, 630 ) );  
        }
        this.moneyNum.setString( money + ' ฿' );
        this.updateMoney();
        this.setIcon();
        
    },
    setIcon: function (){
        this.StatIcon1.setString( 'Art: '+art[1] +'++  Health: 40--' );
        this.StatIcon2.setString( 'Sound: '+sound[1] +'++  Health: 40--' );
        this.StatIcon3.setString( 'Writing: '+writing[1] +'++  Health: 40--' );
        this.StatIcon4.setString( 'Code: '+code[1] +'++  Health: 40--' );

        this.price1.setString( 'Upgrade Art : '+art[2]+' ฿ ' );
        this.price2.setString( 'Upgrade Sound : '+sound[2]+' ฿ ' );
        this.price3.setString( 'Upgrade Writing : '+writing[2]+' ฿ ' );
        this.price4.setString( 'Upgrade Code : '+code[2]+' ฿ ' );
    },

    checkMouseMoved: function( pos ){
        if(isShow){
            if( showScreen ){
                this.updateScreen.handleMouseMove( pos );
                if( showPrice[0] == true ) this.price1.setVisible(true);
                if( showPrice[1] == true ) this.price2.setVisible(true);
                if( showPrice[2] == true ) this.price3.setVisible(true);
                if( showPrice[3] == true ) this.price4.setVisible(true);
                if( showPrice[4] == true ) this.price5.setVisible(true);
            }
            if( !showScreen ){
                this.icon1.handleMouseMove( pos );
                this.icon2.handleMouseMove( pos );
                this.icon3.handleMouseMove( pos );
                this.icon4.handleMouseMove( pos );
                this.fox.handleMouseMove( pos );

                if( focusIcon1 ) this.StatIcon1.setVisible(true);
                if( focusIcon2 ) this.StatIcon2.setVisible(true);
                if( focusIcon3 ) this.StatIcon3.setVisible(true);
                if( focusIcon4 ) this.StatIcon4.setVisible(true);
            }
        }
        if(!isShow){
            this.endButton.handleMouseMove( pos );
            this.PC.handleMouseMove( pos );
            this.TV.handleMouseMove( pos );
            this.audio.handleMouseMove( pos );
        } 
    },
    clickMoniterisShow: function( pos ){
        this.icon1.show();
        this.icon2.show();
        this.icon3.show();
        this.icon4.show();
        this.fox.show();           
       if( showScreen ){
             this.updateScreen.handleClick( pos );
        }
        if( !showScreen ){
            if ( this.fox.handleClick( pos ) ){
                this.updateScreen.show();
             }
            if( health >= 40 ){  
                this.icon1.handleClick( pos );
                this.icon2.handleClick( pos );
                this.icon3.handleClick( pos );
                this.icon4.handleClick( pos );
            } 
                
        }
        this.monitor.handleClick( pos );
    },
    clickMoniterisHide: function( pos ){
        this.icon1.hide();
        this.icon2.hide();
        this.icon3.hide();
        this.icon4.hide();
        this.fox.hide(); 
        this.audio.handleClick( pos ); 
        if( money >= 100 ) {
           this.TV.handleClick( pos );
        }
        if( this.endButton.handleClick( pos ) && day <= 20 ){
            this.message.show();
            this.messageLabel.setVisible( true );
            this.messageLabel.setString( this.message.randomEvent() );
        }
        if( day > 20 ) this.changeScene();   
    },
    checkMouseDown: function( pos ){
        if( this.PC.handleClick( pos ) ){
            this.monitor.show();           
        }
        if ( isShow ) {
            this.clickMoniterisShow( pos );
        }                   
        if( !isShow ){
            this.clickMoniterisHide( pos );
         }
    },
    resetLayer: function(){
         day = 1;
        health = 100;
        money = 500;
        code = [0,5,500];
        art = [0,5,500];
        sound = [0,5,500];
        writing = [0,5,500];
    },
    changeScene: function(){
        var scene = GameOver.scene();
        var gameTransition = cc.TransitionFade.create(3, scene);
        cc.Director.getInstance().replaceScene(gameTransition);
    },
    openChat: function(){
        this.dialog.setString( this.guro.chatting() );
        this.chat.show();
        this.dialog.setVisible( true );       
    },
    hideChat: function(){
        this.dialog.setVisible( false );
        this.chat.hide();
        isComplain = false; 
    },
    updateChat: function(){
        this.schedule ( this.openChat , 0, 1, 0);
        this.schedule ( this.hideChat , 2.25 , 1, 0);
    },
    chatting: function(){              
        if( talk == true && isComplain == false) {
            this.dialog.setString( 'Say  Ahhhhhh!!' );
            this.chat.show();
            this.dialog.setVisible( true );
        }
        else if(isComplain == false && talk == false){
            this.chat.hide();
            this.dialog.setVisible( false );
        }  
    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        //console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 
        if( !Message.isShow ) this.checkMouseDown( pos );
        else {
            this.message.handleClick( pos );
            this.messageLabel.setVisible( false );
        }
        this.update();
     },
    onMouseMoved:function( e ){
        var pos = e.getLocation();
        this.hideIcons();
        if( !Message.isShow ) {
            this.guro.handleMouseMove( pos );
            this.checkMouseMoved( pos );
        }     
        this.chatting();              
    }
});

var GameLayerScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

GameLayer.scene = function () {
    var scene = cc.Scene.create();
    var layer = new GameLayer();
    layer.resetLayer();
    layer.init();
    scene.addChild(layer);
    return scene;
};