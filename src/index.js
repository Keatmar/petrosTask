import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemedApp from 'view/core/ThemedApp';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemedApp />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
