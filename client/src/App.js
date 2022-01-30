
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Components/Menu';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import AddEdit from './Components/AddEdit';
import List from './Components/List';
import NotFound from './Components/NotFound';

function App() {
  return (
    <div className="App">

      <Menu />
      <h1>First App Mern</h1>
      <Routes>
        <Route path='/' element={<Home></Home>} />
        <Route path='/List' element={<List></List>}/>
        <Route path='/AddEdit' element={<AddEdit></AddEdit>} />
        <Route path='*' element={<NotFound></NotFound>}/>

      </Routes>
    </div>
  );
}

export default App;

