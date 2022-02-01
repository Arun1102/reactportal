import React from 'react';
import './LeaveList.css'
function LeaveList() {
  return <div className='Leave'>
    <div className='leave-container'>
        <span className='LeaveSpan'>Employee Leave Request</span>

       
        <table className='leavetable'>
          <tr >
            <th>Name</th>
            <th>Department</th> 
            <th>Leave Date</th>
            <th>To Approve</th>
            <th>To cancel</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>Arun Attappan</td>
            <td>IT Department</td> 
            <td>12/12/2022</td>
            <td><button className='LeaveButton'>Approve</button></td>
            <td><button className='LeaveButtons'>Denied</button></td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Arun Attappan</td>
            <td>IT Department</td> 
            <td>12/12/2022</td>
            <td><button className='LeaveButton'>Approve</button></td>
            <td><button className='LeaveButtons'>Denied</button></td>
            <td>Pending</td>
          </tr>
          <tr>
            <td>Arun Attappan</td>
            <td>IT Department</td> 
            <td>12/12/2022</td>
            <td><button className='LeaveButton'>Approve</button></td>
            <td><button className='LeaveButtons'>Denied</button></td>
            <td>Pending</td>
          </tr>
      </table>

    </div>
  </div>;
}

export default LeaveList;
