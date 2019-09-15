import React from 'react';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import { loadMxStates } from './actions/mxStates';
import mxStates from './data/mxStates';
import './styles/styles.scss';

const store = configureStore();
store.dispatch(loadMxStates(mxStates));

function App() {
  return ( 
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
