'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports._from_small_list = _from_small_list;

var _tree = require('../../3-tree');

var _digit = require('../../1-digit');

function _from_small_list(M, list) {

	switch (list.length) {

		case 0:
			return new _tree.Empty(M);
		case 1:
			return new _tree.Single(M, list[0]);
		case 2:
			return new _tree.Deep(M, new _digit.One(list[0]), new _tree.Empty(M), new _digit.One(list[1]));
		case 3:
			return new _tree.Deep(M, new _digit.Two(list[0], list[1]), new _tree.Empty(M), new _digit.One(list[2]));
		default:
			throw new Error('second argument has wrong length');

	}
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvX2Zhc3QvX2Zyb21fc21hbGxfbGlzdC5qcyJdLCJuYW1lcyI6WyJfZnJvbV9zbWFsbF9saXN0IiwiTSIsImxpc3QiLCJsZW5ndGgiLCJFcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFHZ0JBLGdCLEdBQUFBLGdCOztBQUhoQjs7QUFDQTs7QUFFTyxTQUFTQSxnQkFBVCxDQUE0QkMsQ0FBNUIsRUFBZ0NDLElBQWhDLEVBQXVDOztBQUU3QyxTQUFTQSxLQUFLQyxNQUFkOztBQUVDLE9BQUssQ0FBTDtBQUFTLFVBQU8sZ0JBQVdGLENBQVgsQ0FBUDtBQUNULE9BQUssQ0FBTDtBQUFTLFVBQU8saUJBQVlBLENBQVosRUFBZ0JDLEtBQUssQ0FBTCxDQUFoQixDQUFQO0FBQ1QsT0FBSyxDQUFMO0FBQVMsVUFBTyxlQUFVRCxDQUFWLEVBQWMsZUFBU0MsS0FBSyxDQUFMLENBQVQsQ0FBZCxFQUFtQyxnQkFBV0QsQ0FBWCxDQUFuQyxFQUFvRCxlQUFTQyxLQUFLLENBQUwsQ0FBVCxDQUFwRCxDQUFQO0FBQ1QsT0FBSyxDQUFMO0FBQVMsVUFBTyxlQUFVRCxDQUFWLEVBQWMsZUFBU0MsS0FBSyxDQUFMLENBQVQsRUFBbUJBLEtBQUssQ0FBTCxDQUFuQixDQUFkLEVBQTZDLGdCQUFXRCxDQUFYLENBQTdDLEVBQThELGVBQVNDLEtBQUssQ0FBTCxDQUFULENBQTlELENBQVA7QUFDVDtBQUFTLFNBQU0sSUFBSUUsS0FBSixDQUFXLGtDQUFYLENBQU47O0FBTlY7QUFVQSIsImZpbGUiOiJfZnJvbV9zbWFsbF9saXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRW1wdHkgLCBTaW5nbGUgLCBEZWVwIH0gZnJvbSAnLi4vLi4vMy10cmVlJyA7XG5pbXBvcnQgeyBPbmUgLCBUd28gfSBmcm9tICcuLi8uLi8xLWRpZ2l0JyA7XG5cbmV4cG9ydCBmdW5jdGlvbiBfZnJvbV9zbWFsbF9saXN0ICggTSAsIGxpc3QgKSB7XG5cblx0c3dpdGNoICggbGlzdC5sZW5ndGggKSB7XG5cblx0XHRjYXNlIDAgOiByZXR1cm4gbmV3IEVtcHR5KCBNICkgO1xuXHRcdGNhc2UgMSA6IHJldHVybiBuZXcgU2luZ2xlKCBNICwgbGlzdFswXSApIDtcblx0XHRjYXNlIDIgOiByZXR1cm4gbmV3IERlZXAoIE0gLCBuZXcgT25lKCBsaXN0WzBdICkgLCBuZXcgRW1wdHkoIE0gKSAsIG5ldyBPbmUoIGxpc3RbMV0gKSApIDtcblx0XHRjYXNlIDMgOiByZXR1cm4gbmV3IERlZXAoIE0gLCBuZXcgVHdvKCBsaXN0WzBdICwgbGlzdFsxXSApICwgbmV3IEVtcHR5KCBNICkgLCBuZXcgT25lKCBsaXN0WzJdICkgKSA7XG5cdFx0ZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCAnc2Vjb25kIGFyZ3VtZW50IGhhcyB3cm9uZyBsZW5ndGgnICkgO1xuXG5cdH1cblxufVxuIl19