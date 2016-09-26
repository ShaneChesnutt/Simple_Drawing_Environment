var mode = null; // just a simple data structure that encapulates action and assoc. metadata

console.log('in circle drawing mode for 2 seconds...');
mode = {
  action: 'draw',
  data: {
    shape: 'circle',
    colors: ['red', 'purple'] //TODO: make into object
    //TODO: add other attrs
  }
};

setTimeout(function() {
  console.log('in ellipse drawing mode for 2 seconds...');
  mode = {
    action: 'draw',
    data: {
      shape: 'ellipse',
      colors: ['green', 'pink'] //TODO: make into object
      //TODO: add other attrs
    }
  };
}, 2000);

setTimeout(function() {
  console.log('in delete mode...');
  mode = {
    action: 'delete'
  };
}, 4000);
