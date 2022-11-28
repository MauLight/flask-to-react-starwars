const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			userId: '',
			favstarwars: [],
			storeId: '',
		},
		actions: {

			storeId: (id) => {
				setStore({ userId: id });
			},

			favStarwars: (name, id) => {
				const store = getStore();
				setStore({ favstarwars: store.favstarwars.filter(fav => fav.name !== name) });
				console.log(name);

				console.log(store.favstarwars);
				setStore({ favstarwars: [...store.favstarwars, { name: name, users_id: id }] });
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
