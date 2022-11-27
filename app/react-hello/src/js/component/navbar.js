import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const getFavsAsync = async () => {
		let url = `http://127.0.0.1:5000/api/favorites`;
		let options_get = {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		}
		try {
			const response = await fetch(url, options_get);
			const data = await response.json()
			console.log(data);
			data.map((elem) => {
				actions.favStarwars(elem.name);
			});

		} catch (error) {
			console.log(error)
		}
	};

	const postMatch = async (elem) => {
		let url = `http://127.0.0.1:5000/api/favorites`;
		let options_get = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(elem)
		}
		try {
			//console.log("attempt to fetch")
			const response = await fetch(url, options_get);
			const data = await response.json()
			console.log(data);
			console.log('data posted!');

		} catch (error) {
			console.log(error)
		}

	};

	const { store, actions } = useContext(Context);

	const handleSubmit = () => {
		const arr = store.favstarwars;
		console.log(arr);
		const arrSubmit = arr.map((elem, i) => {
			postMatch(elem);
		});
	};

	return (
		<nav className="navbar navbar-expand-lg bg-light mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><i className="fa-solid fa-jedi"></i></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse justify-content-end w-25" id="navbarSupportedContent">

					<Link className="favs nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						FAVS
					</Link>
					<ul className="dropdown-menu dropdown-menu-end rounded-0 mt-0">
						{
							!!store.favstarwars && store.favstarwars.length > 0 && store.favstarwars.map((fav, i) => {
								return (
									<div className="mx-5 d-flex" key={i} id={++i} title={fav.name}>

										{fav.name}

										<div className="btn" id={i} onClick={() => actions.delStarwars(i)}>
											<i className="fa-regular fa-trash-can"></i>

										</div>
										<button className="btn btn-dark rounded-0" onClick={handleSubmit}>Save</button>
									</div>
								)
							})
						}
						<div>
							<button className="btn btn-dark rounded-0 w-100 mt-2" onClick={getFavsAsync}>Favorites</button>
						</div>
					</ul>

				</div>
			</div>
		</nav>
	)
};

