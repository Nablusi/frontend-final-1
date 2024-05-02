import React from 'react';
import styles from './NotFound.module.css'; // Import the CSS module

export default function NotFound() {
  return (
    <div id="notfound" className={styles.notfoundContainer}> {/* Apply the CSS class */}
      <div className={styles.notfound}>
        <div className={styles.notfound404}>
          <h1>404</h1>
        </div>
        <h2>Oops, The Page you are looking for can't be found!</h2>
        <form className={styles.notfoundSearch}>
          <input type="text" placeholder="Search..." />
          <button type="button">Search</button>
        </form>
        <a href="#"><span className={styles.arrow} />Return To Homepage</a>
      </div>
    </div>
  );
}
