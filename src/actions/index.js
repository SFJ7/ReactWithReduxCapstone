import {CREATE_CJM, CREATE_PERSONA} from "./types";

export const createPersona = (image, name, sex, occupation, nationality, ethnicity, description, expectation, married, numberOfChildren, age) => {
    return {
        type: CREATE_PERSONA,
        payload: {
            image: image,
            name: name,
            sex: sex,
            occupation: occupation,
            nationality: nationality,
            ethnicity: ethnicity,
            description: description,
            expectation: expectation,
            married: married,
            numberOfChildren: numberOfChildren,
            age: age
        }
    }

};

export const createCustomerJourneyMap = (persona, name, steps, description) => {
    return {
        type: CREATE_CJM,
        payload: {
            persona: persona,
            name: name,
            steps: steps,
            description: description
        }
    }
};