import './App.css';
import {Routes, Route} from 'react-router-dom';
import Calculator from './Calculator/Calculator';
import Todo from './ToDoLIst/Todo';
import Navbar from './Menu/Navbar';
import Table from './Table/Table';
import ListUsers from './ListUsers/ListUsers';

function App() {

  return (
    <div className='App'>
      <Navbar/>
      <Routes>
        <Route path="/calc" element={<Calculator/>}/>
        <Route path="/todo" element={<Todo/>}/>
        <Route path="/table" element={<Table/>}/>
        <Route path="/list" element={<ListUsers/>}/>
      </Routes>
    </div>
  );
}

export default App;
