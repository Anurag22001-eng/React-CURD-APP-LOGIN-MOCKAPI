import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom';
import NavBar from './components/Navbar';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import store from './redux/store'
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
    <NavBar/>
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/signup' element={<SignupPage/>}></Route>
      <Route path='/login' element={<LoginPage/>}></Route>
      <Route path='/addItem' element={<AddItemPage/>}></Route>
      <Route path='/editItem/:id' element={<EditItemPage/>}></Route>

    </Routes>
    </Provider>
  );
}

export default App;
