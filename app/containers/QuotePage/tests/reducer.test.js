import quotePageReducer from '../reducer';
import {
  addButtonDisable,
  addButtonEnable,
  deleteButtonEnable,
  deleteButtonDisable,
  receiveQuote,
  checkBoxClicked,
  deleteSelectedQuotes
} from '../actions';


describe('quotePageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
        data: [],
        addButtonEnabled: false,
        deleteButtonEnabled: false,
        selectedRows: [],
        deletedData : [],
    };
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(quotePageReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the add quote action action correctly', () => {
    const fixture = "'It's your old friend, deadly neurotoxin. If I were you, I'd take a deep breath. And hold it.' -GLaDOS, Portal 2";
    const expectedResult = {
      //state is a object containing data.
      ...state,
      //set data to equal the current value of data + our new data object
      data: state.data.concat(fixture)
    }
    expect(quotePageReducer(state, receiveQuote(fixture))).toEqual(expectedResult);
  });

  it('should set the value of addButtonEnabled to true', () => {
    const expectedResult = {
      //state is a object containing data.
      ...state,
      addButtonEnabled: true
    }
    expect(quotePageReducer(state, addButtonDisable())).toEqual(expectedResult);
  });

  it('should set the value of addButtonEnabled to false', () => {
    const expectedResult = {

      //state is a object containing data.
      ...state,
      addButtonEnabled: false
    }
    expect(quotePageReducer(state, addButtonEnable())).toEqual(expectedResult);
  });


  it('should set the value of deleteButtonEnabled to false', () => {
    const expectedResult = {
      //state is a object containing data.
      ...state,
      deleteButtonEnabled: false
    }
    expect(quotePageReducer(state, deleteButtonEnable())).toEqual(expectedResult);
  });


  it('should set the value of deleteButtonEnabled to true', () => {
    const expectedResult = {
      //state is a object containing data.
      ...state,
      deleteButtonEnabled: true
    }
    expect(quotePageReducer(state, deleteButtonDisable())).toEqual(expectedResult);
  });

  it('should set the selectedRows array to store a single variable', () => {
    const fixture = 2465154568;
    const expectedResult = {
      //state is a object containing data.
      ...state,
      selectedRows: [fixture]
    }
    expect(quotePageReducer(state, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('should push to the array to store more row IDs', () => {
    const fixture = 2465154568;
    const previousState = {
      data: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
      selectedRows: [132343543],
      deletedData : [],
    }
    const expectedResult = {
      //state is a object containing data.
      ...state,
      //set data to equal the current value of selectedRows + our new row id
      selectedRows: previousState.selectedRows.concat(fixture)
    }
    expect(quotePageReducer(previousState, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('should remove itself from the array since it found it already is stored there', () => {
    const fixture = 132343543;
    const previousState = {
      data: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
      selectedRows: [132343543],
      deletedData : [],
    }
    const expectedResult = {
      //state is a object containing data.
      ...state,

      selectedRows: previousState.selectedRows.splice(previousState.selectedRows.indexOf(fixture),1)
    }
    expect(quotePageReducer(previousState, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('should remove the quote from data', () => {
    const previousState = {
      data: [{
        id: 132343543,
        quote: "'My God, it's the future. My parents, my co-workers, my girlfriend. I'll never see any of them again. YAHOO!!!'",
        author: "Fry",
        movie: "Futurama"
        }]
      selectedRows:

    }
    const expectedResult = {
      //state is a object containing data.

      data: []

    }
    expect(quotePageReducer(previousState, deleteSelectedQuotes())).toEqual(expectedResult);
  })

})
