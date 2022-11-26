import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {

	const { store, actions } = useContext(Context);

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
									</div>
								)
							})
						}
					</ul>

				</div>
			</div>
		</nav>
	)
};

