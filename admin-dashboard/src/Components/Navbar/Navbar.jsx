import { LanguageOutlined, NotificationsNoneOutlined, SettingsOutlined } from '@mui/icons-material'
import './navbar.css'

function Navbar() {
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
            <NotificationsNoneOutlined />
            <span className="topnav-icon-badge">2</span>
          </div>
          <div className="topnav-icon-container">
            <LanguageOutlined />
            <span className="topnav-icon-badge">2</span>
          </div>
          <div className="topnav-icon-container">
            <SettingsOutlined />
          </div>
          <img src="https://images.pexels.com/photos/2726108/pexels-photo-2726108.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="avatar" />
        </div>
      </div>
    </div>
  )
}

export default Navbar