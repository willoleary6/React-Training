import { createSelector } from 'reselect';

/**
 * Direct selector to the quotePage state domain
 */
const selectQuotePageDomain = (state) => state.get('quotePage');
const selectData = (state) => state.get('quotePage');
/**
 * Other specific selectors
 */


/**
 * Default selector used by QuotePage
 */

const makeSelectQuotePage = () => createSelector(
  selectQuotePageDomain,
  (substate) => substate.toJS()
);


const makeSelectData = () => createSelector(
  selectData,
  (data) => data.get('data')
);



//export default makeSelectQuotePage;
export {
  makeSelectQuotePage,
  selectQuotePageDomain,
  makeSelectData,
};


/*
const selectData = (state) => state.get('data');

const makeSelectData = () => createSelector(
  selectData,
  (data) => data.get('data')
);

export {
  selectData,
  makeSelectData,
};


 */
