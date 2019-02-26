import React from 'react';
import Navigation from './components/Navigation';
import 'normalize.css';

import "styles/base/_main.scss"  // Global styles
import "styles/base/_common.scss"  // Global styles
import styles from "./app.scss"  // Css-module styles

const App = () => (
  <div className='App'>
    <Navigation/>
    <div>
      <p>This React project just works including <span className={styles.redButton}>css-module</span> local styles.</p>
    </div>
  </div>
);

export default App;
