import Tile from '../Tile';

describe('Tile', () => {
  let tile: Tile;

  beforeEach(() => {
    tile = new Tile('1', jest.fn(), jest.fn());
  });

describe('initialization', () => {
    it('sets the initial state of revealed and flagged to false', () => {
        expect(tile.revealed).toBe(false);
        expect(tile.flagged).toBe(false);
    });
});

  describe('setFlag', () => {
    it('sets the element content to a flag icon', () => {
      tile.setFlag();
      expect(tile.element.innerHTML).toContain('fa-flag');
    });
  });

  describe('isMines', () => {
    it('returns true if the tile label is "x"', () => {
      tile = new Tile('x', jest.fn(), jest.fn());
      expect(tile.isMines()).toBe(true);
    });

    it('returns false if the tile label is not "x"', () => {
      expect(tile.isMines()).toBe(false);
    });
  });

  describe('isBlank', () => {
    it('returns true if the tile label is "0"', () => {
      tile = new Tile('0', jest.fn(), jest.fn());
      expect(tile.isBlank()).toBe(true);
    });

    it('returns false if the tile label is not "0"', () => {
      expect(tile.isBlank()).toBe(false);
    });
  });

  describe('showLabel', () => {
    it('adds the "active" class to the element', () => {
      tile.showLabel();
      expect(tile.element.classList.contains('active')).toBe(true);
    });

    it('displays the label as inner text if the tile is not a mine', () => {
      tile.showLabel();
      expect(tile.element.innerText).toBe('1');
    });

    it('displays an empty inner text if the tile is blank', () => {
      tile = new Tile('0', jest.fn(), jest.fn());
      tile.showLabel();
      expect(tile.element.innerText).toBe('');
    });

    it('displays a bomb icon if the tile is a mine', () => {
      tile = new Tile('x', jest.fn(), jest.fn());
      tile.showLabel();
      expect(tile.element.innerHTML).toContain('fa-bomb');
    });
    it('sets the revealed state to true', () => {
      tile.showLabel();
      expect(tile.revealed).toBe(true);
    });
  });

});