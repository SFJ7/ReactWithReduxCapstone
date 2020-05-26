import React from 'react';
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const CustomerJourneyMapList = () => {

    const cjm = useSelector(state => state.cjm.customerJourneyMaps);

    const renderCJMs = () => {
        return cjm.map(cjm => (
            <Link to="blog-ici.html">
                <div className="col-lg-4">
                    <div className="card">
                        <br/>
                        <h4>{cjm.name}</h4>
                        <p>{cjm.description}</p>
                        <Link to={`/customerjourneymap/${cjm.id}`} className="blue-button">View</Link>
                        <Link to="/" className="red-button">Edit</Link>
                    </div>
                </div>
            </Link>
        ))
    };

    return (
        <div>
            <h4 className='text-center'>Customer Journey Maps</h4>
            <div className="index-content">
                <div className="container">
                    {renderCJMs()}
                </div>
            </div>
            <br/>
            <div className='container'>
                <Link to='/personas' className='btn btn-lg btn-primary'>Create Customer Journey Map</Link>
            </div>
        </div>
    );
};

export default CustomerJourneyMapList;