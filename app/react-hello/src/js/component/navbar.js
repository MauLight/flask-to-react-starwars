import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const getUsersAsync = async () => {
		let url = `http://127.0.0.1:5000/api/users`;
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
			data.length > 0 ? setFetchedUsers(data) : setFetchedUsers([{ name: 'user' }]);
			console.log(fetchedusers);
			console.log(loggeduser);


		} catch (error) {
			console.log(error)
		}
	};

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
				if (elem.id === store.userId) {
				actions.favStarwars(elem.name, store.userId)};
			});

		} catch (error) {
			console.log(error)
		}
	};

	const postUser = async (username) => {
		let url = `http://127.0.0.1:5000/api/users`;
		let options_get = {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			},
			body: JSON.stringify(username)
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

	const postFav = async (elem) => {
		console.log(elem);
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
	const [username, setUsername] = useState('');
	const [input, setInput] = useState('');
	const [fetchedusers, setFetchedUsers] = useState([{ name: 'user' }]);
	const [loggeduser, setLoggedUser] = useState(null);

	const userInput = (e) => {
		e.preventDefault();
		console.log(e.target.value);
		setInput(e.target.value);
		setUsername({
			name: e.target.value
		});
	};

	const submitUser = (e) => {
		//e.preventDefault();
		console.log(username);
		console.log(username.name);
		for (let i = 0; i < fetchedusers.length; i++) {
			if (fetchedusers[i].name === username.name) {
				console.log('up')
				const user = fetchedusers[i]
				console.log(user);
				setLoggedUser([user]);
				actions.storeId(user.id)
				console.log(loggeduser);
				console.log(user.id);
			}
			else if (fetchedusers[i].name !== username.name && fetchedusers[i].name !== 'user') {
				console.log(fetchedusers[i].name)
				console.log('down')
				postUser(username);
			}
		};
		setInput('');
	}

	const handleSubmit = () => {
		const arr = store.favstarwars;
		console.log(arr);
		const arrSubmit = arr.map((elem, i) => {
			console.log(elem);
			postFav(elem);
		});
	};


	useEffect(() => {
		getUsersAsync();
	}, [loggeduser]);


	return (
		<nav className="navbar navbar-expand-lg bg-light mb-5">
			<div className="container-fluid">
				<Link className="navbar-brand" to="/"><i className="fa-solid fa-jedi"></i></Link>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div>

				</div>
				<div className="collapse navbar-collapse justify-content-end w-25" id="navbarSupportedContent">
					<div className="m-0 p-0">
						{
							loggeduser ? loggeduser.map((elem, i) => {
								return (
									<h4 key={i}>Welcome {elem.name}</h4>
								)
							}) : (
								<form className="input-group m-3 input-group-sm w-75" onSubmit={submitUser}>
									<input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={input} onChange={userInput} />
								</form>
							)
						}
					</div>
					<Link className="favs nav-link dropdown-toggle" to={'/'} role="button" data-bs-toggle="dropdown" aria-expanded="false">
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

