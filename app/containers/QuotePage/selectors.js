import { createSelector } from 'reselect';

/**
 * Direct selector to the quotePage state domain
 */
  //linking it to access the state in the quote page screen.
export const selectQuotePage = (state) => state.get('quotePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by QuotePage
 */
//getting the 'data' element in the store
export const makeSelectData= () => createSelector(
  selectQuotePage,
  //declaring an object to stand in for 'quotePage'
  (quotesPageState) => {
    //returning the data element stored in 'quotePage'
    return  quotesPageState.data;
  }
);
export const makeAddDisabler= () => createSelector(
  selectQuotePage,
  //declaring an object to stand in for 'quotePage'
  (quotesPageState) => {
    //returning the data element stored in 'quotePage'
    return  quotesPageState.addButtonDisabler;
  }
);





