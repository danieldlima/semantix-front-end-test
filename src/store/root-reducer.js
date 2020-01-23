import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import navigationReducer from './navigation/navigation.reducer';

const persistConfig = {
  storage,
  key:       'root',
  whitelist: ['navigation'],
};

const rootReducer = combineReducers({
  navigation: navigationReducer,
});

export default persistReducer(persistConfig, rootReducer);
