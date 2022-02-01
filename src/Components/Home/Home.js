import React from 'react';
import './Home.css'

function Home() {
  return <div className='Home'>
      <div className='left-home'>
        <h1>Announcement</h1>
        <div className='homespan'>
        <span >Apply Leave one week earlier,
Our E-Leave Software supports up to a three-level approval structure, allows for different access levels to be set for different approving officers, and approved levels are automatically updated in the HR & Payroll System.</span><br/>
        </div>    
        <div className='homespan'>
        <span >Thank you.</span><br/>
        <span >Dravid G</span>
        </div>
      </div>
      <div className='right-home'>
        <img className='home-img' src="https://media.istockphoto.com/photos/inspire-your-teams-to-keep-on-achieving-picture-id1139054510?k=20&m=1139054510&s=612x612&w=0&h=56Rw9KpM67TFveuePknuH23LAcT8BwEw4XxdqetzLrs="></img>
      
      </div>
  </div>;
}

export default Home;
