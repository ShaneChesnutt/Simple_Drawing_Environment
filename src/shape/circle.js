var Guid = require('guid');

function Circle(x, y, r, fill, stroke, strokeWidth) {
  var vm           = this;
  var _element     = null;
  var _x           = null;
  var _y           = null;
  var _r           = null;
  var _fill        = null;
  var _stroke      = null;
  var _strokeWidth = null;
  var _elementId   = null;
  var _isClicked   = false;

  vm.construct      = _construct;
  vm.destruct       = _destruct;
  vm.getElement     = _getElement;
  vm.getElementId   = _getElementId;
  vm.getX           = _getX;
  vm.setX           = _setX;
  vm.getY           = _getY;
  vm.setY           = _setY;
  vm.getR           = _getR;
  vm.setR           = _setR;
  vm.getFill        = _getFill;
  vm.setFill        = _setFill;
  vm.getStroke      = _getStroke;
  vm.setStroke      = _setStroke;
  vm.setStrokeWidth = _setStrokeWidth;
  vm.getStrokeWidth = _getStrokeWidth;

  vm.construct();

  function _construct() {
    _elementId = Guid.raw();
    _element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    _element.setAttribute('id', _elementId);

    _setX(x);
    _setY(y);
    _setR(r);
    _setFill(fill);
    _setStroke(stroke);
    _setStrokeWidth(strokeWidth);

    _registerEventHandlers();
  }

  function _destruct() {
    _unRegisterEventHandlers();
    _element.remove();
    _element     = null;
    _x           = null;
    _y           = null;
    _r           = null;
    _fill        = null;
    _stroke      = null;
    _strokeWidth = null;
    _elementId   = null;
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

  function _getR() {
    return _r;
  }

  function _setR(r) {
    _r = r;
    _element.setAttribute('r', _r);
  }

  function _getFill() {
    return _fill;
  }

  function _setFill(fill) {
    _fill = fill;
    _element.setAttribute('fill', _fill);
  }

  function _getStroke() {
    return _stroke;
  }

  function _setStroke(stroke) {
    _stroke = stroke;
    _element.setAttribute('stroke', _stroke);
  }

  function _setStrokeWidth(strokeWidth) {
    _strokeWidth = strokeWidth;
    _element.setAttribute('stroke-width', _strokeWidth);
  }

  function _getStrokeWidth() {
    return _strokeWidth;
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
      _setX(event.clientX);
      _setY(event.clientY);
    }
  }
}

module.exports = Circle;
