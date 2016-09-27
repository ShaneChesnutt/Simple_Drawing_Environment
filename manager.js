var shapeRegistry = [];
var drawingArea   = document.getElementById('drawing-area');
var svgArea       = document.getElementById('svg-area');

// TODO: this works _okay_. I'm noticing that when you release the mouse,
// it sometimes adds another element unexpectedly :/
svgArea.addEventListener('click', _svgAreaClickHandler);

function _svgAreaClickHandler(event) {
  switch(mode.action) {
    case 'draw':
      _drawingModeHandler(event, mode.data);
      break;
    case 'delete':
      _deletionModeHandler(event);
      break;
  }
}

function _drawingModeHandler(event, data) {
  var shape = null;

  switch(data.shape) {
    case 'circle':
      shape = new Circle(event.clientX, event.clientY, 50, data.colors[0], data.colors[1], 30);
      break;
    case 'rectangle':
      shape = new Rectangle(event.clientX, event.clientY, 100, 100, data.colors[0], data.colors[1], 5);
      break;
    case 'ellipse':
      shape = new Ellipse(event.clientX, event.clientY, 100, 50, data.colors[0], data.colors[1], 5);
      break;
  }

  console.log('added ' + data.shape + ' with id ' + shape.getElementId());

  shapeRegistry.push(shape);
  drawingArea.appendChild(shape.getElement());
}

function _deletionModeHandler(event) {
  var shapeId = event.target.id;

  var matchedShapeInstance = _.find(shapeRegistry, function(shapeInstance) {
    return shapeInstance.getElementId() === shapeId;
  });

  var matchedShapeIndex = _.indexOf(shapeRegistry, matchedShapeInstance);

  if (matchedShapeInstance) {
    console.log('removing shape with id ' + matchedShapeInstance.getElementId());
    matchedShapeInstance.destruct();

    shapeRegistry.splice(matchedShapeIndex, 1);
  }
}