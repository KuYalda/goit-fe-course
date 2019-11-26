import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls';
import Counter from '../Counter';
import Publication from '../Publication';
import s from './Reader.module.css';

export default class Reader extends Component {
  static propTypes = PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired;
  state = {
    idx: 0,
  };

  handleClickPrev = () => {
    this.setState(ps => ({ idx: ps.idx - 1 }));
  };

  handleClickNext = () => {
    this.setState(ps => ({ idx: ps.idx + 1 }));
  };

  render() {
    const { idx } = this.state;
    const { items } = this.props;
    const { id, title, text: publication } = items[idx];
    return (
      <div className={s.reader}>
        <section className={s.controls}>
          <Controls
            handleClick={this.handleClickPrev}
            className={s.button}
            stop={idx === 0}
            value="Назад"
          />
          <Controls
            handleClick={this.handleClickNext}
            className={s.button}
            stop={items.length === idx + 1}
            value="Вперед"
          />
        </section>
        <Counter actualValue={idx + 1} maxValue={items.length} />
        <article className={s.publication} key={id}>
          <Publication text={title} article={publication} />
        </article>
      </div>
    );
  }
}
