const zip = (a, b) => a.map((k, i) => [k, b[i]]);

const gaussian = (mean, stdev) => {
  let y2;
  let use_last = false;
  return function () {
    let y1;
    if (use_last) {
      y1 = y2;
      use_last = false;
    } else {
      let x1, x2, w;
      do {
        x1 = 2.0 * Math.random() - 1.0;
        x2 = 2.0 * Math.random() - 1.0;
        w = x1 * x1 + x2 * x2;
      } while (w >= 1.0);
      w = Math.sqrt((-2.0 * Math.log(w)) / w);
      y1 = x1 * w;
      y2 = x2 * w;
      use_last = true;
    }

    return mean + stdev * y1;
  }
}

const isNear = ([x1, y1], [x2, y2], tolerance) => {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return dx * dx + dy * dy <= tolerance * tolerance;
}

const scalarMultiplyState = (scalar, [posRad, velRadPerS]) => {
  return [scalar * posRad, scalar * velRadPerS];
}

const addState = (...states) => {
  return states.reduce((prev, cur) => [prev[0] + cur[0], prev[1] + cur[1]]
  );
}

const secondOrderRK4 = (dstate, state, inputVolts, timestepS) => {
  // These are sometimes named "k1" etc
  const d1 = dstate(state, inputVolts);
  const d2 = dstate(addState(state, scalarMultiplyState(0.5 * timestepS, d1)), inputVolts);
  const d3 = dstate(addState(state, scalarMultiplyState(0.5 * timestepS, d2)), inputVolts);
  const d4 = dstate(addState(state, scalarMultiplyState(timestepS, d3)), inputVolts);

  return addState(state,
    scalarMultiplyState(timestepS / 6,
      addState(d1,
        scalarMultiplyState(2, d2),
        scalarMultiplyState(2, d3),
        d4)));
}
