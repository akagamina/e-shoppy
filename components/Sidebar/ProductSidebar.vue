<template>
	<div class="flex justify-between gap-8 p-4 border border-neutral-700 rounded-xl">
		<img :src="product.img[0]" alt="" class="w-2/6 rounded-md" />
		<div class="flex flex-col justify-between w-full">
			<div class="flex items-start justify-between">
				<div class="flex flex-col">
					<h3 class="sm:text-lg">{{ product.name }}</h3>
					<p class="text-md text-neutral-500">{{ product.price.toFixed(2) }} €</p>
				</div>
				
				<div @click="removeToCart(product)" class="cursor-pointer">
					<Icon icon="fa-solid fa-delete-left" @click="removeOneToCart(product)"/>
				</div>
			</div>
			<div>
				<div class="flex items-center justify-between w-2/3 cursor-pointer" >
					<Icon icon="fa-solid fa-minus" @click="decreaseQuantity(product)"/>
				    <p>{{ product?.quantity }}</p>
					<Icon icon="fa-solid fa-plus" @click="increaseQuantity(product)"/>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';

export default {
	props: ['product'],
	name: 'ProductSidebar',
	computed: {
		...mapGetters(['getCart'])
	},
	methods: {
		...mapActions(['addToCart', 'removeOneToCart', 'removeToCart', 'increaseQuantity', 'decreaseQuantity'])
	}
};
</script>
