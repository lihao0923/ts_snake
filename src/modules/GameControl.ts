import Snake from './Snake';
import Food from './Food';
import ScorePanel from './ScorePanel';

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;

    direction: string = '';
    isLive: boolean = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));

        this.run();
    }

    keydownHandler(event: KeyboardEvent) {
        // if (this.direction === event.key) return;
        //
        // if ((this.direction === 'ArrowUp' || this.direction === 'Up') && (event.key === 'ArrowDown' || event.key === 'Down')) return;
        //
        // if ((this.direction === 'ArrowDown' || this.direction === 'Down') && (event.key === 'ArrowUp' || event.key === 'Up')) return;
        //
        // if ((this.direction === 'ArrowLeft' || this.direction === 'Left') && (event.key === 'ArrowRight' || event.key === 'Right')) return;
        //
        // if ((this.direction === 'ArrowRight' || this.direction === 'Right') && (event.key === 'ArrowLeft' || event.key === 'Left')) return;

        this.direction = event.key;
    }

    run() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        switch (this.direction) {
            case 'ArrowUp':
            case 'Up':
                Y -= 10;
                break;
            case 'ArrowDown':
            case 'Down':
                Y += 10;
                break;
            case 'ArrowLeft':
            case 'Left':
                X -= 10;
                break;
            case 'ArrowRight':
            case 'Right':
                X += 10;
                break;
        }


        this.checkEat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + 'game over!');
            this.isLive = false;
        }

        this.isLive && setTimeout(this.run.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    checkEat(X: number, Y: number): void {
        if(X === this.food.X && Y === this.food.Y) {
            for(let i = 1; i < this.snake.bodies.length; i++) {
                let bd = this.snake.bodies[i] as HTMLElement;
                if(this.food.X === bd.offsetLeft && this.food.Y === bd.offsetTop) {
                    this.food.change();
                }
            }

            this.food.change();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }

}

export default GameControl;




