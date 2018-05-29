/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import './HomePage.css';
import Button from './components/Button.js';
import Post from './components/Post.js';
export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {

    return (
      <div>
        <header className="App-header">
          <h1>
            <FormattedMessage {...messages.header} />
          </h1>
        </header>
        <body className="App-body">
        <div >
          <div className="verticalDiv">
            <Button title={"Add"}/>
            <Button title={"Delete"}/>
          </div>
          <div>
            <Post/>
          </div>
        </div>
        </body>
      </div>

    );
  }
}
