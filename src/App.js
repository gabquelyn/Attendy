import './App.css';
import SignupForm from './components/SignupForm';
import SigninForm from './components/SignInForm';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
      <Routes>
        <Route path = "/" element = {<SigninForm/>}/>
        <Route path = "signup/" element = {<SignupForm/>}/>
      </Routes>
  );
}

export default App;
