import './sidebar.css'
import {
    Timeline,
    DraftsOutlined,
    ChatOutlined,
    ManageAccountsOutlined,
    ExtensionOutlined,
    PointOfSaleOutlined,
    GroupOutlined,
    ReceiptOutlined,
    AssessmentOutlined,
    NotificationsOutlined,
    HomeOutlined,

} from '@mui/icons-material'

export default function Sideba() {
    return (
        <div className='sidebar'>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-items">
                        <li className="sidebar-item active">
                            <HomeOutlined className='sidebar-icon' />
                            Home
                        </li>
                        <li className="sidebar-item">
                            <Timeline className='sidebar-icon' />
                            Analytics
                        </li>
                        <li className="sidebar-item">
                            <ReceiptOutlined className='sidebar-icon' />
                            Sales
                        </li>

                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Dashboard</h3>
                    <ul className="sidebar-items">
                        <li className="sidebar-item">
                            <GroupOutlined className='sidebar-icon' />
                            Users
                        </li>
                        <li className="sidebar-item">
                            <ExtensionOutlined className='sidebar-icon' />
                            Products
                        </li>
                        <li className="sidebar-item">
                            <PointOfSaleOutlined className='sidebar-icon' />
                            Transactions
                        </li>
                        <li className="sidebar-item">
                            <AssessmentOutlined className='sidebar-icon' />
                            Reports
                        </li>

                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Notifications</h3>
                    <ul className="sidebar-items">
                        <li className="sidebar-item">
                            <DraftsOutlined className='sidebar-icon' />
                            Mail
                        </li>
                        <li className="sidebar-item">
                            <ChatOutlined className='sidebar-icon' />
                            Feedback
                        </li>
                        <li className="sidebar-item">
                            <NotificationsOutlined className='sidebar-icon' />
                            Messages
                        </li>

                    </ul>
                </div>
                <div className="sidebar-menu">
                    <h3 className="sidebar-title">Staff</h3>
                    <ul className="sidebar-items">
                        <li className="sidebar-item">
                            <ManageAccountsOutlined className='sidebar-icon' />
                            Manage
                        </li>
                        <li className="sidebar-item">
                            <Timeline className='sidebar-icon' />
                            Analytics
                        </li>
                        <li className="sidebar-item">
                            <AssessmentOutlined className='sidebar-icon' />
                            Reports
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
