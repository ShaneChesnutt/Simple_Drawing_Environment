function Rectangle(x, y, height, width, fill, stroke, strokeWidth) {
  var vm           = this;
  var _element     = null;
  var _elementId   = null;
  var _x           = null;
  var _y           = null;
  var _height      = null;
  var _width       = null;
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
  vm.getHeight      = _getHeight;
  vm.setHeight      = _setHeight;
  vm.getWidth       = _getWidth;
  vm.setWidth       = _setWidth;
  vm.getFill        = _getFill;
  vm.setFill        = _setFill;
  vm.getStroke      = _getStroke;
  vm.setStroke      = _setStroke;
  vm.getStrokeWidth = _getStrokeWidth;
  vm.setStrokeWidth = _setStrokeWidth;
  
  vm.construct();
  
  function _construct() {
    _elementId = guid();
    _element   = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    
    _element.setAttribute('id', _elementId);
    
    vm.setX(x);
    vm.setY(y);
    vm.setHeight(height);
    vm.setWidth(width);
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
    _height      = null;
    _width       = null;
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
    _element.setAttribute('x', x);
  }
  
  function _getY() {
    return _y;
  }
  
  function _setY(y) {
    _y = y;
    _element.setAttribute('y', y);
  }

  function _getWidth() {
    return _width;
  }
  
  function _setWidth(width) {
    _width = width;
    _element.setAttribute('width', width);
  }
  
  function _getHeight() {
    return _height;
  }
  
  function _setHeight(height) {
    _height = height;
    _element.setAttribute('height', height);
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
