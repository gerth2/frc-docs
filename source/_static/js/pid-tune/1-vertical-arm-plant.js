class VerticalArmPlant {
  constructor(TimestepS) {
    this.TimestepS = TimestepS;

    // Gains estimated by ReCalc (http://reca.lc) with the specs below
    // motor: 1x REV Neo
    // gearing: 100:1
    // efficiency: 100
    // arm length: 1 meter
    // arm mass: 5 kg
    this.kGVolts = 1.75;
    this.kVVoltSecondPerRad = 1.95;
    this.kAVoltSecondSquaredPerRad = 0.18;

    this.state = [0, 0];

    this.systemNoise = false;
    // Simulate quarter volt std dev system noise at the loop update frequency
    this.gaussianNoise = gaussian(0, 0.25);
  }

  acceleration([posRad, velRadPerS], inputVolts) {
    if (this.systemNoise) {
      inputVolts += this.gaussianNoise();
    }

    const gravityAcceleration = -this.kGVolts * Math.cos(posRad) / this.kAVoltSecondSquaredPerRad;
    const EMFAcceleration = -this.kVVoltSecondPerRad * velRadPerS / this.kAVoltSecondSquaredPerRad;
    const controlEffortAcceleration = inputVolts / this.kAVoltSecondSquaredPerRad;
    const accelRadPerSSquared = gravityAcceleration + EMFAcceleration + controlEffortAcceleration;

    return [velRadPerS, accelRadPerSSquared]
  }
  
  reset() {
    this.state = [0, 0];
  }

  update(inputVolts) {
    // Simulate system noise
    if (this.systemNoise && inputVolts > 0) {
      // apply system noise
      inputVolts += this.gaussianNoise();
    }

    //Run plant model simulation
    // this.curPosRad =
    //   (1 / (this.TimestepS * this.C2 + 1)) *
    //   (this.TimestepS * this.TimestepS * this.C1 * inputVolts -
    //     this.TimestepS * this.TimestepS * this.C3 * Math.cos(this.posPrevRad) +
    //     this.posPrevRad * (this.TimestepS * this.C2 + 2) -
    //     this.posPrevPrevRad);

    this.state =
      secondOrderRK4((state, inputVolts) => this.acceleration(state, inputVolts),
      this.state,
      inputVolts,
      this.TimestepS);
  }

  getPositionRad() {
    return this.state[0];
  }

  setSystemNoise(enabled) {
    this.systemNoise = enabled;
  }
}
