const data = require('./day2Data');

// console.log(data);

//////////////////////////////////////////////////
// PART 1
let horizontal = 0;
let depth = 0;

data.forEach(direction => {
  if(direction.includes('forward')) {
    const splitForward = direction.split(' ');
    horizontal += Number(splitForward[1]);
  }

  if(direction.includes('up')) {
    const splitUp = direction.split(' ');
    depth -= Number(splitUp[1]);
  }

  if(direction.includes('down')) {
    const splitDown = direction.split(' ');
    depth += Number(splitDown[1]);
  }
});

const distanceTimesDepth = horizontal * depth;

console.log(distanceTimesDepth);

// refactor as function:
const calculateDepth = (data) => {
  let horizontal = 0;
  let depth = 0;

  data.forEach(entry => {
    const splitEntry = entry.split(' ');

    const direction = splitEntry[0];
    const distance = Number(splitEntry[1]);

    switch (direction) {
      case 'forward':
        horizontal += distance;
        break;
      case 'down':
        depth += distance;
        break;
      case 'up':
        depth -= distance;
        break;
      default:
        break;
    }
  });

  return horizontal * depth
};

console.log(calculateDepth(data));


//////////////////////////////////////////////////
// PART 2

// depth increases by down
// depth decreases by up
// depth increases by aim x forward

let horizontalWithAim = 0;
let depthWithAim = 0;
let aim = 0;

data.forEach(direction => {
  if(direction.includes('down')) {
    const splitDown = direction.split(' ');
    const distance = Number(splitDown[1])
    aim += distance;
  }

  if(direction.includes('up')) {
    const splitUp = direction.split(' ');
    const distance = Number(splitUp[1])
    aim -= distance;
  }

  if(direction.includes('forward')) {
    const splitForward = direction.split(' ');
    const distance = Number(splitForward[1])
    horizontalWithAim += distance;
    depthWithAim = depthWithAim + (aim * distance);
  }

});

const distanceTimesDepthWithAim = horizontalWithAim * depthWithAim;

console.log(distanceTimesDepthWithAim);

// refactor as function:
const calculateDepthWithAim = (data) => {
  let horizontal = 0;
  let depth = 0;
  let aim = 0;

  data.forEach(entry => {
    const splitEntry = entry.split(' ');

    const direction = splitEntry[0];
    const distance = Number(splitEntry[1]);

    switch (direction) {
      case 'forward':
        horizontal += distance;
        depth = depth + (aim * distance);
        break;
      case 'down':
        aim += distance;
        break;
      case 'up':
        aim -= distance;
        break;
      default:
        break;
    }
  });

  return horizontal * depth
};

console.log(calculateDepthWithAim(data));
