'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.nodes = nodes;

var _node = require('../../2-node');

function nodes(M, list) {

	var out = [];

	var n = list.length;

	var i = 0;

	switch (n % 3) {

		case 1:
			out.push((0, _node.node2)(M, list[0], list[1]));
			out.push((0, _node.node2)(M, list[2], list[3]));
			i += 4;
			break;
		case 2:
			out.push((0, _node.node2)(M, list[0], list[1]));
			i += 2;
			break;

	}

	for (; i < n; i += 3) {
		out.push((0, _node.node3)(M, list[i], list[i + 1], list[i + 2]));
	}

	return out;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy8wLWNvcmUvY29uY2F0ZW5hdGUvbm9kZXMuanMiXSwibmFtZXMiOlsibm9kZXMiLCJNIiwibGlzdCIsIm91dCIsIm4iLCJsZW5ndGgiLCJpIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7UUFFZ0JBLEssR0FBQUEsSzs7QUFGaEI7O0FBRU8sU0FBU0EsS0FBVCxDQUFpQkMsQ0FBakIsRUFBcUJDLElBQXJCLEVBQTRCOztBQUVsQyxLQUFNQyxNQUFNLEVBQVo7O0FBRUEsS0FBTUMsSUFBSUYsS0FBS0csTUFBZjs7QUFFQSxLQUFJQyxJQUFJLENBQVI7O0FBRUEsU0FBU0YsSUFBSSxDQUFiOztBQUVDLE9BQUssQ0FBTDtBQUNDRCxPQUFJSSxJQUFKLENBQVUsaUJBQU9OLENBQVAsRUFBV0MsS0FBSyxDQUFMLENBQVgsRUFBcUJBLEtBQUssQ0FBTCxDQUFyQixDQUFWO0FBQ0FDLE9BQUlJLElBQUosQ0FBVSxpQkFBT04sQ0FBUCxFQUFXQyxLQUFLLENBQUwsQ0FBWCxFQUFxQkEsS0FBSyxDQUFMLENBQXJCLENBQVY7QUFDQUksUUFBSyxDQUFMO0FBQ0E7QUFDRCxPQUFLLENBQUw7QUFDQ0gsT0FBSUksSUFBSixDQUFVLGlCQUFPTixDQUFQLEVBQVdDLEtBQUssQ0FBTCxDQUFYLEVBQXFCQSxLQUFLLENBQUwsQ0FBckIsQ0FBVjtBQUNBSSxRQUFLLENBQUw7QUFDQTs7QUFWRjs7QUFjQSxRQUFRQSxJQUFJRixDQUFaLEVBQWdCRSxLQUFLLENBQXJCLEVBQXlCO0FBQ3hCSCxNQUFJSSxJQUFKLENBQVUsaUJBQU9OLENBQVAsRUFBV0MsS0FBS0ksQ0FBTCxDQUFYLEVBQXFCSixLQUFLSSxJQUFFLENBQVAsQ0FBckIsRUFBaUNKLEtBQUtJLElBQUUsQ0FBUCxDQUFqQyxDQUFWO0FBQ0E7O0FBRUQsUUFBT0gsR0FBUDtBQUVBIiwiZmlsZSI6Im5vZGVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbm9kZTIgLCBub2RlMyB9IGZyb20gJy4uLy4uLzItbm9kZScgO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9kZXMgKCBNICwgbGlzdCApIHtcblxuXHRjb25zdCBvdXQgPSBbIF0gO1xuXG5cdGNvbnN0IG4gPSBsaXN0Lmxlbmd0aCA7XG5cblx0bGV0IGkgPSAwIDtcblxuXHRzd2l0Y2ggKCBuICUgMyApIHtcblxuXHRcdGNhc2UgMSA6XG5cdFx0XHRvdXQucHVzaCggbm9kZTIoIE0gLCBsaXN0WzBdICwgbGlzdFsxXSApICk7XG5cdFx0XHRvdXQucHVzaCggbm9kZTIoIE0gLCBsaXN0WzJdICwgbGlzdFszXSApICkgO1xuXHRcdFx0aSArPSA0IDtcblx0XHRcdGJyZWFrIDtcblx0XHRjYXNlIDIgOlxuXHRcdFx0b3V0LnB1c2goIG5vZGUyKCBNICwgbGlzdFswXSAsIGxpc3RbMV0gKSApIDtcblx0XHRcdGkgKz0gMiA7XG5cdFx0XHRicmVhayA7XG5cblx0fVxuXG5cdGZvciAoIDsgaSA8IG4gOyBpICs9IDMgKSB7XG5cdFx0b3V0LnB1c2goIG5vZGUzKCBNICwgbGlzdFtpXSAsIGxpc3RbaSsxXSAsIGxpc3RbaSsyXSApICkgO1xuXHR9XG5cblx0cmV0dXJuIG91dCA7XG5cbn1cbiJdfQ==