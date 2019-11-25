import React, { Component } from 'react';
import TaskEditor from './components/TaskEditor';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      filter: '',
    };
  }

  render() {
    const { tasks, filter } = this.state;
    return (
      <>
        {(tasks, filter)}
        <TaskEditor />
      </>
    );
  }
}
