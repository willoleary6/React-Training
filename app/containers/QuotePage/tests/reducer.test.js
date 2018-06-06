
import { fromJS } from 'immutable';
import quotePageReducer from '../reducer';

describe('quotePageReducer', () => {
  it('returns the initial state', () => {
    expect(quotePageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
