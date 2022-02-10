import './App.css';
import {Routes, Route} from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Todo from './ToDoLIst/Todo';
import Navbar from './Menu/Navbar';
import Table from './Table/Table';
import ListUsers from './ListUsers/components/ListUsers';
import { Provider } from 'react-redux';
import { store } from './ListUsers/redux-toolkit/index';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/calc" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/table" element={<Table/>}/>
          <Route path="/list" element={
          <Provider store={store}>
            <ListUsers/>
          </Provider>}/>
      </Routes>
    </div>
  );
}

export default App;
