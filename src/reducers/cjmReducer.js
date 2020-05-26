import {CREATE_CJM, CREATE_PERSONA} from "../actions/types";
import Persona from "../models/persona";
import CustomerJourneyMap from "../models/customerJourneyMap";

const initialState = {
    personas: [{
        "id": 1,
        "image": "dsaf",
        "name": "Jessica Wagner",
        "sex": "Female",
        "occupation": "Software Developer",
        "nationality": "American",
        "ethnicity": "White",
        "description": "Software Developer that works full time and long hours. Works remote at times.",
        "expectation": "Wants a great, seamless customer experience buying shoes online",
        "married": true,
        "numberOfChildren": 2,
        "age": "18-35"
    }],
    customerJourneyMaps: [{
        "id": 1,
        "persona": 1,
        "name": "Buying Shoe Online CJM",
        "steps": [
            {
                "step": "Customer researches shoe online"
            },
            {
                "step": "Customer finds the shoe on the Nike website and decides to buy it"
            },
            {
                "step": "Customer adds item to cart"
            },
            {
                "step": "Customer checks out and pays"
            },
            {
                "step": "Customer receives shoe in the mail"
            },
            {
                "step": "Customer sends out satisfying Tweet"
            }
        ],
        "description": "The customer journey map for customers who enjoy buying shoes online"
    }]
};

export default (state = initialState, action) => {
    switch (action.type) {
        case CREATE_PERSONA:
            const newPersona = new Persona(
                initialState.personas.length > 0 ? initialState.personas[initialState.personas.length - 1].id++ : 1,
                action.payload.image,
                action.payload.name,
                action.payload.sex,
                action.payload.occupation,
                action.payload.nationality,
                action.payload.ethnicity,
                action.payload.description,
                action.payload.expectation,
                action.payload.married,
                action.payload.numberOfChildren,
                action.payload.age
            );
            return {
                personas: state.personas.concat(newPersona),
                customerJourneyMaps: [...state.customerJourneyMaps]
            };
        case CREATE_CJM:
            const newCJM = new CustomerJourneyMap(
                2,
                isNaN(action.payload.persona) ? initialState.personas[initialState.personas.length - 1].id : action.payload.personas,
                action.payload.name,
                action.payload.steps,
                action.payload.description
            );
            return {
                personas: [...state.personas],
                customerJourneyMaps: state.customerJourneyMaps.concat(newCJM)
            };
        default:
            return state;
    }
}