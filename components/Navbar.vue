<template>
	<div class="border-b">
		<nav class="container flex items-center justify-between px-8 py-8 mx-auto">
			<h1 class="text-5xl font-bold"><NuxtLink to="/">Shop</NuxtLink></h1>
			<ul class="flex justify-end gap-3 grow">
				<div @click="toggleCart" class="cursor-pointer">
					<Icon icon="fa-solid fa-basket-shopping" />
				</div>
			</ul>
		</nav>
		<CardSidebar :active="cartIsActive" @toggleCart="toggleCart" />
	</div>
</template>

<script>
import { mapGetters } from 'vuex';

import CardSidebar from '@/components/Sidebar/CardSidebar.vue';

export default {
	components: {
		CardSidebar
	},
	name: 'Navbar',
	data() {
		return {
			cartIsActive: false
		};
	},
	methods: {
		toggleCart() {
			this.cartIsActive = !this.cartIsActive;
			if (this.cartIsActive) {
				setTimeout(() => {
					document.querySelector('#closeCartPanel').focus();
				}, 100);
			}
		},
	},
	computed: {
		...mapGetters(['getCartTotal'])
	}
};
</script>
