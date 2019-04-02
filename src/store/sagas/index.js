import { all, takeLatest } from 'redux-saga/effects';
import { addFavorite } from './favorites';
import { Types as FavoriteTypes } from '../ducks/favorites';

export default function* rooSaga() {
  yield all([takeLatest(FavoriteTypes.ADD_REQUEST, addFavorite)]);
}
