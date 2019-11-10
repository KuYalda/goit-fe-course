import eventEmitter from './eventEmitter';

export const getPeople = () => {
  fetch('https://swapi.co/api/people')
    .then(res => res.json())
    .then(resData => {
      eventEmitter.emit('afterFetchPeople', resData.results);
    });
};
