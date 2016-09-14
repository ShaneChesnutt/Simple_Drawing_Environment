var shapeRegistry = [];
var test = new Circle(100, 150, 50, 'brown', 'pink', 30);
shapeRegistry.push(test);

setTimeout(function() {
  test.setFill('blue');
  test.setStroke('green');
  test.setR(70);
}, 3000);

setTimeout(function() {
  test.destruct();
}, 5000);

var drawingArea = document.getElementById('drawingArea');
drawingArea.appendChild(test.getElement());
