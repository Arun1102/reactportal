import React ,{useState}from 'react';
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import './ApplyLeave.css'
function ApplyLeave() {


  const [selectedDate, setSelectedDate] = useState();
  const [selectedEndDate, setSelectedEndDate] = useState();
  const [formData,setFormData] = useState({
    LeaveType:""
  });
  
  return <div className='ApplyLeave'>
      <div className='LeaveInfo'>
      <span className='Leavetitle'>Apply for leave</span>
      </div>
      <div className='LeaveInfo2'> 
      <h6>You have 6 leave in your account for 2022</h6>
      </div>
     <form>
       <div className='ApplyLeave-Radio'>
         <span >Leave Type</span><br/>
         <label>Annual Leave</label>
         <input className='radiobutton1' type="radio" name="LeaveType" value="Annual Leave"></input>
         <label>Medical Leave</label>
         <input className='radiobutton2'  type="radio" name="LeaveType" value="Medical Leave"></input>
       </div>
     </form>
    <div className='ApplyLeave-Date'>
      <span >Start date</span>
    <DatePicker 
    selected={selectedDate} 
    placeholderText='From' 
    dateFormat='dd/MM/yyyy' 
    minDate={new Date()} 
    onChange={(date)=>setSelectedDate(date) }
    filterDate = {(date)=> date.getDay() != 6 && date.getDay() != 0 }
    wrapperClassName="datePicker1"
    />
    <span >End date</span>
    <DatePicker 
    selected={selectedEndDate} 
    placeholderText='To' 
    dateFormat='dd/MM/yyyy' 
    minDate={new Date()} 
    onChange={(date)=>setSelectedEndDate(date) }
    filterDate = {(date)=> date.getDay() != 6 && date.getDay() != 0 }
    wrapperClassName="datePicker2"
    />

    </div>
     
     <div className='Deparment-choose'>
    <label for="cars">Choose Department  </label>

    <select name="Department" id="Department">
      <option value="IT Department">IT Department</option>
      <option value="Accounts">Accounts</option>
      <option value="Administration">Administration</option>
      <option value="HR/Manager">HR/Manager</option>
    </select>
    </div>
        

<div className='Reason-apply'>

<h1>REASON:</h1>
<form action="/action_page.php">
  
  
  <textarea className='ReasonHold' type="text" placeholder='Type here leave reason' id="fname" name="fname"></textarea><br/>
</form>
</div>
   <button className='ApplyButton'>Submit</button>

  </div>;
  
}

export default ApplyLeave;
