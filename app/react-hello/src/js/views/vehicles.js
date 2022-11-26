import React, { useState, useEffect, useContext } from 'react';
import * as config from '../component/config';
import { Context } from "../store/appContext";


const IndividualCard = () => {

    const [element, setElement] = useState([]);
    const { store, actions } = useContext(Context);


    useEffect(() => {

        getElementsAsync();
    }, [])

    const getElementsAsync = async () => {

        let url = config.URL_IMG + config.VEHICLES
        let options_get = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            setElement(data.results);


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='row'>
            {
                !!element && element.length > 0 && element.map((elem, i) => {
                    return (
                        <div className='col-3 mb-3' key={elem.uid}>
                            <div className="card rounded-0">
                                <img src={config.VEHICLES_ARR[i]} className="card-img-top rounded-0" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{elem.name}</h5>
                                    <button className="btn btn-outline-dark rounded-0" onClick={() => actions.favStarwars(elem.name)} >DATABASE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const Vehicles = () => {
    return (
        <div className='planets container-fluid'>

            <IndividualCard />
        </div>

    )
};

export default Vehicles;