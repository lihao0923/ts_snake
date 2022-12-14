class ScorePanel {
    score = 0;
    level = 1;

    scoreEle: HTMLElement;
    leveEle: HTMLElement;

    maxLevel: number;
    upScore: number;

    constructor(maxLevel: number = 10, upScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.leveEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.upScore = upScore;
    }

    addScore() {
        this.score++;
        this.scoreEle.innerHTML = this.score + '';

        if(this.score % this.upScore === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if(this.level < this.maxLevel) {
            this.level++;
            this.leveEle.innerHTML = this.level + '';
        }

    }
}

export default ScorePanel;