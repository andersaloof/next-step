# nextStep [![Build Status](https://travis-ci.org/andersaloof/next-step.svg?branch=master)](https://travis-ci.org/andersaloof/next-step)

Steps an integer by a specified amount (+ or -), within a range from 0 to max, wrapping when the new value exceeds the range.

## Install

```
$ npm install @andersaloof/next-step
```

## Why?

Having made similar logic in a dozen of slideshows/galleries over the years, handling previous and next buttons to increase/decrease a current index, it was time to move it out to a separate module.

## Usage

**`nextStep(current, max, value)`**


### Example code

```js
const nextStep = require('@andersaloof/next-step');

const nextValue = nextStep(1, 5, 2); // Increase current value 1 by 2, returns 3;
const anotherValue = nextStep(1, 5, -3); // Decrease current value 1 by -3, with a max value of 5, returns 4;
```

## License

MIT
