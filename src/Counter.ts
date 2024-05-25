import * as styles from './styles/Template.css';

export default class Counter {
  public element: HTMLSpanElement;

  constructor(name: string, count: number) {
    this.element = this.generate(name, count);
  }

  private generate(name: string, count: number): HTMLSpanElement {
    const timer = document.createElement('span');
    timer.setAttribute('id', name);
    timer.innerText = count.toString();
    timer.classList.add(styles.default.description);
    timer.classList.add(styles.default.enumerator);

    return timer;
  }

  protected set(value: string) {
    this.element.innerText = value;
  }
}