var Guid = require('guid');

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
  var _isClicked   = false;

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
    _elementId = Guid.raw();
    _element   = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    _element.setAttribute('id', _elementId);

    _setX(x);
    _setY(y);
    _setHeight(height);
    _setWidth(width);
    _setFill(fill);
    _setStroke(stroke);
    _setStrokeWidth(strokeWidth);

    _registerEventHandlers();
  }

  function _destruct() {
    _unRegisterEventHandlers();
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

  function _setIsClicked(val) {
    _isClicked = val;
  }

  function _getIsClicked() {
    return _isClicked;
  }

  function _registerEventHandlers() {
    _element.addEventListener('mousedown', _onMouseDown);
    _element.addEventListener('mouseup', _onMouseUp);
    _element.addEventListener('mousemove', _onMouseMove);
  }

  function _unRegisterEventHandlers() {
    _element.removeEventListener('mousedown', _onMouseDown);
    _element.removeEventListener('mouseup', _onMouseUp);
    _element.removeEventListener('mousemove', _onMouseMove);
  }

  function _onMouseDown() {
    _setIsClicked(true);
  }

  function _onMouseUp() {
    _setIsClicked(false);
  }

  function _onMouseMove(event) {
    if (_getIsClicked()){
      _setX(event.clientX - _width/2);
      _setY(event.clientY - _height/2);
    }
  }
}

module.exports = Rectangle;
