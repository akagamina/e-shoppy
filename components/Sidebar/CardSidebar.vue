<template>
	<div :class="active ? '' : 'invisible'" :aria-hidden="!active" class="transition-[visibility] delay-50 fixed inset-0 z-10">
			<Transition name="cart-transition" enter-active-class="translate-x-full" leave-active-class="translate-x-full">
				<aside v-show="active" class="transition-transform duration-50 ease-out w-full h-full bg-black ml-auto text-white py-8 flex flex-col justify-between sm:max-w-[450px]">
					<div class="flex items-center justify-between px-8 pb-8 border-b border-neutral-700">
						<h2 class="text-xl font-bold">Mon panier</h2>
						<button aria-label="close shopping cart" @click="$emit('toggleCart')" @keydown.esc="$emit('toggleCart')" id="closeCartPanel">
							<span class="text-3xl icon icon-close"></span>
						</button>
					</div>
					<div class="flex flex-col h-full gap-4 p-8 overflow-scroll">
						<div v-if="getCart.length === 0" class="text-gray-300">Aucun articles à afficher.</div>
						<template v-else>
							<ProductSidebar v-for="product in getCart" :key="product.id" :product="product" />
						</template>
					</div>
					<div class="flex items-center justify-between px-8 pt-8 border-t border-neutral-700">
						<div aria-label="total price">Total: {{ getCartTotal.price.toFixed(2) }} €</div>
						<button class="px-4 py-2 rounded-lg bg-neutral-700" aria-label="finalize the order">Commander</button>
					</div>
				</aside>
			</Transition>
			<Transition name="bg-transition" enter-active-class="opacity-0" leave-active-class="opacity-0">
				<div v-show="active" class="fixed inset-0 transition-opacity ease-out bg-black bg-opacity-25 -z-10 duration-50" @click="$emit('toggleCart')"></div>
			</Transition>
		</div>
</template>

<script>
import { mapGetters } from 'vuex';

import ProductSidebar from '@/components/Sidebar/ProductSidebar.vue';

export default {
	name: 'CardSidebar',
	props: ['active'],
	emits: ['toggleCart'],
	components: {
		ProductSidebar
	},
	computed: {
		...mapGetters(['getCart', 'getCartTotal'])
	}
};
</script>
