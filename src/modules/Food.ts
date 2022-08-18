
class Food {
    element: HTMLElement;
    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop
    }

    change() {
        let left = Math.round(Math.random() * 28) * 10;
        let top = Math.round(Math.random() * 28) * 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }
}

export default Food;