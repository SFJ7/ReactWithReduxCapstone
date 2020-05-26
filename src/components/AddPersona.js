import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import * as action from "../actions/index";
import {Link} from "react-router-dom";

const AddPersona = props => {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [sex, setSex] = useState('');
    const [occupation, setOccupation] = useState('');
    const [nationality, setNationality] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [description, setDescription] = useState('');
    const [expectation, setExpectation] = useState('');
    const [married, setMarried] = useState(false);
    const [numberOfChildren, setNumberOfChildren] = useState('');
    const [age, setAge] = useState('');

    const dispatch = useDispatch();

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const imageChangeHandler = (event) => {
        setImage(event.target.value);
    };

    const submitFormHandler = () => {
        alert('Submitted Persona Successfully');
        dispatch(action.createPersona(image, name, sex, occupation, nationality, ethnicity, description, expectation, married, numberOfChildren, age));
    };

    const sexHandler = (event) => {
        setSex(event.target.value);
    };

    const occupationChangeHandler = (event) => {
        setOccupation(event.target.value);
    };

    const nationalityChangeHandler = (event) => {
        setNationality(event.target.value)
    };

    const ethnicityChangeHandler = (event) => {
        setEthnicity(event.target.value)
    };

    const descriptionChangeHandler = (event) => {
        setDescription(event.target.value)
    };

    const expectationChangeHandler = (event) => {
        setExpectation(event.target.value)
    };

    const marriedChangeHandler = (event) => {
        setMarried(event.target.checked)
    };

    const numberOfChildrenChangeHandler = (event) => {
        setNumberOfChildren(event.target.value)
    };

    return (
        <div className='container'>
            <h2 className='text-center form-heading'>Add Persona</h2>
            <form className='form-name'>
                <div className='form-group'>
                    <label>Image:</label>
                    <input className='form-control' type='text' value={image} onChange={imageChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Name:</label>
                    <input className='form-control' type='text' value={name} onChange={nameChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label className='form-group'>Sex:</label>&nbsp;
                    <input type='radio' value='Male' name='sex' onChange={sexHandler}/> Male &nbsp;
                    <input type='radio' value="Female" name='sex' onChange={sexHandler}/> Female
                </div>
                <div className='form-group'>
                    <label>Married:</label>&nbsp;
                    <input type='checkbox' checked={married} onChange={marriedChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Occupation:</label>
                    <input className='form-control' type='text' value={occupation} onChange={occupationChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Nationality:</label>
                    <input className='form-control' type='text' value={nationality}
                           onChange={nationalityChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Ethnicity:</label>
                    <input className='form-control' type='text' value={ethnicity} onChange={ethnicityChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Description:</label>
                    <textarea className='form-control' value={description} onChange={descriptionChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Expectation:</label>
                    <textarea className='form-control' value={expectation} onChange={expectationChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Number of Children:</label>
                    <input className='form-control' type='number' value={numberOfChildren}
                           onChange={numberOfChildrenChangeHandler}/>
                </div>
                <div className='form-group'>
                    <label>Age Range:</label>
                    <input className='form-control' type='text' value={age}
                           onChange={ageChangeHandler}/>
                </div>
                <button type='button' className='btn btn-lg btn-primary' onClick={submitFormHandler}>Submit</button>
            </form>
            <div className='row'>
                <button className='btn btn-lg btn-default' type='button'>
                    <Link to='/addcustomerjourneymap/last'>Continue Making Customer Journey Map</Link>
                </button>
            </div>
        </div>
    );
};

export default AddPersona