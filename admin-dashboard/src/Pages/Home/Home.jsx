import './home.css'
import { chartData } from '../../chart-data'
import Charts from '../../Components/Charts/Charts';
import Featured from '../../Components/FeaturedInfo/Featured';
import Smallwidgets from '../../Components/Smallwidgets/Smallwidgets';
import Largewidgets from '../../Components/Largewidgets/Largewidgets';

export default function Home() {
  return (
    <div className='home'>
      <Featured />
      <Charts data={chartData} title="User Analytics" grid dataKey="Active User" />
      <div className="home-widgets">
        <Smallwidgets />
        <Largewidgets />
      </div>
    </div>
  )
}
