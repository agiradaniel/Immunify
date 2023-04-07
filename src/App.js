import './App.css';
import Landing from './components/pages/landing';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './components/pages/signUp';
import SignUpTwo from './components/pages/experimental/signUpTwo';

function App() {

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
       <Route path="/" element={<Landing/>}/>
       <Route path="/signup" element={<SignUp/>}/>
       <Route path="/signuptwo" element={<SignUpTwo/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
