
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home/Home'
import LeaveList from './Components/LeaveList/LeaveList';
import ApplyLeave from './Components/ApplyLeave/ApplyLeave';
import Signin from './Components/SignIn/signin';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <LeaveList/> */}
      {/* <ApplyLeave/> */}
      <Signin/>
    </div>
  );
}

export default App;
