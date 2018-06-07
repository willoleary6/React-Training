
import { fromJS } from 'immutable';
import quotePageReducer from '../reducer';

import {
  receiveQuote,
} from '../actions';

describe('quotePageReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      quotePage:{data: [], deletedData:[]}

    });
  });
  it('should return the initial state', () => {
    const expectedResult = state;
    expect(quotePageReducer(undefined, {})).toEqual(expectedResult);
  });
})
