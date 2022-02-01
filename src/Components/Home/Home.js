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
        <img className='home-img' src="https://media.istockphoto.com/photos/asian-businesswoman-standing-smiling-at-the-camera-picture-id1335295926?b=1&k=20&m=1335295926&s=170667a&w=0&h=6TEcLiO3JwNG3VL2O1LLWGdFgUulikOMqG1cAGixf-E="></img>
      
      </div>
  </div>;
}

export default Home;
