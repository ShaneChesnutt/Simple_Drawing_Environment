var shapeRegistry = [];
var test = new Circle(100, 150, 50, 'brown', 'pink', 30);
var rect = new Rectangle(200, 250, 100, 100, 'red', 'black', 5);
shapeRegistry.push(test);
shapeRegistry.push(rect);

setTimeout(function() {
  test.setFill('blue');
  test.setStroke('green');
  test.setR(70);
  
  rect.setFill('honeydew');
  rect.setStroke('lightblue');
  rect.setStrokeWidth(20);
}, 3000);

setTimeout(function() {
  test.destruct();
  rect.destruct();
}, 5000);

var drawingArea = document.getElementById('drawingArea');
drawingArea.appendChild(test.getElement());
drawingArea.appendChild(rect.getElement());
