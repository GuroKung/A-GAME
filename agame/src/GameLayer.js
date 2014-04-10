var day = 1;
var health = 100;
var money = 500;
var code = 10;
var art = 30;
var sound = 20;
var writing = 45;
var GameLayer = cc.LayerColor.extend({
    init: function() {
        this._super( new cc.Color4B( 127, 127, 127, 255 ) );
        this.setPosition( new cc.Point( 0, 0 ) );

        this.room = new Background();
        this.addChild( this.room );//background

        this.createObjects(); // add objects
        this.createLabel(); //add status label
        this.createParameter();//add parameter

        this.setMouseEnabled(true); // use mouse
        this.updateMoney();

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

        this.monitor = new Monitor();
        this.addChild( this.monitor ,1 );
    },
    createParameter: function(){
        var draw = cc.DrawNode.create();
        this.addChild(draw);        
        draw.drawSegment( new cc.Point(1000,657), new cc.Point(1003+(3*code),657),10, new cc.Color4F(0.133,0.69,0.298,1)); // code
        draw.drawSegment( new cc.Point(1000,621), new cc.Point(1003+(3*art),621),10, new cc.Color4F(0.894,0.035,0.314,1)); // art
        draw.drawSegment( new cc.Point(1000,584), new cc.Point(1003+(3*sound),584),10, new cc.Color4F(0,0.635,0.909,1)); // sound 
        draw.drawSegment( new cc.Point(1000,545), new cc.Point(1003+(3*writing),545),10, new cc.Color4F(0.423,0.184,0.517,1)); // writing
    },
    createLabel: function(){
        this.dayLabel = cc.LabelTTF.create( 'DAY: ', 'Stencil', 60 );
        this.dayLabel.setPosition( new cc.Point( 118, 715 ) );
        this.addChild( this.dayLabel ); //day:

        this.dayNum = cc.LabelTTF.create( day, 'Stencil', 60 );
        this.dayNum.setPosition( new cc.Point( 215, 715 ) );
        this.addChild( this.dayNum );

        this.healthLabel = cc.LabelTTF.create( 'HEALTH: ', 'Stencil', 60 );
        this.healthLabel.setPosition( new cc.Point( 175, 650 ) );
        this.addChild( this.healthLabel );//health:
        
        this.healthNum = cc.LabelTTF.create(health, 'Stencil', 60 );
        this.healthNum.setPosition( new cc.Point( 350, 650 ) );
        this.addChild( this.healthNum );

        this.moneyLabel = cc.LabelTTF.create( 'MONEY: ', 'Stencil', 60 );
        this.moneyLabel.setPosition( new cc.Point( 160, 585 ) );
        this.addChild( this.moneyLabel );//money:

        this.moneyNum = cc.LabelTTF.create( money+' ฿', 'Stencil', 60 );
        this.moneyNum.setPosition( new cc.Point( 315, 585 ) );
        this.addChild( this.moneyNum );
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
    },
     onMouseDown:function ( e ){      
        var pos = e.getLocation();
        console.log( 'x: '+ pos.x + ' y: ' + pos.y ); 
        if(this.PC.handleClick( pos )){
            this.monitor.show();             
        }
        if (isShow) {
            console.log('Being show');
            this.monitor.handleClick( pos );
        }                   
        // if moniter is being show others object can't click, but end button
        if(!isShow){  
            if( health > 0 ){     
                this.TV.handleClick( pos );
                this.audio.handleClick( pos );
            } 
            this.endButton.handleClick( pos );       
         }
        this.update();
     },
    onMouseMoved:function( e ){
        var pos = e.getLocation();     
        // if moniter is being show others object can't glow
        if(!isShow){ 
            this.endButton.handleMouseMove( pos );
            this.PC.handleMouseMove( pos );
            this.TV.handleMouseMove( pos );
            this.audio.handleMouseMove( pos );
        }        
    }
});

var StartScene = cc.Scene.extend({
    onEnter: function() {
        this._super();
        var layer = new GameLayer();
        layer.init();
        this.addChild( layer );
    }
});

