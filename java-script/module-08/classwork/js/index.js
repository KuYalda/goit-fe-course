'use strict'

window.addEventListener(
  'scroll',
  _.throttle(() => {
    console.log('Scroll event handler invocation every 300ms.');
  }, 300),
);

document.querySelector('input').addEventListener(
  'input',
  _.debounce(() => {
    console.log(
      'Input event handler invocation after 300ms of inactivity past burst.',
    );
  }, 300),
);
