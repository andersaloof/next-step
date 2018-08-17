var test = require('tape');
var nextStep = require('./');

test('nextStep', function(t) {
  // increase by 1
  t.equal(nextStep(0, 2, 1), 1);
  t.equal(nextStep(1, 2, 1), 2);
  t.equal(nextStep(2, 2, 1), 0); // wrap around to start

  // decrease by 1
  t.equal(nextStep(2, 3, -1), 1);
  t.equal(nextStep(1, 3, -1), 0);
  t.equal(nextStep(0, 3, -1), 3); // wrap around to max

  // increase by 2
  t.equal(nextStep(0, 2, 2), 2);
  t.equal(nextStep(1, 2, 2), 0); // wrap around to start
  t.equal(nextStep(2, 2, 2), 1); // wrap around to start + 1

  // decrease by 2
  t.equal(nextStep(2, 3, -2), 0);
  t.equal(nextStep(1, 3, -2), 3); // wrap around to max
  t.equal(nextStep(0, 3, -2), 2); // wrap around to max - 1

  // wrap around multiple times increasingly
  t.equal(nextStep(0, 2, 3), 0); // wrap around multiple times
  t.equal(nextStep(0, 2, 4), 1); // wrap around multiple times
  t.equal(nextStep(0, 2, 5), 2); // wrap around multiple times
  t.equal(nextStep(0, 2, 6), 0); // wrap around multiple times
  t.equal(nextStep(0, 2, 7), 1); // wrap around multiple times
  t.equal(nextStep(0, 2, 8), 2); // wrap around multiple times
  t.equal(nextStep(0, 2, 9), 0); // wrap around multiple times

  // wrap around multiple times decreasingly
  t.equal(nextStep(0, 2, 0), 0); // wrap around multiple times
  t.equal(nextStep(0, 2, -4), 2); // wrap around multiple times
  t.equal(nextStep(0, 2, -5), 1); // wrap around multiple times
  t.equal(nextStep(0, 2, -6), 0); // wrap around multiple times
  t.equal(nextStep(0, 2, -7), 2); // wrap around multiple times
  t.equal(nextStep(0, 2, -8), 1); // wrap around multiple times
  t.equal(nextStep(0, 2, -9), 0); // wrap around multiple times

  // Random tests
  t.equal(nextStep(42, 50, 32), 23);
  t.equal(nextStep(42, 50, 82), 22);
  t.equal(nextStep(42, 50, 132), 21);
  t.equal(nextStep(1, 5, 2), 3);
  t.equal(nextStep(1, 5, -3), 4);

  t.end();
});
