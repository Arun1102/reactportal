import React ,{useState}from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './ApplyLeave.css'
function ApplyLeave() {


  const [selectedDate, setSelectedDate] = useState();
  const [formData,setFormData] = useState({
    LeaveType:""
  });
  
  return <div className='ApplyLeave'>
      <div className='LeaveInfo'>
      <span className='Leavetitle'>Apply for leave</span>
      <h6>You have 6 leave in your account for 2022</h6>
      </div>
     <form>
       <div className='ApplyLeave-Radio'>
         <span>Leave Type</span><br/>
         <label>Annual Leave</label>
         <input type="radio" name="LeaveType" value="Annual Leave"></input>
         <label>Medical Leave</label>
         <input type="radio" name="LeaveType" value="Medical Leave"></input>
       </div>
     </form>
    <div className='ApplyLeave-Date'>
    <DatePicker 
    selected={selectedDate} 
    placeholderText='From' 
    dateFormat='dd/MM/yyyy' 
    minDate={new Date()} 
    onChange={(date)=>setSelectedDate(date) }
    filterDate = {(date)=> date.getDay() != 6 && date.getDay() != 0 }
    />
    <DatePicker 
    selected={selectedDate} 
    placeholderText='To' 
    dateFormat='dd/MM/yyyy' 
    minDate={new Date()} 
    onChange={(date)=>setSelectedDate(date) }
    filterDate = {(date)=> date.getDay() != 6 && date.getDay() != 0 }
    />

    </div>
     
    <label for="cars">Choose Department  </label>

    <select name="Department" id="Department">
      <option value="IT Department">IT Department</option>
      <option value="Accounts">Accounts</option>
      <option value="Administration">Administration</option>
      <option value="HR/Manager">HR/Manager</option>
    </select>

        
    <h1>REASON</h1>

<form action="/action_page.php">
  <label for="fname" >Reasons  </label>
  <input type="text" placeholder='Optional' id="fname" name="fname"/><br/>
  
</form>

   <button>Submit</button>

  </div>;
  
}

export default ApplyLeave;
