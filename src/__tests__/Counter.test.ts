import Counter from '../Counter';

describe('Counter', () => {
  let counter: Counter;

  beforeEach(() => {
    counter = new Counter('timer', 0);
  });

  describe('constructor', () => {
    it('should create a new instance of Counter', () => {
      expect(counter).toBeInstanceOf(Counter);
    });

    it('should set the element property to an HTMLSpanElement', () => {
      expect(counter.element).toBeInstanceOf(HTMLSpanElement);
    });

    it('should set the element id to the provided name', () => {
      expect(counter.element.id).toBe('timer');
    });

    it('should set the element innerText to the provided count', () => {
      expect(counter.element.innerText).toBe('0');
    });

    it('should add the default CSS classes to the element', () => {
      expect(counter.element.classList.contains('description')).toBe(true);
      expect(counter.element.classList.contains('enumerator')).toBe(true);
    });
  });

  describe('set', () => {
    it('should set the innerText of the element to the provided value', () => {
      counter.set('10');
      expect(counter.element.innerText).toBe('10');
    });
  });
});