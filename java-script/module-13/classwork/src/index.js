import './styles.css';

// const a = Symbol(5);
// const b = Number(5);
// const c = Symbol(5);

// console.log('a :', a);

// console.log('a === b :', a === b);
// console.log('a === c :', a === c);

// const obj = {};
// obj[a] = 'secret data';

// console.log('obj :', obj);

// console.log('obj[Symbol(5)] :', obj[Symbol(5)]);

// console.log('obj[a] :', obj[a]);

// const iterator = arr => {
//   let step = 0;
//   return {
//     next() {
//       step += 1;
//       const done = step <= arr.length ? false : true;
//       const value = !done ? step : null;

//       return {
//         value,
//         done,
//       };
//     },
//   };
// };

// const i = iterator([1, 2, 3]);
// console.log('i :', i);

// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());
// console.log('i.next :', i.next());

// const generator = function*() {
//   const a = yield 'some data';
//   yield a + ' some text';
// };

// const generatorIterator = generator();

// console.log('generator().next() :', generatorIterator.next());
// console.log('generator().next() :', generatorIterator.next('sada'));
// console.log('generator().next() :', generatorIterator.next());

// const someGen = function*() {
//   yield prompt('Enter number > 10');
//   yield alert('you are right');
//   yield console.log('next step');
// };

// const i2 = someGen();

// // console.log('i2.next() :', i2.next());

// if (+i2.next().value > 10) {
//   i2.next();
// }

// i2.next();

async function getSome() {
  try {
    const users = await fetch('https://swapi.co/api/people').then(res =>
      res.json(),
    );
    const firstUser = await fetch('https://swapi.co/api/peopleeee/1').then(
      res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(res.status);
        }
      },
    );
    console.log('users :', users);
    console.log('firstUser :', firstUser);
    return console.log({
      users: users.results,
      firstUser,
    });
  } catch (err) {
    console.log('err :', err);
  }
}

console.log('getSome() :', getSome());
