import { createSelector } from 'reselect';

/**
 * Direct selector to the quotePage state domain
 */
const selectQuotePageDomain = (state) => state.get('quotePage');

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

export default makeSelectQuotePage;
export {
  selectQuotePageDomain,
};
