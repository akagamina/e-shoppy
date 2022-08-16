<template>
	<main class="container px-8 mx-auto mt-8">
		<div class="flex flex-col justify-between gap-16 md:flex-row">
			<div class="flex gap-4 md:w-3/6">
				<div class="flex flex-col w-1/5 gap-4">
					<div  v-for="productImg in product.img"  :key="productImg.id">
						<img @click="selectedImg = productImg" class="w-full p-3 border rounded-xl" :src="productImg" :alt="product.name" />
					</div>
				</div>
				<div class="w-4/5">
					<img class="p-3 border rounded-xl" :src="selectedImg" :alt="product.name" />	
				</div>
			</div>
			<div class="flex flex-col md:w-3/6">
				<div class="flex justify-between">
					<div class="flex flex-col">
						<h2 class="text-xl font-semibold">{{ product?.name }}</h2>
						<p class="text-sm">100% Coton organique</p>
					</div>
					<div  @click.prevent="isLiked ? setLike(product.id) : setUnLike(product.id)">
						<Icon v-if="isLiked" icon="fa-solid fa-heart" />
					    <Icon v-else icon="fa-regular fa-heart" />
					</div>
				</div>
				<h3 class="mt-4 text-lg font-semibold">{{ product?.price?.toFixed(2) }} €</h3>
				<div class="flex flex-col gap-4 mt-12">
					<button class="py-3 font-semibold text-white bg-black rounded-2xl hover:bg-neutral-700" @click="addToCart(product)">Add to basket</button>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex';

export default {
	name: 'Product',
	data() {
		return {
			selectedImg: ''
		};
	},
	computed: {
		...mapGetters(['getProduct']),
		product() {
			const product = this.getProduct(+this.$route?.params?.id);
			console.log('product: ', product);
			this.selectedImg = product?.img[0];
			if (!product) this.$router.push('/');
			return product;
		},
		...mapState(['liked']),
		isLiked() {
			return this.liked.find((p) => p === +this.product.id);
		}
	},
	methods: {
		...mapActions(['setLike', 'addToCart', 'setUnLike'])
	}
};
</script>
