import './App.css';
import Landing from './components/pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/signUp';
import SignUpTwo from './components/pages/experimental/signUpTwo';
import LogIn from './components/pages/login';
import Dashboard from './components/pages/dashboard';
import Records from './components/pages/records';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/login" element={<LogIn/>}/>
       <Route path="/signuptwo" element={<SignUpTwo/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/records" element={<Records/>}/>
       
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
