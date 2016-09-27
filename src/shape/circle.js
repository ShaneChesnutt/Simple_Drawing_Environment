import Guid from 'guid';

class Circle {
  constructor(x, y, r, fill, stroke, strokeWidth) {
    this.element     = null;
    this.elementId   = null;
    this.x           = null;
    this.y           = null;
    this.r           = null;
    this.fill        = null;
    this.stroke      = null;
    this.strokeWidth = null;
    this.elementId   = null;
    this.isClicked   = false;

    this.elementId = Guid.raw();
    this.element = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    this.element.setAttribute('id', this.elementId);

    this.setX(x);
    this.setY(y);
    this.setR(r);
    this.setFill(fill);
    this.setStroke(stroke);
    this.setStrokeWidth(strokeWidth);

    this.registerEventHandlers();
  }

  destruct() {
    this.unRegisterEventHandlers();
    this.element.remove();
    this.element     = null;
    this.x           = null;
    this.y           = null;
    this.r           = null;
    this.fill        = null;
    this.stroke      = null;
    this.strokeWidth = null;
    this.elementId   = null;
  }

  getElement() {
    return this.element;
  }

  getElementId() {
    return this.elementId;
  }

  getX() {
    return this.x;
  }

  setX(x) {
    this.x = x;
    this.element.setAttribute('cx', x);
  }

  getY() {
    return this.y;
  }

  setY(y) {
    this.y = y;
    this.element.setAttribute('cy', y);
  }

  getR() {
    return this.r;
  }

  setR(r) {
    this.r = r;
    this.element.setAttribute('r', this.r);
  }

  getFill() {
    return this.fill;
  }

  setFill(fill) {
    this.fill = fill;
    this.element.setAttribute('fill', this.fill);
  }

  getStroke() {
    return this.stroke;
  }

  setStroke(stroke) {
    this.stroke = stroke;
    this.element.setAttribute('stroke', this.stroke);
  }

  setStrokeWidth(strokeWidth) {
    this.strokeWidth = strokeWidth;
    this.element.setAttribute('stroke-width', this.strokeWidth);
  }

  getStrokeWidth() {
    return this.strokeWidth;
  }

  setIsClicked(val) {
    this.isClicked = val;
  }

  getIsClicked() {
    return this.isClicked;
  }

  registerEventHandlers() {
    this.element.addEventListener('mousedown', this.onMouseDown);
    this.element.addEventListener('mouseup', this.onMouseUp);
    this.element.addEventListener('mousemove', this.onMouseMove);
  }

  unRegisterEventHandlers() {
    this.element.removeEventListener('mousedown', this.onMouseDown);
    this.element.removeEventListener('mouseup', this.onMouseUp);
    this.element.removeEventListener('mousemove', this.onMouseMove);
  }

  onMouseDown() {
    this.setIsClicked(true);
  }

  onMouseUp() {
    this.setIsClicked(false);
  }

  onMouseMove(event) {
    if (this.getIsClicked()){
      _setX(event.clientX);
      _setY(event.clientY);
    }
  }
}

export {Circle};