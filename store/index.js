import products from '~/static'

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
				label: 'All'
			},
			{
				id: 2,
				label: 'Jackets'
			},
			{
				id: 3,
				label: 'Jeans'
			},
			{
				id: 4,
				label: 'Shirts'
			},
			{
				id: 5,
				label: 'Bags'
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
		console.log('product: ', product);
		const item = state.liked.find((p) => p === product.id)
		console.log('item: ', item);
		if (item) state.liked.splice(state.liked.findIndex(p => p === product.id), 1)
		else state.liked.push(product.id)
		updateLocalStorage(state.liked)
	},

	// set unlike
	setUnlike(state, product) {
		state.liked.splice(state.liked.findIndex(p => p === product.id), 1)
		updateLocalStorage(state.liked)
	},

	selectCategory(state, categoryId) {
		state.currentCategorie = categoryId
	},
	updateLikedFromLocalStorage(state) {
		const likedProducts = localStorage.getItem('liked_products')
		if (likedProducts) {
			state.liked = JSON.parse(likedProducts)
		}
	},
	increaseQuantity(state, product) {
		const item = state.cart.find((p) => p.id === product.id)
		if (item) {
			state.cart = state.cart.map((item)=> {
				if(item?.id === product?.id) item.quantity++
				return item
			})
		}
	},
	decreaseQuantity(state, product) {
		const item = state.cart.find((p) => p.id === product.id)
		if (item) {
			state.cart = state.cart.map((item)=> {
				if(item?.id === product?.id && item.quantity > 1) item.quantity--
				return item
			})
		}
	},
	addToCart(state, product) {
		state.cart = state.cart.filter((item) => item.id !== product.id)
		state.cart.push({ ...product, quantity: 1 })
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
	setUnLike({ commit, state }, productId) {
		const product = state.products.find((p) => productId === p.id)
		commit('setLike', product)
	},
	selectCategory({ commit }, categoryId) {
		commit('selectCategory', categoryId)
	},
	updateLikedFromLocalStorage({ commit }) {
		commit('updateLikedFromLocalStorage')
	},
	addToCart({ commit }, product) {
		commit('addToCart', product)
	},
	increaseQuantity({ commit }, product) {
		commit('increaseQuantity', product)
	},
	decreaseQuantity({ commit }, product) {
		commit('decreaseQuantity', product)
	},
	removeOneToCart({ commit }, product) {
		commit('removeOneToCart', product)
	},
	removeToCart({ commit }, product) {
		commit('removeToCart', product)
	}
  }

 

