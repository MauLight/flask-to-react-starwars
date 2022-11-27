const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			favstarwars: [],
			storeId: '',
		},
		actions: {
			favStarwars: (name) => {
				const store = getStore();
				setStore({ favstarwars: store.favstarwars.filter(fav => fav.name !== name) });
				console.log(name);

				console.log(store.favstarwars);
				setStore({ favstarwars: [...store.favstarwars, { name }] });
				console.log(store.favstarwars);

			},

			delStarwars: (id) => {
				let elem = document.getElementById(id).title;
				console.log(elem);
				const store = getStore();
				setStore({ favstarwars: store.favstarwars.filter(fav => fav.name !== elem) });
			},

			takeId: (i) => {
				setStore({ storeId: i });

			}
		}
	};
};

export default getState;
