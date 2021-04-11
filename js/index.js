// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Sep 1, 2021'),
// });
const selector = '#timer-1';
const targetDate = new Date('Apr 12, 2021').getTime();

////

const refs = {
  //   timerById: document.querySelector(`${selector}`),
  days: document.querySelector(`${selector} [data-value="days"]`),
  hours: document.querySelector(`${selector} [data-value="hours"]`),
  mins: document.querySelector(`${selector} [data-value="mins"]`),
  secs: document.querySelector(`${selector} [data-value="secs"]`),
};

// updateTimerFace(days, hours, mins, secs);

function updateTimerFace(days, hours, mins, secs) {
  refs.days.textContent = `${days}`;
  refs.hours.textContent = `${hours}`;
  refs.mins.textContent = `${mins}`;
  refs.secs.textContent = `${secs}`;
}

function pad(value) {
  return String(value).padStart(2, '0');
}

function startCountdown() {
  setInterval(() => {
    const date = Date.now();
    const time = targetDate - date;
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
    updateTimerFace(days, hours, mins, secs);
  }, 1000);
}

startCountdown();

// setInterval(() => {
//   const currentTime = Date.now();
//   const deltaTime = currentTime - startTime;
//   const time = this.getTimeComponents(deltaTime);
//   this.onTick(time);
// }, 1000);

/////////

// console.log(time);

// console.log(days, hours, mins, secs);

// console.log(refs.timerById);
// console.log('days', refs.days);
// console.log('hours', refs.hours);
// console.log('mins', refs.mins);
// console.log('secs', refs.secs);

////////
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
