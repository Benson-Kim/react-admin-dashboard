import './home.css'
import {userData} from '../dummy-data'
import FeaturedInfo from '../Components/FeaturedInfo/FeaturedInfo';
import Chart from '../Components/Chart/Chart';
import Smallwidget from '../Components/WidgetSmall/Smallwidget';
import Largewidget from '../Components/WidgetLarge/Largewidget';

export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="home-widgets">
                <Smallwidget />
                <Largewidget />
            </div>
        </div>
    )
}
