import React, { Component } from 'react';
import Priority from '../../utils/priority';
import PrioritySelector from '../PrioritySelector';
import s from './TaskEditor.module.css';

const options = Object.values(Priority);

export default class TaskEditor extends Component {
  state = {
    text: '',
    priority: Priority.LOW,
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { priority, text } = this.state;
    return (
      <form className={s.form}>
        <input
          type="text"
          name="text"
          value={text}
          className={s.input}
          placeholder="Enter task content..."
          onChange={this.handleChange}
        />
        <label className={s.label} htmlFor="priority">
          Select task priority:{' '}
          <PrioritySelector
            value={priority}
            onChange={this.handleChange}
            options={options}
          />
        </label>
        <button type="submit">Create {priority} task</button>
      </form>
    );
  }
}
