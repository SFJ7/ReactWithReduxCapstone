import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import CustomerJourneyMapList from "./CustomerJourneyMapList";
import Personas from "./Personas";
import AddCustomerJourneyMap from "./AddCustomerJourneyMap";
import CustomerJourneyMap from "./CustomerJourneyMap";
import AddPersona from "./AddPersona";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <div>
                    <Route path="/" exact component={CustomerJourneyMapList} />
                    <Route path="/personas" exact component={Personas} />
                    <Route path='/addcustomerjourneymap/:id' exact component={AddCustomerJourneyMap} />
                    <Route path='/customerjourneymap/:id' exact component={CustomerJourneyMap} />
                    <Route path='/addpersona' exact component={AddPersona} />
                </div>
            </BrowserRouter>
        </div>
    );
};

export default App;