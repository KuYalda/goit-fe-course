import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired,
    updateTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.shape({ text: PropTypes.string }),
  };

  static defaultProps = {
    editTodo: null,
  };

  state = {
    todo: '',
  };

  handleChange = e => {
    const { value, name } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addTodo, updateTodo, editTodo } = this.props;
    const { todo } = this.state;

    if (todo.length > 3) {
      if (editTodo) {
        const updTodoData = { ...editTodo };
        updTodoData.text = todo;
        updateTodo(updTodoData);
      } else {
        addTodo(todo);
      }
      this.setState({ todo: '' });
    } else {
      alert('enter todo >3 simbol');
    }
  };

  render() {
    const { todo } = this.state;
    const { editTodo } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="todo">
          <input
            onChange={this.handleChange}
            type="text"
            name="todo"
            id="todo"
            value={todo === '' && editTodo ? editTodo.text : todo}
          />
        </label>
        <button type="submit">
          {editTodo === null ? 'Add Todo' : 'UpdateTodo'}
        </button>
      </form>
    );
  }
}
