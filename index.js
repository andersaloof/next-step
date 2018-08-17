function nextStep(current, max, step) {
  var moddedStep = step % (max + 1);

  if (current + moddedStep >= 0 && current + moddedStep <= max) {
    return current + moddedStep;
  }

  return current + moddedStep < 0
    ? (max + 1) + current + moddedStep
    : (moddedStep - (max - current)) -1 ;
}

module.exports = nextStep
