import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleWare from 'redux-saga';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

export default function configureStore() {
  const sagaMiddleWare = createSagaMiddleWare();
  let middleware = applyMiddleware(sagaMiddleWare);
  
  if (process.env.NODE_ENV != 'production') {
    const devToolsExtension = window.devToolsExtension;
    if (typeof devToolsExtension === 'function') {
      middleware = compose(middleware, devToolsExtension());
    }
  }

  const store = createStore(rootReducer, middleware);
  sagaMiddleWare.run(rootSaga);

  return store;
}
