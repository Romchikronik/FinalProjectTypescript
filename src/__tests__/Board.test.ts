import Board from '../Board';
describe('Board', () => {
  
  let board: Board;
  const mockOnFlag = jest.fn();
  const mockOnFinish = jest.fn();
  const initialCell = { row: 10, column: 10 };

  beforeEach(() => {
    board = new Board(initialCell, 10, mockOnFlag, mockOnFinish);
    jest.clearAllMocks();
  });

  describe('initialization', () => {
    it('should create a board with correct dimensions', () => {
      expect(board.element).toBeDefined();
      expect(board.element.children.length).toBe(initialCell.row); 
    });
  });

  describe('newGame', () => {
    it('should reset the board with new dimensions and mines', () => {
      const newCell = { row: 8, column: 8 };
      const newMines = 12;
      board.newGame(newCell, newMines);

      expect(board.element.children.length).toBe(newCell.row);
      expect(board.tiles.length).toBe(newCell.row);
      expect(board.tiles[0].length).toBe(newCell.column);
      expect(board.mines).toBe(newMines);
    });
  });

  describe('clickCell', () => {

    it('should reveal the label of the clicked cell if it is not a mine', () => {
      const nonMineCell = { row: 0, column: 0 };
      board.clickCell(nonMineCell);

      expect(board.tiles[nonMineCell.row][nonMineCell.column].revealed).toBe(true);
      expect(board.tiles[nonMineCell.row][nonMineCell.column].disabled).toBe(false);
    });
  });

});