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

// const Switcher = {
//   constructor (
//     this.isOn: false,
//     this.refs: {
//       siteBody: document.body;
//       startBtn: document.querySelector('button[data-action="start"]');
//       stopBtn: document.querySelector('button[data-action="stop"]');
//     }
//   )
// }

function getColor(arr, callback) {
  const min = 0;
  const max = arr.length - 1;
  return arr[callback(min, max)];
}

console.log(getColor(colors, randomIntegerFromInterval));
// switcher.siteBody.addEventListener('click', e => {
//   if (e.target === siwtcher.startBtn) {
//   }
// });
