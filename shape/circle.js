function Circle(x, y, r, fill, stroke, strokeWidth) {
  var vm = this;
  var _element = null;
  var _x = null;
  var _y = null;
  var _r = null;
  var _fill = null;
  var _stroke = null;
  var _strokeWidth = null;
  var _elementId = null;

  vm.getElement = function() {
    return _element;
  };

  vm.getX = function() {
    return _x;
  };

  vm.setX = function(x) {
    _x = x;
    _element.setAttribute('cx', x);
  };

  vm.getY = function() {
    return _y;
  };

  vm.setY = function(y) {
    _y = y;
    _element.setAttribute('cy', y);
  };

  vm.getR = function() {
    return _r;
  };

  vm.setR = function(r) {
    _r = r;
    _element.setAttribute('r', _r);
  };

  vm.getFill = function() {
    return _fill;
  };

  vm.setFill = function(fill) {
    _fill = fill;
    _element.setAttribute('fill', _fill);
  };

  vm.getStroke = function() {
    return _stroke;
  };

  vm.setStroke = function(stroke) {
    _stroke = stroke;
    _element.setAttribute('stroke', _stroke);
  };

  vm.getStroke = function() {
    return _stroke;
  };

  vm.setStrokeWidth = function(strokeWidth) {
    _strokeWidth = strokeWidth;
    _element.setAttribute('stroke-width', _strokeWidth);
  };

  vm.getElementId = function() {
    return _elementId;
  };

  vm.destruct = function() {
    _element.remove();
    _element = null;
    _x = null;
    _y = null;
    _r = null;
    _fill = null;
    _stroke = null;
    _strokeWidth = null;
    _elementId = null;
  };

  vm.construct = function() {
    _elementId = guid();
    _element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    _element.setAttribute('id', _elementId);

    vm.setX(x);
    vm.setY(y);
    vm.setR(r);
    vm.setFill(fill);
    vm.setStroke(stroke);
    vm.setStrokeWidth(strokeWidth);
  };

  vm.construct();
}
