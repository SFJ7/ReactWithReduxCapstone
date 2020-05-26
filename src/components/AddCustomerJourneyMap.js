import React, {useState} from 'react';
import * as action from "../actions";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const AddCustomerJourneyMap = (props) => {
    const [steps, setSteps] = useState([{step: ''}]);
    const [customerJourneyMapName, setCustomerJourneyMapName] = useState('');
    const [customerJourneyMapDescription, setCustomerJourneyMapDescription] = useState('');

    const dispatch = useDispatch();

    const addClick = () => {
        setSteps([...steps, {step: ''}])
    };

    const stepChangeHandler = (index, event) => {
        let currentSteps = [...steps];
        currentSteps[index].step = event.target.value;
        setSteps(currentSteps);
    };

    const removeInputHandler = (index, event) => {
        let currentSteps = [...steps];
        currentSteps.splice(index, 1);
        setSteps(currentSteps)
    };

    const renderUI = () => {
        return steps.map((step, index) => (
           <div key={index} className='form-group'>
               <label>Step {index + 1}</label>
               <textarea value={step.step} className='form-control' onChange={(e) => stepChangeHandler(index, e)} />
               <button type='button' className='btn btn-lg btn-danger' onClick={(event => removeInputHandler(index, event))}>Remove Touchpoint</button>
           </div>
        ));
    };

    const customerJourneyMapNameChangeHandler = (event) => {
        setCustomerJourneyMapName(event.target.value);
    };

    const customerJourneyMapDescriptionChangeHandler = (event) => {
        setCustomerJourneyMapDescription(event.target.value);
    };

    const submitCJMHandler = () => {
        alert('CJM Saved');
        dispatch(action.createCustomerJourneyMap(props.match.params.id, customerJourneyMapName, steps, customerJourneyMapDescription));
    };

    return (
        <div className='container'>
            <h2 className='text-center form-heading'>Add Steps for Customer Journey Map</h2>
            <form className='form-name'>
                <div className='form-group'>
                    <label>Customer Journey Map Name:</label>
                    <input type='text' className='form-control' value={customerJourneyMapName} onChange={customerJourneyMapNameChangeHandler} />
                </div>
                <div className='form-group'>
                    <label>Customer Journey Map Brief Description:</label>
                    <textarea className='form-control' value={customerJourneyMapDescription} onChange={customerJourneyMapDescriptionChangeHandler} />
                </div>
                {renderUI()}
                <br />
                <button type='button' className='btn btn-lg btn-success' onClick={addClick}>Add Touchpoint</button>
            </form>
            <button type='button' className='btn btn-lg btn-primary' onClick={submitCJMHandler}>Save</button>
            <br />
            <Link to={'/'} className='btn btn-lg btn-default'>Customer Journey Map List</Link>
        </div>
    );
};

export default AddCustomerJourneyMap;