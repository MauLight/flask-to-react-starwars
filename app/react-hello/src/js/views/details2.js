import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as config from '../component/config';
import { Link } from "react-router-dom";

export const Details2 = () => {

    const people_style = {
        "width": '400px',
        "height": 'auto'
    }

    const [info, setInfo] = useState([]);
    const { uid } = useParams();

    console.log(uid);

    const getStarAsync = async () => {
        try {
            const getStar = await fetch('https://www.swapi.tech/api/people/' + uid);
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

    const people_i = uid - 1;
    console.log(people_i);

    return (
        <div className="container-fluid">
            {
                !!info && info.length > 0 && info.map((elem, i) => {
                    return (
                        <div key={i} className="row d-inline-flex">
                            <div className="col">
                                <img src={config.PEOPLE_ARR[people_i]} className="card-img-top rounded-0" alt="..." style={people_style} />
                            </div>
                            <div className="col">
                                <h1 className="mb-3">{elem.name}</h1>
                                <h4>Birth year: {elem.birth_year}</h4>
                                <h4>Gender: {elem.gender}</h4>
                                <h4>EyecColor: {elem.eye_color}</h4>
                                <h4>Hair color:{elem.hair_color}</h4>
                                <h4>Skin color:{elem.skin_color}</h4>
                                <h4>Height: {elem.height}</h4>
                                <Link to={'/planet/' + elem.homeworld[elem.homeworld.length - 1]}>
                                <h4>Homeworld: {
                                    elem.homeworld
                                    }</h4>
                                </Link>
                                <h4>Mass: {elem.mass}</h4>
                            </div>
                        </div>
                    )
                })


            }
        </div>


    )
}

const arr = "hey, what's up"

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
};