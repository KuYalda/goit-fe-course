class EventEmitter {
  constructor() {
    this.events = {};
  }

  subscribe(type, callBack) {
    if (!this.events[type]) {
      this.events[type] = [];
    }

    this.events[type].push(callBack);
  }

  unsubscribe(type, callBack) {
    if (!this.events[type]) returne;

    this.events[type] = this.events[type].filter(el => el !== callBack);
  }
  emit(type) {
    if (!this.events[type]) return;

    this.events[type].forEach(cb => {
      cb();
    });
  }
}

export default new EventEmitter();
