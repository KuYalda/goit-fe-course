import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Priority from '../../utils/priority';
import PrioritySelector from '../PrioritySelector';
import s from './TaskEditor.module.css';

const options = Object.values(Priority);

const INITIAL_STATE = {
  text: '',
  priority: Priority.LOW,
};

export default class TaskEditor extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
  };

  state = { ...INITIAL_STATE };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onAddTask({ ...this.state });

    this.setState({ ...INITIAL_STATE });
  };

  render() {
    const { priority, text } = this.state;
    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
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

// TaskEditor.propTypes = {
//   onAddTask: PropTypes.func.isRequired
// }
