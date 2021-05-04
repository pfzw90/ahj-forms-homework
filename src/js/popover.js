export default class Popover {
  constructor(elem, title, text) {
    this.elem = document.getElementById(elem);
    this.title = title;
    this.text = text;
  }

  create() {
    const popover = document.createElement('div');
    popover.className = 'popover';
    popover.addEventListener('click', (ev) => {
      ev.preventDefault();
      popover.classList.toggle('visible');
    });

    const popoverTitle = document.createElement('span');
    popoverTitle.className = 'title';
    popoverTitle.innerHTML = this.title;

    const popoverText = document.createElement('span');
    popoverText.className = 'text';
    popoverText.innerHTML = this.text;

    popover.insertAdjacentElement('beforeend', popoverTitle);
    popover.insertAdjacentElement('beforeend', popoverText);

    document.body.appendChild(popover);
    const { top, left } = this.elem.getBoundingClientRect();
    popover.style.top = `${window.scrollY + top
    + -popover.offsetHeight - 10}px`;
    popover.style.left = `${window.scrollX + left + this.elem.offsetWidth / 2 - popover.offsetWidth / 2}px`;

    this.elem.addEventListener('click', (ev) => {
      ev.preventDefault();
      popover.classList.toggle('visible');
    });

    this.elem.classList.add('has-tooltip');
  }
}
