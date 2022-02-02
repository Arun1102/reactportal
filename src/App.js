
import './App.css';
import Navbar from './Components/navbar/Navbar'
import Home from './Components/Home/Home'
import LeaveList from './Components/LeaveList/LeaveList';
import ApplyLeave from './Components/ApplyLeave/ApplyLeave';
function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <Home/> */}
      {/* <LeaveList/> */}
      <ApplyLeave/>
    </div>
  );
}

export default App;
