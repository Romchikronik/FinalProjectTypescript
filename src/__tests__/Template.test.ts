import Template from '../Template';
import Board from '../Board';
import Timer from '../Timer';
import Mines from '../Mines';

describe('Template', () => {
  let template: Template;
  let container: HTMLElement;

  beforeEach(() => {
    container = document.createElement('div');
    template = new Template(1, container);
  });

  afterEach(() => {
    container.remove();
  });

  describe('constructor', () => {
    it('should create a new instance of Template', () => {
      expect(template).toBeInstanceOf(Template);
    });

    it('should create a new instance of Board', () => {
      expect(template['board']).toBeInstanceOf(Board);
    });

    it('should create a new instance of Timer', () => {
      expect(template['timer']).toBeInstanceOf(Timer);
    });

    it('should create a new instance of Mines', () => {
      expect(template['mines']).toBeInstanceOf(Mines);
    });

    it('should set the gameState to InProgress', () => {
      expect(template['gameState']).toBe(0);
    });

    it('should append the header to the container', () => {
      expect(container.querySelector('#header')).toBeTruthy();
    });

  });

  describe('clearContainer', () => {
    it('should clear the container', () => {
      template['clearContainer']();
      expect(container.innerHTML).toBe('');
    });
  });

  describe('getSettingsForLevel', () => {
    it('should return the settings for level 1', () => {
      const settings = template['getSettingsForLevel'](1);
      expect(settings).toEqual({ rows: 10, columns: 10, mines: 5 });
    });

    it('should return the settings for level 2', () => {
      const settings = template['getSettingsForLevel'](2);
      expect(settings).toEqual({ rows: 20, columns: 20, mines: 10 });
    });
  });

  describe('createHeader', () => {
    it('should create a new header element', () => {
      const header = template['createHeader']();
      expect(header).toBeInstanceOf(HTMLDivElement);
      expect(header.getAttribute('id')).toBe('header');
      expect(header.classList.contains('header')).toBe(true);
    });
  });


  describe('onFinish', () => {

    it('should set the gameState to Lost if win is false', () => {
      template['onFinish'](false);
      expect(template['gameState']).toBe(2);
    });

    it('should stop the timer', () => {
      const spy = jest.spyOn(template['timer'], 'stop');
      template['onFinish'](true);
      expect(spy).toHaveBeenCalled();
    });
  });
});