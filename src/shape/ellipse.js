var Guid = require('guid');

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
  var _isClicked   = false;

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
    _elementId = Guid.raw();
    _element   = document.createElementNS('http://www.w3.org/2000/svg', 'ellipse');

    _element.setAttribute('id', _elementId);

    _setX(x);
    _setY(y);
    _setRadiusX(radiusX);
    _setRadiusY(radiusY);
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

module.exports = Ellipse;
