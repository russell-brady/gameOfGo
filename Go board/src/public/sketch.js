let socket;

function setup() {
  createCanvas(675, 675);
  background(238, 213, 183);
  Go = new Board();
  socket = io.connect('localhost:3000');
  let boolean = false;
  socket.on('mouse',
    (info) => {
      Go.placeStone(info.x, info.y, !boolean);
    }
  );
}

function draw() {
  Go.createGrid();
  Go.renderStones();
}

function mousePressed(e) {
  let {offsetX, offsetY} = e;
  //Go.placeStone(offsetX,offsetY);
  let data = {
    x: offsetX,
    y: offsetY
  };
  socket.emit('mouse', data);
}
