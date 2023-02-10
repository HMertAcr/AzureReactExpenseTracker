import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
    const totalMaximum = Math.max(...props.dataPoints.map(dataPoint => dataPoint.value));

    return <div className="chart">  
        {props.dataPoints.map((dataPoint) => (
            <ChartBar
                value={dataPoint.value}
                maxValue={totalMaximum}
                label={dataPoint.label}
                key={dataPoint.key}
            />
        ))}
    </div>
}

export default Chart;