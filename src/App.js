import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import AddItemPage from './pages/AddItemPage';
import EditItemPage from './pages/EditItemPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import store from './redux/store'
import { Provider } from 'react-redux';
import { useState, useEffect } from 'react';

function App() {
  const [accessToken, setAccessToken] = useState('')
  const handleAccessToken = () => {
    const tempToken = localStorage.getItem('accessToken')
    if (tempToken === null) {
      setAccessToken('')
    } else {
      setAccessToken(tempToken)
    }
  }
  useEffect(() => {
    handleAccessToken()
  }, [])
  return (
    <Provider store={store}>
      <NavBar accessToken={accessToken} handleAccessToken={handleAccessToken} />
      <Routes>
        <Route path='/' element={<HomePage accessToken={accessToken} />}></Route>
        {accessToken ? (
          <>
            <Route path='/addItem' element={<AddItemPage />} />
            <Route path='/editItem/:id' element={<EditItemPage />} />
          </>
        ) : (
          <>
            <Route path='/signup' element={<SignupPage />}></Route>
            <Route path='/login' element={<LoginPage handleAccessToken={handleAccessToken} />}></Route>
          </>
        )}
      </Routes>
    </Provider>
  );
}

export default App;
