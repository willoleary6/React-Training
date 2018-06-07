import { fromJS } from 'immutable';

import {
  selectData,
  makeSelectData,
} from '../selectors';
import {makeSelectUsername} from "../../HomePage/selectors";

describe('selectData', () => {
  it('should select the home state', () => {
    const selectData1 = fromJS({
      quotePage: {},
    });
    const mockedState = fromJS({
      quotePage: selectData1,
    });
    expect(selectData(mockedState)).toEqual(selectData1);
  });
});

describe('makeSelectData', () => {

  it('should select the data', () => {
    const data = fromJS({
      quotePage: {data:[]},
    });
    const mockedState = fromJS({
      quotePage: {
        data:data,
      },
    });
    expect(makeSelectData(mockedState)).toEqual(data);
  });
});
