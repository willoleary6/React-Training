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
import store from './store'
import Post from "./Post";
import {Provider} from 'react-redux';
import AddDelete from './AddDelete'


class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Provider store = {store}>
        <div>
          <header className="App-header">
            <h1>
              <FormattedMessage {...messages.header} />
            </h1>
          </header>
          <div className="App-body">
            <div>
              {
                //control buttons.
              }
              <div className="verticalDiv">
                <AddDelete/>
              </div>
              {
                //output tables.
              }
              <div>
                <Post/>
              </div>
            </div>
          </div>
        </div>
     </Provider>
    );
  }
}

export default HomePage;

