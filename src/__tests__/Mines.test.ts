import Mines from "../Mines";

describe("Mines", () => {
  let mines: Mines;

  beforeEach(() => {
    mines = new Mines(10);
  });

  it("should create a Mines instance", () => {
    expect(mines).toBeDefined();
  });
    
});