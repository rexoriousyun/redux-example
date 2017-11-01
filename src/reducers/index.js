import {combinedReducers} from 'redux';
import counter from './counter';
import ui from './ui';

const reducers = combinedReducers({
  counter, ui
})

export default reducers;
