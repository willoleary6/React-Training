/**
 *
 * QuotePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import CenteredSection from './CenteredSection';
import AddDelete from './AddDelete';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {makeSelectData, makeSelectDeletedData} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import InlineDiv from '../../components/InlineDiv';
import ViewTables from './ViewTables'
import {fetchQuote, deleteQuote} from "./actions";

export class QuotePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div>
        <Helmet>
          <title>QuotePage</title>
          <meta name="description" content="Description of QuotePage" />
        </Helmet>

        <CenteredSection>
          <FormattedMessage {...messages.header} />
            <div >
              <InlineDiv>
                <AddDelete/>
              </InlineDiv>
              <div>
                <ViewTables addTable={this.props.data} />
              </div>

            </div>
        </CenteredSection>
      </div>
    );
  }
}

QuotePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};


const mapStateToProps = createStructuredSelector({
  //linking the props between here and the store
  data : makeSelectData()

});

/*const mapStateToProps = state => (
  {data: state.data
  });
*/
function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    fetchQuote,
    deleteQuote
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'quotePage', reducer });
const withSaga = injectSaga({ key: 'quotePage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(QuotePage);

