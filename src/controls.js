function Controls() {
  var self = this;

  // just a simple data structure that encapulates action and assoc. metadata
  self.mode = null;

  console.log('in circle drawing mode for 2 seconds...');
  self.mode = {
    action: 'draw',
    data: {
      shape: 'circle',
      strokeColor: 'red',
      fillColor: 'purple',
      strokeWidth: 12,
      radius: 40
    }
  };

  setTimeout(function() {
    console.log('in rectangle drawing mode for 2 seconds...');
    self.mode = {
      action: 'draw',
      data: {
        shape: 'rectangle',
        strokeColor: 'green',
        fillColor: 'pink',
        strokeWidth: 6,
        height: 200,
        width: 200
      }
    };
  }, 4000);

  setTimeout(function() {
    console.log('in ellipse drawing mode for 2 seconds...');
    self.mode = {
      action: 'draw',
      data: {
        shape: 'ellipse',
        strokeColor: 'green',
        fillColor: 'pink',
        strokeWidth: 6,
        radiusX: 20,
        radiusY: 40
      }
    };
  }, 6000);

  setTimeout(function() {
    console.log('in delete mode...');
    self.mode = {
      action: 'delete'
    };
  }, 8000);
}

module.exports = new Controls();
