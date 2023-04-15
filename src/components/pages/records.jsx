import React from 'react';
import Logo from '../images/logo.png';
import './styles/dashboard.css'
import { Link } from 'react-router-dom';
import DashIcon from '../images/dashboardIcon.png';
import AppointmentIcon from '../images/appointmentsIcon.png';
import ChatIcon from '../images/chatIcon.png';
import HelpIcon from '../images/helpIcon.png';
import SettingsIcon from '../images/settingsIcon.png';
import SearchAvatar from '../images/SearchAvatar.png';
import NotificationAvatar from '../images/Notification.png';
import ProfileAvatar from '../images/profile.png';
import Plus from '../images/Plus.png';
import Clinic from '../images/Clinic.png';
import Doctor from '../images/Doctor.png';
import LineChart from '../images/LineChart.png';

const Records = () => {
  return (
    <>
        <div className="sideBar">
            <Link to="/"><img src={Logo} alt="logo" style={{margin:"20px 0 0 10px"}}/></Link>
            <Link to="/dashboard" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{marginTop:"40px"}}><img src={DashIcon} alt="Icon" style={{marginRight:"20px"}}/>Dashboard</div></Link>
            <Link to="/records" style={{textDecoration:"none"}}><div className="sideBarComponent" style={{backgroundColor:"white",color:"#8133D0"}}><img src={AppointmentIcon} alt="Icon" style={{marginRight:"20px"}}/>Records</div></Link>
            <Link to="/vaccineTypes" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={ChatIcon} alt="Icon" style={{marginRight:"20px"}}/>Vaccine Types</div></Link>
            <Link to="/help" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={HelpIcon} alt="Icon" style={{marginRight:"20px"}}/>Help</div></Link>
            <Link to="/settings" style={{textDecoration:"none"}}><div className="sideBarComponent"><img src={SettingsIcon} alt="Icon" style={{marginRight:"20px"}}/>Settings</div></Link>
        </div>
        <div style={{width:"80%", position:"absolute", right:"0"}}>

          <div className='d-flex justify-content-between mt-3' style={{height:"20%"}}>
            <div style={{marginLeft:"60px"}}>
              <h2  style={{
                  fontFamily: "Droid Sans",
                  fontSize: "27px",
                  fontWeight: 700,
                  lineHeight: "28px",
                  letterSpacing: "0em",
                  textAlign: "left",
                  color: "#8133D0"
                  }}>
               Hi, Shirley P.</h2>
              <p style={{
                fontFamily: 'Droid Sans',
                fontStyle: "normal",
                fontWeight: 700,
                fontSize: "15px",
                lineHeight: "14px",
                color:"rgba(54, 0, 139, 0.5)"
              }}>Schedule an appointment today!</p>

            </div>
            <div style={{margin:"20px 40px"}}>
              <img src={SearchAvatar} alt="search" style={{marginRight:"20px"}}/>
              <img src={NotificationAvatar} alt="search" style={{marginRight:"20px"}}/>
              <img src={ProfileAvatar} alt="search"/>
            </div>
          </div>

          <div style={{backgroundColor:"#DCDCDC",height:"89vh"}}>
              <div style={{display:"flex", justifyContent:"space-around"}}>
                <div className='dashAction d-flex'>
                  <img src={Plus} alt="Plus Icon" style={{width:"40px",height:"40px", margin:"10px 8px"}}/>
                  <p>Schedule a clinic <br/> appointment</p>
                </div>
                <div className='dashAction d-flex'>
                  <img src={Clinic} alt="Clinic" style={{width:"40px",height:"40px", margin:"10px 10px"}}/>
                  <p>Request a<br/> home visit</p>
                </div>
                <div className='dashAction d-flex'>
                  <img src={Doctor} alt="Doctor" style={{width:"40px",height:"40px", margin:"10px 10px"}}/>
                  <p>Speak with a <br/> medical expert</p>
                </div>
              </div>

              <div style={{width:"86%", height:"250px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px"}}>
                <h5 style={{padding:"10px 0 0 25px"}}>Patient's activities</h5>
                <div style={{textAlign:"center"}}><img src={LineChart} alt="Line Chart" style={{width:"80%", height:"180px"}}/></div>
              </div>

              <div style={{width:"86%", height:"250px", backgroundColor:"white", margin:"40px auto", borderRadius:"15px"}}>
                  
                  <div className='d-flex justify-content-between' style={{margin:"10px auto", width:"92%", paddingTop:"10px"}}>
                    <h4>Overview</h4>
                    <span style={{color:"#DCDCDC"}}>View all</span>
                  </div>
                  
                  <div style={{display:"flex", justifyContent:"space-around", paddingTop:"5px"}}>
                    <span>Child's name</span>
                    <span>Gender</span>
                    <span>Doctor's name</span>
                    <span>Immunization Type</span>
                    <span>Date</span>
                    <span>Report</span>
                  </div>

                  <div style={{height:"2px", backgroundColor:"#DCDCDC", width:"98%", margin:"20px auto"}}></div>

              </div>

          </div>

        </div>
    </>
  )
}

export default Records