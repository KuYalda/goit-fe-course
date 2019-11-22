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

  nextArticle = () => {
    this.setState(ps => {
      const { items } = this.props;
      if (ps.idx < items.length) {
        return {
          idx: ps.idx + 1,
        };
      }
      return {};
    });
  };

  prevArticle = () => {
    this.setState(ps => {
      const { items } = this.props;
      if (ps.idx < items.length) {
        return {
          idx: ps.idx - 1,
        };
      }
      return {};
    });
  };

  render() {
    const { idx } = this.state;
    const { items } = this.props;
    const { id, title, text: publication } = items[idx];
    return (
      <div className={s.reader}>
        <section className={s.controls}>
          <Controls
            handlePrev={this.prevArticle}
            purpose="Назад"
            className={s.button}
            stop={idx === 0}
          />
          <Controls
            handNext={this.nextArticle}
            purpose="Вперед"
            className={s.button}
            stop={items.length === idx + 1}
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
