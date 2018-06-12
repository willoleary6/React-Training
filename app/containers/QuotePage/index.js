/**
 *
 * QuotePage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {FormattedMessage} from 'react-intl';
import {createStructuredSelector} from 'reselect';
import {compose} from 'redux';
import CenteredSection from './CenteredSection';
import AddDelete from './AddDelete';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import {addButtonState, deleteButtonState, makeSelectData, makeSelectDeletedData} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import InlineDiv from '../../components/InlineDiv';
import ViewTables from './ViewTables';
import {addButtonClicked,deleteButtonClicked} from "./actions";
import {checkBoxClicked} from "./actions";


export class QuotePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <Helmet>
        <title>QuotePage</title>
        <meta name="description" content="Description of QuotePage"/>
      </Helmet>

      <CenteredSection>
        <FormattedMessage {...messages.header} />
        <div>
          <InlineDiv>
            <AddDelete
              addButtonState={this.props.addButtonEnabled}
              addButtonClicked={this.props.addButtonClicked}
              deleteButtonState={this.props.deleteButtonEnabled}
              deleteButtonClicked={this.props.deleteButtonClicked}
            />
          </InlineDiv>
          <div>
            <ViewTables
              addTable={this.props.addedQuotes}
              deleteTable={this.props.deleteData}
              onCheckBoxClicked={this.props.onCheckBoxClicked}/>
          </div>
        </div>
      </CenteredSection>

    </div>;
  }
}

QuotePage.propTypes = {
  dispatch: PropTypes.func.isRequired,
  onCheckBoxClicked: PropTypes.func,
  addButtonClicked: PropTypes.func,
  deleteButtonClicked: PropTypes.func
};


const mapStateToProps = createStructuredSelector({
  //linking the props between here and the store
  addedQuotes: makeSelectData(),
  deleteData: makeSelectDeletedData(),
  addButtonEnabled :addButtonState(),
  deleteButtonEnabled :deleteButtonState()
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onCheckBoxClicked: (evt) => dispatch(checkBoxClicked(evt.target.id)),
    addButtonClicked: () => dispatch(addButtonClicked()),
    deleteButtonClicked: () => dispatch(deleteButtonClicked()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({key: 'quotePage', reducer});
const withSaga = injectSaga({key: 'quotePage', saga});

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(QuotePage);

