import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

import './charts.css'

function Charts({ title, data, dataKey, grid }) {

    return (
        <div className='chart'>
            <h3 className="chart-title">{title}</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <Tooltip />
                    <Legend />
                    <XAxis dataKey="name" stroke="#0391f7" />
                    <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
                    {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray='5 5' />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default Charts