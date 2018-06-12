import quotePageReducer from '../reducer';
import {
  addButtonDisable,
  addButtonEnable,
  deleteButtonEnable,
  deleteButtonDisable,
  receiveQuote,
  checkBoxClicked,
  moveSelectedQuotesToDeleted,
  removeSelectedQuotesFromData,
  clearSelectedQuotes
} from '../actions';


describe('quotePageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
        addedQuotes: [],
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
      //state is a object containing addedQuotes.
      ...state,
      //set addedQuotes to equal the current value of addedQuotes + our new addedQuotes object
      addedQuotes: state.addedQuotes.concat(fixture)
    }
    expect(quotePageReducer(state, receiveQuote(fixture))).toEqual(expectedResult);
  });

  it('should set the value of addButtonEnabled to true', () => {
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,
      addButtonEnabled: true
    }
    expect(quotePageReducer(state, addButtonDisable())).toEqual(expectedResult);
  });

  it('should set the value of addButtonEnabled to false', () => {
    const expectedResult = {

      //state is a object containing addedQuotes.
      ...state,
      addButtonEnabled: false
    }
    expect(quotePageReducer(state, addButtonEnable())).toEqual(expectedResult);
  });


  it('should set the value of deleteButtonEnabled to false', () => {
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,
      deleteButtonEnabled: false
    }
    expect(quotePageReducer(state, deleteButtonEnable())).toEqual(expectedResult);
  });


  it('should set the value of deleteButtonEnabled to true', () => {
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,
      deleteButtonEnabled: true
    }
    expect(quotePageReducer(state, deleteButtonDisable())).toEqual(expectedResult);
  });

  it('should set the selectedRows array to store a single variable', () => {
    const fixture = 2465154568;
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,
      selectedRows: [fixture]
    }
    expect(quotePageReducer(state, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('should push to the array to store more row IDs', () => {
    const fixture = 2465154568;
    const previousState = {
      addedQuotes: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
      selectedRows: [132343543],
      deletedData : [],
    }
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,
      //set addedQuotes to equal the current value of selectedRows + our new row id
      selectedRows: previousState.selectedRows.concat(fixture)
    }
    expect(quotePageReducer(previousState, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('should remove itself from the array since it found it already is stored there', () => {
    const fixture = 132343543;
    const previousState = {
      addedQuotes: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
      selectedRows: [132343543],
      deletedData : [],
    }
    const expectedResult = {
      //state is a object containing addedQuotes.
      ...state,

      selectedRows: previousState.selectedRows.splice(previousState.selectedRows.indexOf(fixture),1)
    }
    expect(quotePageReducer(previousState, checkBoxClicked(fixture))).toEqual(expectedResult);
  })

  it('Should add selected Quotes to deleted', () => {
    const initialState = {
      addedQuotes: [{
        id: 132343543,
        quote: "'My God, it's the future. My parents, my co-workers, my girlfriend. I'll never see any of them again. YAHOO!!!'",
        author: "Fry",
        movie: "Futurama"
        }],
      selectedRows: [132343543],
      deletedData: [],
    }
    const expectedResult = {
      addedQuotes: [{
        id: 132343543,
        quote: "'My God, it's the future. My parents, my co-workers, my girlfriend. I'll never see any of them again. YAHOO!!!'",
        author: "Fry",
        movie: "Futurama"
      }],
      selectedRows: [132343543],
      deletedData: [{
        id: 132343543,
        quote: "'My God, it's the future. My parents, my co-workers, my girlfriend. I'll never see any of them again. YAHOO!!!'",
        author: "Fry",
        movie: "Futurama"
      }],
      }

    expect(quotePageReducer(initialState, moveSelectedQuotesToDeleted())).toEqual(expectedResult);
  })

  it('Should Remove the selected Quotes from the added table', () => {
    const mockState = {
      addedQuotes: [{
        id: 1234,
        quote: "'My God, it's the future. My parents, my co-workers, my girlfriend. I'll never see any of them again. YAHOO!!!'",
        author: "Fry",
        movie: "Futurama"
      }],
      selectedRows: [1234],
      deletedData: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
    }
    const expectedResult = {
      addedQuotes: [],
      selectedRows: [1234],
      deletedData: [],
      addButtonEnabled: false,
      deleteButtonEnabled: false,
    }

    expect(quotePageReducer(mockState, removeSelectedQuotesFromData())).toEqual(expectedResult);
  })

  it('Should Remove the selected Quotes from the added table', () => {
    const mockState = {
      selectedRows: [1234],
    }
    const expectedResult = {
      selectedRows: [],
    }
    expect(quotePageReducer(mockState, clearSelectedQuotes())).toEqual(expectedResult);
  })




})

