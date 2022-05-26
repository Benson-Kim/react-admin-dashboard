import { VisibilityOutlined } from '@mui/icons-material'
import './smallwidget.css'

function Smallwidgets() {
    return (
        <div className='small-widget'>
            <h2 className="small-widget-title">New Join Members</h2>
            <ul className="small-widget-list">
                <li className="small-widget-item">
                    <img className="small-widget-image" src="https://images.pexels.com/photos/1181326/pexels-photo-1181326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    <div className="small-widget-user">
                        <h4 className="widget-username">Anna Kller</h4>
                        <h6 className="widget-usertitle">Software Developer</h6>
                    </div>
                    <button className="small-widget-button">
                        <VisibilityOutlined className='small-widget-icon' />
                        Display
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default Smallwidgets