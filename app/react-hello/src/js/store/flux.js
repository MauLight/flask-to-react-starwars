const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			favstarwars: [],
		},
		actions: {
			favStarwars: (name) => {
				const store = getStore();
				setStore({ favstarwars: [...store.favstarwars, { name }] });

			},

			delStarwars: (id) => {
				let elem = document.getElementById(id).title;
				console.log(elem);
				const store = getStore();
				setStore({ favstarwars: store.favstarwars.filter(fav => fav.name !== elem) });
			},
		}
	};
};

export default getState;
