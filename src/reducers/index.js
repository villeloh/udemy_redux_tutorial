import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  // state: (state = {}) => state

  // these end up as keys on the GLOBAL state!
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
