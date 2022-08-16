<template>
	<div>
		<router-link :to="{ path: `/product/${product.id}` }">
			<div class="h-[420px] border rounded-xl p-3 relative overflow-hidden bg-center bg-no-repeat bg-contain">
				<img :src="product.img[0]" alt="">
				<div class="absolute top-3 right-3" @click.prevent="setLike(product.id)">
					    <Icon v-if="!isLiked" icon="fa-solid fa-heart" />
					    <Icon v-else icon="fa-regular fa-heart" />
				</div>
			</div>
		</router-link>
		<div class="flex justify-between mt-2">
			<p>{{ product.name }}</p>
			<p class="font-bold">{{ product.price.toFixed(2) }} €</p>
		</div>
	</div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
	props: ['product'],
	name: 'ProductCard',
	methods: {
		...mapActions(['setLike'])
	},
	computed: {
		...mapState(['liked']),
		isLiked() {
			return this.liked.find((p) => p === this.product.id);
		}
	}
};
</script>
