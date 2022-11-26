import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as config from '../component/config';

export const Details1 = () => {

    const planet_style = {
        "width": '400px',
        "height": 'auto'
    }

    const [info, setInfo] = useState([]);
    const { uid } = useParams();

    console.log(uid);

    const getStarAsync = async () => {
        try {
            const getStar = await fetch('https://www.swapi.tech/api/planets/' + uid);
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

    const planet_i = uid - 1;
    console.log(planet_i);

    return (
        <div className="container-fluid">
            {
                !!info && info.length > 0 && info.map((elem, i) => {
                    return (
                        <div key={i} className="row d-inline-flex">
                            <div className="col">
                                <img src={config.PLANETS_ARR[planet_i]} className="card-img-top rounded-0" alt="..." style={planet_style} />
                            </div>
                            <div className="col">
                                <h1 className="mb-3">{elem.name}</h1>
                                <h4>Diameter: {elem.diameter}</h4>
                                <h4>Rotation period: {elem.rotation_period}</h4>
                                <h4>Orbital period:{elem.orbital_period}</h4>
                                <h4>Gravity: {elem.gravity}</h4>
                                <h4>Population: {elem.population}</h4>
                                <h4>Terrain: {elem.terrain}</h4>
                            </div>
                        </div>
                    )
                })


            }
        </div>


    )
}