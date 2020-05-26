import React, {useState} from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Personas = (props) => {
    const [displayDescription, setDisplayDescription] = useState(true);

    const changeDescriptionHandler = (event) => {
        let descriptionOrExpectation = event.target.id === 'description';
        setDisplayDescription(descriptionOrExpectation);
    };

    const personas = useSelector(state => state.cjm.personas);

    const renderPersona = () => {
        return personas.map((persona, index) => (
            <div key={index} className="container">
                <div className="row user-menu-container square">
                    <div className="col-md-7 user-details">
                        <div className="row coralbg white">
                            <div className="col-md-6 no-pad">
                                <div className="user-pad">
                                    <h3>{persona.name}</h3>
                                    <h4 className='white'>{persona.sex} - {persona.age}</h4>
                                    <h4 className='white'>{persona.married ? 'Married' : 'Single'}</h4>
                                    <h4 className='white'># of Children - {persona.numberOfChildren}</h4>
                                </div>
                            </div>
                            <div className="col-md-6 no-pad">
                                <div className='user-image'>
                                    <img src={require("../images/blue-2705642_1920.jpg")}
                                         className="img-responsive thumbnail" alt={'Persona Image'}/>
                                </div>
                            </div>
                        </div>
                        <div className="row overview">
                            <div className='col-md-4 user-pad text-center'>
                                <h3>Occupation</h3>
                                <h4>{persona.occupation}</h4>
                            </div>
                            <div className='col-md-4 user-pad text-center'>
                                <h3>Ethnicity</h3>
                                <h4>{persona.ethnicity}</h4>
                            </div>
                            <div className='col-md-4 user-pad text-center'>
                                <h3>Nationality</h3>
                                <h4>{persona.nationality}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 user-menu user-pad">
                        <div className='user-menu-content active'>
                            <div className={displayDescription ? '' : 'description-or-expectation'}>
                                <button onClick={changeDescriptionHandler} id='expectation'>Show Expectation</button>
                                <h3>Description</h3>
                                <ul className='user-menu-list'>
                                    <li>
                                        <h4>{persona.description}</h4>
                                    </li>
                                </ul>
                            </div>
                            <div className={displayDescription ? 'description-or-expectation' : ''}>
                                <button onClick={changeDescriptionHandler} id='description'>Show Description</button>
                                <h3>Expectation</h3>
                                <ul className='user-menu-list'>
                                    <li>
                                        <h4>{persona.expectation}</h4>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <Link to={`/addcustomerjourneymap/${persona.id}`} className='btn btn-sm btn-success'>Choose Persona</Link>&nbsp;&nbsp;
                        <Link to={'/addcustomerjourneymap'} className='btn btn-sm btn-danger'>Edit Persona</Link>
                    </div>
                </div>
            </div>
        ));
    };

    return (
        <div>
            <h4 className='text-center'>Personas</h4>
            <div>
                {renderPersona()}
            </div>
            <br/>
            <br/>
            <div className='container'>
                <Link to={'/addpersona'} className='btn btn-lg btn-success'>Create New Persona</Link>
            </div>
        </div>
    );
};

export default Personas;