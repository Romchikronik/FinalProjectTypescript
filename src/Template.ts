import Board from './Board';
import Timer from './Timer';
import Mines from './Mines';

import * as styles from './styles/Template.css';

enum Counter {
  mines = "mines",
  timer = "timer"
}

enum GameState {
  InProgress,
  Won,
  Lost
}

export default class Template {
  private board: Board;
  private header: HTMLDivElement;
  private timer: Timer;
  private mines: Mines;
  private gameState: GameState;
  private container: HTMLElement;  
  
  private currentLevel: number;

  constructor(level: number, container: HTMLElement) {
    this.container = container;
    this.currentLevel = level;  // Store the current level
    this.clearContainer(); // Ensure the container is cleared
    const settings = this.getSettingsForLevel(level);
    this.header = this.createHeader();
    this.mines = new Mines(settings.mines);
    this.timer = new Timer();
    this.gameState = GameState.InProgress;

    this.container.appendChild(this.header);
    this.generateHeader();
    this.timer.start();

    this.board = new Board({ row: settings.rows, column: settings.columns }, settings.mines, (count: number) => this.mines.changeCount(count), (win: boolean) => this.onFinish(win));
    this.container.appendChild(this.board.element); 
  }

  private clearContainer() {
    this.container.innerHTML = '';  // Clear everything in the container
  }

  private getSettingsForLevel(level: number): { rows: number, columns: number, mines: number } {
    if (level === 1) {
      return { rows: 10, columns: 10, mines: 5 };
    } else {
      return { rows: 20, columns: 20, mines: 10 };
    }
  }

  private createHeader(): HTMLDivElement {
    const header = document.createElement('div');
    header.setAttribute('id', 'header');
    header.classList.add(styles.default.header);

    return header;
  }

  private generateHeader() {
    this.createCounter(Counter.mines);
    this.createGameButton();
    this.createCounter(Counter.timer);
  }

  private createCounter(type: Counter) {
    let element: HTMLSpanElement;
    if (type === Counter.timer) {
      element = this.timer.element;
    } else {
      element = this.mines.element;
    }

    const desc = document.createElement('span');
    desc.innerText = type.toString().toUpperCase();
    desc.classList.add(styles.default.description);

    const container = document.createElement('div');
    container.appendChild(element);
    container.appendChild(desc);
    container.style.cssText = 'display: flex; flex-direction: column; justify-content: center; align-items: center';

    this.header.appendChild(container);
  }
  
  private createGameButton() {
    const button = document.createElement('button');
    button.innerText = 'New Game!';
    button.classList.add(styles.default.newGame);
    button.addEventListener('click', () => {
      const settings = this.getSettingsForLevel(this.currentLevel); 
      this.board.newGame({ row: settings.rows, column: settings.columns }, settings.mines);
      this.timer.reset();
      this.mines.setCount(settings.mines);
    });

    this.header.appendChild(button);
  }

  private onFinish(win: boolean = false) {
    this.gameState = win ? GameState.Won : GameState.Lost;
    if (win) {
      this.mines.setCount(0);
    }
    this.timer.stop();
  }
}
