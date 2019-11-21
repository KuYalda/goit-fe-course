import React, { Component } from 'react';
import uuid from 'uuid/v1';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

class App extends Component {
  state = {
    data: [],
    editTodo: null,
  };

  addTodo = todo => {
    const newTodo = {
      id: uuid(),
      text: todo,
    };
    this.setState(ps => ({
      data: [...ps.data, newTodo],
    }));
  };

  handleEdit = id => {
    const { data } = this.state;
    const editTodo = data.find(el => el.id === id);
    this.setState({ editTodo });
  };

  updateTodo = updTodoData => {
    const { data } = this.state;
    const newData = data.map(el => {
      if (el.id === updTodoData.id) {
        return updTodoData;
      }
      return el;
    });
    this.setState({ data: newData, editTodo: null });
  };

  render() {
    const { data, editTodo } = this.state;
    return (
      <>
        <TodoForm
          updateTodo={this.updateTodo}
          editTodo={editTodo}
          addTodo={this.addTodo}
        />
        <TodoList handleEdit={this.handleEdit} data={data} />
      </>
    );
  }
}

export default App;
