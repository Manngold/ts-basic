type Direction = 'up' | 'down' | 'left' | 'right';
let x: number = 0;
let y: number = 0;
const mover = (direction: Direction) => {
  switch (direction) {
    case 'up':
      y += 1;
      break;
    case 'down':
      y -= 1;
      break;
    case 'left':
      x -= 1;
      break;
    case 'right':
      x += 1;
      break;
    default:
      throw new Error('Throw Exception Error');
  }
  console.log(`x : ${x}, y : ${y}`);
};

mover('up');
mover('up');
mover('down');
mover('left');
mover('left');
mover('right');
