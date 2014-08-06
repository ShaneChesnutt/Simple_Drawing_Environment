canvas = document.getElementById( 'canvas' );
var Shapes = [];

var drawingArea = document.getElementById( 'drawingArea' );

var resizeshapes = document.getElementById( 'resizetool' );
var boundingbox = false;
var resize_drag = false;

var circle_tool = document.getElementById( 'circle_tool' );
var circle_tool_isSelected = false;
var drawCircle_isSelected = false;

var square_tool = document.getElementById(  'square_tool'  );
var square_tool_isSelected = false;
var drawSquare_isSelected = false;

var ellipse_tool = document.getElementById(  'ellipse_tool'  );
var ellipse_tool_isSelected = false;
var drawEllipse_isSelected = false;

// var poly_tool = document.getElementById(  'poly_tool'  );
// var poly_tool_isSelected = false;
// var drawPoly_isSelected = false;

var draw_tool = document.getElementById( 'draw_tool' );
var draw_tool_isSelected = false;

var size_tool = document.getElementById( 'size_tool' );
var size_tool_isSelected = false;

var color_tool = document.getElementById( 'color_tool' );
var color_tool_isSelected = false;

var move_tool = document.getElementById(  'move_tool'  );
var move_tool_isSelected = false;
var drag = false;

var remove_tool = document.getElementById( 'remove_tool' );
var remove_tool_isSelected = false;

var display_color = document.getElementById( 'display_color' );

var red_rect = document.getElementById( 'red_rect' );
red_rect.addEventListener( 'click', update_color );

var blue_rect = document.getElementById( 'blue_rect' );
blue_rect.addEventListener( 'click', update_color );

var green_rect = document.getElementById( 'green_rect' );
green_rect.addEventListener( 'click', update_color );

var yellow_rect = document.getElementById( 'yellow_rect' );
yellow_rect.addEventListener( 'click', update_color );

var orange_rect = document.getElementById( 'orange_rect' );
orange_rect.addEventListener( 'click', update_color );

var purple_rect = document.getElementById( 'purple_rect' );
purple_rect.addEventListener( 'click', update_color );

var turq_rect = document.getElementById( 'turq_rect' );
turq_rect.addEventListener( 'click', update_color );

var maroon_rect = document.getElementById( 'maroon_rect' );
maroon_rect.addEventListener( 'click', update_color );

var cyan_rect = document.getElementById( 'cyan_rect' );
cyan_rect.addEventListener( 'click', update_color );

var choc_rect = document.getElementById( 'choc_rect' );
choc_rect.addEventListener( 'click', update_color );

var lime_rect = document.getElementById( 'lime_rect' );
lime_rect.addEventListener( 'click', update_color );

var blvi_rect = document.getElementById( 'blvi_rect' );
blvi_rect.addEventListener( 'click', update_color );

circle_tool.addEventListener( 'click',circlefunction );
square_tool.addEventListener( 'click',squarefunction );
ellipse_tool.addEventListener( 'click',ellipsefunction );
//poly_tool.addEventListener( 'click',polySelect );
draw_tool.addEventListener( 'click',drawSelect );
size_tool.addEventListener( 'click',sizefunction );
color_tool.addEventListener( 'click',colorfunction );
move_tool.addEventListener( 'click',movefunction );
remove_tool.addEventListener( 'click',removefunction );

function circlefunction( e ) {
  circleSelect( e );
  removeListeners();
  canvas.addEventListener( 'click', drawCircle );
  drawCircle_isSelected = true;
}

function squarefunction( e ) {
  squareSelect( e );
  removeListeners();
  canvas.addEventListener( 'click', drawSquare );
  drawSquare_isSelected = true;
}

function ellipsefunction( e ) {
  ellipseSelect( e );
  removeListeners();
  canvas.addEventListener( 'click', drawEllipse );
  drawEllipse_isSelected = true;
}

/* function polyfunction( e ) {
  polySelect( e )
  removeListeners()
  canvas.addEventListener( 'click', drawPoly )
  drawPoly_isSelected = true
}*/

function movefunction( e ) {
  moveSelect( e );
  removeListeners();
  drawingArea.addEventListener( 'mousedown', move_mousedown );
  drawingArea.addEventListener( 'mousemove', move_mouse );
  drawingArea.addEventListener( 'mouseup', move_mouseup );
}

function colorfunction( e )
{
    colorSelect( e );
    removeListeners();
    drawingArea.addEventListener( 'click', color );
}

function removefunction( e )
{
  removeSelect( e );
  removeListeners();
  drawingArea.addEventListener( 'click', remove );
}

function sizefunction( e )
{
  sizeSelect( e );
  removeListeners();
  drawingArea.addEventListener( 'click', re_size );

}
//Circle Functions
function drawCircle( e ) {
  var newCircle = document.createElementNS( 'http://www.w3.org/2000/svg', 'circle' );
  newCircle.setAttribute( 'cx', e.clientX );
  newCircle.setAttribute( 'cy', e.clientY );
  newCircle.setAttribute( 'r', '30' );
  newCircle.setAttribute( 'fill', display_color.getAttribute( 'fill' ) );
  newCircle.setAttribute( 'stroke', 'black' );
  newCircle.setAttribute( 'stroke-width', '2' );
  drawingArea.appendChild( newCircle );
}

function circleSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  /*if ( poly_tool_isSelected === true ) {
    poly_tool.setAttribute( 'stroke','black' );
    poly_tool_isSelected = false;
  }*/

  if ( circle_tool_isSelected === false ) {
    circle_tool.setAttribute( 'stroke','red' );
    circle_tool_isSelected = true;
  }

  if ( draw_tool_isSelected === false ) {
    draw_tool.setAttribute( 'stroke','red' );
    draw_tool_isSelected = true;
  }

  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( move_tool_isSelected === true ) {
    move_tool.setAttribute( 'stroke','black' );
    move_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }
}

//Square Functions
function drawSquare( e ) {
  var newRect = document.createElementNS( 'http://www.w3.org/2000/svg', 'rect' );
  newRect.setAttribute( 'x', e.clientX - 40 );
  newRect.setAttribute( 'y', e.clientY - 40 );
  newRect.setAttribute( 'width', '60' );
  newRect.setAttribute( 'height', '60' );
  newRect.setAttribute( 'fill', display_color.getAttribute( 'fill' ) );
  newRect.setAttribute( 'stroke', 'black' );
  newRect.setAttribute( 'stroke-width', '2' );
  drawingArea.appendChild( newRect );
}

function squareSelect( e ) {
   if ( circle_tool_isSelected === true ) {
      circle_tool.setAttribute( 'stroke','black' );
      circle_tool_isSelected = false;
    }

    if ( ellipse_tool_isSelected === true ) {
      ellipse_tool.setAttribute( 'stroke','black' );
      ellipse_tool_isSelected = false;
    }

    /*if ( poly_tool_isSelected == true ) {
      poly_tool.setAttribute( 'stroke','black' )
      poly_tool_isSelected = false
    }*/

    if ( square_tool_isSelected === false ) {
      square_tool.setAttribute( 'stroke','red' );
      square_tool_isSelected = true;
    }

     if ( draw_tool_isSelected === false ) {
      draw_tool.setAttribute( 'stroke','red' );
      draw_tool_isSelected = true;
    }

    if ( size_tool_isSelected === true ) {
      size_tool.setAttribute( 'stroke','black' );
      size_tool_isSelected = false;
      remove_resize();
    }

    if ( move_tool_isSelected === true )
    {
       move_tool.setAttribute( 'stroke','black' );
       move_tool_isSelected = false;
    }

    if ( color_tool_isSelected === true ) {
      color_tool.setAttribute( 'stroke','black' );
      color_tool_isSelected = false;
    }

    if ( remove_tool_isSelected === true ) {
      remove_tool.setAttribute( 'stroke','black' );
      remove_tool_isSelected = false;
    }
}

//Ellipse Functions
function drawEllipse( e ) {
  var newEllipse = document.createElementNS( 'http://www.w3.org/2000/svg', 'ellipse' );
  newEllipse.setAttribute( 'cx', e.clientX );
  newEllipse.setAttribute( 'cy', e.clientY );
  newEllipse.setAttribute( 'rx', '60' );
  newEllipse.setAttribute( 'ry', '30' );
  newEllipse.setAttribute( 'fill', display_color.getAttribute( 'fill' ) );
  newEllipse.setAttribute( 'stroke', 'black' );
  newEllipse.setAttribute( 'stroke-width', '2' );
  drawingArea.appendChild( newEllipse );
}

function ellipseSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

  /*if ( poly_tool_isSelected == true ) {
    poly_tool.setAttribute( 'stroke','black' );
    poly_tool_isSelected = false;
  }*/

  if ( ellipse_tool_isSelected === false ) {
    ellipse_tool.setAttribute( 'stroke','red' );
    ellipse_tool_isSelected = true;
  }

   if ( draw_tool_isSelected === false ) {
    draw_tool.setAttribute( 'stroke','red' );
    draw_tool_isSelected = true;
  }

  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( move_tool_isSelected === true ) {
    move_tool.setAttribute( 'stroke','black' );
    move_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }
}

//Polygon Functions
/*function drawPoly( e ) {

//Not implemented

}*/

/*function polySelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

  if ( poly_tool_isSelected === false ) {
    poly_tool.setAttribute( 'stroke','red' );
    poly_tool_isSelected = true;
  }

   if ( draw_tool_isSelected === false ) {
    draw_tool.setAttribute( 'stroke','red' );
    draw_tool_isSelected = true;
  }

  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( move_tool_isSelected === true )
  {
     move_tool.setAttribute( 'stroke','black' );
     move_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }
}*/

function drawSelect( e ) {
  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( move_tool_isSelected === true ) {
    move_tool.setAttribute( 'stroke','black' );
    move_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }

  if ( draw_tool_isSelected === false ) {
    draw_tool.setAttribute( 'stroke','red' );
    draw_tool_isSelected = true;
  }
}

//Size Functions
function re_size( e ) {
  var newRect = document.createElementNS( 'http://www.w3.org/2000/svg', 'rect' );
  var newRect2 = document.createElementNS( 'http://www.w3.org/2000/svg', 'rect' );
  var newRect3 = document.createElementNS( 'http://www.w3.org/2000/svg', 'rect' );

  if ( size_tool_isSelected === true ) {
    if ( boundingbox === true ) {
      remove_resize();
    }

    if ( e.target.nodeName == 'circle' ) {
      shapex = e.target.getAttribute( 'cx' );
      shapey = e.target.getAttribute( 'cy' );
      shapeheight = e.target.getAttribute( 'r' );
      shapewidth = e.target.getAttribute( 'r' );

      cir = parseInt( shapeheight ) + parseInt( shapeheight );

      newRect.setAttribute( 'x', ( shapex - shapeheight ) - 5 );
      newRect.setAttribute( 'y', ( shapey - shapeheight ) - 5 );
      newRect.setAttribute( 'width', cir + 10 );
      newRect.setAttribute( 'height', cir + 10 );
      newRect.setAttribute( 'fill', 'none' );
      newRect.setAttribute( 'stroke', 'grey' );
      newRect.setAttribute( 'stroke-width', '2' );
      newRect.setAttribute( 'stroke-dasharray', '8 4' );
      resizeshapes.appendChild( newRect );

      newRect2.setAttribute( 'x', shapex - 5 );
      newRect2.setAttribute( 'y', shapey - 5 );
      newRect2.setAttribute( 'width', 10 );
      newRect2.setAttribute( 'height', 10 );
      newRect2.setAttribute( 'fill', 'white' );
      newRect2.setAttribute( 'stroke', 'grey' );
      newRect2.setAttribute( 'stroke-width', '2' );
      resizeshapes.appendChild( newRect2 );

      newRect2.addEventListener( 'mouseover', resize_mouseover );
      newRect2.addEventListener( 'mousewheel', resize_mousewheel );

      boundingbox = true;

      Shapes[0] = e.target;
      Shapes[1] = newRect;
    }

    if ( e.target.nodeName == 'rect' ) {
      shapex = parseInt( e.target.getAttribute( 'x' ) );
      shapey = parseInt( e.target.getAttribute( 'y' ) );
      shapewidth = parseInt( e.target.getAttribute( 'width' ) );
      shapeheight = parseInt( e.target.getAttribute( 'height' ) );

      newRect.setAttribute( 'x', shapex - 5 );
      newRect.setAttribute( 'y', shapey - 5 );
      newRect.setAttribute( 'width', shapewidth + 10 );
      newRect.setAttribute( 'height', shapeheight + 10 );
      newRect.setAttribute( 'fill', 'none' );
      newRect.setAttribute( 'stroke', 'grey' );
      newRect.setAttribute( 'stroke-width', '2' );
      newRect.setAttribute( 'stroke-dasharray', '8 4' );
      resizeshapes.appendChild( newRect );

      newRect2.setAttribute( 'x', shapex + ( shapewidth/2 ) + 5 );
      newRect2.setAttribute( 'y', shapey + ( shapeheight/2 ) - 5 );
      newRect2.setAttribute( 'width', 10 );
      newRect2.setAttribute( 'height', 10 );
      newRect2.setAttribute( 'fill', 'white' );
      newRect2.setAttribute( 'stroke', 'grey' );
      newRect2.setAttribute( 'stroke-width', '1' );
      resizeshapes.appendChild( newRect2 );

      newRect2.addEventListener( 'mouseover', resize_mouseover );
      newRect2.addEventListener( 'mousewheel', resize_mousewheel );

      newRect3.setAttribute( 'x', shapex + ( shapewidth/2 ) - 5  );
      newRect3.setAttribute( 'y', shapey + ( shapeheight/2 ) - 15  );
      newRect3.setAttribute( 'width', 10 );
      newRect3.setAttribute( 'height', 10 );
      newRect3.setAttribute( 'fill', 'black' );
      newRect3.setAttribute( 'stroke', 'grey' );
      newRect3.setAttribute( 'stroke-width', '1' );
      resizeshapes.appendChild( newRect3 );

      newRect3.addEventListener( 'mouseover', resize_mouseover );
      newRect3.addEventListener( 'mousewheel', resize_mousewheel );

      boundingbox = true;

      Shapes[0] = e.target;
      Shapes[1] = newRect;
    }

    if ( e.target.nodeName == 'ellipse' ) {
      shapex = parseInt( e.target.getAttribute( 'cx' ) );
      shapey = parseInt( e.target.getAttribute( 'cy' ) );
      shapewidth = parseInt( e.target.getAttribute( 'rx' ) );
      shapeheight = parseInt( e.target.getAttribute( 'ry' ) );

      newRect.setAttribute( 'x', shapex - shapewidth - 5 );
      newRect.setAttribute( 'y', shapey - shapeheight - 5 );
      newRect.setAttribute( 'width', shapewidth + shapewidth + 10 );
      newRect.setAttribute( 'height', shapeheight + shapeheight + 10 );
      newRect.setAttribute( 'fill', 'none' );
      newRect.setAttribute( 'stroke', 'grey' );
      newRect.setAttribute( 'stroke-width', '2' );
      newRect.setAttribute( 'stroke-dasharray', '8 4' );
      resizeshapes.appendChild( newRect );

      newRect2.setAttribute( 'x', shapex + 5 );
      newRect2.setAttribute( 'y', shapey - 5 );
      newRect2.setAttribute( 'width', 10 );
      newRect2.setAttribute( 'height', 10 );
      newRect2.setAttribute( 'fill', 'white' );
      newRect2.setAttribute( 'stroke', 'grey' );
      newRect2.setAttribute( 'stroke-width', '1' );
      resizeshapes.appendChild( newRect2 );

      newRect2.addEventListener( 'mouseover', resize_mouseover );
      newRect2.addEventListener( 'mousewheel', resize_mousewheel );

      newRect3.setAttribute( 'x', shapex - 5 );
      newRect3.setAttribute( 'y', shapey - 15 );
      newRect3.setAttribute( 'width', 10 );
      newRect3.setAttribute( 'height', 10 );
      newRect3.setAttribute( 'fill', 'black' );
      newRect3.setAttribute( 'stroke', 'grey' );
      newRect3.setAttribute( 'stroke-width', '1' );
      resizeshapes.appendChild( newRect3 );

      newRect3.addEventListener( 'mouseover', resize_mouseover );
      newRect3.addEventListener( 'mousewheel', resize_mousewheel );

      boundingbox = true;

      Shapes[0] = e.target;
      Shapes[1] = newRect;
    }

  }
}

function sizeSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

 /* if ( poly_tool_isSelected === true ) {
   poly_tool.setAttribute( 'stroke','black' )
   poly_tool_isSelected = false
  }*/

  if ( draw_tool_isSelected === true ) {
    draw_tool.setAttribute( 'stroke','black' );
    draw_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( move_tool_isSelected === true ) {
   move_tool.setAttribute( 'stroke','black' );
   move_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }

  if ( size_tool_isSelected === false ) {
    size_tool.setAttribute( 'stroke','red' );
    size_tool_isSelected = true;
  }
}

// Color Functions
function color( e ) {
  if ( color_tool_isSelected === true ) {
    e.target.setAttribute( 'fill', display_color.getAttribute( 'fill' ) );
  }
}

function colorSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

  /*if ( poly_tool_isSelected === true ) {
    poly_tool.setAttribute( 'stroke','black' );
    poly_tool_isSelected = false;
  }*/

  if ( draw_tool_isSelected === true ) {
    draw_tool.setAttribute( 'stroke','black' );
    draw_tool_isSelected = false;
  }

  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( move_tool_isSelected === true ) {
   move_tool.setAttribute( 'stroke','black' );
   move_tool_isSelected = false;
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }

  if ( color_tool_isSelected === false ) {
    color_tool.setAttribute( 'stroke','red' );
    color_tool_isSelected = true;
  }
}

//Move Functions
function move_mousedown( e ) {
  if ( move_tool_isSelected === true ) {
    if ( e.target.nodeName == 'circle' ) {
      e.target.setAttribute( 'cx', e.clientX );
      e.target.setAttribute( 'cy', e.clientY );
    }

    if ( e.target.nodeName == 'rect' ) {
      e.target.setAttribute( 'x',e.clientX - 40 );
      e.target.setAttribute( 'y', e.clientY - 40 );
    }

    if ( e.target.nodeName == 'ellipse' ) {
      e.target.setAttribute( 'cx', e.clientX );
      e.target.setAttribute( 'cy', e.clientY );
    }

    drag = true;
  }
}

function move_mouse( e ) {
  if ( move_tool_isSelected === true ) {
    if ( drag === true ) {
      if ( e.target.nodeName == 'circle' ) {
        e.target.setAttribute( 'cx', e.clientX );
        e.target.setAttribute( 'cy', e.clientY );
      }

      if ( e.target.nodeName == 'rect' ) {
        e.target.setAttribute( 'x',e.clientX - 40 );
        e.target.setAttribute( 'y', e.clientY - 40 );
      }

      if ( e.target.nodeName == 'ellipse' ) {
        e.target.setAttribute( 'cx', e.clientX );
        e.target.setAttribute( 'cy', e.clientY );
      }
    }
  }
}

function move_mouseup( e ) {
  drag = false;
}

function moveSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

  /*if ( poly_tool_isSelected == true ) {
    poly_tool.setAttribute( 'stroke','black' )
    poly_tool_isSelected = false
  }*/

  if ( draw_tool_isSelected === true ) {
    draw_tool.setAttribute( 'stroke','black' );
    draw_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( size_tool_isSelected === true ) {
   size_tool.setAttribute( 'stroke','black' );
   size_tool_isSelected = false;
   remove_resize();
  }

  if ( remove_tool_isSelected === true ) {
    remove_tool.setAttribute( 'stroke','black' );
    remove_tool_isSelected = false;
  }

  if ( move_tool_isSelected === false ) {
    move_tool.setAttribute( 'stroke','red' );
    move_tool_isSelected = true;
  }
}

//Remove Functions
function removeSelect( e ) {
  if ( square_tool_isSelected === true ) {
    square_tool.setAttribute( 'stroke','black' );
    square_tool_isSelected = false;
  }

  if ( ellipse_tool_isSelected === true ) {
    ellipse_tool.setAttribute( 'stroke','black' );
    ellipse_tool_isSelected = false;
  }

  if ( circle_tool_isSelected === true ) {
    circle_tool.setAttribute( 'stroke','black' );
    circle_tool_isSelected = false;
  }

  /*if ( poly_tool_isSelected == true ) {
    poly_tool.setAttribute( 'stroke','black' )
    poly_tool_isSelected = false
  }*/

  if ( draw_tool_isSelected === true ) {
    draw_tool.setAttribute( 'stroke','black' );
    draw_tool_isSelected = false;
  }

  if ( color_tool_isSelected === true ) {
    color_tool.setAttribute( 'stroke','black' );
    color_tool_isSelected = false;
  }

  if ( move_tool_isSelected === true ) {
    move_tool.setAttribute( 'stroke','black' );
    move_tool_isSelected = false;
  }

  if ( size_tool_isSelected === true ) {
    size_tool.setAttribute( 'stroke','black' );
    size_tool_isSelected = false;
    remove_resize();
  }

  if ( remove_tool_isSelected === false ) {
    remove_tool.setAttribute( 'stroke','red' );
    remove_tool_isSelected = true;
  }
}

function removeListeners() {
  if ( drawCircle_isSelected === true ) {
    canvas.removeEventListener( 'click', drawCircle );
    drawCircle_isSelected = false;
  }

  if ( drawSquare_isSelected === true ) {
    canvas.removeEventListener( 'click', drawSquare );
    drawSquare_isSelected = false;
  }

  if ( drawEllipse_isSelected === true ) {
    canvas.removeEventListener( 'click', drawEllipse );
    drawEllipse_isSelected = false;
  }

  /*if ( drawPoly_isSelected == true ) {
    canvas.removeEventListener( 'click', drawPoly )
    drawPoly_isSelected = false
  }*/
}

function remove( e ) {
  if ( remove_tool_isSelected === true ) {
    drawingArea.removeChild( e.target );
  }
}

function update_color( e ) {
  display_color.setAttribute( 'fill', e.target.getAttribute( 'fill' ) );
}

function remove_resize() {
   while ( resizeshapes.lastChild ) {
      resizeshapes.removeChild( resizeshapes.lastElementChild );
   }

   boundingbox = false;
}

//Resize mouse actions
function resize_mouseover( e ) {
  resize_drag = true;
}

function resize_mousewheel( e ) {
  event = window.event;

  if ( resize_drag === true ) {
    if ( e.wheelDelta == 120 ) {
      if ( Shapes[0].nodeName == 'circle' ) {
        newr = parseInt( Shapes[0].getAttribute( 'r' ) ) + 3;
        x = Shapes[1].getAttribute( 'x' ) - 3;
        y = Shapes[1].getAttribute( 'y' ) - 3;
        cir = newr + newr + 10;

        Shapes[0].setAttribute( 'r', newr );
        Shapes[1].setAttribute( 'x', x );
        Shapes[1].setAttribute( 'y', y );
        Shapes[1].setAttribute( 'height', cir );
        Shapes[1].setAttribute( 'width', cir );
      }

      if ( Shapes[0].nodeName == 'rect' ) {
        if ( e.target.getAttribute( 'fill' ) == 'white' ) {
          newrx = parseInt( Shapes[0].getAttribute( 'width' ) ) + 3;

          rx = newrx + 10;

          Shapes[0].setAttribute( 'width', newrx );
          Shapes[1].setAttribute( 'width', rx );
        }

        if ( e.target.getAttribute( 'fill' ) == 'black' ) {
          newry = parseInt( Shapes[0].getAttribute( 'height' ) ) - 3;

          if ( newry > 50 ) {
            ry = newry + 10;

            Shapes[0].setAttribute( 'height', newry );
            Shapes[1].setAttribute( 'height', ry );
          }
        }
      }

      if ( Shapes[0].nodeName == 'ellipse' ) {
        if ( e.target.getAttribute( 'fill' ) == 'white' ) {
          newrx = parseInt( Shapes[0].getAttribute( 'rx' ) ) + 3;

          x = Shapes[1].getAttribute( 'x' ) - 3;
          rx = newrx + newrx + 10;

          Shapes[0].setAttribute( 'rx', newrx );
          Shapes[1].setAttribute( 'x', x );
          Shapes[1].setAttribute( 'width', rx );
        }

        if ( e.target.getAttribute( 'fill' ) == 'black' ) {
          newry = parseInt( Shapes[0].getAttribute( 'ry' ) ) + 3;

          y = Shapes[1].getAttribute( 'y' ) - 3;
          ry = newry + newry + 10;

          Shapes[0].setAttribute( 'ry', newry );
          Shapes[1].setAttribute( 'y', y );
          Shapes[1].setAttribute( 'height', ry );
        }
      }
    }

    if ( e.wheelDelta == -120 ) {
      if ( Shapes[0].nodeName == 'circle' ) {
        current = parseInt( Shapes[0].getAttribute( 'r' ) );

        if ( current > 20 ) {
          newr = parseInt( Shapes[0].getAttribute( 'r' ) ) - 3;
          x = parseInt( Shapes[1].getAttribute( 'x' ) ) + 3;
          y = parseInt( Shapes[1].getAttribute( 'y' ) ) + 3;
          cir = newr + newr + 10;

          Shapes[0].setAttribute( 'r', newr );
          Shapes[1].setAttribute( 'x', x );
          Shapes[1].setAttribute( 'y', y );
          Shapes[1].setAttribute( 'height', cir );
          Shapes[1].setAttribute( 'width', cir );
        }
      }

      if ( Shapes[0].nodeName == 'rect' ) {
        if ( e.target.getAttribute( 'fill' ) == 'white' ) {
          newrx = parseInt( Shapes[0].getAttribute( 'width' ) ) - 3;

          if ( newrx > 50 ) {
            rx = newrx + 10;

            Shapes[0].setAttribute( 'width', newrx );
            Shapes[1].setAttribute( 'width', rx );
          }
        }

        if ( e.target.getAttribute( 'fill' ) == 'black' ) {
          newry = parseInt( Shapes[0].getAttribute( 'height' ) ) + 3;

          ry = newry + 10;

          Shapes[0].setAttribute( 'height', newry );
          Shapes[1].setAttribute( 'height', ry );
        }
      }

      if ( Shapes[0].nodeName == 'ellipse' ) {
        if ( e.target.getAttribute( 'fill' ) == 'white' ) {
          newrx = parseInt( Shapes[0].getAttribute( 'rx' ) ) - 3;

          if ( newrx > 20 ) {
            x = parseInt( Shapes[1].getAttribute( 'x' ) ) + 3;
            rx = newrx + newrx + 10;

            Shapes[0].setAttribute( 'rx', newrx );
            Shapes[1].setAttribute( 'x', x );
            Shapes[1].setAttribute( 'width', rx );
          }
        }

        if ( e.target.getAttribute( 'fill' ) == 'black' ) {
          newry = parseInt( Shapes[0].getAttribute( 'ry' ) ) - 3;

          if ( newry > 20 ) {
            y = parseInt( Shapes[1].getAttribute( 'y' ) ) + 3;
            ry = newry + newry + 10;

            Shapes[0].setAttribute( 'ry', newry );
            Shapes[1].setAttribute( 'y', y );
            Shapes[1].setAttribute( 'height', ry );
          }
        }
      }
    }

    event.preventDefault();
  }
}

function resize_mouseout( e ) {
  resize_drag = false;
}
