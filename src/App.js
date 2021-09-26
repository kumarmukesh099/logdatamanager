import React , {useEffect, Fragment} from 'react';
import './App.css'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import SearchBar from './components/layout/SearchBar'
import Logs from './components/logs/Logs';
import AddBtn from './components/layout/AddBtn';
import AddLogModal from './components/logs/AddLogModal';
import EditLogModal from './components/logs/EditLogModal';
import AddTechModal from './components/techs/AddTechModal';
import TechListModal from './components/techs/TechListModal';
import {Provider} from 'react-redux';
import store from './store';


const App=()=> {
  useEffect(() => {
    //Initialise materialize javascript
    M.AutoInit();
  },)
  return (
    <Provider store={store}>
    <Fragment>
      <SearchBar />
      <AddBtn />
      <AddLogModal />
      <EditLogModal />
      <AddTechModal />
      <TechListModal />
      <Logs />
    </Fragment>
    </Provider>
  );
}

export default App;