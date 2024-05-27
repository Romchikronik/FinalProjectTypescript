import Timer from '../Timer';

describe('Timer', () => {
  let timer: Timer;

  beforeEach(() => {
    timer = new Timer();
  });

  afterEach(() => {
    timer.stop();
  });

  describe('constructor', () => {
    it('should create a new instance of Timer', () => {
      expect(timer).toBeInstanceOf(Timer);
    });

    it('should set the initial time to 0', () => {
      expect(timer['time']).toBe(0);
    });

    it('should set the initial intervalID to 0', () => {
      expect(timer['intervalID']).toBe(0);
    });
  });

});