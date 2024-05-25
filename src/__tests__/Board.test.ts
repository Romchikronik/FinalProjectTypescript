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
});
