import { weatherSagas } from './weather';

export default function* rootSaga() {
  yield [
    ...weatherSagas
  ];
}
