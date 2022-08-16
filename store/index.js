import products from '@/statics'

function updateLocalStorage(like) {
	localStorage.setItem('liked_products', JSON.stringify(like))
}

export const state = () => ({
	currentCategorie: 1,
		cart: [],
		products,
		liked: [],
		categories: [
			{
				id: 1,
				label: 'Afficher tout'
			},
			{
				id: 2,
				label: 'Vestes'
			},
			{
				id: 3,
				label: 'Pantalons'
			},
			{
				id: 4,
				label: 'Chemises'
			},
			{
				id: 5,
				label: 'Sacs'
			}
		]
  })

  export const getters = {
	getProduct: (state) => (id) => {
		return state.products.find(p => p.id === id)
	},
	getProducts: (state) => (category) => {
		if (category !== 1) return state.products.filter((p) => category === p.category)
		return state.products
	},
	getCategories(state) {
		return state.categories
	},
	getCurrentCategory(state) {
		return state.currentCategorie
	},
	getCart(state) {
		return state.cart
	},
	getCartTotal(state) {
		let total = { price: 0, product: 0 }
		state.cart.forEach(item => {
			total.price += item.quantity * item.price
			total.product += item.quantity
		})
		return total
	}
  }

  export const mutations = {
	setLike(state, product) {
		const item = state.liked.find((p) => p === product.id)
		if (item) state.liked.splice(state.liked.findIndex(p => p === product.id), 1)
		else state.liked.push(product.id)
		updateLocalStorage(state.liked)
	},
	selectCategory(state, categorieId) {
		state.currentCategorie = categorieId
	},
	updateLikedFromLocalStorage(state) {
		const likedProducts = localStorage.getItem('liked_products')
		if (likedProducts) {
			state.liked = JSON.parse(likedProducts)
		}
	},
	addToCart(state, product) {
		const item = state.cart.find((p) => p.id === product.id)
		if (item) {
			item.quantity++
		} else {
			product.quantity = 1
			state.cart.push(product)
		}
	},
	removeOneToCart(state, product) {
		const item = state.cart.find((p) => p.id === product.id)

		if (item.quantity <= 1) {
			this.commit('removeToCart', product)
		} else {
			item.quantity--
		}
	},
	removeToCart(state, product) {
		const item = state.cart.find((p) => p.id === product.id)

		if (item) state.cart.splice(state.cart.findIndex(p => p.id === product.id), 1)
	}
  }

  export const actions = {
	setLike({ commit, state }, productId) {
		const product = state.products.find((p) => productId === p.id)
		commit('setLike', product)
	},
	selectCategory({ commit }, categorieId) {
		commit('selectCategory', categorieId)
	},
	updateLikedFromLocalStorage({ commit }) {
		commit('updateLikedFromLocalStorage')
	},
	addToCart({ commit }, product) {
		commit('addToCart', product)
	},
	removeOneToCart({ commit }, product) {
		commit('removeOneToCart', product)
	},
	removeToCart({ commit }, product) {
		commit('removeToCart', product)
	}
  }

 

