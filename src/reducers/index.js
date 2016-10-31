import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const rootReducer = combineReducers({
  form: form
});

export default rootReducer;


// 4. import { reducer } from 'redux-form';
//  NOTE: I can rename my imports by doing { reducer(original name) as form(new name) }
// 5. inside combineReducers insert 'form: reducer' or 'form: form' after
//    changing the name
// 6. go back to my components/auth/signin file
