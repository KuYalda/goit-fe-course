import React, { Component } from 'react';
import shortid from 'shortid';
import TaskEditor from './components/TaskEditor';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      filter: '',
    };
  }

  componentDidMount() {
    const persistTasks = localStorage.getItem('tasks');

    if (persistTasks) {
      try {
        const tasks = JSON.parse(persistTasks);
        this.setState({ tasks });
      } catch (err) {
        console.log('err :', err);
      }
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { tasks } = this.state;

    if (prevState.tasks !== tasks) {
      localStorage.setItem('tasks', JSON.stringify({ ...tasks }));
    }
  }

  addTask = task => {
    const taskToAdd = {
      ...task,
      id: shortid.generate(),
      complited: false,
    };

    this.setState(ps => ({
      tasks: [...ps.tasks, taskToAdd],
    }));
  };

  deleteTask = id => {
    this.setState(ps => ({
      tasks: ps.tasks.filter(el => el.id !== id),
    }));
  };

  updateTask = (id, priority = false) => {
    this.setState(ps => ({
      tasks: this.mapTasks(ps.tasks, id, priority),
    }));
  };

  mapTasks = (arr, id, priority) => {
    if (priority) {
      return arr.map(el => (el.id === id ? { ...el, priority } : el));
    }
    return arr.map(el =>
      el.id === id ? { ...el, complited: !el.complited } : el,
    );
  };

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    const { tasks, filter } = this.state;
    const filteredTasks = tasks.filter(el =>
      el.text.toLowerCase().includes(filter.toLowerCase()),
    );
    return (
      <>
        <TaskEditor onAddTask={this.addTask} />
        <TaskFilter value={filter} onChangeFilter={this.changeFilter} />
        <TaskList
          items={filteredTasks}
          onDeleteTask={this.deleteTask}
          onUpdateTask={this.updateTask}
        />
      </>
    );
  }
}
