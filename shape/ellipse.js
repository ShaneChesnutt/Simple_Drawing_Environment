function Ellipse(x, y, radiusX, radiusY, fill, stroke, strokeWidth) {
  var vm           = this;
  var _element     = null;
  var _elementId   = null;
  var _x           = null;
  var _y           = null;
  var _radiusX     = null;
  var _radiusY     = null;
  var _fill        = null;
  var _stroke      = null;
  var _strokeWidth = null;
  
  vm.construct      = _construct;
  vm.destruct       = _destruct;
  vm.getElement     = _getElement;
  vm.getElementId   = _getElementId;
  vm.getX           = _getX;
  vm.setX           = _setX;
  vm.getY           = _getY;
  vm.setY           = _setY;
  vm.getRadiusX     = _getRadiusX;
  vm.setRadiusX     = _setRadiusX;
  vm.getRadiusY     = _getRadiusY;
  vm.setRadiusY     = _setRadiusY;
  vm.getFill        = _getFill;
  vm.setFill        = _setFill;
  vm.getStroke      = _getStroke;
  vm.setStroke      = _setStroke;
  vm.getStrokeWidth = _getStrokeWidth;
  vm.setStrokeWidth = _setStrokeWidth;
  
  vm.construct();
  
  function _construct() {
    _elementId = guid();
    _element   = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');
    
    _element.setAttribute('id', _elementId);
    
    vm.setX(x);
    vm.setY(y);
    vm.setRadiusX(radiusX);
    vm.setRadiusY(radiusY);
    vm.setFill(fill);
    vm.setStroke(stroke);
    vm.setStrokeWidth(strokeWidth);
  }
  
  function _destruct() {
    _element.remove();
    _element     = null;
    _elementId   = null;
    _x           = null;
    _y           = null;
    _radiusX     = null;
    _radiusY     = null;
    _fill        = null;
    _stroke      = null;
    _strokeWidth = null;
  }
  
  function _getElement() {
    return _element;
  }
  
  function _getElementId() {
    return _elementId;
  }
  
  function _getX() {
    return _x;
  }
  
  function _setX(x) {
    _x = x;
    _element.setAttribute('cx', x);
  }
  
  function _getY() {
    return _y;
  }
  
  function _setY(y) {
    _y = y;
    _element.setAttribute('cy', y);
  }

  function _getRadiusX() {
    return _radiusX;
  }
  
  function _setRadiusX(radiusX) {
    _radiusX = radiusX;
    _element.setAttribute('rx', radiusX);
  }
  
  function _getRadiusY() {
    return _radiusY;
  }
  
  function _setRadiusY(radiusY) {
    _radiusY = radiusY;
    _element.setAttribute('ry', radiusY);
  }
  
  function _getFill() {
    return _fill;
  }
  
  function _setFill(fill) {
    _fill = fill;
    _element.setAttribute('fill', fill);
  }
  
  function _getStroke() {
    return _stroke;
  }
  
  function _setStroke(stroke) {
    _stroke = stroke;
    _element.setAttribute('stroke', stroke);
  }
  
  function _getStrokeWidth() {
    return _strokeWidth;
  }
  
  function _setStrokeWidth(strokeWidth) {
    _strokeWidth = strokeWidth;
    _element.setAttribute('stroke-width', strokeWidth);
  }
}
