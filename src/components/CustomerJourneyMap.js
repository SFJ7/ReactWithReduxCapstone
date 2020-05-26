import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    Tooltip,
    XAxis,
    YAxis,
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    BarChart,
    Bar
} from "recharts";
import {useSelector} from "react-redux";

const CustomerJourneyMap = (props) => {
    const cjms = useSelector(state => state.cjm.customerJourneyMaps);
    const initialCjm = cjms[props.match.params.id - 1];

    const [comparableCustomerJourneyMap, setComparableCustomerJourneyMap] = useState(false);

    const toggleCustomerJourneyMapComparisonHandler = () => {
        setComparableCustomerJourneyMap(!comparableCustomerJourneyMap);
    };
    const steps = () => {
        return initialCjm.steps.map(cjm => (
            touchpoints.push(cjm.step)
        ))
    };

    const cjm1Happiness = [5,7,5,8,6,2];
    const cjm2Happiness = [6,3,9,6,7,10];

    const lineGraphDataLoading = () => {
        return initialCjm.steps.map((cjm, index) => (
            lineGraphData.push({
                name: 'Step ' + (index + 1),
                cjm1: cjm1Happiness[index],
                amt: Math.floor(Math.random() * 11)
            })
        ));
    };

    const lineGraphComparableDataLoading = () => {
        return initialCjm.steps.map((cjm, index) => (
            comparableLineGraphData.push({
                name: 'Step ' + (index + 1),
                cjm1: cjm1Happiness[index],
                cjm2: cjm2Happiness[index],
                amt: Math.floor(Math.random() * 11)
            })
        ));
    };

    const barGraphData = () => {
        return initialCjm.steps.map((cjm, index) => (
            barChartData.push({
                date: "2000-0" + (index + 1),
                cjm1: Math.floor(Math.random() * 1000) + 900,
                amt: Math.floor(Math.random() * 1000) + 900
            })
        ));
    };

    const comparableChartGraphData = () => {
        return initialCjm.steps.map((cjm, index) => (
            comparableBarGraphData.push({
                date: "2000-0" + (index + 1),
                cjm1: Math.floor(Math.random() * 1000) + 900,
                cjm2: Math.floor(Math.random() * 1000) + 900,
                amt: Math.floor(Math.random() * 1000) + 900
            })
        ));
    };

    const lineGraphData = [];
    const barChartData = [];
    const comparableLineGraphData = [];
    const comparableBarGraphData = [];
    const touchpoints = [];

    const radarChartData = [
        {
            subject: 'Online', A: 120, B: 110, fullMark: 150,
        },
        {
            subject: 'In Store', A: 98, B: 130, fullMark: 150,
        },
        {
            subject: 'Phone', A: 86, B: 130, fullMark: 150,
        },
        {
            subject: 'Catalogue', A: 99, B: 100, fullMark: 150,
        },
        {
            subject: 'Referred', A: 85, B: 90, fullMark: 150,
        },
        {
            subject: 'Returned', A: 65, B: 85, fullMark: 150,
        },
    ];

    const monthTickFormatter = (tick) => {
        const date = new Date(tick);

        return date.getMonth() + 1;
    };

    const renderQuarterTick = (tickProps) => {
        const {x, y, payload} = tickProps;
        const {value, offset} = payload;
        const date = new Date(value);
        const month = date.getMonth();
        const quarterNo = Math.floor(month / 3) + 1;

        if (month % 3 === 1) {
            return <text x={x + offset} y={y - 4} textAnchor="middle">{`Q${quarterNo}`}</text>;
        }

        const isLast = month === 11;

        if (month % 3 === 0 || isLast) {
            const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

            return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red"/>;
        }
        return null;
    };

    return (
        <div>

            <div style={{display: 'none'}}>
                {steps()}
                {lineGraphDataLoading()}
                {lineGraphComparableDataLoading()}
                {barGraphData()}
                {comparableChartGraphData()}
            </div>
            <h4 className='text-center'>Customer Journey Map</h4>
            <Link to='/'>Home</Link>
            <br/>
            <br/>
            <div className='row'>
                <div className='col-md-10'>
                    <div className='panel-body'>
                        <table className='table table-striped table-bordered table-list' style={{maxWidth: '80%',  marginLeft: '20%'}}>
                            <thead>
                            <tr>
                                <th style={{backgroundColor: 'orange'}}>Phases</th>
                                <th>Research</th>
                                <th>Discovery</th>
                                <th>Purchase</th>
                                <th>Delivery</th>
                                <th>Return</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td align='center' style={{backgroundColor: "orange"}}>Customer Actions</td>
                                <td><span className='label label-warning'>{touchpoints[0]}</span></td>
                                <td><span className='label label-primary'>{touchpoints[1]}</span></td>
                                <td>
                                    <span className='label label-info'>{touchpoints[2]}</span><br/>
                                    <span className='label label-info'>{touchpoints[3]}</span>
                                </td>
                                <td><span className='label label-default'>{touchpoints[4]}</span></td>
                                <td><span className='label label-success'>{touchpoints[5]}</span></td>
                            </tr>
                            <tr>
                                <td align='center' style={{backgroundColor: "orange"}}>Tools and Mediums</td>
                                <td>
                                    <span className='fa fa-facebook'/><br />
                                    <span className='fa fa-phone'/><br />
                                    <span className='fa fa-google' />
                                </td>
                                <td>
                                    <span className='glyphicon glyphicon-globe' /><br />
                                    <span className='fa fa-google'/>
                                </td>
                                <td>
                                    <span className='fa fa-credit-card' /><br />
                                    <span className='fa fa-shopping-bag' /><br />
                                    <span className='fa fa-shopping-cart'/>
                                </td>
                                <td>
                                    <span className='fa fa-truck' />
                                </td>
                                <td>
                                    <span className='fa fa-twitter'/><br />
                                    <span className='fa fa-instagram' /><br />
                                    <span className='fa fa-globe' />
                                </td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor: 'orange'}}>Thoughts</td>
                                <td>
                                    <span className='label label-warning'>What is the easiest way to get product?</span>
                                    <span className='label label-warning'>What are the features of the product?</span>
                                </td>
                                <td><span className='label label-primary'>Where can I get it?</span></td>
                                <td>
                                    <span className='label label-info'>Will I have to pay extra for shipping?</span><br/>
                                    <span className='label label-info'>What are the payment methods available?</span>
                                </td>
                                <td><span className='label label-default'>How long does delivery take?</span></td>
                                <td>
                                    <span className='label label-success'>There were issues with the product</span><br />
                                    <span className='label label-success'>What do I buy next?</span>
                                </td>
                            </tr>
                            <tr>
                                <td style={{backgroundColor: 'orange'}}>Emotions</td>
                                <td>
                                    <span className='label label-warning'>I love how the product looks and feels</span><br />
                                    <span className='label label-warning'>I want to BUY!</span>
                                </td>
                                <td><span className='label label-primary'>I love the experience of the store!</span></td>
                                <td>
                                    <span className='label label-info'>I love how the product looks and feels</span><br/>
                                    <span className='label label-info'>I want to BUY!</span>
                                </td>
                                <td><span className='label label-default'>I love the experience of the store!</span></td>
                                <td>
                                    <span className='label label-success'>I loved the product!</span><br />
                                    <span className='label label-success'>It's not up to my expectation</span>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='container'>
                <button onClick={toggleCustomerJourneyMapComparisonHandler} className='btn btn-sm btn-info'>Toggle
                    Comparison
                </button>
                {!comparableCustomerJourneyMap ?
                    <div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Happiness of Persona Over Each Touchpoint</h4>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={lineGraphData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line type="monotone" dataKey="cjm1" stroke="#8884d8" activeDot={{r: 8}}/>
                                </LineChart>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Persona Purchases Over Quarters</h4>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={barChartData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date" tickFormatter={monthTickFormatter}/>
                                    <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0}
                                           tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="cjm1" fill="#8884d8"/>
                                </BarChart>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Types of Purchases</h4>
                                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500}
                                            data={radarChartData}>
                                    <PolarGrid/>
                                    <PolarAngleAxis dataKey="subject"/>
                                    <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                                    <Radar name="cjm1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                                    <Legend/>
                                </RadarChart>
                            </div>
                        </div>
                    </div>
                    :

                    <div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Comparison of Persona Happiness Over Each Touchpoint</h4>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={comparableLineGraphData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Line type="monotone" dataKey="cjm1" stroke="#8884d8" activeDot={{r: 8}}/>
                                    <Line type="monotone" dataKey="cjm2" stroke="#82ca9d"/>}
                                </LineChart>
                            </div>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Comparison of Persona Purchases Over Quarters</h4>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={comparableBarGraphData}
                                    margin={{
                                        top: 5, right: 30, left: 20, bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="date" tickFormatter={monthTickFormatter}/>
                                    <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0}
                                           tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="cjm1" fill="#8884d8"/>
                                    <Bar dataKey="cjm2" fill="#82ca9d"/>
                                </BarChart>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <h4 className='text-center'>Comparison of Type of Purchases By Persona</h4>
                                <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500}
                                            data={radarChartData}>
                                    <PolarGrid/>
                                    <PolarAngleAxis dataKey="subject"/>
                                    <PolarRadiusAxis angle={30} domain={[0, 150]}/>
                                    <Radar name="cjm1" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
                                    <Radar name="cjm2" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
                                    <Legend/>
                                </RadarChart>
                            </div>
                        </div>
                    </div>
                }
            </div>
        </div>

    );
};

export default CustomerJourneyMap;