class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = new Date(targetDate);
  }

  startCountdown() {
    const timerIdRef = document.querySelector(`${this.selector}`);
    if (timerIdRef === null) {
      console.log(`there is no timer markup for ${this.selector}`);
      return;
    }

    const refs = {
      days: document.querySelector(`${this.selector} [data-value="days"]`),
      hours: document.querySelector(`${this.selector} [data-value="hours"]`),
      mins: document.querySelector(`${this.selector} [data-value="mins"]`),
      secs: document.querySelector(`${this.selector} [data-value="secs"]`),
    };

    this.intervalId = setInterval(() => {
      const date = Date.now();
      const time = this.targetDate - date;
      if (time < 0) {
        console.log(`time is over for ${this.selector}`);
        this.stopCountdown();
        return;
        }
        
        const timeValue = {
       days: Math.floor(time / (1000 * 60 * 60 * 24)),
       hours: this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))),
       mins: this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))),
       secs: this.pad(Math.floor((time % (1000 * 60)) / 1000)),
        }

      updateTimerFace(refs, timeValue);
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalId);
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }
}

function updateTimerFace(refs, timeValue) {
  refs.days.textContent = `${timeValue.days}`;
  refs.hours.textContent = `${timeValue.hours}`;
  refs.mins.textContent = `${timeValue.mins}`;
  refs.secs.textContent = `${timeValue.secs}`;
}

const deadLine = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Dec 31, 2021 22:00:00'),
});

deadLine.startCountdown();

// Создай плагин настраиваемого таймера, который ведет обратный отсчет до предварительно определенной даты.
// Такой плагин может использоваться в блогах и интернет - магазинах, страницах регистрации событий, во время технического обслуживания и т.д.
// Плагин показывает четыре цифры: дни, часы, минуты и секунды в формате XX:XX:XX:XX. Количество дней может состоять из более чем двух цифр.
// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
// Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.
/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 * const days = Math.floor(time / (1000 * 60 * 60 * 24));
 *
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 * const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
 *
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 * const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
 *
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 * const secs = Math.floor((time % (1000 * 60)) / 1000);
 */
