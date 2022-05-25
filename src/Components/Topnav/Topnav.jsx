import './Topnav.css'

import { NotificationsNone, Language, Settings } from '@mui/icons-material'

export default function Topnav() {
  return (
      <div className='topnav'>
          <div className="topnav-wrapper">
              <div className="left">
                  <span className="logo">
                      AdBoard
                  </span>
              </div>
              <div className="topnav-right">
                  <div className="topnav-icon-container">
                      <NotificationsNone />
                      <span className="topnav-icon-badge">2</span>
                  </div>
                  <div className="topnav-icon-container">
                      <Language />
                      <span className="topnav-icon-badge">2</span>
                  </div>
                  <div className="topnav-icon-container">
                      <Settings />
                  </div>
                  <img src="https://images.pexels.com/photos/2726108/pexels-photo-2726108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="avatar" />
              </div>
          </div>

          
    </div>
  )
}
