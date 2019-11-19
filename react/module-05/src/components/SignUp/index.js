import React, { Component } from 'react';

export default class SignUp extends Component {
  state = {
    submData: {
      name: '',
      email: '',
      ready: false,
      gender: '',
      city: 'Jmerenka',
    },
  };

  handleChange = e => {
    const { name, value, type, checked } = e.target;
    this.setState(ps => ({
      submData: {
        ...ps.submData,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  };

  handleGenderChange = e => {
    const { value } = e.target;
    this.setState(ps => ({ submData: { ...ps.submData, gender: value } }));
  };

  handleSubmit = e => {
    e.preventDefault();
    const { onHandleSubmit } = this.props;

    onHandleSubmit(this.state.submData);
  };

  render() {
    const {
      submData: { name, email, ready, gender, city },
    } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          value={name}
          onChange={this.handleChange}
          type="text"
          name="name"
        />
        <input
          value={email}
          onChange={this.handleChange}
          type="email"
          name="email"
        />
        <label htmlFor="ready">
          <input
            id="ready"
            checked={ready}
            onChange={this.handleChange}
            type="checkbox"
            name="ready"
          />
          Are you ready?
        </label>
        <label htmlFor="male">
          <input
            id="male"
            checked={gender === 'male'}
            value="male"
            onChange={this.handleGenderChange}
            type="radio"
          />
          male
        </label>
        <label htmlFor="female">
          <input
            id="female"
            checked={gender === 'female'}
            value="female"
            onChange={this.handleGenderChange}
            type="radio"
          />
          female
        </label>
        <label htmlFor="city" onChange={this.handleChange}>
          Select your city
          <select defaultValue={city} name="city" id="city">
            <option value="Poltava">Poltava</option>
            <option value="Kyiv">Kyiv</option>
            <option value="Jmerenka">Jmerenka</option>
          </select>
        </label>

        <button type="submit" disabled={!ready}>
          submit
        </button>
      </form>
    );
  }
}
