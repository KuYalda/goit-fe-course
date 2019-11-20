/* eslint-disable react/no-array-index-key */
/* eslint-disable react/button-has-type */
import React, { Component } from 'react';
import formSteps from '../../db/formSteps.json';
import s from './SignUp.module.css';

export default class SignUp extends Component {
  state = {
    step: 0,
    submData: {
      userName: '',
      email: '',
      passport: '',
      passportDate: '',
      passportState: '',
      confirmPassport: false,
      confirmAge: false,
      confirmPolicy: false,
    },
  };

  handleNext = () => {
    this.setState(state => {
      if (state.step < formSteps.length - 1) {
        return {
          step: state.step + 1,
        };
      }
      return {};
    });
  };

  handlePrev = () => {
    this.setState(state => {
      if (state.step > 0) {
        return {
          step: state.step - 1,
        };
      }
      return {};
    });
  };

  handleChange = e => {
    const { value, type, name, checked } = e.target;
    this.setState(state => {
      return {
        submData: {
          ...state.submData,
          [name]: type === 'checkbox' ? checked : value,
        },
      };
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { submData } = this.state;
    const { onHandleSubmit } = this.props;
    onHandleSubmit(submData);
  };

  render() {
    const { step, submData } = this.state;
    return (
      <div className={s.form_wrapper}>
        <h1 className={s.title}>{formSteps[step].title}</h1>
        <form onSubmit={this.handleSubmit} className={s.form} action="">
          {formSteps[step].items.map((el, indx) => (
            <label className={s.label} key={indx} htmlFor={el.name}>
              {el.label}
              <input
                className={s[`input-${el.type}`]}
                id={el.name}
                type={el.type}
                name={el.name}
                value={submData[el.name]}
                onChange={this.handleChange}
                checked={submData[el.name]}
                required
              />
            </label>
          ))}
          {formSteps[step].buttonType === 'button' && (
            <button
              onClick={this.handleNext}
              className={s.button}
              type={formSteps[step].buttonType}
            >
              {formSteps[step].buttonText}
            </button>
          )}
          {step > 0 && (
            <button
              onClick={this.handlePrev}
              className={s.button}
              type={formSteps[step].buttonType}
            >
              to step {step}
            </button>
          )}
          {formSteps[step].buttonType === 'submit' && (
            <button
              onClick={this.handleNext}
              className={s.button}
              type={formSteps[step].buttonType}
            >
              {formSteps[step].buttonText}
            </button>
          )}
        </form>
      </div>
    );
  }
}
