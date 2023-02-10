import Chart from '../Chart/Chart';

const ExpensesChart = (props) => {

    const chartDataPoints = [
        { label: 'Jan', value: 0 , key: "Jan1"},
        { label: 'Feb', value: 0 , key: "Feb2"},
        { label: 'Mar', value: 0 , key: "Mar3"},
        { label: 'Apr', value: 0 , key: "Apr4"},
        { label: 'May', value: 0 , key: "May5"},
        { label: 'Jun', value: 0 , key: "Jun6"},
        { label: 'Jul', value: 0 , key: "Jul7"},
        { label: 'Aug', value: 0 , key: "Aug8"},
        { label: 'Sep', value: 0 , key: "Sep9"},
        { label: 'Oct', value: 0 , key: "Oct10"},
        { label: 'Nov', value: 0 , key: "Nov11"},
        { label: 'Dec', value: 0 , key: "Dec12"},
    ];

    for (const expense of props.expenses) {
        const expenseMonth = expense.date.getMonth();
        chartDataPoints[expenseMonth].value += expense.amount;
    }
        
    return <Chart dataPoints={chartDataPoints} />
};

export default ExpensesChart;