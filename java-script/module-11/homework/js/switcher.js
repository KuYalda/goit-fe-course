// Есть массив цветов в hex-формате и кнопки Start и Stop.
// Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет фона body на случайное значение из массива используя инлайн-стиль. При нажатии на кнопку Stop, изменение цвета фона должно останавливаться.
// warning Учти, на кнопку Start можно нажать бесконечное количество раз. Сделай так, чтобы пока изменение темы запушено, кнопка Start была не активна.
// Для генерации случайного числа (индекс элемента массива цветов), используй функцию

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const refs = {
  siteBody: document.body,
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

const switcher = {
  isOn: false,
  changeColor() {
    if (this.isOn) {
      return;
    }

    this.isOn = true;

    this.changeBgc = setInterval(() => {
      const currentColor = getColor(colors, randomIntegerFromInterval);
      refs.siteBody.style.backgroundColor = currentColor;
      console.log(currentColor);
    }, 1000);
  },

  stopDisco() {
    clearInterval(this.changeBgc);
    this.isOn = false;
  },
};

function getColor(arr, callback) {
  const min = 0;
  const max = arr.length - 1;
  return arr[callback(min, max)];
}

refs.startBtn.addEventListener('click', switcher.changeColor.bind(switcher));
refs.stopBtn.addEventListener('click', switcher.stopDisco.bind(switcher));
