class CountdownTimer {
    constructor({ targetDate, selector }) {
        this.selector = selector
        this.targetDate = targetDate
        this.intID = null
        this.deltaTime = 0
        this.refs ={
    daysRef: document.querySelector('[data-value="days"]'),
    hoursRef: document.querySelector('[data-value="hours"]'),
    minsRef: document.querySelector('[data-value="mins"]'),
    secsRef: document.querySelector('[data-value="secs"]'),
}
    }
    start() {
        console.log(`timer start`);
        this.intID = setInterval(() => {
            let currentTime = Date.now()
            this.deltaTime = this.targetDate - currentTime
            const days = this.pad(Math.floor(this.deltaTime / (1000 * 60 * 60 * 24)))
            const hours = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)))
            const mins = this.pad(Math.floor((this.deltaTime % (1000 * 60 * 60)) / (1000 * 60)))
            const secs = this.pad(Math.floor((this.deltaTime % (1000 * 60)) / 1000));
            this.insertValues(days, hours, mins, secs)
        }, 1000)
    }

    pad(value) {
        return String(value).padStart(2, '0')
    }
    insertValues(days, hours, mins, secs) {
        this.refs.daysRef.textContent = days
        this.refs.hoursRef.textContent = hours
        this.refs.minsRef.textContent = mins
        this.refs.secsRef.textContent = secs

    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date(`Jan 1, 2022`),
});
timer.start()
