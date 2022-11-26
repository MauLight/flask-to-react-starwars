import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<div className='star container-fluid'>
			<div className='center row d-block'>
				<div className='col'>
					<h1 className='my-5 text-center'>
						<Link className='"text-center' to='/planets'>
							<i className="fa-solid fa-globe"></i>
						</Link>
					</h1>
				</div>
				<div className='col ms-auto'>
					<h1 className='my-5 text-center'>
						<Link to='/people'>
							<i className="fa-solid fa-circle-user"></i>
						</Link>
					</h1>
				</div>
				<div className='col'>
					<h1 className='my-5 text-center'>
						<Link to='/vehicles'>
							<i className="fa-solid fa-car"></i>
						</Link>
					</h1>
				</div>
			</div>
		</div>
	)
};