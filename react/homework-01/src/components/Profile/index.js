import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';
import { H3 } from '../Titles';

const Profile = ({ user }) => (
  <section className={styles.profile}>
    <article className={styles.description}>
      <img src={user.avatar} alt="user avatar" className={styles.avatar} />
      <H3 text={user.name} className={styles.name} />
      <p className={styles.tag}>@{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </article>

    <ul className={styles.stats}>
      <li>
        <span className={styles.label}>Followers</span>
        <span className={styles.quantity}>{user.stats.followers}</span>
      </li>
      <li>
        <span className={styles.label}>Views</span>
        <span className={styles.quantity}>{user.stats.views}</span>
      </li>
      <li>
        <span className={styles.label}>Likes</span>
        <span className={styles.quantity}>{user.stats.likes}</span>
      </li>
    </ul>
  </section>
);

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    location: PropTypes.string,
    name: PropTypes.string,
    tag: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      likes: PropTypes.number,
      views: PropTypes.number,
    }),
  }).isRequired,
};

export default Profile;
