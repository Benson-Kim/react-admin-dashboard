import './largewidget.css'

function Largewidget() {
    const Button = ({ type }) => {
        return <button className={"large-widget-btn " + type} > {type}</button>;
    };
    return (
        <div className='large-widget'>
            <h2 className="large-widget-title">Latest Transactions</h2>
            <table className="large-widget-table">
                <tr className="large-widget-tr">
                    <th className="large-widget-th">Customer</th>
                    <th className="large-widget-th">Date</th>
                    <th className="large-widget-th">Amount</th>
                    <th className="large-widget-th">Status</th>
                </tr>
                <tr className="large-widget-tr">
                    <td className='large-widget-user'>
                        <img src="https://images.pexels.com/photos/1181326/pexels-photo-1181326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='large-widget-img' />
                        <span className="large-widget-name">Susan Carol</span>
                    </td>
                    <td className="large-widget-date">2 Jun 2021</td>
                    <td className="large-widget-amount">$122.50</td>
                    <td className="large-widget-status"> <Button type="Approved" /> </td>
                </tr>
                <tr className="large-widget-tr">
                    <td className='large-widget-user'>
                        <img src="https://images.pexels.com/photos/1181326/pexels-photo-1181326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='large-widget-img' />
                        <span className="large-widget-name">Susan Carol</span>
                    </td>
                    <td className="large-widget-date">2 Jun 2021</td>
                    <td className="large-widget-amount">$122.50</td>
                    <td className="large-widget-status"> <Button type="Pending" /> </td>
                </tr>
                <tr className="large-widget-tr">
                    <td className='large-widget-user'>
                        <img src="https://images.pexels.com/photos/1181326/pexels-photo-1181326.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className='large-widget-img' />
                        <span className="large-widget-name">Susan Carol</span>
                    </td>
                    <td className="large-widget-date">2 Jun 2021</td>
                    <td className="large-widget-amount">$122.50</td>
                    <td className="large-widget-status"> <Button type="Declined" /> </td>
                </tr>
            </table>
        </div>
    )
}

export default Largewidget