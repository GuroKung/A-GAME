
describe( 'GameLayer', function() {
	
    it( 'when start health should be 100', function() {
        assert( this.health==100 );
    });
    it( 'should hide moniter when first create', function() {
        assert( isShow == false );
    });

});
