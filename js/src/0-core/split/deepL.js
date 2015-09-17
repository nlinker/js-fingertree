/**
* @param {Array} left
* @param {FingerTree} middle
* @param {Digit} right
*/
function deepL ( M , left , middle , right ) {

	if ( left.length === 0 ) {

		if ( middle.empty( ) ) return _from_digit( M , right ) ;

		return new Deep( M , middle.head( ).digit( ) , delay( ( ) => middle.tail( ) ) , right ) ;
	}

	return new Deep( M , _digit( left ) , middle , right ) ;

}