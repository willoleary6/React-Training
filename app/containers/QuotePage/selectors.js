import { createSelector } from 'reselect';

/**
 * Direct selector to the quotePage state domain
 */

 export const selectData = (state) => state.get('quotePage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by QuotePage
 */

export const makeSelectData= () => createSelector(
  selectData,
  (quotesPageState) => {
    console.log(`q`);
    console.log(quotesPageState);
  return  quotesPageState.data;
  }
);

//const selectHome = (state) => state.get('home');

const makeSelectUsername = () => createSelector(
  selectHome,
  (homeState) => homeState.get('username')
);






/*export const selectHorseSections = createSelector(
  state=>state.get("horseSections"),
  horseSections=>horseSections);



export const selectHorseSection = createSelector(
  (state, sectionId)=>{
    if (state){
      const sections = state.get("horseSections");
      const section = sections.filter(a=> a.id === sectionId);
      return section;
    }

    return null;
  }
);*/

/*const makeSelectQuotePage = () => createSelector(
  selectData,
  (substate) => substate.toJS()
);


const makeSelectData = () => createSelector(

  => dataStore.get('dataStore')
);
const makeSelectDeletedData = () => createSelector(
  selectData,
  (data) => data.get('DeletedData')
);




//export default makeSelectQuotePage;
export {
  makeSelectQuotePage,
  makeSelectData,
  makeSelectDeletedData
};
*/

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
