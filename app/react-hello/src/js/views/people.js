import React, { useState, useEffect, useContext } from 'react';
import * as config from '../component/config';
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


const IndividualCard = () => {

    const [element, setElement] = useState([]);
    const { store, actions } = useContext(Context);

    useEffect(() => {

        getElementsAsync();
    }, [])

    const getElementsAsync = async () => {

        let url = config.URL_IMG + config.PEOPLE
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
                                <Link to={'/character/' + elem.uid}>
                                    <img src={config.PEOPLE_ARR[i]} className="card-img-top rounded-0" alt="..." />
                                </Link>
                                <div className="card-body">
                                    <Link to={'/character/' + elem.uid}>
                                        <h5 className="card-title">{elem.name}</h5>
                                    </Link>
                                    <button className="btn btn-outline-dark rounded-0" onClick={() => actions.favStarwars(elem.name, store.userId)} >DATABASE</button>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export const People = () => {
    return (
        <div className='planets container-fluid'>

            <IndividualCard />
        </div>

    )
};

export default People;