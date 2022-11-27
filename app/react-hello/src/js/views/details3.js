import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import * as config from '../component/config';
import { Context } from "../store/appContext";

export const Details3 = () => {

    const vehicle_style = {
        "width": '400px',
        "height": 'auto'
    }

    const [info, setInfo] = useState([]);
    const { uid } = useParams();
    const { store, actions } = useContext(Context);

    console.log(uid);

    const getStarAsync = async () => {
        try {
            const getStar = await fetch('https://www.swapi.tech/api/vehicles/' + uid);
            const data = await getStar.json();
            console.log(data)
            console.log(data.result.properties)
            console.log(data.result.properties.name)
            setInfo([...info, data.result.properties]);
        }
        catch {
            console.log('error');
        }
    };

    useEffect(() => {
        getStarAsync();
    }, []);

    const vehicle_i = uid - 1;
    console.log(vehicle_i);

    return (
        <div className="container-fluid">
            {
                !!info && info.length > 0 && info.map((elem, i) => {
                    return (
                        <div key={i} className="row d-inline-flex">
                            <div className="col">
                                <img src={config.VEHICLES_ARR[store.storeId]} className="card-img-top rounded-0" alt="..." style={vehicle_style} />
                            </div>
                            <div className="col">
                                <h1 className="mb-3">{elem.name}</h1>
                                <h4>Model: {elem.model}</h4>
                                <h4>Vehicle class: {elem.vehicle_class}</h4>
                                <h4>Passengers: {elem.passengers}</h4>
                                <h4>Cargo capacity: {elem.cargo_capacity}</h4>
                                <h4>Consumables: {elem.consumables}</h4>
                                <h4>Cost in credits: {elem.cost_in_credits}</h4>
                                <h4>Crew:{elem.crew}</h4>
                                <h4>Length:{elem.length}</h4>
                                <h4>Manufacturer: {elem.manufacturer}</h4>
                                <h4>Atmosphering speed: {elem.max_atmosphering_speed}</h4>
                            </div>
                        </div>
                    )
                })


            }
        </div>


    )
};