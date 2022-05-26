import './home.css'
import { userData } from '../../dummy-data'
import Charts from '../../Components/Charts/Charts';
import Featured from '../../Components/FeaturedInfo/Featured';
import Smallwidgets from '../../Components/Smallwidgets/Smallwidgets';
import Largewidgets from '../../Components/Largewidgets/Largewidgets';

export default function Homie() {
  return (
    <div className='home'>
      <Featured />
      <Charts data={userData} title="User Analytics" grid dataKey="Active User" />
      <div className="home-widgets">
        <Smallwidgets />
        <Largewidgets />
      </div>
    </div>
  )
}
