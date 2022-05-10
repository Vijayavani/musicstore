import {combineReducers} from 'redux';
import { albumsFeatureKey, albumReducer} from './albums/albumReducer';

let rootReducer = combineReducers({
   [albumsFeatureKey]: albumReducer
});

export {rootReducer};