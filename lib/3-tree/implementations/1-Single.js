'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.Single = Single;

var _base = require('../base');

var _ = require('.');

var _core = require('../../0-core');

var _digit = require('../../1-digit');

function Single(M, element) {
	this.M = M;
	this.element = element;
	this.v = M.measure(element);
}

Single.prototype = new _base.Tree();

Single.prototype.measure = function () {
	return this.v;
};

Single.prototype.empty = function () {
	return false;
};

Single.prototype.head = function () {
	return this.element;
};

Single.prototype.last = function () {
	return this.element;
};

Single.prototype.tail = function () {
	return new _.Empty(this.M);
};

Single.prototype.init = function () {
	return new _.Empty(this.M);
};

Single.prototype.cons = function (value) {
	return new _.Deep(this.M, new _digit.One(value), new _.Empty((0, _core.cache)(this.M)), new _digit.One(this.element));
};

Single.prototype.push = function (value) {
	return new _.Deep(this.M, new _digit.One(this.element), new _.Empty((0, _core.cache)(this.M)), new _digit.One(value));
};

Single.prototype.concat = function (other) {
	return other.cons(this.element);
};

Single.prototype[Symbol.iterator] = regeneratorRuntime.mark(function _callee() {
	return regeneratorRuntime.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					_context.next = 2;
					return this.element;

				case 2:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, this);
});

/**
 * It is assumed that p(|this|) is true.
 */
Single.prototype.splitTree = function (p, i) {
	return new _core.Split(new _.Empty(this.M), this.element, new _.Empty(this.M));
};

Single.prototype.split = function (p) {
	return p(this.measure()) ? [new _.Empty(this.M), this] : [this, new _.Empty(this.M)];
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8zLXRyZWUvaW1wbGVtZW50YXRpb25zLzEtU2luZ2xlLmpzIl0sIm5hbWVzIjpbIlNpbmdsZSIsIk0iLCJlbGVtZW50IiwidiIsIm1lYXN1cmUiLCJwcm90b3R5cGUiLCJlbXB0eSIsImhlYWQiLCJsYXN0IiwidGFpbCIsImluaXQiLCJjb25zIiwidmFsdWUiLCJwdXNoIiwiY29uY2F0Iiwib3RoZXIiLCJTeW1ib2wiLCJpdGVyYXRvciIsInNwbGl0VHJlZSIsInAiLCJpIiwic3BsaXQiXSwibWFwcGluZ3MiOiI7Ozs7O1FBS2dCQSxNLEdBQUFBLE07O0FBTGhCOztBQUNBOztBQUNBOztBQUNBOztBQUVPLFNBQVNBLE1BQVQsQ0FBa0JDLENBQWxCLEVBQXNCQyxPQUF0QixFQUFnQztBQUN0QyxNQUFLRCxDQUFMLEdBQVNBLENBQVQ7QUFDQSxNQUFLQyxPQUFMLEdBQWVBLE9BQWY7QUFDQSxNQUFLQyxDQUFMLEdBQVNGLEVBQUVHLE9BQUYsQ0FBV0YsT0FBWCxDQUFUO0FBQ0E7O0FBRURGLE9BQU9LLFNBQVAsR0FBbUIsZ0JBQW5COztBQUVBTCxPQUFPSyxTQUFQLENBQWlCRCxPQUFqQixHQUEyQixZQUFhO0FBQ3ZDLFFBQU8sS0FBS0QsQ0FBWjtBQUNBLENBRkQ7O0FBSUFILE9BQU9LLFNBQVAsQ0FBaUJDLEtBQWpCLEdBQXlCLFlBQWE7QUFDckMsUUFBTyxLQUFQO0FBQ0EsQ0FGRDs7QUFJQU4sT0FBT0ssU0FBUCxDQUFpQkUsSUFBakIsR0FBd0IsWUFBYTtBQUNwQyxRQUFPLEtBQUtMLE9BQVo7QUFDQSxDQUZEOztBQUlBRixPQUFPSyxTQUFQLENBQWlCRyxJQUFqQixHQUF3QixZQUFhO0FBQ3BDLFFBQU8sS0FBS04sT0FBWjtBQUNBLENBRkQ7O0FBSUFGLE9BQU9LLFNBQVAsQ0FBaUJJLElBQWpCLEdBQXdCLFlBQWE7QUFDcEMsUUFBTyxZQUFXLEtBQUtSLENBQWhCLENBQVA7QUFDQSxDQUZEOztBQUlBRCxPQUFPSyxTQUFQLENBQWlCSyxJQUFqQixHQUF3QixZQUFhO0FBQ3BDLFFBQU8sWUFBVyxLQUFLVCxDQUFoQixDQUFQO0FBQ0EsQ0FGRDs7QUFJQUQsT0FBT0ssU0FBUCxDQUFpQk0sSUFBakIsR0FBd0IsVUFBV0MsS0FBWCxFQUFtQjtBQUMxQyxRQUFPLFdBQ04sS0FBS1gsQ0FEQyxFQUVOLGVBQVNXLEtBQVQsQ0FGTSxFQUdOLFlBQVcsaUJBQU8sS0FBS1gsQ0FBWixDQUFYLENBSE0sRUFJTixlQUFTLEtBQUtDLE9BQWQsQ0FKTSxDQUFQO0FBTUEsQ0FQRDs7QUFTQUYsT0FBT0ssU0FBUCxDQUFpQlEsSUFBakIsR0FBd0IsVUFBV0QsS0FBWCxFQUFtQjtBQUMxQyxRQUFPLFdBQ04sS0FBS1gsQ0FEQyxFQUVOLGVBQVMsS0FBS0MsT0FBZCxDQUZNLEVBR04sWUFBVyxpQkFBTyxLQUFLRCxDQUFaLENBQVgsQ0FITSxFQUlOLGVBQVNXLEtBQVQsQ0FKTSxDQUFQO0FBTUEsQ0FQRDs7QUFTQVosT0FBT0ssU0FBUCxDQUFpQlMsTUFBakIsR0FBMEIsVUFBV0MsS0FBWCxFQUFtQjtBQUM1QyxRQUFPQSxNQUFNSixJQUFOLENBQVksS0FBS1QsT0FBakIsQ0FBUDtBQUNBLENBRkQ7O0FBSUFGLE9BQU9LLFNBQVAsQ0FBaUJXLE9BQU9DLFFBQXhCLDRCQUFvQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUM3QixLQUFLZixPQUR3Qjs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxDQUFwQzs7QUFJQTs7O0FBR0FGLE9BQU9LLFNBQVAsQ0FBaUJhLFNBQWpCLEdBQTZCLFVBQVdDLENBQVgsRUFBZUMsQ0FBZixFQUFtQjtBQUMvQyxRQUFPLGdCQUFXLFlBQVcsS0FBS25CLENBQWhCLENBQVgsRUFBaUMsS0FBS0MsT0FBdEMsRUFBZ0QsWUFBVyxLQUFLRCxDQUFoQixDQUFoRCxDQUFQO0FBQ0EsQ0FGRDs7QUFJQUQsT0FBT0ssU0FBUCxDQUFpQmdCLEtBQWpCLEdBQXlCLFVBQVdGLENBQVgsRUFBZTtBQUN2QyxRQUFPQSxFQUFHLEtBQUtmLE9BQUwsRUFBSCxJQUF1QixDQUFFLFlBQVcsS0FBS0gsQ0FBaEIsQ0FBRixFQUF3QixJQUF4QixDQUF2QixHQUF3RCxDQUFFLElBQUYsRUFBUyxZQUFXLEtBQUtBLENBQWhCLENBQVQsQ0FBL0Q7QUFDQSxDQUZEIiwiZmlsZSI6IjEtU2luZ2xlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVHJlZSB9IGZyb20gJy4uL2Jhc2UnIDtcbmltcG9ydCB7IEVtcHR5ICwgRGVlcCB9IGZyb20gJy4nIDtcbmltcG9ydCB7IF9FTVBUWSAsIGNhY2hlICwgU3BsaXQgfSBmcm9tICcuLi8uLi8wLWNvcmUnIDtcbmltcG9ydCB7IE9uZSB9IGZyb20gJy4uLy4uLzEtZGlnaXQnIDtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpbmdsZSAoIE0gLCBlbGVtZW50ICkge1xuXHR0aGlzLk0gPSBNIDtcblx0dGhpcy5lbGVtZW50ID0gZWxlbWVudCA7XG5cdHRoaXMudiA9IE0ubWVhc3VyZSggZWxlbWVudCApIDtcbn1cblxuU2luZ2xlLnByb3RvdHlwZSA9IG5ldyBUcmVlKCApIDtcblxuU2luZ2xlLnByb3RvdHlwZS5tZWFzdXJlID0gZnVuY3Rpb24gKCApIHtcblx0cmV0dXJuIHRoaXMudiA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICggKSB7XG5cdHJldHVybiBmYWxzZSA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZS5oZWFkID0gZnVuY3Rpb24gKCApIHtcblx0cmV0dXJuIHRoaXMuZWxlbWVudCA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZS5sYXN0ID0gZnVuY3Rpb24gKCApIHtcblx0cmV0dXJuIHRoaXMuZWxlbWVudCA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZS50YWlsID0gZnVuY3Rpb24gKCApIHtcblx0cmV0dXJuIG5ldyBFbXB0eSggdGhpcy5NICkgO1xufSA7XG5cblNpbmdsZS5wcm90b3R5cGUuaW5pdCA9IGZ1bmN0aW9uICggKSB7XG5cdHJldHVybiBuZXcgRW1wdHkoIHRoaXMuTSApIDtcbn0gO1xuXG5TaW5nbGUucHJvdG90eXBlLmNvbnMgPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gbmV3IERlZXAoXG5cdFx0dGhpcy5NICxcblx0XHRuZXcgT25lKCB2YWx1ZSApICxcblx0XHRuZXcgRW1wdHkoIGNhY2hlKCB0aGlzLk0gKSApICxcblx0XHRuZXcgT25lKCB0aGlzLmVsZW1lbnQgKVxuXHQpIDtcbn0gO1xuXG5TaW5nbGUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoIHZhbHVlICkge1xuXHRyZXR1cm4gbmV3IERlZXAoXG5cdFx0dGhpcy5NICxcblx0XHRuZXcgT25lKCB0aGlzLmVsZW1lbnQgKSAsXG5cdFx0bmV3IEVtcHR5KCBjYWNoZSggdGhpcy5NICkgKSAsXG5cdFx0bmV3IE9uZSggdmFsdWUgKVxuXHQpIDtcbn0gO1xuXG5TaW5nbGUucHJvdG90eXBlLmNvbmNhdCA9IGZ1bmN0aW9uICggb3RoZXIgKSB7XG5cdHJldHVybiBvdGhlci5jb25zKCB0aGlzLmVsZW1lbnQgKSA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24qICggKSB7XG5cdHlpZWxkIHRoaXMuZWxlbWVudCA7XG59IDtcblxuLyoqXG4gKiBJdCBpcyBhc3N1bWVkIHRoYXQgcCh8dGhpc3wpIGlzIHRydWUuXG4gKi9cblNpbmdsZS5wcm90b3R5cGUuc3BsaXRUcmVlID0gZnVuY3Rpb24gKCBwICwgaSApIHtcblx0cmV0dXJuIG5ldyBTcGxpdCggbmV3IEVtcHR5KCB0aGlzLk0gKSAsIHRoaXMuZWxlbWVudCAsIG5ldyBFbXB0eSggdGhpcy5NICkgKSA7XG59IDtcblxuU2luZ2xlLnByb3RvdHlwZS5zcGxpdCA9IGZ1bmN0aW9uICggcCApIHtcblx0cmV0dXJuIHAoIHRoaXMubWVhc3VyZSggKSApID8gWyBuZXcgRW1wdHkoIHRoaXMuTSApICwgdGhpcyBdIDogWyB0aGlzICwgbmV3IEVtcHR5KCB0aGlzLk0gKSBdIDtcbn0gO1xuIl19